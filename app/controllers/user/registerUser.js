import bcrypt from "bcrypt";
import userModel from "../../models/userModel.js";

const registerUser = async (request, reply) => {
  try {
    const { username, password, role, email, whatsapp, gender } = request.body;

    const date = new Date();
    const offsetInMinutes = +420;
    const created = new Date(date.getTime() + offsetInMinutes * 60000);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password || "12345", salt);

    const newUser = new userModel({
      username,
      password: hashedPassword,
      role,
      email,
      whatsapp,
      gender,
      createdAt: created,
    });
    await newUser.save();
    reply.code(201).send({
      status: reply.statusCode,
      message: "New user registered",
      data: newUser,
    });
  } catch (error) {
    reply.code(500).send({
      status: reply.statusCode,
      message: error,
    });
  }
};

export default registerUser;
