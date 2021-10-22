import React from 'react';
import { useGoogleLogin } from 'react-google-login';

// refresh token
import {refreshTokenSetup} from './utils/refreshToken';

const clientId =
  '930716669637-27uerudri95vjbfrjqbe5s8dngf1pdf2.apps.googleusercontent.com';

function LoginHooks() {
  const onSuccess = (res : any) => {
    console.log('Login Success: currentUser:', res.profileObj);
   
    refreshTokenSetup(res);
  };

  const onFailure = (res : any) => {
    console.log('Login failed: res:', res);
    
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default LoginHooks;