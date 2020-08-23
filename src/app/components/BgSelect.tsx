import * as React from 'react';

import {ChromePicker} from 'react-color';

export interface BgSelectProps {
    // nextStep: () => void;
}

const BgSelect: React.SFC<BgSelectProps> = () => {
    const [background, setBackground] = React.useState<string>('CFE2E3');

    const onBgSelect = () => {
        parent.postMessage({pluginMessage: {type: 'setBgAndFinish', color: background}}, '*');
    };

    return (
        <>
            <h2>Select your background colour</h2>
            <ChromePicker color={background} onChangeComplete={color => setBackground(color.hex)} disableAlpha={true} />
            <button onClick={onBgSelect}>Create Thumbnail</button>
        </>
    );
};

export default BgSelect;
