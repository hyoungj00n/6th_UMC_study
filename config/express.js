import express from 'express';
import { testRouter } from '../srcs/routes/testRoute.js';
import { memberRouter } from '../srcs/routes/memberRoute.js'
import { response } from './response.js';
import { specs, swaggerUi } from "./swagger.js";

const app = express();

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);
//app.use('/',testRouter);

app.use('/api/members',memberRouter)

// app.use((err, req, res, next) => {
//     res.locals.message = err.message;   
//     // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
//     res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
//     res.status(err.data.status).send(response(err.data));
// });

export default app;