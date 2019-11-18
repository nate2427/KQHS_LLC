import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, withGoogleMap, withScriptjs, Polygon } from "react-google-maps"



import './kqhs-map.css';


const coords = [
    { lat: 43.007345, lng: -85.741812 },
    { lat: 43.007752, lng: -85.728409 },
    { lat: 42.999067, lng: -85.672861 },
    { lat: 43.029051, lng: -85.660880 },
    { lat: 43.028673, lng: -85.636183 },
    { lat: 43.020460, lng: -85.622967 },
    { lat: 43.009548, lng: -85.620131 },
    { lat: 42.992041, lng: -85.610481 },
    { lat: 43.003854, lng: -85.594709 },
    { lat: 43.003083, lng: -85.586541 },
    { lat: 42.977408, lng: -85.590790 },
    { lat: 42.977191, lng: -85.580241 },
    { lat: 42.970063, lng: -85.580350 },
    { lat: 42.969879, lng: -85.590757 },
    { lat: 42.962467, lng: -85.590937 },
    { lat: 42.957746, lng: -85.630053 },
    { lat: 42.941006, lng: -85.629704 },
    { lat: 42.941122, lng: -85.580476 },
    { lat: 42.927076, lng: -85.578615 },
    { lat: 42.927017, lng: -85.570010 },
    { lat: 42.913010, lng: -85.569111 },
    { lat: 42.883718, lng: -85.606674 },
    { lat: 42.884764, lng: -85.645615 },
    { lat: 42.921333, lng: -85.687056 },
    { lat: 42.938174, lng: -85.725333 },
    { lat: 42.965399, lng: -85.741674 },    
    { lat: 43.008199, lng: -85.742805 },    
    { lat: 43.007949, lng: -85.730388 },
    { lat: 43.000205, lng: -85.672863 },
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
        defaultZoom={11}
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
