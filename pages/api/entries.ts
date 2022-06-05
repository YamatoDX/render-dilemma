import { db } from "@/firebase/firebase";
import { NextApiRequest, NextApiResponse } from "next";

const Entries = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const entriesData = (await db.collection("notes").get()).docs.map(
      (each) => {
        const docData = each.data();
        const finalObject = {
          id: docData?._id ?? "",
          ...docData,
        };
        return finalObject;
      }
    );
    res.status(200).json({
      finalData: entriesData,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
      status: "failed",
    });
  }
};

export default Entries;
