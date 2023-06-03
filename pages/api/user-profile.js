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

  let userProfile = await UserProfile.findOne({ email: req.body.email });
  if (!userProfile) {
    const newUser = {
      email: req.body.email,
      noOfReq: 0,
      sub: "free",
    };
    const user = new UserProfile(newUser);
    await user.save();

    userProfile = await UserProfile.findOne({
      email: req.body.email,
    });
  }

  console.log(userProfile.noOfReq);

  res.status(200).send(userProfile);
}
