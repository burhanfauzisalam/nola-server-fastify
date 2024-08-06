import allUser from "../controllers/user/allUser.js";
import registerUser from "../controllers/user/registerUser.js";

async function userRoutes(fastify, options) {
  fastify.get("/users", allUser);
  fastify.post("/user", registerUser);
}

export default userRoutes;
