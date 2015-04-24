var Promise = require('../../lib').Promise;
var _ = require('lodash');
var on_client = require('on-client');
var _delay = on_client ? 500 : 10;
module.exports = {
	getDelay: function(){
		return _delay;
	},
	setDelay: function(delay){
		_delay = delay;
	},
	half: function(num){
		return new Promise(function(resolve, reject){
			setTimeout(function(){
				resolve(num/2);
			}, _delay);
		});
	},
	random: function(num){
		return new Promise(function(resolve, reject){
			setTimeout(function(){
				resolve(_.random(1, 100));
			}, _delay);
		});
	}
};