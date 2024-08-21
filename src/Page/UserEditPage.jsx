import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserEditPage = () => {
    let { id } = useParams()
    let [user, setUser] = useState({
        name: '',
        age: '',
        email: ''
    })
    const Postchange = (e) => {
        let { name, value } = e.target
        setUser((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))

    }
    let getUser = () => {
        axios.get(`http://localhost:3000/user/${id}`).then((response) => {
            console.log(response.data);
            setUser(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }
    let updateUser = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:3000/user/${id}`, user).then((response) => {
            console.log(response);
            getUser()
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        if (id)
            getUser()
    }, [id])
    return (
        <div>UserEditPage
            <form action="">
                <label htmlFor="">name:</label>
                <input className='border-2 border-black ' type="text" name="name" value={user.name} onChange={Postchange} />
                <label htmlFor="">age:</label>
                <input className='border-2 border-black ' type="number" name='age' value={user.age} onChange={Postchange} />
                <label htmlFor="">email:</label>
                <input className='border-2 border-black ' type="text" name='email' value={user.email} onChange={Postchange} />
                <button onClick={updateUser}>
                    submit
                </button>

            </form>

        </div>
    )
}

export default UserEditPage