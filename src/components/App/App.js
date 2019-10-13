import React from 'react';
// import logo from './logo.svg';
import DatePicker from '../DatePicker/DatePicker';
import DailyInformation from '../DailyInformation/DailyInformation';
import './App.css';
import { debounce } from 'throttle-debounce';

class App extends React.Component {
    state = {
        date: new Date(),
        info: {}
    };
    changeDate = (date) => {
        this.setState({ date });
    };
    debouncedInfoUpdate = debounce(1000, (name, value) => {
        this.setState({
            info: {
                ...this.state.info,
                [name]: value
            }
        });
    })
    changeInfo = name => event => {
        const value = event.target.value;
        this.debouncedInfoUpdate(name, value);
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                  Track Me
                </header>
                <div className='app-body'>
                    <DatePicker 
                        value={this.state.date}
                        onChange={this.changeDate}
                    />
                    <div>
                        <p>Below is proof that the debounce function is working!</p>
                        <span>{this.state.info.numHoursSleep}</span>
                    </div>
                    <DailyInformation 
                        date={this.state.date}
                        onChange={this.changeInfo}
                    />
                </div>
            </div>
        );
    }
}

export default App;
