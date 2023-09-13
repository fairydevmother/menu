// /** This page is not in used at the moment */




// import React, { useEffect, useState } from 'react';

// import { QuerySnapshot, collection, getDocs } from 'firebase/firestore';
// async function Restaurant() {
//   const [restaurants, setRestaurants]= useState([]);
//   const [loading, setLoading]= useState([false]);
//   const menuRef = db.firestore().collection("users2")
//   function getRestaurants(){
//     setLoading(true)
//     menuRef.onSnapshot((querySnapshot)=> {
//       const items= [];
//       querySnapshot.forEach((doc)=> {
//         items.push(doc.data());
//       });
//       setRestaurants(items);
//       setLoading(false)
//     })
//   }
//   useEffect(()=>{
//     getRestaurants();
//   }, []);
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{restaurants.id}</h2>
//       {/* Render other restaurant details here */}
//     </div>
//   );
// }

// export default Restaurant;