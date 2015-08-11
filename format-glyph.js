var formatPath= require('./format-path.js');

module.exports= function(glyph){

	var glyphname= glyph.glyphname,
		layer= glyph.layers[0],
		formattedPaths= layer.paths.map(formatPath),
		path= [];

	return {
		name: glyphname,
		path: path.concat.apply(path, formattedPaths),
		width: layer.width
	};
};
