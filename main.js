// assignment 1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let regExp = /\d{4}:\w{3}:(\d{4}:)+/ig
// let regExp = /(\w{1,4}:){7}/ig;
 
console.log(ip.match(regExp))

// assignment 2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regular2 = /(\bos)\w{0,3}(o\b)/gi;

console.log(specialNames.match(regular2))

// Output
// ['Os10O', 'OsO', 'Os100O']

// assignment 3
let phone = "+(995)-123 (4567)";
let regular = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi;

console.log(phone.match(regular));

// assignment 4
let regex = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
/*
https? => maybe it has http or not or https or not and if there is not it just skip
: => spacial character
\ => to skip / and let the system consider it as a spacial character
(?:[-\w]+\.)? => 
    ? and : => it is just a spacial character
    [-\w]+ =>
    [] => range
    -  => spacial character
    \w => match any words or digites not spacial character
    + => it is mean one workd or digites or more 
    \. => just a dot 
    ? => it means it might be this group exist if not just skip it is okey
([-\w]+) => the same above but it must be in the pattern if it is not in the text this will not match this pattern
\. => spacial character 
\w+ = match any wrod or digtes and it is nessaery to be part of the tested texet
(?:\.\w+)? => 
    ? and : and \.=> just a character
    \w+ => match any words or digtes
    ? => it is mean if this grop exitst its okey of its not it also okey and it match the pattern without it creates a non-capturing group.
\/ => spacial character
.* => it is mean only doat or more 
*/

// assignment 5
let date1 = "2/10/1982";
let date2 = "25 - 4 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{1,2}(\s|\/|)(-\s)?\d{1,2}(\s|\/|)(-\s)?\d{2,4}/gi;

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

// assignment 6 challange
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let reg = /(https?:\/\/)?(www\.)?\w+\.(org)\S*/gi;

console.log(url1.match(reg));
console.log(url2.match(reg));
console.log(url3.match(reg));
console.log(url4.match(reg));
console.log(url5.match(reg));
