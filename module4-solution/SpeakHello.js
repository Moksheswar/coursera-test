var helloSpeaker ={};
helloSpeaker.speakWord = "Hello";
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
helloSpeaker.speak = function(name) {
  console.log(helloSpeaker.speakWord + " " + name);
}