import React , {useRef , useEffect , useState} from 'react'
import Firebase from '../Firebase/Firebase'
import './commonStyles.css'
import { ChatEngine } from 'react-chat-engine';
import { useAuthContext } from '../Context/AuthContext'
import { useHistory } from 'react-router';
import axios from 'axios';

function Chats() {

    const history = useHistory() 
    const [loading , setLoading] = useState(true)
    const ctx = useAuthContext()
    console.log(ctx);

    const user = ctx.user

    console.log(user);

    const getFile = async (url) => {
        const resposne = await fetch(url)
        const data = await resposne.blob() 

        return new File([data] , 'userPhoto.jpg' , {type : 'image/jpeg'})
    }

    useEffect(() => {
        if(!user){
            history.push('/login')
            return ;
        }
        axios.get('https://api.chatengine.io/users/me',{
            headers : {
                "project-id" : '150bdfb1-a617-4802-8f97-fb86cacd4f9e' , 
                "user-name" : user.email , 
                "user-secret" : user.uid
            }
        })
        .then(() => {
            setLoading(false) 
        })
        .catch(() => {
            let formdata = new FormData() 
            formdata.append('email',user.email)
            formdata.append('username',user.email)
            formdata.append('secret',user.uid)
            getFile(user.photoURL).then((avatar) => {
                formdata.append('avatar',avatar,avatar.name)
                axios.post('https://api.chatengine.io/users',
                    formdata,
                    {
                        headers : {"private-key" : "67dce2ca-9e78-4313-a4fb-1ebf296be006"}
                    }
                )
                .then(() => setLoading(false))
                .catch((err) => console.log(err))
            })
        })
    },[user,history])

    if(!user || loading) return <h2>Loading...</h2>

    return (
        <div>
            <div className="chat__page">
                <ChatEngine
                    height="calc(100vh-85px)"
                    projectID='150bdfb1-a617-4802-8f97-fb86cacd4f9e'
                    userName={user.email}
                    userSecret={user.uid} 
                />
            </div>
        </div>
    )
}

export default Chats
