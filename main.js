document.addEventListener('DOMContentLoaded',function(event){
// array with texts to type in typewriter
var dataText = [ "Technical Events of NAVAL 2019<br> organized by Department of BCA"];


    // wait for a while and call this function again for next character
    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback)
    }, 50);
  }
  // text finished, call callback if there is a callback function
  else if (typeof fnCallback == 'function') {
    // call callback after timeout
    setTimeout(fnCallback, 700);
  }
}
// start a typewriter animation for a text in the dataText array
 function StartTextAnimation(i) {
   if (typeof dataText[i] == 'undefined'){
      setTimeout(function() {
        StartTextAnimation(0);
      }, 20000);
   }
   // check if dataText[i] exists
  if (i < dataText[i].length) {
    // text exists! start typewriter animation
   typeWriter(dataText[i], 0, function(){
     // after callback (and whole text has been animated), start next text
     StartTextAnimation(i + 1);
   });
  }
}
// start the text animation
StartTextAnimation(0);
});