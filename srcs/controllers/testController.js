import { successStatus } from '../../config/successStatus.js';
import { getTest,checkFlag } from '../services/testService.js';
import { response } from '../../config/response.js';


export const test = (req, res, next) => {
    res.send(response(successStatus.TEST_SUCCESS, getTest()));
};

export const exceptionTest = (req,res,next) => {
    
    try {
        throw new Error();
    } catch (error) {
        res.send(response(successStatus.TEST_SUCCESS, checkFlag(req.params.flag)));
    }

    //res.send(response(successStatus.TEST_SUCCESS, checkFlag(req.params.flag)));
    
}
