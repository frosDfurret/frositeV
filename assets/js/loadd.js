//tried making this on my own but failed so i'm stealing it from https://stackoverflow.com/a/11071687
var imgs = document.images,
    len = imgs.length,
    counter = 0;

[].forEach.call( imgs, function( img ) {
    if(img.complete)
      incrementCounter();
    else
      img.addEventListener( 'load', incrementCounter, false );
} );

function incrementCounter() {
    counter++;
    if ( counter === len ) {
        document.getElementsByClassName("flexcontainer")[0].style.opacity = "100%"
    }
}
/*
window.onload = document.getElementsByClassName("flexcontainer")[0].style.opacity = "100%"
*/
/*
loaded = 0

window.onload = function(){for (let i = 0; i < document.getElementsByTagName("img").length; i++) {
  console.log(i)
  document.getElementsByTagName("img")[i].addEventListener("load", function() {
  loaded += 1
    console.log("a")
});
}
                          }
  document.getElementsByTagName("img")[0].addEventListener("load", function() {
  loaded += 1
    console.log("a");
  })


if (loaded + 1 >= document.getElementsByTagName("img").length) {
  document.getElementsByClassName("flexcontainer")[0].style.opacity = "100%"
}
*/