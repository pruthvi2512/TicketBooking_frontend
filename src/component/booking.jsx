import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieDetails,newBooking } from "../api-helper/api-helper";
import {loadStripe} from "@stripe/stripe-js"




export default function booking(){
    const[movie,setMovie]=useState({});
    const [inputs, setInputs] = useState({ seatNumber: "", date: "" });

//getdetails of movie 
    const id=useParams().id;
    useEffect(()=>{
        getMovieDetails(id)
        .then((data)=>setMovie(data))
        .catch((err)=>console.log(err));
    },[id]);
//handle input
    const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
          sendmail();
        newBooking({ ...inputs, movie: movie._id })
          .then((res) => makePayment())
          .catch((err) => console.log(err.errmsg));
      };
//make payment through strapy
    const makePayment= async()=>{
        console.log("hiii");
        const stripe= await loadStripe("pk_test_51OqVUtSIYEMswIFxftBybCOXFd3MtysU2bQvl5B4fRu93xlwph3RRnf0cfq4t27GSaAFY4dQxB0RTNLyij8bWinp00qNi0Ejs1");
        const body = {
           price:movie.price,
        }
        const headers = {
            "Content-Type":"application/json"
        }
        const response = await fetch("http://localhost:3000/create-checkout-session",{
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
        });

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId:session.id
        });
        
        if(result.error){
            console.log(result.error);
        }
    };
    console.log(movie);
return(
    <><div className="book">
              <div className="card mb-8 movie-card">
              <img src="https://www.tallengestore.com/cdn/shop/products/3_Idiots_41fc064d-da6d-4a45-9652-f0e4105adf6a.jpg?v=1582192776" className="card-img-top" alt="..."/>
              <div className="card-body">
           <h5 className="card-title">{movie.title}</h5>
           <p className="card-text">{movie.description}</p>
           <p className="card-text">Actors:{movie?.actors?.join(" , ")}</p>
             <p className="card-text">Release Date:{new Date(movie?.releaseDate).toLocaleDateString()}</p>
              </div>
          </div>
          <div className="Book-form"> 
                <form className="form" onSubmit={handleSubmit}>
                  <div className="mb-3">
                             <label for="exampleFormControlInput1" className="form-label">Seat Number</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="1 To 60" min={1} max={60} value={inputs.seatNumber}  onChange={handleChange} name="seatNumber"/>
                            <input type="date" name="date"value={inputs.date}  onChange={handleChange}/>
                            <h4>₹{movie.price}</h4>
                            <button type="submit" class="btn btn-success"  >Pay Here</button>
                            {/* <button type="button" class="btn btn-success" onClick={makePayment}>Pay Here</button> */}
                   </div>
                </form>
          </div>


    </div>
  
    
    </>
)   



}