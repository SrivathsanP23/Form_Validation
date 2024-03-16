const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const successMessage = document.getElementById('success-message');





function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    
    if(usernameVal===''){
        
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal === ''){
        
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
    
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    

}
//element - password, msg- pwd is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      
  };


 // Add event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    
    if (!validateInputs()) {
        e.preventDefault();
    }
    
    const isAnyInputEmpty = Array.from(form.elements).some((element) => {
        return element.tagName === 'INPUT' && element.value.trim() === '';
    });
    
    // Log the form data
    console.log('Username:', username.value.trim());
    console.log('Email:', email.value.trim());
    console.log('Password:', password.value.trim());
    console.log('Confirm Password:', cpassword.value.trim());

    

    // Clear the input values
    username.value = '';
    email.value = '';
    password.value = '';
    cpassword.value = '';


     if (!isAnyInputEmpty) {
                successMessage.style.display = 'block';

                // Hide the success message after 2 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 2000);
            }
});



