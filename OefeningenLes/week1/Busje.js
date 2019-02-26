"use strict";

function normalButton() {
  document.getElementById("Busje").style.filter = "grayscale(0%)", "sepia(0%)", "blur(0px)"
}

function grayscaleButton() {
  document.getElementById("Busje").style.filter = "grayscale(100%)";
}

function grayscaleButton() {
  document.getElementById("Busje").style.filter = "grayscale(100%)";
}

function sepiaButton() {
  document.getElementById("Busje").style.filter = "sepia(100%)"
}

function hueButton() {
  document.getElementById("Busje").style.filter = "hue-rotate(90deg)"
}

function blurButton() {
  document.getElementById("Busje").style.filter = "blur(5px)"
}

$('#opacity-slider').on("change mousemove", function() {
  $('#slider-value').html($(this).val());
  $('.busje').style({
    'opacity': $(this).val()
  });
});