let numbers = [0,1,2,3,4,5,6,7,8,9]
let total = numbers.map(num => num).reduce((acc,num) => acc + num,0);
alert(total)