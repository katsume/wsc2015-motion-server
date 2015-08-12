module.exports= function(font){

	var fontMaster= font.fontMaster[0],
		unitsPerEm= Number(font.unitsPerEm);

	var descender= Number(fontMaster.descender),
		baseLine= 0,
		xHeight= Number(fontMaster.xHeight),
		capHeight= Number(fontMaster.capHeight),
		ascender= Number(fontMaster.ascender);

	descender= -descender+ascender;
	baseLine= -baseLine+ascender;
	xHeight= -xHeight+ascender;
	capHeight= -capHeight+ascender;
	ascender= -ascender+ascender;

	return {
		unitsPerEm: unitsPerEm,
		height: descender,
		// descender: descender,
		baseLine: baseLine
		// xHeight: xHeight,
		// capHeight: capHeight,
		// ascender: ascender
	};
};
