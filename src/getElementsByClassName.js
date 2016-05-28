// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var result = [];
  function getClass(element){
    var children = element.childNodes
    for (var i = 0; i < children.length; i++){
        var classes = children[i].classList;
        if(classes && classes.contains(className)) {
            result.push(children[i]);
        }
        if(children[i].childNodes[0]) {
            getClass(children[i]);
        }
    }
  }
  getClass(document);
  return result;
};
