// import axios from 'axios';
// import React from 'react'
// import { useState } from 'react';
// import {useGoogleLogin} from 'react-google-login';
// import {GoogleLogin, GoogleLogout} from 'react-google-login';

// const clientId = '930716669637-27uerudri95vjbfrjqbe5s8dngf1pdf2.apps.googleusercontent.com'

// const GoogleLogin : React.FC = () => {

//     const onSuccess = (res:any) => {
//         console.log("Login success: currentUser: ", res.profileObj);
//         refreshTokenSetup(res);
//     }

//     const onFailure = (res:any) => {
//         console.log("Login failed: res:", res)
//     }

//     const {signIn } = useGoogleLogin({
//         onSuccess,
//         onFailure,
//         clientId,
//         isSignedIn: true,
//         accessType: 'offline'
//     });

//     return (
//         <div>
//             <button onClick={signIn} className="button" >
//                 <img src="static/images/google.svg" alt="google login" className="icon"></img>
//                 <span className="buttonText">Sign in with Google</span>
//             </button>
//         </div>
//     )
// }

// const LoginG : React.FC = () => {

//     const [data, setData] = useState({
//         isAuthenticated : false,
//         token : '',
//         user : null
//     })
//     const {isAuthenticated, user} = data;


//     const logout = () => {
//         setData({
//             ...data, token: "", user: null, isAuthenticated: false
//         })
//     };

//     const onFailure = (error :any) => {
//         alert("GRESKAAAAA");
//     };

//     const responseGoogle = (response : any) => {

//         let tokenBlob = new Blob([
//             JSON.stringify({
//                 access_token: response.accessToken  
//             }, null, 2)
//         ]);

//         let config = {
//             headers: {
//             'Content-Type': 'application/json'
//             }
//         };

  
//         axios.post('http://127.0.0.1:8000/auth/login/google-oauth2/', tokenBlob, config)
//         .then(response => {
//             const token = response.headers;
//             if (token){
//                 setData({
//                     ...data, token: token, isAuthenticated: true
//                 });
//             }
//         });
//     };

//     let content = !! isAuthenticated ?
//         (
//             <div>
//                 <p>Authenticated</p>
//                 {/* <div>
//                     {user && user.email}
//                 </div> */}
//                 {/* <div>
//                     <GoogleLogout clientId={config.GOOGLE_CLIENT_ID}
//                                   buttonText="Logout"
//                                   onLogoutSuccess={logout}
//                     />
//                 </div> */}
//             </div>
//         ) :
//         (
//             <div>
//                 <GoogleLogin
//                     clientId= "930716669637-27uerudri95vjbfrjqbe5s8dngf1pdf2.apps.googleusercontent.com"
//                     buttonText="Login"
//                     onSuccess={responseGoogle}
//                     onFailure={onFailure}
//                     isSignedIn
//                 />

//             </div>
//         );

//         return (
//             <div className="App">
//                 {content}
//             </div>
//     );
// }

// export default LoginG;

// function refreshTokenSetup(res: any) {
//     throw new Error('Function not implemented.AAAA');
// }


import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import googleLogin from './services';

const LoginG : React.FC = () =>  {

    const responseGoogle = async(response : any) => {

    //   let googleResponse  = await googleLogin(response.accessToken)
    //   console.log('A: ',googleResponse);
      console.log('B:', response);
    }

    return (
      <div>
        
        <br />
        <br />
        
        <GoogleLogin
          clientId="309621297280-n7mueisnf51vaq1f657rg5t6ksan8j43.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={ responseGoogle }
          onFailure={ responseGoogle }
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          accessType="online"
        />

      </div>
    );
  
}

export default LoginG;