module.exports = function solveEquation(equation) {
  var replaceznak = equation.replace(/- /g,"+-");
  var resultarray = replaceznak.split('+');
  var axsquare = 0;
  var bx = 0;
  var c = 0;
  var discriminant = 0;

  for(let i = 0; i<resultarray.length; i++) {
    discriminant = parseInt(resultarray[i])
    var foundA = resultarray[i].indexOf('x^2');
    if(foundA != -1) {
      axsquare = parseInt(resultarray[i]);
      resultarray.splice(i,1);
    } 
    var foundB = resultarray[i].indexOf('x');
    if(foundB != -1) {
      bx = parseInt(resultarray[i]);
    } else { c = parseInt(resultarray[i])};
  }
  discriminant = findDiscriminant(axsquare,bx,c);
  return greaterZerodiscr(axsquare,bx,discriminant);
}

function findDiscriminant(a,b,c) {
    return Math.pow(b,2) - 4*a*c;
}

function greaterZerodiscr(a,b,d) {
  var array = [];
  d = Math.abs(d)
  var x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
  var x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));
  array.push(x1);
  array.push(x2);
  array.sort((a, b) => {
    return a - b;
  })
  return array;
}