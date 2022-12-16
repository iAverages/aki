import { FastifyInstance, FastifyPluginAsync, FastifyPluginCallback, FastifyPluginOptions } from "fastify";

const route: FastifyPluginAsync = (server, _options, done) => {
    console.log("here");
    server.get("/test2", async (req, res) => {
        res.send({ lol2: "a" });
    });

    done();
};

export const options: FastifyPluginOptions = {};
