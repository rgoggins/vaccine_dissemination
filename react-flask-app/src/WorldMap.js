import React, { useState, useEffect } from "react"
import { geoEqualEarth, geoPath } from "d3-geo"
import { feature } from "topojson-client"
import * as d3 from 'd3'


const projection = d3.geoAlbers()
  // .scale(320)
  // .translate([ 1200,500 ])

const WorldMap = () => {
  const [geographies, setGeographies] = useState([])

  useEffect(() => {
    fetch("https://unpkg.com/us-atlas@3/counties-10m.json")
    // fetch("https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/us.json")
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        } else {
          console.log("No problem at all")
        }
        var data = response.json()
        console.log("Len of data: " + JSON.stringify(data, null, 2))
        data.then(worlddata => {
          console.log("World data length" + worlddata.length)
          setGeographies(feature(worlddata, worlddata.objects.counties).features)
        })
      })
  }, [])

  const handleCountyClick = countryIndex => {
    console.log("Clicked on county: ", geographies[countryIndex]['properties']['name'])

  }

  return (
    <>
      <div class="header"> Vaccine Dissemination </div>
      <svg width={ 1000 } height={ 1000 } className="centered">
        <g className="countries">
          {
            geographies.map((d,i) => (
              <path
                key={ `path-${ i }` }
                d={ geoPath().projection(projection)(d) }
                className="country"
                fill={ `rgba(38,50,56,${ 1 })` }
                stroke="#FFFFFF"
                strokeWidth={ 0.5 }
                onClick={ () => handleCountyClick(i) }
                onMouseOver={ () => handleCountyClick(i)}
              />
            ))
          }
        </g>
      </svg>
    </>
  )
}

export default WorldMap
