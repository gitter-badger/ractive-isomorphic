var fs = require('fs');
var path = require('path');
var Page = require('./Page');
var template = fs.readFileSync(path.join(__dirname, 'RandomNumber.html'), 'utf8');

var RandomNumber = Page.extend({
	name: 'RandomNumber',
	url: 'random(/:number)',
	template: template,
	onroute: function(params, is_initial){
		var self = this;
		self.set({next_number: null});
		self.parent.set({title: self.name + ' / ' + self.parent.get('title')});
		self.api.random(1, 100).then(function(number){
			self.set({next_number: number});
		});
	}
});

module.exports = RandomNumber;