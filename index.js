// add solution here
function theBeatlesPlay(musicians, instruments) {
var newArray=[]
  for (var i=0; i<musicians.length; i++) {
    newArray.push(musicians[i]+' plays '+instruments[i])
  }
  return newArray
}

function johnLennonFacts(array) {
  var newArray=[]
  var i=0
  while(i<array.length) {
    newArray.push(array[i]+'!!!')
    i++
  }
  return newArray
}

function iLoveTheBeatles(num){
  var newArray=[]
  var i=0;
  function incrementVariable(){
    i=i+1
    return i
  }
  do {
    console.log('I love the Beatles!')
  } while (incrementVariable()<num)
}