const List = require('../models/list.model');
const {sendAlarmToAll} = require('./sendAlarm');

const links = [
    "https://www.catholic.ac.kr/front/boardlist.do?cmsDirPkid=2053&cmsLocalPkid=1", //일반 공지
    "https://www.catholic.ac.kr/front/boardlist.do?cmsDirPkid=2053&cmsLocalPkid=2", //학사 공지
    "https://www.catholic.ac.kr/front/boardlist.do?cmsDirPkid=2053&cmsLocalPkid=3", //장학 공지
    "https://www.catholic.ac.kr/front/boardlist.do?cmsDirPkid=2053&cmsLocalPkid=4", //취창업 공지
];
// const majors = [
//     "https://csie.catholic.ac.kr/front/boardlist.do?cmsDirPkid=1052&cmsLocalPkid=0", //컴공 공지
// ];

function getDate(){
    let now = new Date();
    let year = now.getFullYear();
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let date = now.getDate().toString().padStart(2, '0');
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    return `${year}.${month}.${date} ${hours}:${minutes}:${seconds}`
}

const state={
    isMonitoring: false,
}

async function run(){
    const list = [];
    list.push(new List(links[0],'general'));
    list.push(new List(links[1],'academic'));
    list.push(new List(links[2],'scholarship'));
    list.push(new List(links[3],'entrepreneurship'));
    await Promise.all(list.map(item => item.data = item.getList()));
    console.log("init complete");

    while(state.isMonitoring){
        await new Promise(resolve => setTimeout(resolve, 5 * 1000));
        await monitoring(list);
    }
}

async function monitoring(list){
    for (const item of list) {
        const tmp_data = await item.getList();
        const origin = await item.data;
        if(tmp_data[0].title != origin[0].title){
            console.log(item.kind + " : " + tmp_data[0].title);
            //종류 , {제목,링크} 전달
            console.log("link : "+tmp_data[0].link);
            sendAlarmToAll(item.kind, tmp_data[0]);
            await item.updateList(tmp_data);
        }
    }
}

module.exports={
    state: state,
    run: run
};