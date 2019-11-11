import React from 'react';
import DatePicker from '../DatePicker/DatePicker';
import InfoForm from '../InfoForm/InfoForm';
import './App.css';
import formatDate from 'date-fns/format';

import { MOOD, NUM_HOURS_SLEEP } from '../../constants';

const getHumanDate = (date = new Date()) => formatDate(date, 'yyyy-MM-dd');
const getComputerDate = (date = new Date()) => formatDate(date, "yyyy-MM-dd'T'HH:mm:ssxxx");
const makeDateFromTruncatedString = str => new Date(str);

class App extends React.Component {
    state = {
        selectedDate: new Date(),
        data: {
            [getHumanDate()]: {
                [NUM_HOURS_SLEEP]: 0,
                [MOOD]: ''
            }
        },
    };

    // Will need to asynchronously
    // connect to a database
    componentDidMount() {
        console.log('state: ', this.state.selectedDate);
        this.fetchDataFromApi()
            .then(data => {
                this.setState({ data });
            });
    }
    fetchDataFromApi = () => {
        return Promise.resolve({
            '2019-10-27': {
                [NUM_HOURS_SLEEP]: 8,
                [MOOD]: 'Mixed'
            }
        })
    };

    changeDate = (selectedDate) => {
        this.setState({ selectedDate });
    };

    goToToday = () => {
        this.changeDate(new Date());
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log('submitted with this data: ', this.state.data)
    };

    render() {
        const humanSelectedDate = getHumanDate(this.state.selectedDate);
        const isToday = humanSelectedDate === getHumanDate();
        const data = this.state.data[humanSelectedDate];
        return (
            <div className="App">
                <header className="App-header">
                  Track Me
                </header>
                <div className='app-body'>
                    <div className='control-panel'>
                        <DatePicker 
                            date={makeDateFromTruncatedString(this.state.selectedDate)}
                            onChange={this.changeDate}
                        />
                        <button 
                            name='go-to-today-button'
                            disabled={isToday}
                            onClick={this.goToToday}>
                                Go To Today
                        </button>
                    </div>
                    <InfoForm 
                        onSubmit={this.onSubmit}
                        onChange={this.changeInfo}
                        data={data}
                    />
                </div>
            </div>
        );
    }
}

export default App;
