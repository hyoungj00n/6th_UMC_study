import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { memberRouter } from './srcs/routes/memberRoute.js';
import { response } from './config/response.js';
import { specs, swaggerUi } from "./config/swagger.js";
import { errStatus } from './config/errStatus.js'


dotenv.config();    // .env 파일 사용 (환경 변수 관리)
const app = express();

let server = http.createServer(app);
let io = new Server(server);

io.on('connection', (socket) => {
  //접속한 클라이언트 소켓ID 단, 새탭으로 들어오면 바뀐다.
    console.log('접속한 클라이언트의 socketid'+socket.id)
  
    socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    });
})


app.use(
    cors({
      origin: [
        "https://ecampus.smu.ac.kr/login/index.php",
        "https://ecampus.smu.ac.kr"
      ],
      methods: "POST,GET",
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: true,
    })
  );                           // cors 방식 허용
app.use(express.static('public'));          // 정적 파일 접근
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({extended: false})); // 단순 객체 문자열 형태로 본문 데이터 해석


app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);


app.get('/chat', function(req, res) {
  res.sendFile(__dirname + '/public/chat.html');
});


app.use('/api/members',memberRouter);

app.use((err, req, res, next) => {
    res.locals.message = err.message;   
 // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    res.status(err.data.status || errStatus.INTERNAL_SERVER_ERROR).send(response(err.data));
});


server.listen(process.env.SERVER_PORT, () => {
    console.log(`server is ready, ${process.env.SERVER_PORT}`);
});