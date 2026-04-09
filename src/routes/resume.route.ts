import * as ResumeController from '../controllers/resume.controller';
import {authenticateToken as auth} from '../middleware/auth.middleware';
import { Router } from 'express';

const router = Router();

router.post('/savepersonaldetails', auth, ResumeController.savePersonalDetails);
router.post('/saveeducationdetails/:resumeId', auth, ResumeController.saveEducation);
router.post('/saveexperiencedetails/:resumeId', auth, ResumeController.saveExperience);
router.post('/saveprojects/:resumeId', auth, ResumeController.saveProjects);
router.post('/savetechnical/:resumeId', auth, ResumeController.saveTechnical);



export default router;