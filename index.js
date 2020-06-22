// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
name = name.toUpperCase();
// console.log(name);
document.writeln(name + '<br>');

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
var sentences = sentence.split(" ");
var result = '';
sentences.forEach(s => {
    result += s[0].toUpperCase() + s.substr(1) + ' ';
});
result.substring(0, result.length - 1);
// console.log(result);
document.writeln(result + '<br>');

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
money = money.replace('￥', '');
// console.log(money);
document.writeln(money);