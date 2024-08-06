import userAuth from "../middlewares/adminAuth.js";

import allUser from "../controllers/user/allUser.js";
import loginUser from "../controllers/user/loginUser.js";
import registerUser from "../controllers/user/registerUser.js";
import allUserByRole from "../controllers/user/userByRole.js";
import decodeToken from "../controllers/user/decode.js";

async function userRoutes(fastify, options) {
  fastify.get("/users", { preHandler: userAuth }, allUser);
  fastify.post("/user", registerUser);
  fastify.get("/users-role", allUserByRole);
  fastify.post("/user-login", loginUser);
  fastify.get("/decode", decodeToken);
}

export default userRoutes;
