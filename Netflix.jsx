import React from 'react'
import STYLE from "./netflix.module.css"

 const Netflix = () => {
  return (
  <nav >
   <div id={STYLE.nav} > 
   
    <ul>
    <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="" />
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
    </ul>
    </div>
    <div className={STYLE.btn}>
      <button>Search</button>
      <button>Notifications</button>
      <button><img src="https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABS5zyiA_uDE4vs9AaQKq7KpZzp9enMkWlZ8tEAVdupwBwH-xsA7pN7Y3cUUYWGtKARFEBN-mUEpPigEi2COFrSUSp7tf3zE.png?r=bd7" alt="" /></button>
    </div>
    </nav>
  )
}
export default Netflix