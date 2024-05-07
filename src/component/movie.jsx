import { Link } from "react-router-dom";
export default function Movie(props){
 console.log(props.movie.title);
    return(
        <>
        <div className="card" >
  <img src={props.movie.posterImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.movie.title}</h5>
    <p className="card-text">Price:₹ {props.movie.price} </p>
    <p className="card-text">ReleaseDate:&nbsp;{new Date(props.movie.releaseDate).toLocaleDateString()
}</p>
    <p className="card-text cui">Descripion:{props.movie.description}</p>
    
  </div>
</div>
       

</>
    )
}