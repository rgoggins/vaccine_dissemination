import * as d3 from 'd3'
import React, {component} from 'react'

class USAMap extends React.Component {

  getdata() {
    
  }

  render() {

    d3.select(this.refs.map).selectAll("h2").data([8,5,6,7,8]).enter().append("h2").text("New Temperature");
    return (<div ref="map"> </div>);
  }
}

export default USAMap
