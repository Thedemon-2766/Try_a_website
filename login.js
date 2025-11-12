function LoginVoter(){
	const cryptoAccountR = document.getElementById('cryptoAccountR').value ;
	const Pass           = document.getElementById('cryptoPasswordR').value ;
	var Account          = localStorage.getItem(cryptoAccountR) ;
	if (Account !==''){Account = JSON.parse(Account)}
	if (cryptoAccountR === ''){alert('Please enter Your Wallet')} //if user have not entered a account
	else {
		if (Pass === ''){alert('Please enter your password')} //if user have not entered a password
		else {
			if (localStorage.getItem('loginA') === ''){
				if (Account === null){
					localStorage.setItem('loginA',cryptoAccountR) ;
					localStorage.setItem(cryptoAccountR,JSON.stringify({'vote':'','password':Pass}))
					alert("registeration successful") ; //first time login
					setTimeout(redirect,3000)
				}else {
					if (Account['password'] === Pass){
						localStorage.setItem('loginA',cryptoAccountR) ;
						alert("login successful") ; //login
						setTimeout(redirect,3000)
					} else {alert('wrong password')}
				}
 			} else {
				alert("There is already an account logged-in to this device") ; //another login
				setTimeout(redirect,3000)
			}
		}
	}
}
function redirect(){
	window.location = 'index.html'
}