import React from 'react';

import {SingleSmurf} from 'SingleSmurf';

const ListSmurfs = props => {
    return(
        <div>
            <h2>Smurf Village Population:</h2>
            {props.smurfs.map(item =>(
                <SingleSmurf smurf={item} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, null)(ListSmurfs);

