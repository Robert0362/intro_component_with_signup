const btnClaim = document.getElementById('claim');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const passWord = document.getElementById('pWord');


function ValidateEmail(inputText)
{
	let mailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(inputText.match(mailFormat))
	{
        return true;
	}else {
        document.getElementById('emailError').innerHTML = 'Looks like this is not an email';
        email.value = '';
        return false;
      }
}


btnClaim.addEventListener('click', function(){
    let passValue= email.value;
    ValidateEmail(passValue);

    if(fName.value == ''){
        document.getElementById('fNameError').innerHTML = 'First Name cannot be empty';
    }
    if(lName.value == ''){
        document.getElementById('lNameError').innerHTML = 'Last Name cannot be empty';
    }
    if(email.value == ''){
        document.getElementById('emailError').innerHTML = 'You are missing your email address';
    }
    if(passWord.value == ''){
        document.getElementById('pWordError').innerHTML = 'You are missing your password';
    }

    if(fName.value !='' && lName.value != '' && email.value != '' && passWord.value != ''){
        fName.value = '';
        lName.value = '';
        email.value = '';
        passWord.value = ''
        document.getElementById('pWordError').innerHTML = '';
        document.getElementById('lNameError').innerHTML = '';
        document.getElementById('fNameError').innerHTML = '';
        };
});