import { testResponseDTO } from "../dtos/testResponseDTO";

export const getTest = () => {
    return testResponseDTO("test Success");
}