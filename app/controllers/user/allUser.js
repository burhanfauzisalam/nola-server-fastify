import userModel from "../../models/userModel.js";

const allUser = async (request, reply) => {
  try {
    const data = await userModel.find();
    reply.status(200).send({
      status: reply.statusCode,
      data,
    });
  } catch (error) {
    reply.code(500).send({
      status: reply.statusCode,
      message: error,
    });
  }
};

export default allUser;
