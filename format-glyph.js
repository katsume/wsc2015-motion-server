var formatPath= require('./format-path.js');

var getBounds= function(path){

	var minX= Infinity,
		maxX= -Infinity,
		minY= Infinity,
		maxY= -Infinity;

	path.forEach(function(segment){

		var p= segment.p[0],
			x= p[0],
			y= p[1];

		if(x<minX){
			minX= x;
		}

		if(maxX<x){
			maxX= x;
		}

		if(y<minY){
			minY= y;
		}

		if(maxY<y){
			maxY= y;
		}
	});

	var w= maxX-minX,
		h= maxY-minY;

	var margin= 0.1;

	return {
		origin: [minX-w*margin, minY-h*margin, 1],
		size: [w*(1.0+margin*2), h*(1.0+margin*2), 1]
	};
};

module.exports= function(glyph, metadata){

	var glyphname= glyph.glyphname,
		layer= glyph.layers[0],
		path= [],
		bounds= {},
		glyphBounds= {};

	path= path.concat.apply(path, layer.paths.map(formatPath));

	bounds= {
		origin: [0, 0, 1],
		size: [
			Number(layer.width),
			metadata.height,
			1
		]
	};

	glyphBounds= getBounds(path);

	return {
		name: glyphname,
		path: path,
		bounds: bounds,
		'glyph-bounds': glyphBounds
	};
};
