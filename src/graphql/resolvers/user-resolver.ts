import { IResolvers } from 'apollo-server-express'

const userResolver: IResolvers = {
    Query: {
        users: (root, args, context, info) => {
            return [];
        },
        user: (root, args, context, info) => {
            return null;
        }
    },
    Mutation: {
        signUp: (root, args, context, info) => {
            return null;
        }
    },
}

export default userResolver;