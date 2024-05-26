import { successStatus } from '../../config/successStatus.js';
import { errStatus } from '../../config/errStatus.js'
import { response } from '../../config/response.js';
import { BaseError } from '../../config/error.js'
import { join,login } from '../services/memberService.js'
//import { User } from '../models/user.js'

export const signin = async (req, res) =>{
    //값 잘 들어 왔는지
    console.log(req.body)
    res.send(response(successStatus.JOIN_SUCCESS, await join(req.body)))
}

export const loginController = {
    smu : async(req, res) =>{
        const result = await login(req.body);
        console.log(result);
        if (result !== null) { 
            res.send(response(successStatus.LOGIN_SUCCESS, result));
        } else { 
            res.send(response(errStatus.LOGIN_FAIL)); 
        }
                
    }
}
/*

export let saveUser = async (userName, sid) => {
    let user = await User.findOne({ name : userName});
    
    if(!user){
        user = await User.create({
            name : userName,
            token : sid,
            online : true,
        });
    } else {
        await User.updateOne({
            token : sid,
            online : true,
        });
    }

    // 업데이트된 사용자를 다시 찾아서 가져옴
    user = await User.findOne({ token : sid });
    
    return user;
}

export let checkUser = async (sid) =>{
    
    let user = await User.findOne({ token : sid });
    if(!user) throw new BaseError(errStatus.MEMBER_NOT_FOUND);
    return user;
}
    
*/