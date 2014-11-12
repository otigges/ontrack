var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TradeSchema   = new Schema({
	name: String
});

module.exports = mongoose.model('Trade', TradeSchema);