/* Syntax -> For
for (expr1; expr2; expr3) {
  code block to be executed
}*/

for(let i = 1;i<=10;i++){
console.log("Natural Number is ",i);
}

/* Syntax -> While
while (condition) {
code block to be executed
}
*/
let j=0
while( j<=10)
{
j++
console.log(j);
}

/* Syntax -> Do-While
do {
  // code block to be executed
}
while (condition); */
let text
let k =10
do {
  text += "The number is " + k;
  k++;
}
while (k < 10);
console.log(text)

