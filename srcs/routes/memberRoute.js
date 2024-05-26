import express from 'express';
import asyncHandler from 'express-async-handler';
import { signin, loginController } from '../controllers/memberController.js'

export const memberRouter = express.Router();

memberRouter.post('/signin',asyncHandler(signin));

memberRouter.post('/login', asyncHandler(loginController.smu));
