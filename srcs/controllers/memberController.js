import { successStatus } from '../../config/successStatus.js';
import { errStatus } from '../../config/errStatus'
import { response } from '../../config/response.js';
import { BaseError } from '../../config/error'
import { join,login } from '../services/memberService.js'

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

    
