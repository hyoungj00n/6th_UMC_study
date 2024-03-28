import dotenv from 'dotenv';
import app from './config/express.js';

dotenv.config();    // .env 파일 사용 (환경 변수 관리)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server is ready, ${process.env.SERVER_PORT}`);
});
