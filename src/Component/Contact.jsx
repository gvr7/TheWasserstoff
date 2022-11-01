import "../App.css"

const Contact = () =>{
  return(
    <div  className = "bg-secondary Bg text-center">
      <div className= 'text-light p-3'>
        <h3 className = "text-danger">Address :</h3>
        <p>
          The Wasserstoff <br />
          Fifth Floor, 502, Sector-50,<br />
          Gurgaon (Haryana)
        </p>
      </div>
      <div className= 'text-light p-3'>
        <h3 className = "text-danger">Contact :</h3>
        <p>Email : contact@thewasserstoff.com</p>
        <p>Phone : +91-9643911991</p>
      </div>
      
    </div>
  )
}
export default Contact