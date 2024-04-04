import express from 'express';
import asyncHandler from 'express-async-handler';
import { signin } from '../controllers/memberController'

export const memberRouter = express.Router();

memberRouter.post('/signin',asyncHandler(signin));
