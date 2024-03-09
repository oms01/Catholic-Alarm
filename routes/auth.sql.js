const findUserByEmail = `
    SELECT * 
    FROM user
    WHERE email = ?
`;
const userRegister = `
    INSERT INTO user (email,created_at, updated_at, active, admin)
    VALUE (?,?,?,?,?)
`;
const userSetting = `
    INSERT INTO user_setting (id, general, academic, scholarship, entrepreneurship)
    VALUE (?,?,?,?,?)
`


module.exports = {
    findUserByEmail: findUserByEmail,
    userRegister: userRegister,
    userSetting: userSetting
}