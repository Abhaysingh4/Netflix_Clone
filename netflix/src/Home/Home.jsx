import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios';
const apikey = "2ce28e8b4a9c8f2b8aec50879e3f828b";
const url = "https://api.themoviedb.org/3"
const upcoming='upcoming'

const Card = ({img}) => 
(  <img className='card' src={img} alt="cover" />
)

const Row = ({ title, arr = [
  
]}) => (
   <div className='row'>
    <h2>{title}</h2>
    <div>
      {
        arr.map((item,index)=>(
          <Card key={index} img={item.img} />
        ))
      }
    </div>
  </div>)


const Home = () => {

  const [upcomingmovies,setupcomingmovies]=useState([])

  useEffect(() => {
    const fetchUpcoming = async () => {
      const { data:{results} } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
      setupcomingmovies(results)
    };
    fetchUpcoming();
  },[])

  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Upcoming Movies"} arr={upcomingmovies} />
      <Row title={"Movies"} />
      <Row title={"Tv shows"} />
      <Row title={"recently viewed"} />
      <Row title={"My List"}/>
    </section>
  )
}

export default Home