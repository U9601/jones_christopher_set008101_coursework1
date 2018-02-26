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

var clickedOnce = false;
var clickedTwice = false;
var clickedThird = false;

function howdoesitworkCaesar(){
	document.getElementById('text').innerHTML = '';
	document.getElementById('text2').innerHTML = "ENCRYPT: It first of all gets the shift and the word that is going to be encrypted and initliazes variables. Splits the word up into its seperate characters and checks to see if the charaters are in the alphabet. If it does match then it will change those character into there unicode varients. Then checks if the unicode characters are upper or lowercase and will add the shift to the unicode therefore changing the character. If the characters goes outside the upper/lowercase range of unicode then it will -26 (26 letters in the alphabet). Then the new charatcers and changed back from unicode to a string and are added to the output which is then put into the text area once the word has been fully encrypted";
	document.getElementById('text3').innerHTML = "DECRYPT: Pretty much the exact same except instead of adding the shift we minus it instead and again it goes outside the range then we +26";
	document.getElementById('text4').innerHTML = '';
	document.getElementById('text5').innerHTML = '';
	document.getElementById('text6').innerHTML = '';
	document.getElementById('button').innerHTML = "TL;DR"

	if(clickedThird){
		location.reload();
		clickedThird = false;
	}

	if (clickedOnce){
	  document.getElementById('text').innerHTML ="ITS MAGIC :D"
		document.getElementById('text2').innerHTML ='';
		document.getElementById('text3').innerHTML ='';
		document.getElementById('button').innerHTML = "Want to read it now? :)"
		clickedTwice = true;
	}

	if(clickedTwice){
		clickedOnce = false;
		clickedTwice = false;
		clickedThird = true;
	}
 clickedOnce = true;

}


function howdoesitworkAtbash(){
	document.getElementById('text').innerHTML = '';
	document.getElementById('text2').innerHTML = "ENCRYPT: It first sets up 4 variables with 2 being the uppper and lower case strings of the alphabet (a-z) and the other 2 being the same but in reverse (z-a) and gets the word it is going to encrypt. Loops around for each character and gets its position in the string of the alphabet and its unicode. It then checks to see if the unicode is upper or lowercase and gets the index of where the character appears in the alphabet. If it finds the index it will find the charater in the reversed alphabet that corrisponds to the same index as the normal alphabet. For Example (e) is the 5th element in the string and there is (v) in the reversed alphabet as that is the 5th element in reverse";
	document.getElementById('text3').innerHTML = '';
	document.getElementById('text4').innerHTML = "DECRYPT: Exactly the same finds the element in the alphabet and then in the reversed. For Example if it was (v) which is 21st element in the alphabet, then it will be (e) in the reversed alphabet as that is the 25th element";
	document.getElementById('button').innerHTML = "TL;DR"


		if(clickedThird){
			location.reload();
			clickedThird = false;
		}

		if (clickedOnce){
		  document.getElementById('text').innerHTML ="IT USES THE FORCE XD"
			document.getElementById('text2').innerHTML ='';
			document.getElementById('text4').innerHTML ='';
			document.getElementById('button').innerHTML = "Want to read it now? :)"
			clickedTwice = true;
		}

		if(clickedTwice){
			clickedOnce = false;
			clickedTwice = false;
			clickedThird = true;
		}
	 clickedOnce = true;
}
function howdoesitworkBinary(){
	document.getElementById('text').innerHTML = '';
	document.getElementById('text2').innerHTML = "ENCRYPT: It first gets the word to be encrypted and sets up variables. It will then loop around the word and for every character will turn it into its 2 bit binary equivalent until the entire word is in binary";
	document.getElementById('text3').innerHTML = '';
	document.getElementById('text4').innerHTML = "DECRYPT: It first gets the word that is be decrypted and sets up variables. It will then check is the word matches the binary system for each binary value entered. It will then loop around for each binary value and change it back into a string by getting its 10 bit equilivant until the entire word is back into a readable string. ";

	if(clickedThird){
		location.reload();
		clickedThird = false;
	}

	if (clickedOnce){
		document.getElementById('text').innerHTML ="Its big ball of wibbly wobbly, timey wimey stuff"
		document.getElementById('text2').innerHTML ='';
		document.getElementById('text4').innerHTML ='';
		document.getElementById('button').innerHTML = "Want to read it now? :)"
		clickedTwice = true;
	}

	if(clickedTwice){
		clickedOnce = false;
		clickedTwice = false;
		clickedThird = true;
	}
 clickedOnce = true;
}
