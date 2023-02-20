const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const newBand = await Band.create({
            name: 'The Beatles',
            genre: 'Rock'
        });
        expect(newBand.name).toBe('The Beatles');
        expect(newBand.genre).toBe('Rock');
    })

    test('can create a Musician', async () => {
        const newMusician = await Musician.create({
            name: "John Lennon",
            instrument: 'Guitar'
        })
        expect(newMusician.name).toBe("John Lennon");
        expect(newMusician.genre).toBe('Guitar')
    })
})