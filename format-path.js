module.exports= function(path){

	var queue= [],
		ret= [];

	path.nodes.forEach(function(node, index){

		var components= node.split(' '),
			x= Number(components[0]),
			y= Number(components[1]),
			type= components[2];

		switch(type){
			case 'LINE':
				ret.push({
					type: 'L',
					p: [[x, y, 1]]
				});
				break;
			case 'CURVE':
				queue.unshift([x, y, 1]);
				ret.push({
					type: 'C',
					p: queue
				});
				queue= [];
				break;
			case 'OFFCURVE':
				queue.push([x, y, 1]);
				break;
		}

		if(index===path.nodes.length-1){
			ret.unshift({
				type: 'M',
				p: [[x, y, 1]]
			});
		}
	});

	return ret;
};
