//The Caesar ciphers encrypt
function caeserEncrypt(){
//Gets the word and shift from the user
	var word = document.getElementById('word').value;
	var shift = document.getElementById('shift').value;

//sets up variables
	var output = '';

//changes the shift to an int
	shift = parseInt(shift);

//loops around the users word until the end of the word
	for (var i = 0; i < word.length; i++){

//sets the character to the words characters
		var character = word[i];

//checks to see if a character matches a character in the alphabet
		if(character.match(/[a-z]/i)){

// gets the characters unicode
			var uniCode = character.charCodeAt(0);

			//uppercase
			if ((uniCode >= 65) && (uniCode <= 90)){
				//adds the shift
				uniCode += shift;
				if(uniCode > 90){
					//if the unicode goes out of range then - 26 to get it back to the start of the alphabet
					uniCode -= 26;
				}
			} //lowercase
			else if((uniCode >= 97) && (uniCode <= 122)){
				//adds the shift
				uniCode += shift;
				//if the unicode goes out of range then - 26 to get it back to the start of the alphabet
				if(uniCode > 122){
					uniCode -= 26;
				}
			}
			//set the character back to a readable String
    character = String.fromCharCode(uniCode);

		}
		//sets the output to the character
		output += character;
	}
//sets the textarea to hold the output and clears the word and shift out of the boxes
	document.getElementById('textarea').innerHTML = output;
	document.getElementById('word').value='';
	document.getElementById('shift').value='';
}

//Caesar Decrypt is the exact same as the encrypt but instead of + the shift we - it
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
			//minus the shift
			uniCode -= shift;
			if(uniCode < 65){
				//if it goes out of range then + 26 to get it back in range
				uniCode += 26;
			}
		}
		//lowercase
		else if((uniCode >= 97) && (uniCode <= 122)){
			//minus the shift
			uniCode -= shift;
			if(uniCode < 97){
					//if it goes out of range then + 26 to get it back in range
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

//Atbash Encrypt
function atBashEncrypt(){
//sets up the variables so that there is a forward uppercase and lowercase alphabet and a reversed upper and lower case alphabet
	var Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var reversedAlphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var reversedalphabet = "zyxwvutsrqponmlkjihgfedcba";
	//sets up the output
	var output = '';

//gets the word from the user
	var word = document.getElementById('word').value;

//loops around the users word until the end of the word
	for (var i = 0; i < word.length; i++){

//sets the character to the characters of the wor
		var character = word[i];

//gets the characters position
		var letters = character.charAt(0);

//gets the unicode of the characters
		var uniCode = character.charCodeAt(0);

		//uppercase
		if((uniCode >= 65) && (uniCode <= 90)){
			//gets the index of the character in the alphabet;
			var pos = Alphabet.indexOf(letters);
			//uses that index to get the character in the reversed alphabet e = 5 v = 5 and so on
			var pos2 = reversedAlphabet.charAt(pos);
			//adds the encrytped output to the character
			output += pos2;
		}
		//lowecase
		else if((uniCode >= 97) && (uniCode <= 122)){
			var pos = alphabet.indexOf(letters);
			var pos2 = reversedalphabet.charAt(pos);
			output += pos2;
		}


	}
//puts the output into the textarea and clears the value from the input box
	document.getElementById('textarea').innerHTML = output;
	document.getElementById('word').value='';
}
//The Atbash Decrypt is the exact same honestly could have just used the same function but oh well :D
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

//Binary Encrypt
function BinaryEncrypt(){
	//gets the users word
	var word = document.getElementById('word').value;
	//sets up the output
	var output =  " ";

	for(i = 0; i < word.length; i++){
		//sets the output to the characters binary equivalent as toString(2) 2 bit number is binary.
		output += word[i].charCodeAt(0).toString(2) + " ";
	}
	//sets the output to the textarea and clears the users word
	document.getElementById('textarea').innerHTML = output;
	document.getElementById('word').value='';
}

//Binary Decrypt
function BinaryDecrypt(){
	//Gets the users word
	var word = document.getElementById('word').value;
	//sets up the output
	var output = " ";
	//checks to see if globally the binary word is 7 digits long
	var text = word.match(/.{1,8}/g);

	for (i = 0; i < text.length; i++){
		//sets the output to the characters string equivalent of the binary as toString(10) 10 bit string
		output += String.fromCharCode(parseInt(text[i], 2).toString(10));
	}
	//sets the output to the textarea and clears the users word
	document.getElementById('textarea').innerHTML = output;
	document.getElementById('word').value='';
}

//This last bit is just for TL;DRs and changing parts of text and has no real relevance to cipher functions about from how to use them and how they work so read it if you wish
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
