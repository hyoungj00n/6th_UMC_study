import { errStatus } from '../../config/errStatus'
import { BaseError } from '../../config/error'
import { signinResponseDTO } from '../dtos/memberResponseDTO.js'
import { addUser, setPrefer, getUser, getUserPreferToUserID } from '../models/memberDAO.js'

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