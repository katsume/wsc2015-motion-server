module.exports= function(glyphs, chars){

	var ret= [];

	chars.forEach(function(char){
		glyphs.forEach(function(glyph){
			if(char===unescape('%u'+glyph.unicode)){
				ret.push(glyph);
			}
		});
	});

	return ret;
};
