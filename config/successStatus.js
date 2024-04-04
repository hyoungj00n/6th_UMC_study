import { StatusCodes } from "http-status-codes";

export const successStatus = {
    // success
    TEST_SUCCESS: {status: StatusCodes.OK, "isSuccess": true, "code": 2000, "message": "success!"},
    // member
    JOIN_SUCCESS: {status: StatusCodes.OK, "isSuccess": true, "code": "member2000", "message": "회원가입 성공입니다." },
    

}