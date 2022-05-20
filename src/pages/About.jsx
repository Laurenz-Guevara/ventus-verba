import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>Welcome to the About page</h1>
      <Link to="/">
        <h1>Home</h1>
      </Link>
    </div>
  )
}

// import sanityClient from '../client.jsx'

//export default function Home() {
// const [postData, setPost] = useState(null)

// useEffect(() => {
//   sanityClient
//     .fetch(
//       `*[_type == "simpletext" && displayPage == "/home"] | order(0 < displayOrder){
//           title,
//           description,
//           displayOrder,
//         }`
//     )
//     .then((data) => setPost(data))
//     .catch(console.error)
// }, [])

// import React, { useState, useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
// import sanityClient from '../client.jsx'
// import '../styles/components/navbar.scss'

// export default function NavBar() {
//   const [postData, setPost] = useState(null)

// useEffect(() => {
//   sanityClient
//     .fetch(
//       `*[_type == "webpageimage"]{
//         title,
//         mainImage{
//           asset->{
//             _id,
//             url
//           },
//           alt
//         },
//         displayOrder
//         }`
//     )
//     .then((data) => setPost(data))
//     .catch(console.error)
// }, [])

//   return (
//     <>
//       <div className="navbar-wrapper">
//         <div className="navbar-container">
//           <div className="navbar-name">
//             <NavLink to={'/'}>Laurenz Guevara</NavLink>
//             <h4>Web Developer</h4>
//           </div>
//           <div className="navbar-element-wrapper">
//             <NavLink to={'/'}>Home</NavLink>
//             <NavLink to={'/explore'}>Explore</NavLink>
//             <NavLink to={'/search'}>Search</NavLink>
//             <NavLink to={'/surprise'}>Surprise</NavLink>
//           </div>
//         </div>
//       </div>
//       {/* <div className="breaker-bar"></div> */}
//     </>
//   )
// }

//      {/* <div className="breaker-bar"></div> */}
