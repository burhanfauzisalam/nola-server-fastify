import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../../models/userModel.js";

const loginUser = async (request, reply) => {
  try {
    const { username, password } = request.query;

    const user = await userModel.findOne({ username });
    if (!user) {
      return reply.code(400).send({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return reply.code(400).send({ message: "Invalid password" });
    }

    const payload = {
      username,
      id: user._id,
      role: user.role,
      uuid: user.password,
    };

    let key = null;
    if (user.role === "admin") {
      key = process.env.ADMIN_KEY;
    } else if (user.role === "teacher") {
      key = process.env.TEACHER_KEY;
    } else {
      key = process.env.STUDENT_KEY;
    }
    const token = jwt.sign(payload, key, {
      expiresIn: "1h",
    });

    reply.code(200).send({
      token,
    });
  } catch (error) {
    reply.code(500).send({
      status: reply.statusCode,
      message: error,
    });
  }
};

export default loginUser;
