/*var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

// Uses device detection to add a class to <html> but only if an Android or Apple mobile.
// Purposefully ES5
// Based on: https://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system

var detect_OS_set_HTML_class = (function() {

  "use strict";

  var html = document.documentElement;
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"

  if (/windows phone/i.test(userAgent)) {
    // html.className += " os_Windows";
    return "Windows";
  }

  if (/android/i.test(userAgent)) {
    html.className += " os_Android";
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    html.className += " os_iOS";
    return "iOS";
  }

  return "Unknown";

})();




/* //Faking-up the OS buttons
   Buttons add .os_iOS or .os_Android to <html> */

/*const fake_OS_detection_set_HTML_class_from_button = (function() {

  "use strict";

  const class_iOS = "os_iOS";
  const class_Android = "os_Android";
  const html = document.documentElement;
  const buttons = document.querySelectorAll("[class*=fake_btn]");

  if (!buttons) return false;

  const resetHTMLClass = () => {
    html.classList.remove(class_iOS, class_Android);
  };

  const setHTMLClass = (btn, clss, is_os) => {
    if (btn.className.match(clss)) {
      if (!is_os) {
        html.classList.add(clss);
      }
    }
  };

  const fakeBtnClick = (event) => {
    const btn = event.target;
    const is_iOS = html.classList.contains(class_iOS);
    const is_Android = html.classList.contains(class_Android);
    resetHTMLClass();
    setHTMLClass(btn, class_iOS, is_iOS);
    setHTMLClass(btn, class_Android, is_Android);
  };

  for (let btn of buttons) {
    btn.addEventListener("click", fakeBtnClick);
  }
})();
