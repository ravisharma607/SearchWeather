import React, { useEffect, useState } from 'react'
import './WeatherApp.css'
import wave from './Img/wave.gif'
const WeatherApp = () => {

    const [city, setcity] = useState(null)
    const [search, setsearch] = useState('Chandigarh')


    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c86a00f73557b3ea8b9455279a8cd63f`
            const response = await fetch(url)
            const responseJson = await response.json();
            setcity(responseJson.main)
            console.log(responseJson);
        }
        fetchApi();
    }, [search])


    return (
        <>

            <div className="container">
                <div className="input">
                    <input type="search" value={search}  name="" id="input" className='inputField' onChange={(e) => { setsearch(e.target.value) }} placeholder='Enter City Name..' />
                </div>

                {!city ? (
                    <p className='errorMsg'>Oops!!. No Data Found.<b>Search For a City.</b></p>
                ) : (
                    <>
                        <div className="info">
                            <h2 className="location">
                                <i className="fa-solid fa-street-view"></i>
                                <span>{search}</span>   </h2>
                            <h1 className="temp">
                                 {Math.floor(city.temp)} °C
                            </h1>
                            <h3 className="temp_max">
                                <span className="min">Min:{city.temp_min}°C</span> || <span className="max">Max: {city.temp_max}°C</span>
                            </h3>
                        </div>
                        <div className="wave">
                            <img src={wave} alt="" />
                        </div>
                    </>
                )

                }


            </div>

        </>
    )
}

export default WeatherApp