import React from 'react';

import './kqhs-title.css';

class KQHSTitle extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="kqhs-title-cntr">
                    <div className="kqhs-title-wrpr">
                         <div class="box">
                            <div class="inner">
                                <span className='kqhs-title-txt'>KQHS</span>
                            </div>
                            <div class="inner">
                                <span className='kqhs-title-txt'>KQHS</span>
                            </div>
                        </div>
                    </div>
                </div>
               
            </React.Fragment>
        );
    }
}

export default KQHSTitle;
