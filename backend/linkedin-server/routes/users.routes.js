const {Router} = require('express');
const {updateUser,addCompany,updateCompany,getUser,getCompany,companyByCategory} = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.put('/update/:id', authMiddleware, updateUser);
router.post('/add_company/:id', authMiddleware, addCompany);
router.put('/update_company/:id', authMiddleware, updateCompany);
router.get('/user/:id', authMiddleware, getUser);
router.get('/company/:id', authMiddleware, getCompany);
router.get('/category_company/:category', authMiddleware, companyByCategory);

module.exports = router;