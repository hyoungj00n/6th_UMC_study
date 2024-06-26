import { errStatus } from '../../config/errStatus.js'
import { BaseError } from '../../config/error.js'
import { response } from '../../config/response.js'
import { signinResponseDTO } from '../dtos/memberResponseDTO.js'
import { addUser, getUser } from '../models/memberDAO.js'

import puppeteer from 'puppeteer';

export const join = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    

    const joinUserData = await addUser({
        'email': body.email,
        'name': body.name,
        'gender': body.gender,
        'birth': birth,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone
    });

    if(joinUserData == -1){
        throw new BaseError(errStatus.EMAIL_ALREADY_EXIST);
    }else{
        return signinResponseDTO(await getUser(joinUserData));
    }
}

/*export const login = async (body) => {
    const user_info = {username: body.username, password: body.password};
    const session = axios.create({
        baseURL: 'https://ecampus.smu.ac.kr',
        withCredentials: true  
    });
    const result = session.post('/login/index.php', user_info)
    .then(success =>{
        const data = session.get("/user/user_edit.php").then(session =>{
            console.log(session);
        });
        
    });
    
}
*/

export const login = async (body) => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        //홈페이지 접속
        await page.goto('https://ecampus.smu.ac.kr/login/index.php');
        //학번, 비번 입력
        await page.type('#input-username', body.username);
        await page.type('#input-password', body.password);
        //로그인 버튼 클릭
        await page.click('input[type="submit"]');

        //로딩 대기
        await page.waitForNavigation();
        console.log(page.url());
        //로그인 실패, 성공 url로 구분
        if (page.url() === 'https://ecampus.smu.ac.kr/login.php?errorcode=3') {
            console.log("fail");
        } else {
            console.log("success");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        await browser.close();
    }
}
/*
export const login = async (body) =>{

    const userinfo = {username : body.username, password : body.password }
    try {
        
        const session = await axios.create({
            baseURL: 'https://ecampus.smu.ac.kr',
            withCredentials: true
        });

        const loginResponse = await session.post('/login/index.php', userinfo)
        
        const response = await axios.get("https://ecampus.smu.ac.kr"
        ).then(response => {
            console.log(response.data);
        })
        
    
    } catch (error) {
        console.error('Error occurred:', error);
        return null;
    }
    
}*/