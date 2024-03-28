import { errorStatus } from "../../config/errStatus";
import { testResponseDTO,flagResponseDTO } from "../dtos/testResponseDTO";
import { BaseError } from "../../config/error";

export const getTest = () => {
    return testResponseDTO("test Success");
}

export const checkFlag = (flag) => {
    if(flag == 1){
        throw new BaseError(errorStatus.INTERNAL_SERVER_ERROR);
    } 
    else{
        return flagResponseDTO(flag);
    }
}