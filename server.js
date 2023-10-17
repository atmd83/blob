import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
});

// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
});

// Run the server!
try {
  console.log(process.env)
  await fastify.listen({ port: process.env.PORT || 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}