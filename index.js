const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./Song')

Musician.belongsTo(Band);
Band.hasMany(Musician);

Band.belongsToMany(Song, { through: "BandsSongs" });
Song.belongsToMany(Band, { through: "BandsSongs" });

module.exports = {
    Band,
    Musician,
    Song
};
