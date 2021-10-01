import React from 'react'

import {FaFacebookF} from 'react-icons/fa' 
import {FaGoogle} from 'react-icons/fa' 
import {GoogleAuthProvider} from '../Firebase/Firebase'
import {FacebookAuthProvider} from '../Firebase/Firebase'
import Firebase from '../Firebase/Firebase'

import './commonStyles.css'

function Login() {


    const googleAuth = () => {
        Firebase.auth()
        .signInWithPopup(GoogleAuthProvider)
        .then((result) => {
            var user = result.user;
            console.log(user);
        }).catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }


    const facebookAuth = () => {
        Firebase
        .auth()
        .signInWithPopup(FacebookAuthProvider)
        .then((result) => {
            var user = result.user;
            console.log(user);
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }


    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12">
                    <div className="sign__in text-center mt-5">
                       <button 
                       onClick={googleAuth}
                       className='google__icon icon'>
                        <span>
                            <FaGoogle/>
                        </span>
                            sign in with google
                        </button>
                        <button
                        onClick={facebookAuth}
                        className='face__icon icon'>
                        <span >
                            <FaFacebookF/>
                        </span>
                            sign in with facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
