import React from 'react'
import mapboxgl from 'mapbox-gl'
import { connect } from 'react-redux'

mapboxgl.accessToken = 'pk.eyJ1Ijoid2Fsay1tZSIsImEiOiJja2h5NXlyNzkwNDA3MnFvaHE1azIxNGV2In0.j1Uv_XQOQe95s0VcA9cDtA'

// in render()
class BigMap extends React.Component {
  state = {
    lng: 174.7741535,
    lat: -41.2967354,
    zoom: 12,
    walks: this.props.walks
  };

  componentDidMount () {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    })

    this.state.walks.map(walk => {
      new mapboxgl.Marker()
        .setLngLat(JSON.parse(walk.coords.start))
        .addTo(map)
    })
    new mapboxgl.Marker()
      .setLngLat([12.550343, 55.665957])
      .addTo(map)
  }

  render () {
    return (
      <div className="mapContainer">
        <div className="map" ref={(el) => { this.mapContainer = el }}
        />
      </div>
    )
  }
}

const mapStateToProps = (globalState) => {
  return {
    walks: globalState.walks
  }
}

export default connect(mapStateToProps)(BigMap)
