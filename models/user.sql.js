const findByEmail = `
    SELECT * 
    FROM user
    WHERE email = ?
`;
const findById = `
    SELECT * 
    FROM user
    WHERE id = ?
`
const signUp = `
    INSERT INTO user (email, created_at, updated_at, active, admin)
    VALUE (?,?,?,?,?)
`;
const createSetting = `
    INSERT INTO user_setting (id, token, general, academic, scholarship, entrepreneurship)
    VALUE (?,?,?,?,?,?)
`;
const updateSetting = `
    UPDATE user_setting
    SET token = ?, general = ?, academic = ?, scholarship = ?, entrepreneurship = ?
    WHERE id = ?
`;
const getSetting = `
    SELECT *
    FROM user_setting
    WHERE id = ?
`;
const getUserTokenWithGeneralEnabled = `
    SELECT token
    FROM user_setting
    WHERE general = 1;
`;
const getUserTokenWithAcademicEnabled = `
    SELECT token
    FROM user_setting
    WHERE academic = 1;
`;
const getUserTokenWithScholarshipEnabled = `
    SELECT token
    FROM user_setting
    WHERE scholarship = 1;
`;
const getUserTokenWithEntrepreneurshipEnabled = `
    SELECT token
    FROM user_setting
    WHERE entrepreneurship = 1;
`;

module.exports = {
    findByEmail: findByEmail,
    findById: findById,
    signUp: signUp,
    createSetting: createSetting,
    updateSetting: updateSetting,
    getSetting: getSetting,
    getUserTokenWithGeneralEnabled: getUserTokenWithGeneralEnabled,
    getUserTokenWithAcademicEnabled: getUserTokenWithAcademicEnabled,
    getUserTokenWithScholarshipEnabled: getUserTokenWithScholarshipEnabled,
    getUserTokenWithEntrepreneurshipEnabled: getUserTokenWithEntrepreneurshipEnabled,
}