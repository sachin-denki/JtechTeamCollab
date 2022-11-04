const mongoose = require('mongoose')

const placeSchema = mongoose.Schema({

    countryId: { type: Number, required: true },
    countryName: { type: String, required: true },
    countryImage: { type: String, required: true },
    latitude: {type: String, required: true},
    longitude: {type: String, required: true}
    
});

module.exports = mongoose.model('Place', placeSchema)