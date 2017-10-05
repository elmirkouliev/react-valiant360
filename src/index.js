import React from 'react';
import PropTypes from 'prop-types';
global.jQuery = require('jquery');
import './valiant/valiant360.css';

/**
 * Stateless Valiant 360 made for react
 */
class ReactValiant360 extends React.Component {
    
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.setUpVRPlayer();
    }

    componentDidUpdate(prevProps) {
        const { video } = this.props;


    }

    /**
     * Sets up the VR player using async dependencies
     */
    setUpVRPlayer() {
        const { autoplay, muted } = this.props;
        global.THREE = require('three');
        require('script-loader!./valiant/jquery.valiant360.min.js');

        $('#valiant-video-element').Valiant360({
            hideControls: false,    // hide player controls
            keyboardControls: true, // use keyboard controls (move by arrows),
            clickAndDrag: true,
            autoplay,
            muted
        });

    };

    render() {
        const {
            width,
            height,
            autoplay,
            hideControls,
            clickToPlay
        } = this.props;

        return (
            <div 
                className='valiant-vr-wrap' 
                style={{
                        height: this.props.height, 
                        width: this.props.width
                    }}
            >
                <div
                    className="valiant-vr"
                    style={{height: this.props.height}}
                    data-video-src={this.props.video}
                    id="valiant-video-element">
                </div>
            </div>
        );
    }
}

ReactValiant360.defaultProps = {
    autoplay: false,
    muted: false,
    clickToPlay: true,
    video: '',
    height: '250px',
    width: '400px'
}

ReactValiant360.propTypes = {
    video: PropTypes.string,
    thumbnail: PropTypes.string,
    width: PropTypes.string,
    type: PropTypes.string,
    autoplay: PropTypes.bool,
    clickToPlay: PropTypes.bool,
    vr: PropTypes.bool,
    muted: PropTypes.bool,
    hideControls: PropTypes.bool,
    highRes: PropTypes.bool,
    status: PropTypes.number
}

export default ReactValiant360;
