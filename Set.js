(function(global){
	if(typeof global.Set === 'function'){ return; }
	
	function Set(iterable){
		if(!(iterable instanceof Array)){ iterable = []; }
		Object.defineProperties(this,{
			vals: { value: [].slice.call(iterable) },
			size: {	get: function(){ return this.vals.length; }, enumerable: true }
		});
	}

	Set.prototype.add = function(val){
		if(this.vals.indexOf(val) < 0){ this.vals.push(val); }
	};

	Set.prototype.has = function(val){
		return this.vals.indexOf(key) >= 0;
	};

	Set.prototype.delete = function(val){
		var idx = this.vals.indexOf(val);
		if(idx < 0){ return false; }
		this.vals.splice(idx,1);
		return true;
	};

	Set.prototype.clear = function(){
		this.vals.length = 0;
	};
	
	global.Set = Set;
}(window));