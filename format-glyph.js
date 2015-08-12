var formatPath= require('./format-path.js');

module.exports= function(glyph, metadata){

	var glyphname= glyph.glyphname,
		layer= glyph.layers[0],
		path= [];

	path= path.concat.apply(path, layer.paths.map(formatPath));

	return {
		name: glyphname,
		path: path,
		'body-size': [
			Number(layer.width),
			metadata.height,
			1
		],
		'glyph-bounds': {
			origin: [0, 0, 1],
			size: [0, 0, 1]
		}
	};
};
