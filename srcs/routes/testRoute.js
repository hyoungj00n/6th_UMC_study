import { test,exceptionTest } from '../controllers/testController';
import express from 'express';

export const testRouter = express.Router();

testRouter.get('/test',test);

testRouter.get('/exception/:flag', exceptionTest);