// Write your solution here!

// 1
const cats = ["Milo", "Otis", "Garfield"]

// 2 
function destructivelyAppendCat(name) {
    cats.push(name);
}

// 3
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// 4
function destructivelyRemoveLastCat() {
    cats.pop();
}

// 5
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// 6
function appendCat(name) {
    return [...cats, name]
}

// 7 prependCat(name)
function prependCat(name) {
    return [name, ...cats]
}

// 8 removeLastCat()
function removeLastCat() {
    return cats.slice(0, -1)
}

// 9 removeFirstCat()
function removeFirstCat() {
    return cats.slice(1)
}