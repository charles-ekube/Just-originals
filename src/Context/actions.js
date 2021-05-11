
const ROOT_URL = 'https://just-original.herokuapp.com/api/v1/users';


export async function registerUser(dispatch, signupPayload) {

	const requestOptions = {
		method : 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(signupPayload),
	};

	try {
		dispatch({type: 'REQUEST_SIGNUP'});
		const response = await fetch(`${ROOT_URL}`, requestOptions);
		const data =  await response.json();
		
		if(data) {
			dispatch({type: 'SIGNUP_SUCCESS', payload: data});
			localStorage.setItem('currentUser', JSON.stringify(data));
			return  data;
		}
		dispatch({ type: 'SIGNUP_ERROR', error: data.errors[0] });
		console.log(data.errors[0]);
		return;

	} catch (error) {
		dispatch({ type: 'SIGNUP_ERROR', error: error });
		console.log(error);
	}
}

export async function loginUser(dispatch, loginPayload) {
	
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(loginPayload),
	};

	try {
		dispatch({ type: 'REQUEST_LOGIN' });
		const response = await fetch(`${ROOT_URL}/login`, requestOptions);
		const data = await response.json();
		// console.log(data);

		if (data.token) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: data });
			 
			localStorage.setItem('currentUser', JSON.stringify(data));
			
			
			return data;
		}

		dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
		console.log(data.errors[0]);
		return;
	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error });
		console.log(error);
	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('currentUser');
	localStorage.removeItem('token');
}