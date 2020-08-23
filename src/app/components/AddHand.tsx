import * as React from 'react';
import '../styles/ui.css';
import {Select} from 'antd';
import {addHand} from './utils';

const {Option} = Select;

export interface AddHandProps {
    nextStep: () => void;
}

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
    const [clothes, setClothes] = React.useState<string>('Basic');
    const [pose, setPose] = React.useState<string>('1');
    const [path, setPath] = React.useState<string>('');

    React.useEffect(() => {
        setPath(`https://emily.louie.ca/handz/${color}-in-${clothes}${pose}.png`);
    }, [color, clothes, pose]);

    function sendData() {
        addHand(color, clothes, pose, true);
        Props.nextStep();
    }

    return (
        <>
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
            <Select value={pose} style={{width: '150px'}} onChange={val => setPose(val)} optionLabelProp="label">
                {poseOptions.map((poseOpt, index) => (
                    <Option value={index + 1} label={poseOpt} key={`pose-${index}`}>
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
            <button onClick={sendData}>Select thumb</button>
        </>
    );
};

export default AddHand;
