//validate form
var formCheck;
$("document").ready(function() {
  formCheck = $(".needs-validation");
  formCheck.on("submit", validate);
});

function validate(evt){
  var password = $("#inputPassword");
  var passwordConfirmed = $("#inputPasswordConfirm");
  formCheck.each(function(){
    if (this.checkValidity() === false) {
          evt.preventDefault();
          evt.stopPropagation();
    }
    $(this).addClass('was-validated');
  })
  if(password.val() != passwordConfirmed.val()){
    evt.preventDefault();
    evt.stopPropagation();
    passwordConfirmed.removeClass('is-valid');
    passwordConfirmed.addClass('is-invalid');
  }
}
