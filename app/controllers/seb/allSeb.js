import sebModel from "../../models/sebModel.js";

const allSeb = async (request, reply) => {
  try {
    const data = await sebModel.find();
    reply.code(200).send({
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
export default allSeb;
