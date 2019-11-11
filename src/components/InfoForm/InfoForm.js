import React from 'react';
import { debounce } from 'throttle-debounce';

import { MOOD, NUM_HOURS_SLEEP } from '../../constants';
import Buttons from './Buttons';
import './InfoForm.scss';

export default class InfoForm extends React.Component {
    state = this.props.data;

    debouncedInfoUpdate = debounce(120, (name, value) => {
        this.setState({ [name]: value });
    });
    
    onChange = name => event => {
        const value = event.target.value;
        this.debouncedInfoUpdate(name, value);
    };

    onReset = () => {
        this.setState(this.props.data);
    };

    onClear = () => {
        this.setState({
            key: !this.state.key,
            numHoursSleep: '0',
            mood: ''
        });
    };

    onSave = () => {
        console.log('are you sure ou want to save this data? ', this.state);
    };

    onSubmit = e => {
        e.preventDefault();
    };
    
    render() {
        const { numHoursSleep, mood } = this.state;
        return (
            <form key={this.state.key} id='tracking-form' noValidate autoComplete="off" onSubmit={this.onSubmit}>
                <div>
                    START BY READING THE TODOS (txt file) !!!!!
                    <label htmlFor='num-hours-sleep-input'>
                        Number Hours of Sleep
                    </label>
                    <input
                        id='num-hours-sleep-input'
                        type='text'
                        defaultValue={numHoursSleep}
                        placeholder='numHoursSleepInput'
                        onChange={this.onChange(NUM_HOURS_SLEEP)}
                        margin="normal"
                    />
                </div>
                <div>
                    <label htmlFor='mood-input'>
                        Describe your Mood
                    </label>
                    <textarea
                        id='mood-input'
                        onChange={this.onChange(MOOD)}
                        placeholder='Describe your mood.'
                        defaultValue={mood}
                    />
                </div>
                <Buttons
                    onReset={this.onReset}
                    onClear={this.onClear}
                    onSave={this.onSave}    
                />
            </form>
        );
    }
}