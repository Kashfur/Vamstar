const axios = require('axios');
const cheerio = require('cheerio');

const getlinks = async () => {
    try {
        const { data } = await axios.get(
            'https://www.diariomunicipal.sc.gov.br/?r=site/index&q=abertura+categoria%3ALicita%C3%A7%C3%B5es&AtoASolrDocument_page=1'
        );
        const $ = cheerio.load(data);
        const links = [];

        $('div.row.no-print.resultado-pesquisa>a ').each((_idx, el) => {
            const link = $(el).find('a').attr('href')
            links.push(link)
        });
        
        
        
        $('').each((_idx, el) => {
            const link = $(el).find('a').attr('href')
            links.push(link)
        });

        return links;
    } catch (error) {
        throw error;
    }
};

getlinks()
     .then((links) => console.log(links));