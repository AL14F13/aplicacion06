// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
 $('btnvibrar').on('tap',function(){
	 navigators.vibrate(1000);
 });//tap de vibrar
  $('btnbeep').on('tap',function(){
	 navigator.beep(1);
 });//tap de beep 
 $('#izquierda').on('swipeleft',function(){
	 alert("barrido a la izquierda");
 });//izquierda
  $('#derecha').on('swiperight',function(){
	 alert("barrido a la derecha");
 });//derecha
 
  
  
}); 
});

