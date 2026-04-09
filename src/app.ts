import express from "express";
import userRoutes from './routes/user.route';
import resumeRoutes from './routes/resume.route';
import { errorHandler } from "./middleware/error.middleware";
import cors from 'cors';
import { checkDBConnection } from "./config/db";
import cookieParser from 'cookie-parser';

checkDBConnection();
const app = express();
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));
app.use(express.json());
app.use('/api/auth', userRoutes);
app.use('/api/resume', resumeRoutes);
app.use(errorHandler);

export default app;