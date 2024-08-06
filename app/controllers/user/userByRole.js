import userModel from "../../models/userModel.js";

const allUserByRole = async (request, reply) => {
  try {
    const { role } = request.query;
    const data = await userModel.find({ role });
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

export default allUserByRole;
