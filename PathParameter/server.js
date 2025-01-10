const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });
 
    server.route(routes);
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();

/**
 * curl -X GET http://localhost:5000/hello/dicoding?lang=id
 * curl -X GET http://localhost:5000/hello/dicoding
 * 
 */