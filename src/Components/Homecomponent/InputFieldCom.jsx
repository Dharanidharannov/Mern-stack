import React from 'react'

const InputFieldCom = ({ label, value, name, type, limit, handleChange, placeholder }) => {
    return (
        <div className=' d-flex align-items-start '>
            <label htmlFor="">{label} </label>
            {type == 'textarea' ?

                <textarea type={type} name={name} placeholder={placeholder} className='p-2 rounded outline-none ' value={value} onChange={handleChange} >

                </textarea> :
                <input type={type} value={value} className='p-2 rounded outline-none  ' name={name}
                    onChange={(e) => {
                        if (limit) {
                            if (e.target.value >= 0 && e.target.value < limit)
                                handleChange(e)
                        }
                        else
                            handleChange(e)
                    }} placeholder={placeholder} />}
        </div>
    )
}

export default InputFieldCom