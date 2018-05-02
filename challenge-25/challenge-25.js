(function(window, document){
 'use strict'
  /*
 Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/
var $click = document.querySelector('[data-js="Click"]');
var $MouseMove = document.querySelector('[data-js="MouseMove"]');
var $MouseOver = document.querySelector('[data-js="MouseOver"]');
var $MouseOut = document.querySelector('[data-js="MouseOut"]');
var $dblclick = document.querySelector('[data-js="dblclick"]');
var $keydowns = document.querySelector('[data-js="keydown"]');
var $keyup = document.querySelector('[data-js="keyup"]');
var $scroll = document.querySelector('[data-js="scroll"]');


$click.addEventListener('click', click, false);
$MouseMove.addEventListener('mousemove', mouseMove, false);
$MouseOver.addEventListener('mouseover', mouseOver, false);
$MouseOut.addEventListener('mouseout', mouseOut, false);
document.addEventListener("keydown", keyDown, false);
document.addEventListener('keyup', keyup, false);
document.addEventListener('scroll', scroll, false);
$dblclick.addEventListener('dblclick', dualclick, false)


function click(){
  $click.innerHTML = "Clicou ;D"
}

function mouseMove(){
  $MouseMove.innerHTML = "Moveu o mouse ;D"
}
function mouseOver(){
  $MouseOver.innerHTML = "Pasou o Mouse ;D"
}
function mouseOut(){
  $MouseOut.innerHTML = "Tirou o Mouse ;D"
}
function keyDown(){
  $keydowns.innerHTML = "Teclada pressionada";
}
function keyup(){
  $keyup.innerHTML = "Tecla solta"
}
function scroll(){
  $scroll.innerHTML = "Scrollou a tela ;D"
}
function dualclick(){
  $dblclick.innerHTML = "DoubleClick ;D"
}
})(window, document);
