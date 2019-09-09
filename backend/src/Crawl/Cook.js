const axios = require('axios');
const cheerio = require('cheerio');
const { prisma } = require('../../generated/prisma-client');

const { info } = console;

async function fetching() {
    const url = 'https://www.82cook.com/entiz/enti.php?bn=15';
    let isErrorOccured = false;
    const from = '82Cook';

    await axios.get(url).then((res) => {
        if (res.status === 200) {
            Processor(res.data);
        }
    }).catch((e) => {
        prisma.createErrorLog({
            reason: e.toString(),
            from,
            isRead: false,
            type: 'F',
        });
        isErrorOccured = true;
        throw e;
    });

    async function Processor(html) {
        try {
            for (let i = 1; i < 11; i++) {
                const target = `#column1 > div.leftbox.Best > ul > li:nth-child(${i})`;
                const $ = cheerio.load(html);
                const link = $(target + '> a').attr('href');
                const title = $(target + '> a').text();
                const data = {
                    title,
                    link: 'https://www.82cook.com/' + link,
                    from,
                };

                await prisma.createPrePost(data);
            }
        } catch (e) {
            await prisma.createErrorLog({
                reason: e.toString(),
                from,
                isRead: false,
                type: 'Q',
            });
            isErrorOccured = true;
            throw e;
        }
    }
    info(`£££ ${from} done`);
    return { from, isErrorOccured };
}

module.exports = {
    fetching
}