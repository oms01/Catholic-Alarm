const fs = require('fs');
const logPath = './log.json';

async function initLog(){
    fs.writeFileSync(logPath, '[]');
}

async function getLog(){
    return JSON.parse(fs.readFileSync(logPath));
}

async function saveLog(data){
    const content = getLog();
    if(content.length > 8) deleteOld();
    
    fs.writeFileSync(logPath, JSON.stringify(content, null, 2));
}

async function deleteOld(){
    const content = getLog().shift();
    fs.writeFileSync(logPath, JSON.stringify(content, null, 2));
}

module.exports = {
    initLog: initLog,
    getLog: getLog,
    saveLog: saveLog,
    deleteOld: deleteOld
}