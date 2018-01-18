import React from 'react';
import { CircleLoader } from 'react-spinners';

const circleLoaderPosition = {
    top: '50%',
    bottom: '50%',
    position: 'absolute',
    right: '50%',
    left: '50%',
}
const CircleLoaderWrapper = (props) => (
    <div>
        <div style={circleLoaderPosition}>
            <CircleLoader size={100} color={'#865CD6'} loading={props.loading} />
        </div>        
    </div>
);

export default CircleLoaderWrapper;