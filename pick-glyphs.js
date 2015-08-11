module.exports= function(glyphs, chars){

	var ret= [];

	chars.forEach(function(char){
		glyphs.forEach(function(glyph){			
			if(char===glyph.glyphname){
				ret.push(glyph);
			}
		});
	});

	return ret;
};
