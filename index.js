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

katzDeliLine++

var opening = "Welcome, "
var middle = ". You are number "
var lineNo = katzDeliLine.toString()
var personName = name
var closing = " in line."



return "Welcome, " + name + ". You are number " + katzDeliLine + " in line."

//return personName
//return opening + personName + middle + lineNo + closing
//return opening + name + middle + lineNo + closing
//WHY DOESN'T THIS WORK?!?!!  return "Welcome, " + name + ". You are number " + katzDeliLine + " in line."
}
