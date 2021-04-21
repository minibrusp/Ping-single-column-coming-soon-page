(()=> {
   console.log('Hello World');
   let promotionalEmail = document.querySelector('.promotional__form .email');
   let errorMsg = document.querySelector('.promotional__form span');
   let promotionalForm = document.querySelector('.promotional__form');
   AddEventListeners();



   function AddEventListeners() {
      

      promotionalForm.addEventListener('submit', checkEmail);
      promotionalEmail.addEventListener('focus', resetField);
   }

   function resetField(event) {
      promotionalEmail.classList.remove('input--error');
      errorMsg.classList.remove('span--error');
   }

   function checkEmail(event) {
      
      event.preventDefault();

      if(promotionalEmail.value === ''| undefined) {
         showErrorStyles(errorMsg, promotionalEmail);
         
         return errorMsg.innerHTML = 'Email cannot be empty';
      }

      if(emailRegexValidation(promotionalEmail.value) === false) {
         showErrorStyles(errorMsg, promotionalEmail);

         return errorMsg.innerHTML = "Please provide a valid email address";
      }

      resetField();
      return subscriptionSucceess(promotionalForm);

   }

   function showErrorStyles(errorMsg, promotionalEmail) {
      promotionalEmail.classList.add('input--error');
      errorMsg.classList.add('span--error');
   }

   function emailRegexValidation(email) {
      let pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/;
      let result = pattern.test(email);
      return result;
   }

   function subscriptionSucceess(promotionalForm) {
      subsSuccessMsgStyles(promotionalForm);
      promotionalForm.innerHTML = "<p>Thanks for subscribing to </br> <img class=\"img--success\" \ src=\ src/images/logo.svg\ </br> </br>to complete subscription please confirm your email address.<p>";
   }

   function subsSuccessMsgStyles(promotionalForm) {
      let colorString = 'var(--Primary-Blue)';
      promotionalForm.style.transition = `height .5s, padding .5s`;
      promotionalForm.style.display = "block";
      promotionalForm.style.padding = "20px"
      promotionalForm.style.textAlign = "center";
      promotionalForm.style.backgroundColor = "white";
      promotionalForm.style.color = `${colorString}`;
      promotionalForm.style.border = `solid 1px ${colorString}`;
      promotionalForm.style.height = "unset";
   }

})();

