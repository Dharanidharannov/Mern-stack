import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppStorage } from '../context/AppStore'
import axios from 'axios'

const ContactPage = () => {
  // let { sad, id } = useParams()
  // console.log(sad);
  // console.log(id);
  // let str = 'The hero of kalki is prabhasO '
  // console.log(str.replace(/\s/gi, 9));
  // let [name, setName] = useState()
  // let [errorMessage, setErrorMessage] = useState('')
  // let submitForm = (e) => {
  //   e.preventDefault()
  //   let nameRegrex = /^[A-Za-z0-9]{1,}[@]{1,1}[a-z]{0,}$/
  //   if(nameRegrex.test(name)){
  //     setErrorMessage('form Submited')
  //   }
  //   else{
  //     setErrorMessage('*Enter a valid name')
  //   }
  // }

  let formData = {
    name: 'jerold',
    age
      : 23
  }


  // let getData = () => {
  //   fetch(`https://backendapi.skilllearningacademy.com/blog/BlogViewSet`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: formData
  //   }).then((response)=>{
  //     console.log(response);
  //   }).catch((error)=>{
  //     console.log(error);
  //   })
  // }
  // getData()

  let sendData = () => {
    axios.post(`https://backendapi.skilllearningacademy.com/blog/BlogViewSet`, formData).then((response) => {
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }


  let asyncClass = async () => {
    await console.log("Hellow1")
    console.log("hellow2");

  }
  asyncClass()


  let { setActive } = useContext(AppStorage)

  useEffect(() => {
    setActive('contact')
  }, [])

  return (
    <div>ContactPage

      {/* <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>{errorMessage} </p>
        <button onClick={submitForm} className=''>
          Submit
        </button>
      </div> */}
    </div>
  )
}

export default ContactPage;