const axios = require('axios');
const cheerio = require('cheerio');
const { prisma } = require('../../generated/prisma-client');

const info = console.info;

async function fetching() {
    const url = 'https://bbs.ruliweb.com/best/humor';
    let isErrorOccured = false;
    const from = 'RuliWeb';

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
        // 8~126 even numbers.
        try {
            for (let i = 1; i < 31; i++) {
                const target = `#best_body > table > tbody > tr:nth-child(${i})`;
                const $ = cheerio.load(html);
                const title = $(target + '> td.subject > a').text();
                const link = $(target + '> td.subject > a').attr('href');
                const time = $(target + '> td.time').text().trim();
                const author = $(target + '> td.writer.text_over').text().trim();
                const hitCount = $(target + '> td.hit').text();
                const data = {
                    title,
                    author,
                    link,
                    hitCount: parseInt(hitCount),
                    registeredAt: time,
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