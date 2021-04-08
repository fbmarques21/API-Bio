var mongoose = require('mongoose');

//schema
var bioSchema = mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    confirmados_novos: {
       type: Number,
       required: true
   },
   internados_uci: {
       type: Number,
       required: true
   },
});

// Export Bio Model
var Bio = module.exports = mongoose.model('bio', bioSchema);

module.exports.get = function (callback, limit) {
   Bio.find(callback).limit(limit); 
}