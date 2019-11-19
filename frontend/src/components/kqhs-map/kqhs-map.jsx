import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, withGoogleMap, withScriptjs, Polygon } from "react-google-maps"



import './kqhs-map.css';

// surrounding GR cities
const coords = [
    { lat: 42.8709, lng: -85.8650},
    { lat: 42.8123, lng: -85.7228},
    { lat: 42.7892, lng: -85.5167},
    { lat: 42.9336, lng: - 85.3420},
    { lat: 43.1200, lng: - 85.5600},
    { lat: 42.9722, lng: -85.9540},
    { lat: 42.8709, lng: -85.8650},
];



export default class KQHSMap extends React.Component {


    render = () => {
        console.log(process.env.REACT_APP_GOOGLE_KEY);
        
        return(
            <React.Fragment>
                <div className="bottom-page-content-map full-width">
                    <div className="yellow-border got-bats">
                        <h4 className='bats-link'>
                           <Link to='/#'>
                                <strong>
                                    Got Mice in Your Home?
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
                        {console.log(process.env.REACT_APP_GOOGLE_KEY)}
                        <div style={{ height: '100%', width: '100%', position: 'relative'}}>
                            <KQHSGoogleMap 
                                isMarkerShown 
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places
                                                &key=${'AIzaSyC9HXvW8F0PhJAumPLVCTuXCOiPGlYPW38'}`}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </div>
                    </div>
                    <div className="got-bed-bugs">
                        <p className='bug-txt'>
                            KQHS LLC Termite and Pest Control offers safe and effective pest control, 
                            quality and sanitation solutions throughout West Michigan – Grand Rapids 
                            area including Byron Center, Caledonia, East Grand Rapids, Grandville, 
                            and Kentwood, Wyoming.
                        </p>
                        <div className='bed-bug-sec'>
                            <h3 className='flexing h3-contain'>
                                <Link to='/#' className='red-color'>
                                    GOT MICE?
                                </Link>
                            </h3>
                            <h6 className='flexing h6-contain'>
                                <Link to='/#' className='red-color'>
                                    CLICK FOR INFO ABOUT MICE IN YOUR HOME
                                </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


const KQHSGoogleMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 42.963360, lng: -85.7 }}
    >
        <Polygon
            path={coords}
            options={{
                fillColor: "#8A191B",
                fillOpacity: 0.4,
                strokeColor: "#8A191B",
                strokeOpacity: 1,
                strokeWeight: 1
        }} />
    </GoogleMap>
));
