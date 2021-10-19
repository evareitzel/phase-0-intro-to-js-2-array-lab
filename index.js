// Write your solution here!

// 1

const cats = ["Milo", "Otis", "Garfield"]      

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

// 2

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

// 3

function destructivelyRemoveLastCat() {
    cats.pop()
}

// 4

function destructivelyRemoveFirstCat() {
    cats.shift()
}

// 5

function appendCat(name) {
    return [ ...cats, name ]
}

// 6

function prependCat(name) {
    return [name, ...cats]
}

// 7

function removeLastCat() {
    return cats.slice(0, 2)
}

// 8

function removeFirstCat() {
    return cats.slice(1, 3)
}
