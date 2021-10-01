import React, { createContext, useState, useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";

import Firebase from "../Firebase/Firebase";


const AuthContext = createContext()


export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = (props) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
   
    let history = useHistory();


    useEffect(() => {

        Firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                var uid = user.uid;
                setUser(user)
                setLoading(false)
                history.push('/chats')
            } else {
                history.push('/login')
                console.log('no user');
            }
        });

    }, [user, history])

    const handleLogout = () => {
        Firebase.auth().signOut().then(() => {
            setUser(null)
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <AuthContext.Provider value={{
            user: user , 
            handleLogout : handleLogout 
        }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
