import { useState } from "react"

export default function Searchbox(props){

// const [searchtxt,setsearchtxt]=useState("");
// function updatetxt(e){
//   setsearchtxt(e.target.value);
//   console.log(e.target.value);

// }

    return(<>
    <nav className="navbar navbar-light bg-light">
  <form className="form-inline">
    <input className="form-control mr-sm-2" id="1" type="search" placeholder="Search" aria-label="Search" value={props.txt} onChange={props.updatetxt} />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={props.filterlist}>Search</button>
  </form>
</nav>
    </>)
       
}