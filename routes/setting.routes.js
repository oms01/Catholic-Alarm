const express = require('express');
const router = express.Router();

const settingController = require('../controller/setting.controller');

router.get('/:id', settingController.getUserPage);

router.post('/:id', settingController.updateUserSetting);

router.post('/:id/sendAlarm', settingController.sendTestAlarm);


module.exports = router;
