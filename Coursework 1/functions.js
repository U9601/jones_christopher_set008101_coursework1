function caeserEncrypt(){

	var word = document.getElementById('word').value;
	var shift = document.getElementById('shift').value;

	var output = '';

	shift = parseInt(shift);

	for (var i = 0; i < word.length; i++){

		var character = word[i];

		if(character.match(/[a-z]/i)){

			var uniCode = character.charCodeAt(0);

			//uppercase
			if ((uniCode >= 65) && (uniCode <= 90)){
				uniCode += shift;
				if(uniCode > 90){
					uniCode -= 26;
				}
			} //lowercase
			else if((uniCode >= 97) && (uniCode <= 122)){
				uniCode += shift;
				if(uniCode > 122){
					uniCode -= 26;
				}
			}
    character = String.fromCharCode(uniCode);

		}

		output += character;
	}

	document.getElementById('textarea').innerHTML = output;
	document.getElementById('word').value='';
	document.getElementById('shift').value='';
}

function caeserDecrypt(){
	var word = document.getElementById('word').value;
	var shift = document.getElementById('shift').value;

	var output = '';

	shift = parseInt(shift);

	for (var i = 0; i < word.length; i++){

		var character = word[i];

		var uniCode = character.charCodeAt(0);

		//uppercase
		if ((uniCode >= 65) && (uniCode <= 90)){
			uniCode -= shift;
			if(uniCode < 65){
				uniCode -= 26;
			}
		}
		//lowercase
		else if((uniCode >= 97) && (uniCode <= 122)){
			uniCode -= shift;
			if(uniCode < 97){
				uniCode += 26;
			}
		}

		character = String.fromCharCode(uniCode);

		output += character;
	}

	document.getElementById('textarea').innerHTML = output;
	document.getElementById('word').value='';
	document.getElementById('shift').value='';
}

function atBashEncrypt(){

	var Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var reversedAlphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var reversedalphabet = "zyxwvutsrqponmlkjihgfedcba";
	var output = '';

	var word = document.getElementById('word').value;

	for (var i = 0; i < word.length; i++){

		var character = word[i];

		var letters = character.charAt(0);

		var uniCode = character.charCodeAt(0);

		//uppercase
		if((uniCode >= 65) && (uniCode <= 90)){
			var pos = Alphabet.indexOf(letters);
			var pos2 = reversedAlphabet.charAt(pos);

			output += pos2;
		}
		//lowecase
		else if((uniCode >= 97) && (uniCode <= 122)){
			var pos = alphabet.indexOf(letters);
			var pos2 = reversedalphabet.charAt(pos);
			output += pos2;
		}


	}

	document.getElementById('textarea').innerHTML = output;
	document.getElementById('word').value='';
}

function atBashDecrypt(){


	var Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var reversedAlphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var reversedalphabet = "zyxwvutsrqponmlkjihgfedcba";
	var output = '';

	var word = document.getElementById('word').value;
	for (var i = 0; i < word.length; i++){

		var character = word[i];

		var letters = character.charAt(0);

		var uniCode = character.charCodeAt(0);

		if((uniCode >= 65) && (uniCode <= 90)){
			var pos = Alphabet.indexOf(letters);
			var pos2 = reversedAlphabet.charAt(pos);

			output += pos2;
		}
		else if((uniCode >= 97) && (uniCode <= 122)){
			var pos = alphabet.indexOf(letters);
			var pos2 = reversedalphabet.charAt(pos);
			output += pos2;
		}


	}

	document.getElementById('textarea').innerHTML = output;
	document.getElementById('word').value='';
}

function BinaryEncrypt(){
	var word = document.getElementById('word').value;
	var output =  " ";

	for(i = 0; i < word.length; i++){
		output += word[i].charCodeAt(0).toString(2) + " ";
	}
	document.getElementById('textarea').innerHTML = output;
	document.getElementById('word').value='';
}

function BinaryDecrypt(){
	var word = document.getElementById('word').value;
	var output = " ";
	var text = word.match(/.{1,8}/g);

	for (i = 0; i < text.length; i++){
		output += String.fromCharCode(parseInt(text[i], 2).toString(10));
	}

	document.getElementById('textarea').innerHTML = output;
	document.getElementById('word').value='';
}
