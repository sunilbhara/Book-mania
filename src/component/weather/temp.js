import React, {useState} from 'react'
import "./style.css"

const Temp = () => {
    const [searchValue, setSearchValue] = useState("pune");
  return (
    <>
      <div className="wrap">
        <div className="search">
            <input type="search" 
                placeholder="search..."
                autoFocus
                id='search'
                className='searchTerm'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />

            <button className="searchButton" type="button" onClick={getWeatherInfo}>
                Search
            </button>
        </div>
      </div>

        {/* our temp card */}
        <article className="widget">
            <div className="weatherIcon">
                <i className={"wi wi-day-sunny"}></i>
            </div>

            <div className="weatherInfo">
                <div className="temperature">
                    <span>25.65&deg;</span>
                </div>

                <div className="description">
                    <div className="weatherCondition">
                        sunny
                    </div>
                    <div className="place">
                        Pune, India
                    </div>
                </div>
            </div>
            <div className="date">
                { new Date().toLocaleString()}
            </div>

            {/* four section for weather info */}
            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-sunset"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            19:19 PM <br />
                            Sunset
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-sunset"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            65 <br />
                            Humidity
                        </p>
                    </div>

                    
                </div>

                <div className="weather-extra-info">
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-sunset"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            1045 MM<br />
                            Pressure
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-sunset"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            2.24 <br />
                            Wind
                        </p>
                    </div>

                    
                </div>
            </div>
        </article>

    </>
  )
}

export default Temp