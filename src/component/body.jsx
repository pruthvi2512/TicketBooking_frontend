import Movilist from "./movielist";
import { useState ,useEffect} from "react";
import Searchbox from "./searchbox";
import { getAllMovies } from "../api-helper/api-helper";





export default function Body(props){
    const [searchtxt,setsearchtxt]=useState("");
    const[allrlist,setallrlist]=useState([]);
    useEffect(()=>{
        getAllMovies().then((data)=>setallrlist(data)).catch((err)=>console.log(err));
      },[]);
   
  function updatetxt(e){
    setsearchtxt(e.target.value);  
  }
  
  
    
      return(<>
      <Searchbox />
       <div className="bg-light cards">
      <Movilist list={allrlist}/>

  
    </div></>
         
  
          
      )
  }