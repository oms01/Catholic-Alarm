const axios = require("axios");
const cheerio = require("cheerio");

class List{
    constructor(url=null, kind=null){
        this.url = url;
        this.kind = kind;
        this.data = [];
    }
    async getList(){
        const ret = [];
        const html = await axios.get(this.url);
        const $ = cheerio.load(html.data);
        const list = $('div.rbbs_list_normal_sec > ul');
        list.find('li > a > div.title_line').each((index,elem)=>{
            if($(elem).find('div.flag').length===0){
                const link = 'catholic.ac.kr' + $(elem).parent().attr('href');
                const title = $(elem).find('div.title > div.text').text().replace(/[\n\t새글]/g, '');
                ret.push({title:title,link:link});
            }
        });
        return ret;
    };
    
}

module.exports = List;