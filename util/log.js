const fs = require('fs');
const logPath = './log.json';

async function initLog(){
    fs.writeFileSync(logPath, '[]');
}

async function getLog(){
    return JSON.parse(fs.readFileSync(logPath));
}

async function saveLog(data){
    const content = await getLog();
    if(content.length > 8) deleteOld();
    content.push(data);
    fs.writeFileSync(logPath, JSON.stringify(content, null, 2));
}

async function deleteOld(){
    const content = await getLog();
    content.shift();
    fs.writeFileSync(logPath, JSON.stringify(content, null, 2));
}

module.exports = {
    initLog: initLog,
    getLog: getLog,
    saveLog: saveLog,
    deleteOld: deleteOld
}