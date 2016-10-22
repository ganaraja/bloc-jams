 var animatePoints = function() {
 
     var points = document.getElementsByClassName('point');
 
     var revealPoint = function(index) {
         for(int i=0; i < index; i++){
             points[i].style.opacity = 1;
             points[i].style.transform = "scaleX(1) translateY(0)";
             points[i].style.msTransform = "scaleX(1) translateY(0)";
             points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
         }
     };
 
     reveatPoint(3);
 };