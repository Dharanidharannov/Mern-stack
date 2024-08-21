import React, { useContext, useEffect, useState } from 'react'
import { AppStorage } from '../context/AppStore'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const BlogPage = () => {
  let { setActive } = useContext(AppStorage)
  let [allUser, setAllUser] = useState()


  let navigate = useNavigate()

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
  let postUser = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/user', user).then((response) => {
      console.log(response);
      getUser()
      setUser({
        name: '',
        age: '',
        email: ''
      })
    }).catch((error) => {
      console.log(error);
    })
  }
  let getUser = () => {
    axios.get(`http://localhost:3000/user`).then((response) => {
      setAllUser(response.data)
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }
  useEffect(() => {
    setActive('blog')
    getUser()
  }, [])
  return (
    <div>


      <button className='' onClick={postUser} >
        Post Object
      </button>
      <br />
      {/* <button className=' ' onClick={getUser} >
        Get Data
      </button> */}

      <section className='d-flex flex-wrap gap-2 ' >
        {
          allUser && allUser.map((obj, index) => (
            <div onClick={()=>navigate(`/user/${obj.id}`)} className='border cursor-pointer  p-2 rounded border-black  mx-2  ' >
              Name : {obj.name}
              {obj.email && <p>Email : {obj.email } </p> }
            </div>
          ))
        }
      </section>

      <form action="">
        <label htmlFor="">name:</label>
        <input className='border-2 border-black ' type="text" name="name" value={user.name} onChange={Postchange} />
        <label htmlFor="">age:</label>
        <input className='border-2 border-black ' type="number" name='age' value={user.age} onChange={Postchange} />
        <label htmlFor="">email:</label>
        <input className='border-2 border-black ' type="text" name='email' value={user.email} onChange={Postchange} />
        <button onClick={postUser}>
          submit
        </button>

      </form>

      <div>
        <button style={{ border: 'solid' }}>
          +
        </button>
      </div>
    </div>


  )
}
