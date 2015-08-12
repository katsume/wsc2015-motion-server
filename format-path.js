module.exports= function(path){

	var queue= [],
		ret= [];

	var closed= !!Number(path.closed);

	path.nodes.forEach(function(node, index){

		var components= node.split(' ');

		var x= Number(components[0]),
			y= Number(components[1]),
			type= components[2];

		switch(type){
			case 'LINE':
				ret.push({
					type: ret.length>0 ? 'L' : 'M',
					p: [[x, y, 1]]
				});
				break;
			case 'CURVE':
				queue.unshift([x, y, 1]);
				ret.push({
					type: ret.length>0 ? 'C' : 'M',
					p: queue
				});
				queue= [];
				break;
			case 'OFFCURVE':
				queue.push([x, y, 1]);
				break;
		}

		if(closed && index===path.nodes.length-1){

			ret.push({
				type: 'L',
				p: [[].concat(ret[0].p[0])]
			});
		}
	});

	return ret;
};
