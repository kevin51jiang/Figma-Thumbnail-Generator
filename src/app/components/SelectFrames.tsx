import * as React from 'react';

export interface SelectFramesProps {
    nextStep: () => void;
}

const SelectFrames: React.SFC<SelectFramesProps> = (Props: SelectFramesProps) => {
    const createThumbnail = () => {
        parent.postMessage({pluginMessage: {type: 'newPage'}}, '*');
        Props.nextStep();
    };

    return (
        <>
            <h2>Select Two Frames</h2>
            <button onClick={createThumbnail}>Start</button>
        </>
    );
};

export default SelectFrames;
