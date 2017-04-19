function compress(file, charset1, charset2){
	
	for(var i=0; i<charset1.length; i++){
		var regex = new RegExp(charset1[i], 'gm');
		file = file.replace(regex, charset2[i]);
	}
	
	return file;
	
}

function decompress(file, charset1, charset2){
	
	for(var i=0; i<charset2.length; i++){
		var regex = new RegExp(charset2[i], 'gm');
		file = file.replace(regex, charset1[i]);
	}
	
	return file;
	
}