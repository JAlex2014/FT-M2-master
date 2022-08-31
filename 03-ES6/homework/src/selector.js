var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  //startEl => <body></body>

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }
  for(let i=0; i<startEl.children.length; i++){
    let elements = traverseDomAndCollectElements(matchFunc,startEl.children[i]);
    resultSet = [...resultSet,...elements];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag
var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]==='#'){return 'id'}
  else if (selector[0]==='.'){return 'class'}
  else if(!selector.includes('.')){return 'tag'}
  else {return 'tag.class'}
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { //el.id -> pagetittle
    matchFunction = function(el){
      return '#' + el.id === selector;
    }
  } else if (selectorType === "class") {//<div class='clase1 clase2 clase3'></div>
    matchFunction = function(el){
      let clases = el.classList; // [clase1, clase2, clase3]
      for(let i=0; i < clases.length; i++ ){
        if(`.${clases[i]}` === selector) return true;
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(el){
    // el => <p class='small'></p>
    //selector => 'p.small'
      var [tagToFind, classToFind] = selector.split('.');// ['p', 'small']
      return matchFunctionMaker(tagToFind)(el) && matchFunctionMaker(`.${classToFind}`)(el);
    }
  } else if (selectorType === "tag") {
    matchFunction = function(el){
    // el => <div class = 'primero'>hola</div>
    // el.tagName = 'DIV'
    // el.tagName.toLowerCase() = 'div'
      return el.tagName.toLowerCase() === selector.toLowerCase();
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
