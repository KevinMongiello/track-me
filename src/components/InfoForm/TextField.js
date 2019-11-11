import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export default styled(TextField)`
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
    .MuiInputBase-input {
        color: white;
    }
`;