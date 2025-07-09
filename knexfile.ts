import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'mssql',
        connection: {
            host: 'localhost',
            // TODO: Use your user & password from Microsoft SQL Server
            user: 'DiaNov',
            password: 'paroladbbookish123!',
            database: 'Bookish',
        },
    },
};

export default config;
