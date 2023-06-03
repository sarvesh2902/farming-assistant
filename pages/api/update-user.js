import mongoose from "mongoose";
import UserProfile from "../../models/userProfile";

export default async function handler(req, res) {
  mongoose
    .connect(
      "mongodb+srv://sarvesh2902:Hi5JUL8XES1YAmOU@cluster0.wfnik3x.mongodb.net/farming?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Connected to Mongo");
    })
    .catch((e) => {
      console.log("Failed to connect to Mongo");
      console.log(e);
    });

  console.log(req.body);

  await UserProfile.findOneAndUpdate(
    { email: req.body.email },
    { $set: { noOfReq: req.body.noOfReq } },
    { new: true }
  ).then((updatedDocument) => {
    // The updated document will be returned if found and updated successfully
    console.log(updatedDocument);
  });

  res.status(200).send("success");
}
