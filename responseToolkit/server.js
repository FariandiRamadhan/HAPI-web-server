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
 * curl -X POST  -H "Content-Type: application/json" http://localhost:5000/login -d "{ \"username\": \"harrypotter\", \"password\": \"encryptedpassword\"}"
 */