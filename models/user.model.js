const db = require('../data/database');
const query = require('../sql/user.sql');
class User{
    constructor(email, admin=0){
        this.email = email;
        this.admin = admin;
    }

    static async findByEmail(email){
        const result = await db.query(query.findByEmail, email);
        return result[0][0];
    }

    static async findById(id){
        const result = await db.query(query.findById, id);
        return result[0][0];
    }

    static async getSetting(id){
        const result = await db.query(query.getSetting, id);
        return result[0][0];
    }

    async signUp(){
        const ret = await db.query(query.signUp, [this.email, new Date(), new Date(), 1, 0]);
        this.id = ret[0].insertId;
        await db.query(query.createSetting, [this.id,"",0,0,0,0,0]);
        return this.id;
    }

    static updateSetting(id,token,general,academic,scholarship,entrepreneurship){
        return db.query(query.updateSetting,
            [token, general,academic,scholarship,entrepreneurship, id]);
    }

    static async fetchUserWithKindEnabled(kind){
        let q;
        if(kind=='general') q = query.getUserTokenWithGeneralEnabled;
        else if(kind=='academic') q = query.getUserTokenWithScholarshipEnabled;
        else if(kind=='scholarship') q = query.getUserTokenWithScholarshipEnabled;
        else if(kind=='entrepreneurship') q = query.getUserTokenWithEntrepreneurshipEnabled;
        return await db.query(q);
    }


    
}

module.exports = User;