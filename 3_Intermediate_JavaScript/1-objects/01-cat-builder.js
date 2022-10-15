/*
Write a function catBuilder(name, color, toys) that returns a cat object object with the corresponding properties.

console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
// prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
// prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
*/

function catBuilder(name, color, toys) {
    let cat = {
        name: name,
        color: color,
        toys: toys
    };

    return cat;
}