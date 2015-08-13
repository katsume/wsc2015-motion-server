var _= require('underscore');

module.exports= _.extend(Math, {
	wrap: function(val, from, to){
		if(val<from){
			return to-(from-val)%(to-from);
		} else if(to<=val){
			return from+(val-to)%(to-from);
		}
		return val;
	},
	lerp: function(start, stop, value){
		return start+value*(stop-start);
	},
	map: function(value, inputMin, inputMax, outputMin, outputMax){
		return (value-inputMin) / (inputMax-inputMin) * (outputMax-outputMin) + outputMin;
	}
});
