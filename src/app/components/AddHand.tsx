import * as React from 'react';
import '../styles/ui.css';
import {Select} from 'antd';
import {addHand} from './utils';

const {Option} = Select;

export interface AddHandProps {
    nextStep: () => void;
    prevStep: () => void;
}

// all strings are values,
// if it's an array, the left is the label, the right is the value
const colorOptions = [
    'Black',
    'Blue',
    'Brown',
    ['Dark White', 'Dark-white'],
    'Green',
    ['Light Brown', 'Light-brown'],
    'Purple',
    'White',
    'Yellow',
];

const clothesOptions = ['Basic', 'Jacket', 'Jumper'];

const poseOptions = ['Fingers Crossed', 'Number One', 'High Five', 'Vulcan Salute', 'Wave', 'Okay', 'Rock On', 'Fist'];

const AddHand: React.SFC<AddHandProps> = (Props: AddHandProps) => {
    const [color, setColor] = React.useState<string>('Black');
    const [clothes, setClothes] = React.useState<string>(clothesOptions[0]);
    const [pose, setPose] = React.useState<string>(poseOptions[0]);
    const [path, setPath] = React.useState<string>('');

    React.useEffect(() => {
        setPath(`https://emily.louie.ca/handz/${color}-in-${clothes}${poseOptions.indexOf(pose) + 1}.png`);
    }, [color, clothes, pose]);

    function sendData() {
        addHand(color, clothes, poseOptions.indexOf(pose) + 1, true);
        Props.nextStep();
    }

    return (
        <>
            <h2>Customize your hand</h2>
            {/* Color */}
            <Select value={color} style={{width: '10rem'}} onChange={val => setColor(val)} optionLabelProp="label">
                {colorOptions.map(colorOpt =>
                    typeof colorOpt === 'string' ? (
                        <Option value={colorOpt} label={colorOpt} key={`color-${colorOpt}`}>
                            <div style={{textAlign: 'left'}}>
                                <span style={{width: '1rem', display: 'inline-block'}} role="img">
                                    {color === colorOpt ? '✓ ' : ' '}
                                </span>
                                {colorOpt}
                            </div>
                        </Option>
                    ) : (
                        <Option value={colorOpt[1]} label={colorOpt[0]} key={`color-${colorOpt[1]}`}>
                            <div style={{textAlign: 'left'}}>
                                <span style={{width: '1rem', display: 'inline-block'}} role="img">
                                    {color === colorOpt[1] ? '✓ ' : ' '}
                                </span>
                                {colorOpt[0]}
                            </div>
                        </Option>
                    )
                )}
            </Select>

            {/* Clothes */}
            <Select value={clothes} style={{width: '120px'}} onChange={val => setClothes(val)} optionLabelProp="label">
                {clothesOptions.map(clothOpt => (
                    <Option value={clothOpt} label={clothOpt} key={`cloth-${clothOpt}`}>
                        <div style={{textAlign: 'left'}}>
                            <span style={{width: '1rem', display: 'inline-block'}} role="img">
                                {clothes === clothOpt ? '✓ ' : ' '}
                            </span>
                            {clothOpt}
                        </div>
                    </Option>
                ))}
            </Select>

            {/* Pose */}
            <Select
                value={pose}
                style={{width: '150px'}}
                onChange={val => setPose(val)}
                optionLabelProp="label"
                defaultValue={poseOptions[0]}
            >
                {poseOptions.map((poseOpt, index) => (
                    <Option value={poseOpt} label={poseOpt} key={`pose-${index}`}>
                        <div style={{textAlign: 'left'}}>
                            <span style={{width: '1rem', display: 'inline-block'}} role="img">
                                {pose === poseOpt ? '✓ ' : ' '}
                            </span>
                            {poseOptions[index]}
                        </div>
                    </Option>
                ))}
            </Select>
            <div>
                {path === '' ? <img src={'https://emily.louie.ca/handz/Black-in-Basic1.png'} /> : <img src={path} />}
            </div>
            <button onClick={sendData}>Finish Personalization</button>
        </>
    );
};

export default AddHand;
