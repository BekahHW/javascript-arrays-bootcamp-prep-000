var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
 return [element, ...array]

}


function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element)
 return array
 
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, element){
  return array[0]
  
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array, element){
  return array[index]

}

function destructivelyRemoveElementFromEndOfArray(array, element){
  array.pop()
  return array

}

function removeElementFromEndOfArray(array, element){
  return [array.slice(0, array.length - 1)]
}

