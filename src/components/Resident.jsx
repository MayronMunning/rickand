import React, { useEffect } from 'react'
import usefetch from '../hooks/useFetch'
import "./styles/Resident.css"

function Resident({info}) {

    const [resident, getResident] = usefetch();

    useEffect(()=>{
        getResident(info)
    });

    let circleColor = "";

    if(resident?.status){
        circleColor = resident.status.trim().toLowerCase() === "alive" ? 
                        "#A1DD70" : 
                        "#EE4E4E";
    }
    
  return (

    <article className='residentcard'>
        <figure className='residentcard__img'>
            <img src={resident?.image} alt="char image" />
            <figcaption className='residentcard__status'>
                <div className='residentcard__circle' style={{backgroundColor: circleColor}}></div>
                <span>{resident?.status}</span>
            </figcaption>
        </figure>
        <h2 className='residentcard__name'>{resident?.name}</h2>
        <hr />
        <ul className='residentcard__list'>
            <li className='residentcard__item'><span>Specie: </span><span>{resident?.species}</span></li>
            <li className='residentcard__item'><span>Origin: </span><span>{resident?.location?.name}</span></li>
            <li className='residentcard__item'><span>Episodes where appear: </span><span>{resident?.episode?.length}</span></li> 
        </ul>
    </article>
  )
}

export default Resident