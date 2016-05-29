// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return ('' + obj + '');
  }
  else if(typeof obj === 'string') {
    return ('"' + obj + '"');
  }
  else if(Array.isArray(obj)) {
    var objArrVals = [];
    obj.forEach(function(element) {
      objArrVals.push(stringifyJSON(element));
    });
    return '[' + objArrVals + ']';
  }
  else if(typeof obj === "object") {
    var objKeys = [];
    for (var key in obj) {
      objKeys.push(key);
    }
    var objKeyVals = [];
    objKeys.forEach(function(key) {
      var keyString = '"' + key + '":';
      var val = obj[key];
      if(typeof val === "function" || typeof val === undefined) {
        objKeyVals.push('');
      }
      else if(typeof val === "string") {
        objKeyVals.push(keyString + '"' + val + '"');
      }
      else if(typeof val === "boolean" || typeof val === "number" || val === null) {
        objKeyVals.push(keyString + val);
      }
      else if(typeof val === "object") {
        objKeyVals.push(keyString + stringifyJSON(val));
      }
      });
      return '{' + objKeyVals + '}';
  }
};
