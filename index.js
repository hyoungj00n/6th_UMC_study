import express from 'express';
import dotenv from 'dotenv';
import { testRouter } from './srcs/routes/testRoute';  

dotenv.config();    // .env 파일 사용 (환경 변수 관리)

const app = express();
const port = 3000


app.use('/',testRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});