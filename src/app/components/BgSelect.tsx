import * as React from 'react';

import {ChromePicker} from 'react-color';

export interface BgSelectProps {
    nextStep: () => void;
}

const BgSelect: React.SFC<BgSelectProps> = (Props: BgSelectProps) => {
    const [background, setBackground] = React.useState<string>('ffffff');

    const onBgSelect = () => {
        parent.postMessage({pluginMessage: {type: 'setBg', color: background}}, '*');
        Props.nextStep();
    };

    return (
        <>
            <ChromePicker color={background} onChangeComplete={color => setBackground(color.hex)} disableAlpha={true} />
            <button onClick={onBgSelect}>Select a Colour</button>
        </>
    );
};

export default BgSelect;
