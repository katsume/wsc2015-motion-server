module.exports= function(glyph){

	var minX= minY= Infinity,
		maxX= maxY= -Infinity;

	glyph.path.forEach(function(segment){
		var p= segment.p[0],
			x= p[0],
			y= p[1];

		if(x<minX){
			minX= x;
		}

		if(y<minY){
			minY= y;
		}

		if(maxX<x){
			maxX= x;
		}

		if(maxY<y){
			maxY= y;
		}
	});

	return {
		origin: [minX, minY, 1],
		size: [maxX-minX, maxY-minY, 1]
	};	
};
