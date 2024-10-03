import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';


export const LogoutButton = () => {

const { logout } = useAuth0();

    return(
    <a className='btn btn-outline-light' onClick={() => logout({ 
    logoutParams: { returnTo: window.location.origin}  })} type='button'>Çıkış Yap</a>

    );



}