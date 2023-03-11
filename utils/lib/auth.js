import { compare, hash } from "bcryptjs";
import { getSession } from "next-auth/react";

//hash password
export const hashPassword = async (password) => {
  const salt = await hash(password, 12);
  return salt;
};


export async function comparePassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
    
export async function cekAdmin(req, res){
  const session = await getSession({ req });
      if (session?.user?.role != 2) {
        return res.status(200).json({
          error: "You are not authorized to access this page",
        });
      }
}