import { db } from "utils/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { materi } = req.query;
    try {
      const [pdf] = await db
        .promise()
        .query(`SELECT * FROM pdfs WHERE materi = ? ORDER BY posisi ASC`, materi);

      return res.status(200).send({ data: pdf });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: error.message });
    }
  }

  return res.status(400).send({ message: "Only POST requests allowed" });
}
