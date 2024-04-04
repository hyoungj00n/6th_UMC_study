
export const signinResponseDTO = (user) => {

    return {"email": user[0].email, "name": user[0].user_name};
}