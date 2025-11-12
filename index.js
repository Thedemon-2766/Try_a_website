const result         = document.getElementById('results') ;

function submitVote(Vote){
	const vot  = Vote ;
	const res  = localStorage.getItem('loginA') ;
	const id   = JSON.parse(localStorage.getItem(res)) ;
	if (res == ''){alert("Wallet Not Found, Please Login")} //no current login
	else{
		localStorage.setItem('loginA','') ;
		if (id['vote'] === ''){
			const account = localStorage.getItem('loginA') ;
			localStorage.setItem(account,JSON.stringify({'vote':vot,'password':id['password']}))
			alert("voting successful") // voted
		} else {
			alert("Already Voted") ; // already voted
		}
	}
}