import { test,exceptionTest } from '../controllers/testController';
import express from 'express';
import asyncHandler from 'express-async-handler';

export const testRouter = express.Router();

testRouter.get('/test',test);
/**
 * @swagger
 * paths:
 *  /test:
 *   get:
 *    summary : 테스트
 *    tags: [테스트]
 *    description: 테스트
 *    responses:
 *      '200':
 *        description: 조회 성공
 *        schema:
 *          properties:
 *              isSuccess:
 *                  type: boolean
 *              code:
 *                  type: integer
 *              message:
 *                  type: string
 *              result:
 *                  type: object
 *                  properties:
 *                      testString:
 *                          type:  string
 *                   
 */        
testRouter.get('/exception/:flag', asyncHandler(exceptionTest));