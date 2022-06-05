import { db } from "@/firebase/firebase";

export default async function handler(req, res) {
  const { title, details, category } = req.body;
  try {
    if (!title || !details || !category) {
      throw new Error("Title , details, category all fields must be provided");
    }
    const docRef = db.collection("notes").doc(title);
    const finalObject = {
      _id: title,
      id: title,
      title,
      details,
      category,
    };
    await docRef.set(finalObject, {
      merge: false,
    });
    res.status(201).json({
      message: `${title} document added successfully`,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
}
