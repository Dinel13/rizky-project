import { db } from "utils/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const [materi] = await db.promise().query(`SELECT * FROM materis `);

      return res.status(200).send({ data: materi });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: error.message });
    }
  }

  return res.status(400).send({ message: "Only POST requests allowed" });
}
