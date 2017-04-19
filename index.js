console.log('initial base64 file:', file, file.length);
			
document.body.innerHTML += '<b>initial base64 file:</b><img src="'+file+'">';



file = compress(file, charset1, charset2);

console.log('compressed file:', file, file.length);

document.body.innerHTML += '<b>compressed file:</b><img src="'+file+'">';



file = decompress(file, charset1, charset2);

console.log('decompressed file:', file, file.length);

document.body.innerHTML += '<b>decompressed file:</b><img src="'+file+'">';