import { Connection, createConnection } from 'typeorm'

const connectORM: () => Promise<Connection> = async () => {
  return await createConnection({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'test',
    entities: [__dirname, './src/entity/*.ts'],
    synchronize: true,
    logging: true
  })
}

connectORM()
