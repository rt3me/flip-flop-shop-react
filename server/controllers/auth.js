import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";

export const register = async (req, res) => {
  try {
    // validation
    console.log(req.body);
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    if (!password || password.length < 8) {
      return res.json({
        error: "Password is required and should be at least 8 characters",
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already in use",
      });
    }
    // hash password
    const hashedPassword = hashPassword(password);
    try {
      const user = await new User({
        name,
        email,
        password: hashedPassword,
      }).save();

      console.log(user);
      const { password, ...rest } = user._doc;
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};
