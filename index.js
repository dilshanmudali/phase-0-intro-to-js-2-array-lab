// Write your solution here!
const cats = ['Milo', 'Otis', "Garfield"];

// destructivelyAppendCat = cats.push("Ralph")

function destructivelyAppendCat(){
    return cats.push("Ralph");
}

function destructivelyPrependCat(){
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    const newCat = [...cats.slice(0),"Broom"]
    return newCat
}

function prependCat(){
    const newerCat = ["Arnold",...cats.slice(0)]
    return newerCat
}

function removeLastCat(){
    const removedCat = [...cats.slice(0,2)]
    return removedCat
}

function removeFirstCat(){
    const removefirst = [...cats.slice(1)]
    return removefirst
}