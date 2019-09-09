const { GraphQLServer } = require('graphql-yoga');
let fs = require('fs');
const rootCas = require('ssl-root-cas/latest').create();

// default for all https requests
// (whether using https directly, request, or another module)
require('https').globalAgent.options.ca = rootCas;

const { info } = console;
const { prisma } = require('../generated/prisma-client');
const Query = require('./resolvers/Query');
const Crawl = require('./Crawl');


const resolvers = {
    Query
}


const server = new GraphQLServer({
    typeDefs: './src/graphql/Schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma
        }
    }
})

server.express.get('/crawl', async (req, res) => {

    try {
        const result = await Crawl.start();
        info(result);
        if (result.length > 0) {
            res.status(404);
            res.send(result);
        } else {
            res.status(200);
            res.send('success');
        }
    } catch (err) {
        throw err;
    }
});

// server.express.post('/', (req, res) => {
//     return res.send('Received a POST HTTP method');
// });

// server.express.put('/', (req, res) => {
//     return res.send('Received a PUT HTTP method');
// });

// server.express.delete('/', (req, res) => {
//     return res.send('Received a DELETE HTTP method');
// });
const keyPath = 'key.pem';
const certPath = 'server.crt';

const options = {
    port: 4001,
    https: {
        key: fs.readFileSync(keyPath, 'utf8'),
        cert: fs.readFileSync(certPath, 'utf8')
    }
};

server.start(options, () => console.log(`Server is running on ${options.port}`))