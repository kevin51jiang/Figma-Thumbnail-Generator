import * as React from 'react';
import '../styles/ui.css';

export interface AddHandProps {
    nextStep: () => void;
}

const AddHand: React.SFC<AddHandProps> = (Props: AddHandProps) => {
    const [color, setColor] = React.useState<string>('Black');
    const [clothes, setClothes] = React.useState<string>('Basic');
    const [pose, setPose] = React.useState<string>('1');
    const [path, setPath] = React.useState<string>('');

    React.useEffect(() => {
        setPath(`https://emily.louie.ca/handz/${color}-in-${clothes}${pose}.png`);
    }, [color, clothes, pose]);

    const handleColorChange = e => {
        setColor(e.target.value);
    };

    const handleClothesChange = e => {
        setClothes(e.target.value);
    };

    const handlePoseChange = e => {
        setPose(e.target.value);
    };

    function sendData(data) {
        parent.postMessage({pluginMessage: {type: 'addHand', image: data}}, '*');
        Props.nextStep();
    }

    function onHandSelect() {
        // let path = "https://scripter.rsms.me/icon.png";
        fetch(path)
            .then(r => {
                if ((r.status + '')[0] != '2') throw Error(`HTTP ${r.status} ${r.statusText}`);
                return r.arrayBuffer();
                //@ts-ignore
            })
            .then(a => sendData(new Uint8Array(a)), '*')
            .catch(err => console.error('Error occurred:', err));
    }

    // const onHandSelect = () => {
    //     parent.postMessage({pluginMessage: {type: 'addHand', url: path}}, '*');
    //     Props.nextStep();
    // };

    return (
        <>
            <select className="select-menu" onChange={e => handleColorChange(e)}>
                <option value="Black">Black</option>
                <option value="Blue">Blue</option>
                <option value="Brown">Brown</option>
                <option value="Dark-white">Dark White</option>
                <option value="Green">Green</option>
                <option value="Light-Brown">Light Brown</option>
                <option value="Purple">Purple</option>
                <option value="White">White</option>
                <option value="Yellow">Yellow</option>
            </select>
            <select className="select-menu" onChange={e => handleClothesChange(e)}>
                <option value="Basic">Basic</option>
                <option value="Jacket">Jacket</option>
                <option value="Jumper">Jumper</option>
            </select>
            <select className="select-menu" onChange={e => handlePoseChange(e)}>
                <option value="1">Fingers Crossed</option>
                <option value="2">Number One</option>
                <option value="3">High Five</option>
                <option value="4">Vulcan Salute</option>
                <option value="5">Wave</option>
                <option value="6">Okay</option>
                <option value="7">Rock On</option>
                <option value="8">Fist</option>
            </select>
            {/* <img src={require(path)} /> */}
            {path === '' ? <img src={'https://emily.louie.ca/handz/Black-in-Basic1.png'} /> : <img src={path} />}
            <button onClick={onHandSelect}>Select a Colour</button>
        </>
    );
};

export default AddHand;
