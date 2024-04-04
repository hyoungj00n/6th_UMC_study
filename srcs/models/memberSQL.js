export const insertUserSql = "INSERT INTO member (email, name, gender, birth, address, specAddr, phone) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM member WHERE id = ?";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM member WHERE email = ?) as isExistEmail";
