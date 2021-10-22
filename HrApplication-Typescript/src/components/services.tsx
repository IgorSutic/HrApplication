import axios from "axios";


export const createUser = async (
    username:string,
    password:string
) => {
    
    // const endpoint = `http://localhost:8000/api/login/`
    // const axios = require('axios');
    
    // await axios.post(endpoint, {
    //     username:username,
    //     password:password
    // })
    // .then(function (response: any) {
    //     console.log(response)
    // })
    // .catch(function (error: any) {
    //     console.log(error);
    // });

    return await fetch(`http://127.0.0.1:8000/api/login/`,{
            'method':'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                // 'Authorization': 'Token b2bd9b7cdb430e6e2df3e5c916d503047ef61691'
            },
            body:JSON.stringify({username,password})
        }).then(resp => resp.json())
}



const googleLogin = async (accesstoken: any) => {
    
    let res = await axios.post(
      "http://localhost:8000/rest-auth/google/",
      {
        access_token: accesstoken,
      }
    );
    console.log('B:',res);
    return  res.status;
  };

export default googleLogin;