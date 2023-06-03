import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
  email: {
    type: String,
  },
  noOfReq: {
    type: String,
  },
});

const UserProfile =
  mongoose.models.UserProfile ||
  mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;
