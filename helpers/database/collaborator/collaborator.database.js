import { Client } from 'pg'

const database = new Client({
    user: 'postgres',
    host: 'host',
    database: 'nome_banco_de_dados',
    password: 'senha_banco',
    port: 5432
})

export default class CollaboratorDatabase {

    async updateNameClient(nameClient, emailClient) {
        await database.connect()
        await database.query(
            `update cliente
                    set nome='${nameClient}'
                    where email =  '${emailClient}';`
        )
    }
}