/*  Таблица 
&& | true | false
true | true | false
false | false | flase 

|| | true | false |
true | true | true
ture | true | false 

&& (и) - true если все значения true
\\ (или) - true если хоть одно значение true
! (нет) - инвертирует true или false

*/

console.log( true && true)
console.log(true && false) 

console.log(true || false)
console.log(false || false)

console.log(!false)

console.log(!true)

console.log(!!true)  
console.log(!!!true)

console.log((false && true) || (true || false) || !true)
// false || true || false -> true
