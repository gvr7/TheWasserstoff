import {Component} from "react"
import Cookies from 'js-cookie'
import { Navigate } from "react-router-dom"
class AddTopic extends Component{
  state = {
    name : '',
    topic : '',
  }
  AddTopicData = (e) =>{
    e.preventDefault()
    const {name, topic} = this.state
    if (name && topic !== ""){
      alert("Data Submitted Successfully")
    }else{
       alert("data fields Can not be empty")
    }
   
  }
  dataHandler = (e) =>{
    this.setState({[e.target.name] : e.target.value} )
    console.log(this.setState.name)
  }
  render(){
    const {name,topic}  = this.state
     const {AddTopic} = this.state
    let user = Cookies.get("userName")
    if (user === undefined) {
      return(
        <Navigate to = "/" />
      )
      
    }else{
    
  return(
   
    <div className = "bg-secondary Bg">
      <form onSubmit = {this.AddTopicData}>
      <h4 className = "text-light text-center p-3">Add Topic</h4>
      <h4 className = "text-light p-1">  Name : <input type = "text" name= "name" onChange= {this.dataHandler}/></h4>
      <div className="mx-4">
        <textarea rows="10" cols="50" onChange= {this.dataHandler} name = "topic"></textarea><br />
        <button type = "submit" className = "btn btn-primary m-2">Submit </button>    
       </div>
     </form>
    </div>
  )
  }
}
}
export default AddTopic