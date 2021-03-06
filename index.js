// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    
}/
*/

const name = ['Lisa', 'Kaitlin', 'Jan'];
const event = 'surprise';

function writeCards(name, event) {
    let newArray=[];
    for (let i = 0; i < name.length; i++) {
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
     }

    return newArray;
}
writeCards(name, event);


function countDown(n = 10) {
while (n >= 0) {
    console.log(n--);
}
}
