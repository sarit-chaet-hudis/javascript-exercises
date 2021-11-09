function passwordValidate (password) {
    
    let msg = 
    (password.length > 7 && password !== password.toLowerCase() ) ? "Very Strong"
    : (password.length >= 7) ? "Strong"
    : "Weak" ;
    
    console.log(msg);

}

passwordValidate('222222');
