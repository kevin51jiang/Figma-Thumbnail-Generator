import * as React from 'react';

import '../styles/ui.css';
import SelectFrames from './SelectFrames';
import BgSelect from './BgSelect';
import CreateThumbnail from './CreateThumbnail';

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
    const [step, setStep] = React.useState(1);

    const nextStep = () => setStep(step + 1);

    return (
        <div>
            <h1>Thumbnail Creator Step {step}</h1>
            {step == 1 && <SelectFrames nextStep={nextStep} />}
            {step == 2 && <BgSelect nextStep={nextStep} />}
            {step == 3 && <CreateThumbnail />}
        </div>
    );
};

export default App;
