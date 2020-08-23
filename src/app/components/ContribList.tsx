import * as React from 'react';

import people from './people.json';
import './ContribList.css';
import {Checkbox} from 'antd';

export interface ContribListProps {
    nextStep: () => void;
    skip2Steps: () => void;
}

const ContribList: React.SFC<ContribListProps> = (Props: ContribListProps) => {
    const [selected, setSelected] = React.useState([]);

    const onSubmit = () => {
        /**
         * Posts array like this
         * 
            0: {name: "Emily Louie", color: "Brown", clothes: "Jumper", pose: "3"}
            1: {name: "Leon Han", color: "Blue", clothes: "Jacket", pose: "2"}
            2: {name: "Jayden Hsiao", color: "Dark-white", clothes: "Basic", pose: "4"}
            3: {name: "Kevin Jiang", color: "Green", clothes: "Jacket", pose: "5"}
         */
        parent.postMessage({pluginMessage: {type: 'setCollaborators', collaborators: selected}}, '*');
        Props.skip2Steps();
    };

    return (
        <div className="contrib-list">
            <h2>Choose your collaborators</h2>
            {console.log(selected)}
            <div className="team-select">
                <Checkbox.Group onChange={newVal => setSelected(newVal)}>
                    <ul>
                        {Object.keys(people).map(person => (
                            <>
                                <li>
                                    <Checkbox value={people[person]}>{people[person].name}</Checkbox>
                                </li>
                            </>
                        ))}
                    </ul>
                </Checkbox.Group>
            </div>
            <div style={{float: 'left'}}>
                <a onClick={Props.nextStep}>+ New</a>
            </div>

            <button onClick={onSubmit} style={{position: 'absolute', bottom: '2rem', right: '2rem'}}>
                Next
            </button>
        </div>
    );
};

export default ContribList;
