import React, { useContext, useEffect, useRef, useState } from "react";
import Homesection1 from "../Components/Homecomponent/Homesection1";
import Slider from "../Components/Homecomponent/Slider";
import { Prev } from "react-bootstrap/esm/PageItem";
import { AppStorage } from "../context/AppStore";

function Hoomepage() {
    // let s = "Jerold"
    let { a, name, setName } = useContext(AppStorage)
    let nameRef=useRef()
    let{setActive} = useContext(AppStorage)
    useEffect(()=>{
        setActive('home')
    },[])
    // console.log(name);
    let [named, setnamed] = useState('Jerold')
    // let vl = 39
    // let obj = {
    //     name: "Jerold",
    //     age: 23,
    //     email: "ondvoiab"
    // }
    // let [a, seta] = useState(0)

    // // object with use state

    // const [formobj, setformobj] = useState(
    //     {
    //         name: "surya",
    //         age: 23,
    //         phone: null,
    //         image: null,
    //         address: null
    //     }


    // )

    // const handlechange = (e) => {
    //     let { value, file, name } = e.target
    //     setformobj((pre) =>
    //     (
    //         {
    //             ...pre,
    //             [name]: value
    //         }
    //     )

    //     )
    // }

    // // form usestate 

    // const [inputobj, setinputobj] = useState(
    //     {
    //         name: "Dharani",
    //         email: "dharani@gmail.com",
    //         contact: 9965956469,
    //         image: null
    //     }

    // )

    // const formsubmit = (e) => {
    //     let { value, files, name } = e.target
    //     if (name == 'image') {
    //         value = files[0]
    //     }
    //     setinputobj((prev) =>
    //     (
    //         {
    //             ...prev,
    //             [name]: value
    //         }
    //     )
    //     )
    // }

    // const submit = (e) => {
    //     e.preventDefault()
    //     console.log(inputobj);
    // }

    //useEffect

    //     const getconsole = () => {
    //         console.log("Hellow");
    //     }
    //     useEffect(() => {
    //         getconsole()

    // },[])  

    // table with useState 1

    // const [studentlist, setstudentlist] = useState([{
    //     name: " ",
    //     id: 0,
    //     age: 0,


    // }])

    // const listchange = (e, std) => {
    //     let { value, name } = e.target

    //     let newobj = studentlist.find((obj) => obj.id == std.id)
    //     if(newobj==null)
    //         return
    //    newobj[name] = value




    //     let newarray = studentlist.map((prev) => {
    //         if (prev.id == std.id)
    //             return newobj 
    //         else
    //             return prev
    //     })

    //     setstudentlist([...newarray])
    // }

    // const addlist = (e) => {

    //     e.preventDefault()
    //     setstudentlist((prev) => [
    //         ...prev,
    //         {
    //             name: " ",
    //             id: studentlist[studentlist.length - 1].id + 1,
    //             age: 0,
    //         }
    //     ])
    // }


    // useState with array update 2

    // const [studentlist,setstudentlist] = useState(
    //     [
    //         {
    //             id : 0,
    //             name : " ",
    //             email : " ",
    //             age : 0,
    //             profilepic : null,
    //             phone : null
    //         }
    //     ]
    // )

    // const listchange = (e , stud) =>{
    //     let{value,files,name} = e.target
    //     if(name==="profilepic"){
    //         value = files[0]
    //     }

    //     let newobj = studentlist.find((obj)=>obj.id==stud.id)

    //         if(newobj==null)
    //             return
    //         newobj[name]=value

    //     let newarray = studentlist.map((prev)=>   
    //         prev.id==stud.id ? newobj:prev

    //     )    
    //       setstudentlist([...newarray])  

    // }

    // const addlist = (e)=> {
    //     e.preventDefault()

    //     setstudentlist((prev)=>
    //     [
    //         ...prev,
    //         {
    //          id : studentlist[studentlist.length-1].id+1,
    //          name :"",
    //          email:"",
    //          age:0,
    //          profilepic:null,
    //          phone:null


    //         }
    //     ]
    //     )
    //     }
    //     const submittable=(e)=>{
    //          e.preventDefault()
    //          console.log(studentlist);
    //     }

    // console.log("hellow");     


    return (
        <div>
            <Homesection1 data="Jerold" />

            {/* <input type="text" ref={nameRef} /> */}



            {/* <input type="text" value={named} onChange={(e)=>setnamed(e.target.value)} /> */}
 


            {/* <button className="" onClick={()=>{
                let name=nameRef.current.value
                console.log(name);
            }}>
                Submit 
            </button> */}
            {/* <input type="text" onChange={(e) => setName(e.target.value)} value={name} /> */}
            {/* {obj.name == "surya" ? <Slider /> : obj.age < 20 ? "23 silder" : "No Silder avaiable"} */}
            {/* {a}
            <button onClick={() => seta(a + 1)}>+</button>
            <button onClick={() => seta(a - 1)}>-</button> */}

            {/* 
           <input type="text" value={name} onChange={(e)=>setname(e.target.value)} /> */}

            {/* <input type="text" value={formobj.name} name="name" onChange={handlechange}/>
           <h4>Foturne {name} academy </h4> */}

            {/* <form >
                <input type="text" value={inputobj.name} name="name" onChange={formsubmit}/>
                <input type="text" value={inputobj.email} name="email" onChange={formsubmit} />
                <input type="number" value={inputobj.contact} name="contact" onChange={formsubmit} />
                <input type="file" name='image'onChange={formsubmit} />
                <button onClick={submit}>submit</button>

            </form> */}

            {/* <table border={1}>
                <thead >
                    <tr>
                        <th>SI.NO</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>ACTION</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        studentlist && studentlist.map((obj, index) => (
                            <tr>
                                <td>{index + 1} </td>
                                <td> <input type="text" name ="name" onChange={(e) => listchange(e, obj)} value={obj.name} /> </td>
                                <td><input type="number" name ="age" onChange={(e) => listchange(e, obj)} value={obj.age} /> </td>
                                <td><button onClick={addlist}> + </button> </td>

                            </tr>
                        ))
                    }

                </tbody>
                <tbody></tbody>
            </table> */}

             {/* <button onClick={addlist}>+</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>SI.NO</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>AGE</th>
                        <th>PROFILEPIC</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {studentlist&&studentlist.map((obj,index)=>(
                        <tr>
                            <td>
                                {index+1}
                            </td>
                            <td>
                                <input type="text" name="name" value={obj.name} onChange={(e)=>listchange(e,obj)}/>
                            </td>
                            <td><input type="text" name="email" value={obj.email} onChange={(e)=>listchange(e,obj)}/></td>
                            <td><input type="number" name="age" value={obj.age} onChange={(e)=>listchange(e,obj)}/>  </td>
                            <td><input type="file" name="profilepic" onChange={(e)=>listchange(e,obj)} />
                            {obj.profilepic && (
                               <img
                                    src={URL.createObjectURL(obj.profilepic)}
                                     alt="Profile"
                                     style={{ width: "0px", height: "0px" }}
                              />
                  )}
                            
                            </td>
                            <td><input type="number" name="phone" value={obj.phone} onChange={(e)=>listchange(e,obj)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
                       <button onClick={submittable}>submit</button> */}




        </div>
    )
}


export default Hoomepage;