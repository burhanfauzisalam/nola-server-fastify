import allSeb from "../controllers/seb/allSeb.js";
import uploadSeb from "../controllers/seb/uploadSeb.js";

async function sebRoutes(fastify, options) {
  fastify.get("/seb", allSeb);
  fastify.post("/seb", uploadSeb);
}

export default sebRoutes;
