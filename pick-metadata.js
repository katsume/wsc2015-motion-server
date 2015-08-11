module.exports= function(font){

	var fontMaster= font.fontMaster[0],
		unitsPerEm= Number(font.unitsPerEm);

	var descender= Number(fontMaster.descender)/unitsPerEm,
		baseLine= 0,
		xHeight= Number(fontMaster.xHeight)/unitsPerEm,
		capHeight= Number(fontMaster.capHeight)/unitsPerEm,
		ascender= Number(fontMaster.ascender)/unitsPerEm;

	descender= -descender+ascender;
	baseLine= -baseLine+ascender;
	xHeight= -xHeight+ascender;
	capHeight= -capHeight+ascender;
	ascender= -ascender+ascender;

	return {
		unitsPerEm: unitsPerEm,
		descender: descender,
		baseLine: baseLine,
		xHeight: xHeight,
		capHeight: capHeight,
		ascender: ascender
	};
};
