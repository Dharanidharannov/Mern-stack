import React, { useState } from 'react'
import InputFieldCom from '../Components/Homecomponent/InputFieldCom'

const FormPage = () => {
    let [formObj, setFormObj] = useState({
        name: '',
        age: '',
        address: ''
    })
    let handleChange = (e) => {
        let { name, value } = e.target
        setFormObj((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div>FormPage


            {/* <div>
                <label htmlFor="">Name </label>
                <input type="text" value={formObj.name} className='p-2 rounded outline-none  ' name='name'
                    onChange={handleChange} placeholder='Enter the name' />
            </div> */}

           <div style={{display:'flex',borderRadius:'10px 10px 10px 10px',border:'1px solid blue',padding:'20px',width:'25%',margin:'10px'}}>
           <InputFieldCom name='name' label='Name : ' value={formObj.name} type='text' handleChange={handleChange}
               
               placeholder="Enter the name" />
           </div>
            <InputFieldCom name='age' label='Age : ' value={formObj.age} type='number' limit={60} handleChange={handleChange}
                placeholder="Enter the age" />
            <InputFieldCom name='address' label='Address : ' value={formObj.address} type='textarea'  handleChange={handleChange}
                placeholder="Enter the current address" />
        </div>
    )
}

export default FormPage
