import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"


import './kqhs-map.css';


export default class KQHSMap extends React.Component {


    render = () => {
        
        return(
            <React.Fragment>
                <div className="bottom-page-content-map full-width">
                    <div className="yellow-border full-width got-bats">
                        <h4 className='bats-link'>
                           <Link to='/#'>
                                <strong>
                                    Got Bats in Your Home?
                                </strong>
                            </Link> 
                        </h4>
                        <p className='bats-quote-link'>
                            <Link to='/#'>
                                <strong>
                                    CLICK FOR A FREE QUOTE NOW!!
                                </strong>
                            </Link> 
                        </p>
                    </div>
                    <div className="embbed kqhs-google-map">
                        <div style={{ height: '100%', width: '100%', position: 'relative'}}>
                            <MyMapComponent i
                                sMarkerShown 
                                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
));
