const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG',  () => {
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs').send({
            name: "Carrocinha Bela Vista",
            email: "bela.vista@carrocinha.ong.br",
            whatsapp: "66912344321",
            city: "Sorriso",
            uf: "MT"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});