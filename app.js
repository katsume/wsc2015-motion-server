var _= require('underscore'),
	express= require('express');

var font= require('./data/font.json');

var pickGlyphs= require('./pick-glyphs'),
	pickMetadata= require('./pick-metadata.js'),
	formatGlyph= require('./format-glyph.js'),
	adjustGlyphs= require('./adjust-glyphs'),
	calculateRange= require('./calculate-range');

var app= express();

app.use(function(req, res, next){
	res.set({
		'Access-Control-Allow-Origin': '*'
	});
	next();
});

app.get('/', function(req, res){

	var query= req.query,
		sentence= query.sentence;

	if(!sentence){
		res.sendStatus('400');
		return;
	}

	var glyphs= pickGlyphs(font.glyphs, sentence.split('')).map(formatGlyph),
		metadata= pickMetadata(font);

	adjustGlyphs(glyphs, metadata);
	// adjustMetadata(metadata);

	glyphs.forEach(function(glyph){
		// var range= calculateRange(glyph);
		// glyph.origin= range.origin;
		// glyph.size= range.size;
		glyph.origin= [0, 0, 1];
		glyph.size= [glyph.width, metadata.descender, 1];
	});

	res.send({
		metadata: metadata,
		glyphs: glyphs
	});
});

app.listen(8000);
