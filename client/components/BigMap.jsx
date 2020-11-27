import React from 'react'
import mapboxgl from 'mapbox-gl'
import { connect } from 'react-redux'

mapboxgl.accessToken = 'pk.eyJ1Ijoid2Fsay1tZSIsImEiOiJja2h5NXlyNzkwNDA3MnFvaHE1azIxNGV2In0.j1Uv_XQOQe95s0VcA9cDtA'

// in render()
class BigMap extends React.Component {
  state = {
    lng: 174.7741535,
    lat: -41.2967354,
    zoom: 10,
    walks: this.props.walks
  };

  componentDidMount () {
    // console.log(this.state.walks.coords)

    const makeMarkers = () => {
      console.log(this.props.walks)
      this.props.walks.map(walk => {
        new mapboxgl.Marker()
          .setLngLat(JSON.parse(walk.coords))
          .addTo(map)
      })
    }

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom

    })
    makeMarkers()

    new mapboxgl.Marker()
      .setLngLat([174.692406, -41.232617])
      .addTo(map)

    new mapboxgl.Marker()
      .setLngLat([174.773512, -41.247232])
      .addTo(map)

    new mapboxgl.Marker()
      .setLngLat([174.904689, -41.297824])
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
