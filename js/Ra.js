var RaJS = function(){ return this;};

RaJS.prototype = {
	version : function() {
		console.log('this is the RsJS v0.01');
		return this;
	},
	myself: function() {
		console.log(this);
		return this;
	}
}