// 'use client'
// import React, { useEffect, useState } from "react";
// import axios from "axios";


// const SpotifyApi = () => {
//   const [data, setData] = useState();

//   useEffect(() => {
//     const asyncFunc = async () => {
//       const data = await axios.post(
//         "https://accounts.spotify.com/api/token",
//         new URLSearchParams({
//           grant_type: "client_credentials",
//           client_id: "1ffce38320d44a2eb392cf00eddbbb8d",
//           client_secret: "3fdb101ab615483ab0c894fcbd12f344",
//         }),
//         { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
//       );
//       setData(data.data);
//       console.log(data)
//     };
//     asyncFunc();
//   }, []);

//   useEffect(()=> {
//     const spotikFunc = async () => {
//         if (data.access_token) return
//         const dataSpot = await axios.get(
//             "https://api.spotify.com/v1/me/player", {headers: {"Authorization": "Bearer "+ data.access_token}}
//         )
        
//     }
//   }, [])
  

//   return (
//     <>

//     </>
//   )
// };

// export default SpotifyApi;
