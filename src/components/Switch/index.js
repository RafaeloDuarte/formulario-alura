import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';

export default function SwitchComponent({ checked, onChange: toggleChecked }) {
    return (
        <FormControlLabel
            control={
                <Switch 
                    checked={checked} 
                    onChange={toggleChecked} />
                }
            label="Normal"
        />
    );
}
