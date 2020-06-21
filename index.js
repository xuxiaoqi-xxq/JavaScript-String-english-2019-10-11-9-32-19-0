// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
console.log(name);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var sentences = sentence.split(" ");
var result = '';
sentences.forEach(s => {
    result += s[0].toUpperCase() + s.substr(1) + ' ';
});
result.substring(0, result.length - 1);
console.log(result);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
money = money.replace('￥', '');
console.log(money);