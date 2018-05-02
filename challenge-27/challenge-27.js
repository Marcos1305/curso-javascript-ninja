( function(){
  'use strict'
/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

function DOM(elements){
  this.element = document.querySelectorAll(elements);
 }

 DOM.prototype.on = function on(eventType, callback) {
   Array.prototype.forEach.call(this.element, function(element) {
     element.addEventListener(eventType, callback, false);
   })
 };

 DOM.prototype.off = function off(eventType, callback) {
   Array.prototype.forEach.call(this.element, function(element) {
     element.removeEventListener(eventType, callback, false);
   })
 };

 DOM.prototype.get = function get() {
   return this.element;
 };


DOM.prototype.isArray = function isArray(dom){
  return Object.prototype.toString.call(dom) === '[object Array]';
};

DOM.prototype.isObject = function isObject(dom){
  return Object.prototype.toString.call(dom) === '[object Object]'
};

DOM.prototype.isFunction = function isFunction(dom) {
  return Object.prototype.toString.call(dom) === '[object Functon]'
};

DOM.prototype.isString = function isString(dom) {
  return Object.prototype.toString.call(dom) === '[object String]'
};

DOM.prototype.isBoolean = function isBoolean(dom) {
  return Object.prototype.toString.call(dom) === '[object Boolean]'
};

DOM.prototype.isNull= function isNull(dom) {
  return Object.prototype.toString.call(dom) === '[object Null]'|| Object.prototype.toString.call(dom) === '[object Undefined]'
};
var dom = new DOM();
console.log(dom.isArray([1,2,3]))



// forEach, map, filter, reduce, reduceRight, every e some

DOM.prototype.forEach = function forEach() {
  return Array.prototype.forEach.apply( this.element, arguments)
}

DOM.prototype.map = function map() {
  return Array.prototype.map.apply( this.element, arguments)
}

DOM.prototype.filter = function filter() {
  return Array.prototype.filter.apply( this.element, arguments)
}

DOM.prototype.reduce = function reduce() {
  return Array.prototype.reduce.apply( this.element, arguments)
}

DOM.prototype.reduceRight = function reduceRight() {
  return Array.prototype.reduceRight.apply( this.element, arguments)
}

DOM.prototype.every = function every() {
  return Array.prototype.every.apply( this.element, arguments)
}

DOM.prototype.some = function some() {
  return Array.prototype.some.apply( this.element, arguments)
}

})();
