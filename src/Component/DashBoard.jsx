
import "../App.css"
import { Navigate } from "react-router-dom"
import { Component } from "react"
import Cookies from 'js-cookie'
class DashBoard extends Component{
 state = {
    AddTopic : false
  }
  AddTopicNavigator =() =>{
    this.setState({AddTopic : true})
  }
  render(){
    const {AddTopic} = this.state
    let user = Cookies.get("userName")
    console.log(user)
    if (user === undefined) {
      return(
        <Navigate to = "/" />
      )
      
    }else{
      
    
    if(AddTopic === true){
      return(
        <Navigate to = '/AddTopic' />
      )
    }
  return(
        <div  className = "bg-secondary Bg text-center">
          <h4 className="text-light p-3 text-center">Dash Board</h4>
          <h5 className="text-light p-3 text-center">Welcome <span className="userName">{user}</span></h5>
          <div className= "d-flex justify-content-center align-items-center">
            <div className="bg-white p-2 DashBoardInner">
              <div className="DashBoardInner1">
                <h5 className="text-danger p-3">Add Topic</h5> 
                <button className="btn btn-primary px-4" onClick={this.AddTopicNavigator}>Add</button>
              </div>
            </div>
          </div>
         
            <h5 className="text-light p-4 DashBoardSub">Topic List : </h5>
          
      
    </div>
  )
  }
}
}
export default DashBoard