var Math= require('./libs/math');

module.exports= function(glyphs, metadata){

	var unitsPerEm= metadata.unitsPerEm,
		baseLine= metadata.baseLine;

	glyphs.forEach(function(glyph){

		var path= glyph.path,
			bounds= glyph['bounds'],
			glyphBounds= glyph['glyph-bounds'];

		var x= glyphBounds.origin[0],
			y= glyphBounds.origin[1],
			w= glyphBounds.size[0],
			h= glyphBounds.size[1];

		path.forEach(function(segment){

			segment.p= segment.p.map(function(val){

				val[0]= Math.map(val[0], x, x+w, 0, unitsPerEm);
				val[1]= Math.map(val[1], y, y+h, 0, unitsPerEm);

				return val;
			});
		});

		path.forEach(function(segment){

			segment.p= segment.p.map(function(val){

				val[0]/= unitsPerEm;
				val[1]/= unitsPerEm;

				val[1]= -val[1]+1;//+baseLine;

				return val;
			});
		});

		bounds.origin[0]/= unitsPerEm;
		bounds.origin[1]/= unitsPerEm;

		bounds.size[0]/= unitsPerEm;
		bounds.size[1]/= unitsPerEm;

		glyphBounds.origin[0]/= unitsPerEm;
		glyphBounds.origin[1]/= unitsPerEm;

		glyphBounds.size[0]/= unitsPerEm;
		glyphBounds.size[1]/= unitsPerEm;

		glyphBounds.origin[1]= -glyphBounds.origin[1]-glyphBounds.size[1]+baseLine;

	});
};
