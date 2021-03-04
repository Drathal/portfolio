Modernizr.addTest('isie', function() {
  //return !+"\v1";
  return !!top.execScript
});

Modernizr.addTest('webkit', function() {
  return new RegExp(" AppleWebKit/").test(navigator.userAgent);
});

Modernizr.addTest('mobile', function() {
  return new RegExp(" Mobile/").test(navigator.userAgent);
});

Modernizr.addTest("mobileDim", function() {
  if (Modernizr.mq('only screen and (max-width: 320px) and (orientation: portrait)')) {
    return true;
  } else  {
    return Modernizr.mq('only screen and (max-width: 480px) and (orientation: landscape)');
  }
});

Modernizr.addTest("tabletDim", function() {
  if (Modernizr.mq('only screen and (min-width: 600px) and (orientation:portrait)')) {
    return true;
  } else {
    return Modernizr.mq('only screen and (max-width: 1024px) and (orientation:landscape)');
  }
});

Modernizr.addTest("desktopDim", Modernizr.mq('only screen and (min-width: 802px)'));

Modernizr.load([
  {
    test : Modernizr.isie,
    yep : 'js/libs/jquery-1.7.1.min.js',
    nope : 'js/libs/zepto.min.js',
    callback : function() {
      // make zepto the new jquery ^^
      if ( !window.jQuery ) {
        window.jQuery = window.Zepto;
      }
    }
  },
  {
    load : 'js/presenter.js',
    callback : function() {
      // start presentation
      $('.presentation').presenter();
    }
  }
]);
