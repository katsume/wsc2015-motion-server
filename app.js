var express= require('express');

var font= require('./data/font.json');

var pickMetadata= require('./pick-metadata.js'),
	pickGlyphs= require('./pick-glyphs'),
	formatGlyph= require('./format-glyph.js'),
	adjustMetadata= require('./adjust-metadata'),
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

	var metadata= pickMetadata(font),
		glyphs= pickGlyphs(font.glyphs, sentence.split('')).map(function(glyph){
			return formatGlyph(glyph, metadata);
		});

	adjustMetadata(metadata);
	adjustGlyphs(glyphs, metadata);

	res.send({
		// metadata: metadata,
		glyphs: glyphs
	});
});

app.listen(8000);
