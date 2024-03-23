import { successStatus } from '../../config/successStatus.js';
import { getTest } from '../services/testService.js';
import { response } from '../../config/response.js';

export const test = (req, res, next) => {
    res.send(response(successStatus.TEST_SUCCESS, getTest()));
};