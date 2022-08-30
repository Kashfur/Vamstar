const axios = require('axios');
const cheerio = require('cheerio');

const getPostTitles = async () => {
	try {
		const { data } = await axios.get(
			'https://www.diariomunicipal.sc.gov.br/?r=site/index&q=abertura+categoria%3ALicita%C3%A7%C3%B5es&AtoASolrDocument_page=1'
		);
		const $ = cheerio.load(data);
		const postTitles = [];

		$('div.row.no-print.resultado-pesquisa>h4>a').each((_idx, el) => {
			const postTitle = $(el).text()
			postTitles.push(postTitle)
		});
        
		
        
		$('').each((_idx, el) => {
			const postTitle = $(el).text()
			postTitles.push(postTitle)
		});

		return postTitles;
	} catch (error) {
		throw error;
	}
};

getPostTitles()
     .then((postTitles) => console.log(postTitles));


    
         
        
    
    
         


     