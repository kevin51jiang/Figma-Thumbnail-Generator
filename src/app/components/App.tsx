import * as React from 'react';
import {Component} from 'react';
import {ChromePicker} from 'react-color';
import '../styles/ui.css';

export default class App extends Component<{}, {step: any; background: any}> {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            background: 'ffffff',
        };
    }

    nextStep = () => {
        this.setState({
            step: this.state.step + 1,
        });
    };

    onCreateThumbnail = () => {
        parent.postMessage({pluginMessage: {type: 'newPage'}}, '*');
        this.setState({
            step: this.state.step + 1,
        });
    };

    onBgSelection = () => {
        parent.postMessage({pluginMessage: {type: 'setBg', color: this.state.background}}, '*');
        this.setState({
            step: this.state.step + 1,
        });
    };

    onFinish = () => {
        parent.postMessage({pluginMessage: {type: 'finish'}}, '*');
    };

    handleChangeComplete = color => {
        this.setState({background: color.hex});
    };

    render() {
        let {step} = this.state;
        return (
            <div>
                <h1>Thumbnail Creator Step {step}</h1>
                {step == 1 && (
                    <>
                        <h2>Select Two Frames</h2>
                        <button onClick={this.onCreateThumbnail}>Create Thumbnail</button>
                    </>
                )}
                {step == 2 && (
                    <>
                        <ChromePicker
                            color={this.state.background}
                            onChangeComplete={this.handleChangeComplete}
                            disableAlpha={true}
                        />
                        <button onClick={this.onBgSelection}>Select a Colour</button>
                    </>
                )}
                {step == 3 && (
                    <>
                        <button onClick={this.onFinish}>Done</button>
                    </>
                )}
            </div>
        );
    }
}
