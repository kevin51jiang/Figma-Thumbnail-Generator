import * as React from 'react';

export interface CreateThumbnailProps {
    // nextStep: () => void;
}

const CreateThumbnail: React.SFC<CreateThumbnailProps> = () => {
    const create = () => {
        parent.postMessage({pluginMessage: {type: 'finish'}}, '*');

        // Make it self close somehow
    };

    return (
        <>
            <button onClick={create}>Create thumbnail</button>
        </>
    );
};

export default CreateThumbnail;
