const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
function appendCat(name){
    const copycats = [...cats]
    copycats.push(name)
    return copycats
}
function prependCat(name){
    const copycats = [...cats]
    copycats.unshift(name)
    return copycats
}
function removeLastCat(){
    const copycats = [...cats]
    copycats.pop()
    return copycats
}
function removeFirstCat(){
    const copycats = [...cats]
    copycats.shift()
    return copycats
}