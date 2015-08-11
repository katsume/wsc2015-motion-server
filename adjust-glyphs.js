module.exports= function(glyphs, metadata){

	var unitsPerEm= metadata.unitsPerEm,
		baseLine= metadata.baseLine;

	glyphs.forEach(function(glyph){
		glyph.path.forEach(function(segment){

			segment.p= segment.p.map(function(val){

				val[0]/= unitsPerEm;
				val[1]/= unitsPerEm;

				val[1]= -val[1]+baseLine;

				return val;
			});
		});
		glyph.width/= unitsPerEm;
	});
};
