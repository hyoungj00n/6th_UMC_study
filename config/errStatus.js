import { StatusCodes } from "http-status-codes";

export const errStatus = {
    // error
    INTERNAL_SERVER_ERROR: {status: StatusCodes.INTERNAL_SERVER_ERROR, "isSuccess": false, "code": "COMMON000", "message": "서버 에러, 관리자에게 문의 바랍니다." },
    
    //member
    EMAIL_ALREADY_EXIST: {status: StatusCodes.INTERNAL_SERVER_ERROR, "isSuccess": false, "code": "MEMBER2001", "message": "이미 존재하는 이메일입니다." },
    PARAMETER_IS_WRONG : {status: StatusCodes.INTERNAL_SERVER_ERROR, "isSuccess": false, "code": "MEMBER2002", "message": "회원가입 잘못된 데이터를 입력했습니다."},
}