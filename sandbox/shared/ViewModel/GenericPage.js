var RactiveIsomorphic = require('../../../lib');
var GenericPage = RactiveIsomorphic.Page.extend({
	onroute: function(params, is_initial){
		var self = this;
		console.log('GenericPage onroute', params, is_initial);
		// self._super.apply(self, arguments); //?!?
	}
});
module.exports = GenericPage;