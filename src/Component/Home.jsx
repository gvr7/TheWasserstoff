import "../App.css"
import {Component} from 'react'
import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'
class Home extends Component{
  state = {
    value : false,
    inputValue: ""
  }
  onChangeHandler = (e) =>{
    this.setState({inputValue: e.target.value })
  }
  onSubmitHandler = (e)=>{
    e.preventDefault()
    let {inputValue} = this.state
    if (inputValue ==""){
      console.log(Cookies.get("userName"))
      alert("user name Can't be empty")
      
    }else{
      Cookies.set("userName",inputValue)
       this.setState({value : true})
    }
   
  }
  render(){
    const {value} = this.state
    
    if (value === true){
      return(
        <Navigate to = '/dashboard' />
      )
    }
  return(
    <div className ='bg-secondary Bg text-center'> 
      <div className = "HomeInput">
      <form onSubmit = {this.onSubmitHandler}>
        <input type = "text" placeholder= "Enter your user name" className = "px-5 py-2" onChange = {this.onChangeHandler}/> <br />
        <button type = "submit" className= "btn btn-primary my-2 px-4" > Enter </button>
      </form>
    </div>
    </div>
    )
    }
}
export default Home