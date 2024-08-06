import pkg from "jsonwebtoken";
const { decode, verify } = pkg;
import dotenv from "dotenv";
import userModel from "../models/userModel.js";
dotenv.config();

export default async function userAuth(request, reply) {
  try {
    const token = request.headers.token;
    if (!token) {
      return reply.code(401).send({ message: "No token provided" });
    }
    verify(token, process.env.ADMIN_KEY, async (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return reply.code(401).send({ message: "Token expired" });
        } else {
          return reply.code(401).send({ message: "Invalid token" });
        }
      }
      const user = await userModel.findOne({
        username: decoded.username,
      });

      if (decoded.uuid !== user.password) {
        return reply.code(401).send({ message: "Unauthorized old token" });
      }
      request.user = decoded;
    });
  } catch (error) {
    return reply.code(401).send({ message: "Unauthorized" });
  }
}
