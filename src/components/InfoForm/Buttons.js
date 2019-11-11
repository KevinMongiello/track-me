import React from 'react';

export default function Buttons({ onSave, onReset, onClear }) {
    return (
        <div id='form-actions-panel' className='flex'>
            <button onClick={onReset}>
                Reset
            </button>
            <button onClick={onClear}>
                Clear
            </button>
            <button onClick={onSave}>
                Save
            </button>
        </div>
    );
}