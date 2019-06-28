/*
function takeANumber(katzDeliLine, name){
var array = []
for (var i=0; i < katzDeliLine.length; i++){
array.push("Welcome, " + name[i] + ". You are currently number " + katzDeliLine[i] + " in line")

}
return array

}

function theBeatlesPlay(musicians, instruments){
var array = []
for (var i = 0; i < musicians.length; i++) {
  array.push(musicians[i]+" plays "+instruments[i])}
return array;
}
*/

function takeANumber (katzDeliLine, name) {

/*katzDeliLine++

var opening = "Welcome, "
var middle = ". You are number "
var lineNo = katzDeliLine.toString()
var personName = name
var closing = " in line."



return 'Welcome, ' + name + '. You are number ' + lineNo + ' in line'


//WHY DOESN'T THIS WORK?!?!!  return "Welcome, " + name + ". You are number " + katzDeliLine + " in line."
*/

katzDeliLine.push(name)

return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.'

}

function nowServing (katzDeliLine){

while (katzDeliLine.length > 0)

{
  var atCounter = katzDeliLine.shift()
  return "Currently serving " + atCounter + "."
}

return "There is nobody waiting to be served!"

}

function currentLine(katzDeliLine) {
var i = 0
var lineList = [...katzDeliLine]

if (katzDeliLine.length > 0){

while (i < 10 )// && i < katzDeliLine)
{

lineList.splice(i, 1, i + "." + lineList[i])

  //lineList.push(katzDeliLine[i])
  //return "The line is currently:" + i + lineList
//return katzDeliLine

i++
i++

}
  return lineList//"The line is currently empty."
}

else {

return "The line is currently empty."
}

}


/*function johnLennonFacts(facts){
var array = []
var i = 0
while (i < facts.length) {
  array.push(facts[i] + "!!!")
  i++;
}
return array
}
*/
