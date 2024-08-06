import sebModel from "../../models/sebModel.js";
import userModel from "../../models/userModel.js";

const uploadSeb = async (request, reply) => {
  try {
    // const id = req.id;
    const username = request.query.username;
    const teacher = await userModel.findOne({ username });
    const { filename } = request.body;
    const existingFile = await sebModel.findOne({ filename });
    if (existingFile) {
      return reply.code(400).send({ error: "File already exist." });
    }
    const newFile = sebModel({
      ...req.body,
      teacher: teacher.name,
    });
    await newFile.save();
    reply.code(201).send({
      status: reply.statusCode,
      message: "File uploaded",
      data,
    });
  } catch (error) {
    reply.code(500).send({
      status: reply.statusCode,
      message: error,
    });
  }
};

export default uploadSeb;
