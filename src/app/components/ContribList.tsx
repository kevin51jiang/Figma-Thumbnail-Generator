import * as React from 'react';

import people from './people.json';
import '../styles/ContribList.css';
import {Checkbox} from 'antd';
import {addHand} from './utils';

export interface ContribListProps {
    nextStep: () => void;
    skip2Steps: () => void;
    sessionEntries: any[];
}

const ContribList: React.SFC<ContribListProps> = (Props: ContribListProps) => {
    const [selected, setSelected] = React.useState([]);
    const [showErr, setShowErr] = React.useState(false);

    const addSelectedCollaborators = () => {
        /**
         * Posts array like this
         *
            0: {name: "Emily Louie", color: "Brown", clothes: "Jumper", pose: "3"}
            1: {name: "Leon Han", color: "Blue", clothes: "Jacket", pose: "2"}
            2: {name: "Jayden Hsiao", color: "Dark-white", clothes: "Basic", pose: "4"}
            3: {name: "Kevin Jiang", color: "Green", clothes: "Jacket", pose: "5"}
         */
        selected.map(person => addHand(person.color, person.clothes, person.pose));
        console.log('final selected', selected);
    };

    return (
        <div className="contrib-list">
            <h2>Select up to 6 team members</h2>
            {showErr && <p style={{color: 'red'}}>You can only select up to 6 team members</p>}
            <div className="team-select">
                <Checkbox.Group
                    style={{width: '100%'}}
                    onChange={newVal => {
                        if (newVal.length < 6) {
                            setShowErr(false);
                        } else {
                            setShowErr(true);
                        }
                        setSelected(newVal);
                    }}
                    disabled={selected.length >= 6}
                >
                    <ul>
                        {Object.keys(people).map(person => (
                            <li>
                                <Checkbox value={people[person]}>{people[person].name}</Checkbox>
                            </li>
                        ))}
                        {Props.sessionEntries.map(person => (
                            <li>
                                <Checkbox value={person}>{person.name}</Checkbox>
                            </li>
                        ))}
                    </ul>
                </Checkbox.Group>
            </div>
            <div style={{float: 'left'}}>
                <a
                    onClick={() => {
                        Props.nextStep();
                    }}
                >
                    + New Member
                </a>
            </div>

            <div style={{float: 'right'}}>
                <a onClick={() => setSelected([])}>Clear</a>
            </div>

            <button
                onClick={() => {
                    addSelectedCollaborators();
                    Props.skip2Steps();
                }}
                style={{position: 'absolute', bottom: '2rem', right: '2rem'}}
            >
                Confirm Selection
            </button>
        </div>
    );
};

export default ContribList;
