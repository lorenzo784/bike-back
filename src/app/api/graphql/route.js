import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import resolvers from '../../../graphql/resolvers/index.js';
import typeDefs from '../../../graphql/types/index.js';
import { makeExecutableSchema } from '@graphql-tools/schema';
import * as db from '../../../database/server.js'
const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({
    schema
});


const handler = startServerAndCreateNextHandler(server, {
    context: async (req, res) => {
        return { res, req, db }
    },
});

export async function GET(request) {
    return handler(request);
}

export async function POST(request) {
    return handler(request);
}