// string concatenation 

let string1 = "17";
let string2 = "10";

let newString = +string1 + +string2;
console.log(typeof newString);


or

  
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Strings</h1>
<h2>The concat() Method</h2>

<p>The concat() method joins two or more strings.</p>

<p>Join "Hello" and "world!" with a space in between:</p>

<p id="demo"></p>

<script>
let text1 = "Hello";
let text2 = "world!";
let result = text1.concat(" ", text2);

document.getElementById("demo").innerHTML = result;
</script>

</body>

</html>
