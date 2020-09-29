import Promice from 'es6-promise';

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";



function setLoginSuccess(isLoginSuccess){
return {

type:LOGIN_SUCCESS,
isLoginSuccess
};
}
function setLoginError(loginError){
return {

type:LOGIN_ERROR,
loginError
};
}

export function login(email,password){

console.log(email);
console.log(password);

return dispatch => {
dispatch(setLoginSuccess(false));
dispatch(setLoginError(null));

sendRequestForLogin(email,password)
.then(success =>{

dispatch(setLoginSuccess(true));

})
.catch(err => {

dispatch(setLoginError(err));

});


};

}

export default function reducer(state = {

isLoginSuccess:false,
loginError:null

},action ){
switch(action.type){
case LOGIN_SUCCESS:
return{
...state,
isLoginSuccess:action.isLoginSuccess
};

case LOGIN_ERROR:
return{
...state,
loginError:action.loginError
}
default:
return state;
}
}

function sendRequestForLogin(email,password){
return new Promice((resolve,reject) => {
setTimeout(()=>{
if(email === 'admin@admin.com' && password === 'admin'){

return resolve(true);
}else{

return reject(new Error('Entered Email and password is incorrect'));
}

},1000);

})
}