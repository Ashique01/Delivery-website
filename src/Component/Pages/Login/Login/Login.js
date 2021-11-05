import React from 'react';
import useAuth from '../../../../Hooks/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (

        <div className="col-md-12"> <button onClick={signInUsingGoogle} className="btn btn-lg btn-google btn-block text-uppercase btn-outline mt-5"><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="" /> Signin Using Google</button> </div>

    );
};

export default Login;