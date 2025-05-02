const userResolver = {
    Query: {
        async user(_, id, { db }) {
            const { User } = db;
            const user = await db.User.findOne({ where: { id: "c4132717-4ba3-478a-99e2-6238800fda32" } });
            return user;
        },
        async users(_, { input }, context) {

            const { User } = context.db;
            const users = await User.findAndCountAll({            });

            const bike = user.getBikes();
            const page = {
                rows: users.rows,
                length: 1,
                pages: 1
            }
            return page;
        },
    },

    Mutation: {
        async createUser(_, { input }, { db }) {
            const { User } = db;
            console.log("DATABASE", db);
            const user = await User.create(input);

            console.log("user created", user);
            return user
        }
    }
};

export { userResolver };