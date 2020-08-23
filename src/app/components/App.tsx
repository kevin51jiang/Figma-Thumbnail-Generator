import * as React from 'react';

import '../styles/ui.css';
import SelectFrames from './SelectFrames';
import BgSelect from './BgSelect';
import AddHand from './AddHand';

import 'antd/dist/antd.css';
import ContribList from './ContribList';

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
    const [step, setStep] = React.useState(1);
    const [sessionEntries, setSessionEntries] = React.useState([]);

    const nextStep = () => setStep(step + 1);

    return (
        <div>
            {/* <h1>Step {step}</h1> */}
            {step == 1 && <SelectFrames nextStep={nextStep} />}
            {step == 2 && (
                <ContribList nextStep={nextStep} skip2Steps={() => setStep(step + 2)} sessionEntries={sessionEntries} />
            )}
            {step == 3 && (
                <AddHand
                    nextStep={nextStep}
                    prevStep={() => setStep(step - 1)}
                    sessionEntries={sessionEntries}
                    setSessionEntries={setSessionEntries}
                />
            )}
            {step == 4 && <BgSelect />}
        </div>
    );
};

export default App;
