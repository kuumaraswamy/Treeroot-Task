import React,{useRef} from 'react'
import "./Form.css"

const Form = (props) => {
 const NameRef = useRef()
 const CompanyRef = useRef()
 const LocationRef = useRef()

 const SubmitHandler = (e)=>{
    e.preventDefault()
    const Name = NameRef.current.value;
    const Company = CompanyRef.current.value;
    const location = LocationRef.current.value;
    console.log(Name, Company, location)

    props.onFormSubmit({ name: Name, company: Company, location: location })
 }


  return (
    
    <div>
      
      <form className="form"onSubmit={SubmitHandler}>
      <h1>This is form content</h1>
            <label >Name:  </label>
            <input  type="text" ref={NameRef}></input> <br/>
            
            <label >Company: </label>
            <input  type="text" ref={CompanyRef}></input><br/>

            <label >Location: </label>
            <input  type="text" ref={LocationRef}></input><br/>
            <button>Submit</button>
      </form>
     
    </div>
  )
}

export default Form
