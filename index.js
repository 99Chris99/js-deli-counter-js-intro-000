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
