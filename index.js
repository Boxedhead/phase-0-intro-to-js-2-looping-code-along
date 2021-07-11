/*
const gifts = ["teddy bear", "drone", "doll"];
function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
} 
wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]); 
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
//    debugger;
}
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
//    debugger;
  }
  return gifts;
}
wrapGifts(gifts); 
*/


function writeCards(names, message) {
    let tyCard = [];
    for (let i = 0; i < names.length; i++) {
       tyCard.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
    }
    return tyCard;
}

function countDown(n) {
    let count = n;
    while (count > 0) {
      console.log(count);
      count--;
    } 
    console.log(count);
}