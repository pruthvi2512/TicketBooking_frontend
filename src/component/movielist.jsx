import Movie from "./movie";

export default function Movilist(props){
    console.log(props);
    return(
        <>
        {props.list.map((movie)=>(
           <a href={`/booking/${movie._id}`}><Movie movie={movie}/></a> 
        ))}
            

     </>
    )
}