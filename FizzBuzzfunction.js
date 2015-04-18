//Directions: 
//User should be prompted to supply a number prompt() function or create a simple text input with text telling the user to input a number.
//Write one named function that takes an integer as argument, and then counts from 1 to the argument value, substituting “fizz”, “buzz”, and “fizzbuzz” accordingly.
//Convert the value the user supplies from a string to a number. 
//Value that you get from prompt() or the val() on your form will by default be a string. 
//Use the + operator to convert a string to an integer.
//Example: if you had the string “22”, convert that to a number with +”22”.
//Note that if you try to convert something like "this is a string" to an integer with +"this is a string", it will evaluate to NaN.
//App should ensure that the user supplied value does not evaluate to NaN. If it does, you should supply a message telling them they need to supply a number.

$(document).ready(function() {

//this is a function expression, correct?
	
	var numberAlert = function(number) {
		if (isNaN(number)||number % 1 !== 0) {
			alert("enter a real number");
		}
	};

	var FizzBuzz = function(inputNumber) {
		var i = 1;
		while (i <= inputNumber) {
//question: why use "while" here and not for?
		
		if (i % 15 == 0) {
			$("body").append ("<br>fizzbuzz");
		}

		else if (i % 3 == 0) {
  			$("body").append ("<br>fizz");
  		}

		else if (i % 5 == 0) {
 			$("body").append ("<br>buzz");
		}

		else {
 			$("body").append ("<br>" + i);
		}
		i++;
	}
//question: why can i++ be by itself outside of ()

};

//calling function.
	$('input:text').keyup(function(event){
        if(event.keyCode == 13) {

            var inputNumber = +$(this).val();

//The .val() method is primarily used to get the values of form elements

            numberAlert(inputNumber);

            FizzBuzz(inputNumber);

            $(this).val('');
        }
 });

//calling function.

   	$('input:submit').keyup(function() {

        var inputNumber = +$(this).siblings('input:text').val();

        numberAlert(inputNumber);

        FizzBuzz(inputNumber);

        $(this).siblings('input:text').val('');
    });
});




