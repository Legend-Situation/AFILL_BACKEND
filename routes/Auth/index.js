const express = require('express');
const router = express.Router();
const { validateToken } = require('../../middlewares/AuthMiddleware');

// 간편로그인 라우터
const GoogleRouter = require('./GoogleAuth');
router.use('/', GoogleRouter);
const KakaoRouter = require('./KakaoAuth');
router.use('/', KakaoRouter);

// 프로필 이미지 업데이트 라우터
const UpdateProfileImg = require('./UpdateProfileImg');
router.put('/update/profileimg', validateToken, UpdateProfileImg);



module.exports = router;