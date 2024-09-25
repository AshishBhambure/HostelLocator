const express = require('express');
const { sendOtp, signUp, login, updateProfileImage } = require('../controllers/Auth');
const {registerHostel, uploadHostelImages, getAllHostelsOfOwner, getHostelDetails, updateHostelOccupancy } = require('../controllers/Hostel');
const { auth, isHostel } = require('../middlewares/auth');
const router = express.Router();

router.post('/sendOtp',sendOtp);
router.post('/signUp',signUp);
router.post('/login',login);
router.post('/updateProfileImage',updateProfileImage);
router.post('/registerHostel',auth,isHostel,registerHostel);
router.post('/uploadHostelImages',uploadHostelImages);
router.get('/getHostelsForOwner',auth,isHostel,getAllHostelsOfOwner);
router.get('/getHostelDetails',getHostelDetails);
router.post('/updateHostelOccupancy',updateHostelOccupancy);

module.exports = router;
