import axios from "axios";
const defaulturl="https://ticketbooking-backend-m4rw.onrender.com";
export const getAllMovies=async()=>{
    const res=await axios
    .get(`${defaulturl}/movie`).catch((err)=>console.log(err));

    if(res.status!==200){
        return console.log("no data");
    }
    const data=await res.data;
    return data;

};
export const signup=async(n,e,p)=>{
    const res=await axios.post(`${defaulturl}/user`,{
        name:n,
        email:e,
        password:p
    }).catch((err)=>console.log(err));
    if(res.status!==200){
        return console.log("not added");
    }
   
    return res.data;
};

export const loginuser=async(e,p)=>{
    const res =await axios.post(`${defaulturl}/user/login`,{
        email:e,
        password:p
    }).catch((err)=>console.log(err));
    return res;
};
export const adminLogin=async(e,p)=>{
    const res =await axios.post(`${defaulturl}/admin/login`,{
        email:e,
        password:p
    }).catch((err)=>console.log(err));
    return res.data;
};

export const getMovieDetails=async(id)=>{
    const res=await axios
    .get(`${defaulturl}/movie/${id}`).catch((err)=>console.log(err));

    if(res.status!==200){
        return console.log("no data");
    }
    const data=await res.data;
    return data;


};

export const bookMovie=async()=>{
    const res =await axios.post(`${url}/booking`).catch((err)=>console.log(err));
};

export const newBooking = async (data) => {
    const res = await axios
      .post(`${defaulturl}/booking`, {
        movie: data.movie,
        seatnumber: data.seatNumber,
        date: data.date,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log("add another"));
      if(!res){
        console.log("add another");
      }
  
      console.log(res);
    const resData = await res.data;
    return resData;
  };

  export const getUserBooking = async () => {
     const id = localStorage.getItem("userId");
     console.log(id);
    const res = await axios
      .get(`${url}/booking/${id}`)
      .catch((err) => console.log(err));
  
    // if (res.response.status !== 200) {
    //   return console.log("Unexpected Error");
    // }
 console.log(res);
    return res;
  };
