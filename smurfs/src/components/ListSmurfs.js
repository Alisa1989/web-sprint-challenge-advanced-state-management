import React from 'react';
import { connect } from 'react-redux';

import SingleSmurf from './SingleSmurf';

const ListSmurfs = props => {
    return(
        <div>
            <h2>Smurf Village Population:</h2>
            {props.smurfs.map(item =>(
                console.log("item=", item),
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

