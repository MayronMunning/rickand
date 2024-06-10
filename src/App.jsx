import { useEffect, useRef, useState} from 'react'
import useFetch from './hooks/useFetch';
import LocationCard from './components/LocationCard';
import Resident from './components/Resident';

function App() {

  const [apiRes, getApiRes, hasError, isLoading] = useFetch();

  const randomId = Math.floor(Math.random() * 126) + 1;

  const [inputValue, setInputValue] = useState(randomId);

  useEffect(()=>{

    const url = `https://rickandmortyapi.com/api/location/`+inputValue;
    getApiRes(url);

  },[inputValue])

  const textInput = useRef();

  const handleSubmit = (e) =>{
      e.preventDefault();
      let num = textInput.current.value.trim();
      setInputValue(num);
      textInput.current.value = "";
  }

  return (
    <div className='app'>{
      isLoading ? 
      <h2>Loading...</h2>
      : 

        hasError ? 
        <h2>intentalo mas tarde</h2>
        : 
        <>


            <figure className='banner'>
              <img src="/assets/rick.webp" alt="" />
            </figure>

            <form className='app__form'  onSubmit={handleSubmit}>
              <input className='app__form-input' type="number" ref={textInput} min={1} max={126} />
              <button className='app__form-btn'>Search</button>
            </form>

            <LocationCard
            info={apiRes}
            />

            <div className='app__container'>
              {
                apiRes?.residents.map(char =>(
                  <Resident
                    key={char}
                    info={char}
                  />
                ))
                
              }
            </div>
        </>
    }</div>
  )
}

export default App
