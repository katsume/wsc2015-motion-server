module.exports= function(metadata){

	var unitsPerEm= metadata.unitsPerEm;

	metadata.height/= unitsPerEm;
	// metadata.descender/= unitsPerEm;
	metadata.baseLine/= unitsPerEm;
	// metadata.xHeight/= unitsPerEm;
	// metadata.capHeight/= unitsPerEm;
	// metadata.ascender/= unitsPerEm;
};
