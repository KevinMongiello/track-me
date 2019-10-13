import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function DailyInformation({ onChange }) {
    const NUM_HOURS_SLEEP = 'numHoursSleep';
    return (
        <form noValidate autoComplete="off">
            <TextField
                id='numHoursSleepInput'
                label="# Hours of Sleep"
                // className={classes.textField}
                // value={values.name}
                onChange={onChange(NUM_HOURS_SLEEP)}
                margin="normal"
            />
        </form>
    )
}