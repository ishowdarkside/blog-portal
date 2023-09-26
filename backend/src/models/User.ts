import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: [5, "Invalid username"],
    validate: {
      validator: function (val: string) {
        return val.match(/^[a-zA-Z0-9_-]{3,20}$/);
      },
      message: "Invalid username",
    },
  },
  password: {
    type: String,
    minlength: [8, "Password is too short!"],
    maxlength: [30, "Password too long"],
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
