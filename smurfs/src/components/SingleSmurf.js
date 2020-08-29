import React from 'react';

const SingleSmurf = props => {
    return (
        <div>
            <p>name:{props.name}</p>
            <p>age:{props.age}</p>
            <p>height:{props.height}</p>
        </div>
    )
};

export default SingleSmurf;