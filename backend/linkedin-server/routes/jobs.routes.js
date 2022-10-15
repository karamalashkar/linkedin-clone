const {Router} = require('express');
const {postJob,getJobs,jobByCategory,applyJob,getApply} = require('../controllers/jobs.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.post('/add_job', authMiddleware, postJob);
router.get('/jobs/:id', authMiddleware, getJobs);
router.get('/jobs_category/:category', authMiddleware, jobByCategory);
router.post('/apply_job', authMiddleware, applyJob);
router.get('/apply/:id', authMiddleware, getApply);

module.exports = router;