import { db } from "utils/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await Login(req, res);
  }

  return res.status(400).send({ message: "Only POST requests allowed" });
}

async function Login(req, res) {
  try {
    const { email, password } = JSON.parse(req.body);

    const [userExits] = await db
      .promise()
      .query(`SELECT * FROM users WHERE email = ?`, [email]);

    if (!userExits[0]) {
      return res.status(404).send({ message: "Email tidak ditemukan" });
    }

    if (userExits[0].password !== password) {
      return res.status(404).send({ message: "Password tidak sesuai" });
    }

    return res.status(200).json({ data: userExits[0].token });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
}
