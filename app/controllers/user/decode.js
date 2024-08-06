import pkg from "jsonwebtoken";
const { decode, verify } = pkg;
import dotenv from "dotenv";
dotenv.config();

const decodeToken = async (request, reply) => {
  const token = request.headers.token;
  if (!token) {
    return reply
      .code(401)
      .send({ message: "Unauthorized - No token provided" });
  }
  verify(token, process.env.ADMIN_KEY, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return reply.code(401).send({ message: "Token expired" });
      } else {
        return reply.code(401).send({ message: "Invalid token" });
      }
    }
    reply.code(200).send(decoded);
  });
};

export default decodeToken;
