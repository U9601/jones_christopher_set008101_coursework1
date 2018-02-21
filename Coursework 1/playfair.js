function playfairEncrypt(){
	var key = document.getElementById('key').value
	key = key.toLowerCase();
	var table = [];
	var possible = "abcdefghijklnmoprstuvwxyz";
	var counter = 0;
	
	for(i = 0; i < key.length; i++){
		table.push(key[i]);
		counter++;
	}
	var possible2 = [];
	possible2 = possible.split('');
	
	for (i = 0; i < possible2.length; i++){
		var index = (possible2[i]);
		if(table[i] != index){
			table.push(index);
		}else{
			i++;
		}
		
		
		
	}	

	alert(table);
	var input = document.getElementById('word').value
	 input = input.toLowerCase();
	 
		for (i = 0; i < input.length; i++) {
			if (input[i+1]) {
				if(input[i] === input[i+1]){
					input = input.replace(input[i]+input[i+1], input[i] + "z");
				}
			}
		}
	
	if (input.length % 2 == 1){
		input += "z";
	}
	
	var splitInput = [];
	
	for(i = 0; i < input.length; i+=2){
		splitInput.push(input.substring(i, i + 2));
	}
	
	alert(splitInput);
	
	var cipherText = [];
	
	for(i = 0; i < splitInput.length; i++){
		
		if(splitInput[i] == table[1+6]){
			cipherText.push(table[6]);
			cipherText.push(table[11]);
		}
		
		if (splitInput[i] == table[2+7]){
			cipherText.push(table[7]);
			cipherText.push(table[12]);
		}
		
		if (splitInput[i] == table[3+8]){
			cipherText.push(table[8]);
			cipherText.push(table[13]);
	    }
	
		if (splitInput[i] == table[4+9]){
			cipherText.push(table[9]);
			cipherText.push(table[14]);
		}
		
		if (splitInput[i] == table[5+10]){
			cipherText.push(table[10]);
			cipherText.push(table[15]);
		}
		
		if (splitInput[i] == table[11+16]){
			cipherText.push(table[16]);
			cipherText.push(table[21]);
		}
		
		if (splitInput[i] == table[12+17]){
			cipherText.push(table[17]);
			cipherText.push(table[22]);
		}
		
		if (splitInput[i] == table[13+18]){
			cipherText.push(table[18]);
			cipherText.push(table[23]);
		}
	}
}


function playfairDecrypt(){
}

