//loops, conditionals and the modulo operator
//append each number (or its “fizz”/”buzz”/”fizzbuzz” substitution) to the body element of the DOM.
//The program should print out each number from 1 to 100, replacing numbers divisible by both 3 and 5 with “fizz buzz”, those divisible by 3 with “fizz”, and those divisible by 5 with “buzz”
//1 to 15
//If divisible by 3 = fizz
//If divisible by 5 = buzz
//If divisible by 3 and 5 = fizz buzz
$( "body" ).append(

for (var i = 1; i < 101; i++) 
{

if (i % 15 == 0)
  console.log("fizzbuzz");

else if (i % 3 == 0)
  console.log("fizz");

else if (i % 5 == 0)
  console.log("buzz");

else
  console.log(i);

}
);