import Fastify from "fastify";
import routes from "./routes";

const server = Fastify({
    logger: true,
});

console.log(Object.values(routes));

Object.values(routes).forEach((route) => server.register(route));

server.listen({ port: 3001 }, (err, address) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    server.log.info(`Server listening on ${address}`);
});
