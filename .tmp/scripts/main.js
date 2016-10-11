"use strict";

console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(function () {
  var transition = {
    $Duration: 1200, x: 0.2, y: -0.1,
    $Delay: 80, $Cols: 8, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7],
      $Top: [0.3, 0.7] },
    $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseInWave, $Clip: $JssorEasing$.$EaseOutQuad },
    $Outside: true, $Round: { $Left: 1.3, $Top: 2.5 }
  };
  var transitions = [transition];

  var jssor_slider1 = new $JssorSlider$("slider1_container", {
    $AutoPlay: true, //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
    $Idle: 400, //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
    $DragOrientation: 3, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)
    $PauseOnHover: 1, //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

    $SlideshowOptions: { //[Optional] Options to specify and enable slideshow or not
      $Class: $JssorSlideshowRunner$, //[Required] Class to create instance of slideshow
      $Transitions: transitions, //[Required] An array of slideshow transitions to play slideshow
      $TransitionsOrder: 1, //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
      $ShowLink: true //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
    },
    $ArrowNavigatorOptions: { //[Optional] Options to specify and enable arrow navigator or not
      $Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
      $ChanceToShow: 1, //[Required] 0 Never, 1 Mouse Over, 2 Always
      $AutoCenter: 2, //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
      $Steps: 1 //[Optional] Steps to go for each navigation request, default value is 1
    },
    $BulletNavigatorOptions: { //[Optional] Options to specify and enable navigator or not
      $Class: $JssorBulletNavigator$, //[Required] Class to create navigator instance
      $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
      $AutoCenter: 1, //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
      $Steps: 1, //[Optional] Steps to go for each navigation request, default value is 1
      $Rows: 1, //[Optional] Specify lanes to arrange items, default value is 1
      $SpacingX: 8, //[Optional] Horizontal space between each item in pixel, default value is 0
      $SpacingY: 8, //[Optional] Vertical space between each item in pixel, default value is 0
      $Orientation: 1, //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
      $Scale: false //Scales bullets navigator or not while slider scale
    },
    $CaptionSliderOptions: {
      $Class: $JssorCaptionSlideo$,
      $Transitions: transitions,
      $Breaks: [[{ d: 2000, b: 1000 }]]
    }

  });

  //responsive code begin
  //you can remove responsive code if you don't want the slider scales while window resizing
  function ScaleSlider() {
    var bodyWidth = document.body.clientWidth;
    if (bodyWidth) jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));else window.setTimeout(ScaleSlider, 30);
  }
  ScaleSlider();

  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  //responsive code end
});
//# sourceMappingURL=main.js.map
