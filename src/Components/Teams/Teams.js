import React from 'react';
import useJson from '../../Hooks/useJson';

import Member from './Member';

const Teams = () => {
    const [data] = useJson("doctors");
    return (
        <div>
            <h1>Our Teams</h1>
            <div className="container p-3">
                {
                    data.map(d => <Member key={d.id} info={d}></Member>)
                }
            </div>
        </div>
    );
};

export default Teams;