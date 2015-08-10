var express= require('express');
var Q= require('q');

var app= express();

var plist= require('plistjs');
var fs= require('fs');
var pickGlyphs= function(glyphs, sentence){
	return sentence.split('').map(function(char){
		glyphs.forEach(function(glyph){
			console.log(glyph.glyphname);
			if(glyph.glyphname===char){
				return glyph;
			}
			return;
		});
	});
};
var loadFont= function(sentence){

	var d= Q.defer();

	var FILENAME= 'data/CosugiFont_22.glyphs';
	FILENAME= 'data/_.glyphs';

	fs.readFile(FILENAME, function(err, data){

		if(err){
			d.reject(err);
			return;
		}

		var str= data.toString().replace(/\n|\t/g, '').replace(/\s\=\s/g, '=');
		// var str= data.toString();

		var util= require('util');
		var font= plist.parse(str);
		// font.glyphs= pickGlyphs(font.glyphs, sentence);

		console.log(util.inspect(font, false, null));

		d.resolve(util.inspect(font, false, null));
	});

	return d.promise;
};

app.get('/', function(req, res){

	var query= req.query,
		sentence= query.sentence;

	if(!sentence){
		res.sendStatus('400');
		return;
	}

	res.set({
		'Access-Control-Allow-Origin': '*'
	});

	Q
		.when(sentence)
		.then(loadFont)
		.then(function(response){
			res.send(response);
		}, function(err){
			res.send(err.toString());
		});
});

app.listen(8000);
