import React from 'react';

import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const StyledFormControl = styled(FormControl)`\
    &.MuiFormControl-root {
        color: white;
        width: 160px;
    }

    .MuiInput-formControl {
        color: white;
    }

    .MuiInputLabel-formControl {
        &, &.Mui-focused {
            color: white;
        }
    }
    .MuiInput-underline {
        &::before, &::after {
            border-bottom-color: pink;
        }
        &:hover:not(.Mui-disabled)::before {
            border-bottom: 2px solid pink;
        }
    }
`;

export default function MuiSelect({ value, onChange }) {
    return (
        <StyledFormControl>
            <InputLabel htmlFor="mood-select-input">Age</InputLabel>
            <Select
                value={value}
                onChange={onChange}
                inputProps={{
                    name: 'mood',
                    id: 'mood-select-input',
                }}
            >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
                <MenuItem value={4}>Four</MenuItem>
                <MenuItem value={5}>Five</MenuItem>
            </Select>
        </StyledFormControl>
    );
}
