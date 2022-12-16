import { FastifyInstance, FastifyPluginOptions } from "fastify";

export default (server: FastifyInstance, options: FastifyPluginOptions, done: any) => {
    console.log("here");
    server.get("/test", async (req, res) => {
        res.send({ lol: "a" });
    });

    done();
};

export const options: FastifyPluginOptions = {};
