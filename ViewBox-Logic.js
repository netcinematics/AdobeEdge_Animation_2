
  $(document).ready(function () {
      $('body').keypress(function(e) {
	     //Catch-Keystrokes-.
		 var value = String.fromCharCode(e.keyCode);
		 alert(value);
      });
  });