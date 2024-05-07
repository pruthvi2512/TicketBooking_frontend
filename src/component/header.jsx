import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { adminActions ,userActions} from "../store";
export default function Header(){
  const isAdminLoggedIn=useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn=useSelector((state)=>state.user.isLoggedIn);
  const dispatch=useDispatch();
  function userlogout(){
  dispatch(userActions.logout());
  localStorage.removeItem("userId");
  }
  function adminlogout(){
    console.log("hii");
    dispatch(adminActions.logout());
    localStorage.removeItem("adminId");
    localStorage.removeItem("token");
    }


 return (
   <nav className="navbar navbar-expand-sm bg-dark">
   <div className="container-fluid">
     <a className="navbar-brand " href="#"><img className="logo" src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png" alt="logo" /></a>
     <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon bg-dark"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div className="navbar-nav">
         <a className="nav-link active" aria-current="page" href="/">Movies</a>
         <a className="nav-link " href="/about" >About</a>
        {isAdminLoggedIn&&<a className="nav-link " href="/about" >AddMovie</a>}
      
        {isUserLoggedIn?<><a className="nav-link " href="/about" >Profile</a><a href="/login"><button className="btn btn-danger" type="submit" onClick={userlogout}>Logout</button></a></>:<a href="/login"><button className="btn btn-danger" type="submit">Login</button></a>}
        &nbsp;&nbsp;
        {isAdminLoggedIn?<><a href="/AdminLogin"><button className="btn btn-danger" type="submit" onClick={adminlogout}>Admin logout</button></a></>:<a href="/AdminLogin"><button className="btn btn-danger" type="submit" >Admin</button></a>}
       </div>
     </div>
    
   </div>
 </nav>
 )    


}