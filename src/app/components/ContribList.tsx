import * as React from 'react';

import people from './people.json';
import './ContribList.css';
import {Checkbox} from 'antd';

export interface ContribListProps {
    nextStep: () => void;
    skip2Steps: () => void;
}

const ContribList: React.SFC<ContribListProps> = (Props: ContribListProps) => {
    return (
        <div className="contrib-list">
            <h2>Choose your collaborators</h2>

            <div className="team-select">
                <ul>
                    {Object.keys(people).map(person => (
                        <>
                            <li>
                                <Checkbox>{people[person].name}</Checkbox>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
            <div style={{float: 'left'}}>
                <a onClick={Props.nextStep}>+ New</a>
            </div>

            <button onClick={Props.skip2Steps} style={{float: 'right'}}>
                Next
            </button>
        </div>
    );
};

export default ContribList;
