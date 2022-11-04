const mongoose = require('mongoose')

const journeySchema = mongoose.Schema({
    
    journeyTitle:{type:String,required:true },
    journeyContent:{type:String,required:true},
    journeyImage:{type:String,required:true}
});

module.exports =  mongoose.model('Journey',journeySchema)

      