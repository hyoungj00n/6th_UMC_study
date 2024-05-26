//import { saveUser, checkUser } from './srcs/controllers/memberController.js';
//import { saveChat } from './srcs/controllers/chatController.js'

export const io = (io) => {
  io.on("connection", (socket) => {
    //접속한 클라이언트 소켓ID 단, 새탭으로 들어오면 바뀐다.
    console.log("접속한 클라이언트의 socketid" + socket.id);

    socket.on('joinRoom', async (room) =>{     // joinRoom을 클라이언트가 emit 했을 시
      let roomName = room;
      socket.join(roomName);    // 클라이언트를 msg에 적힌 room으로 참여 시킴
  });

    socket.on("newUser" ,async (userName, cb) => {
        console.log("새로운 유저: ", userName);
        //유저 저장
        //let user = await saveUser(userName,socket.id);
        
        cb({ ok : true, data : user}) ;
    })

    socket.on("sendMessage", async (message,cb) =>{
        //const newMessage = await memberController.saveChat(message);
        console.log("메세지: ", message);

        //유저 찾기
        //let user = await checkUser(socket.id);
        //채팅 저장
        //let newMessage = await saveChat(message,user);

        io.emit("message", newMessage)
    })

    //연결이 종료된 경우
    socket.on("disconnect", () => {
      // 나가는 사람을 제외한 나머지 유저에게 메시지 전송
        console.log("연결해제")
    });
});
};

