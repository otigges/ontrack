var express = require('express');
var router = express.Router();
var Trade = require('../models/trade');

router.get('/trades/defaults', function(req, res) {
  res.json(
	{ 
	  trades : [
	  	'Shopping',
		'Preparation',
		'Cooking',
		'Backing',
		'Clean up'
		] 		
  	});
});

router.route('/trades')
		
	.post(function(req, res) {
		
		var trade = new Trade(); 	
		trade.name = req.body.name; 
		console.log ("request: " + req.body.name) 

		trade.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Trade created!' });
		});
		
	})
	
	.get(function(req, res) {
		Trade.find(function(err, trades) {
			if (err)
				res.send(err);
			res.json(trades);
		});
	});
	
router.route('/trades/:trade_id')

		.get(function(req, res) {
			Trade.findById(req.params.trade_id, function(err, trade) {
				if (err)
					res.send(err);
				res.json(trade);
			});
		})
		
		.put(function(req, res) {
			Trade.findById(req.params.trade_id, function(err, trade) {

				if (err)
					res.send(err);

				trade.name = req.body.name; 
				trade.save(function(err) {
					if (err)
						res.send(err);

					res.json({ message: 'trade updated!' });
				});
			});
		})
		
		.delete(function(req, res) {
			Trade.remove({
				_id: req.params.trade_id
			}, function(err, trade) {
				if (err)
					res.send(err);

				res.json({ message: 'Successfully deleted' });
			});
		});		


module.exports = router;
