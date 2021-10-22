import React from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { createUser } from './services'
import SignInSide from './signIn'
import {useHistory} from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [token, setToken] = useCookies<string>(['tokens'])

    // const [token, setToken, removeToken] = useCookies(['tokens'])
    let history = useHistory()

    // useEffect(() => {
    //         if(!token['tokens']) {
    //             history.push('/main')
    //         }
    // }, [token])


    const postUser = async () => {
        await createUser(username, password).then(resp => setToken('tokens',resp.token))
        history.push('/main')

        console.log(token)
    }

    return (
        <div>
            <SignInSide username={username} setUsername={setUsername} password={password} setPassword={setPassword} postUser={postUser}/>
        </div>
    )
}
