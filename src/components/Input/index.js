import React from 'react';
import { TextField } from "@material-ui/core";

export default function Input({placeHolder, onChange, helperText, error, onBlur}) {
    return (
        <>
            <TextField 
                id="standard-basic" 
                label={placeHolder} 
                fullWidth={true}
                margin='normal'
                helperText={helperText}
                onChange={onChange}
                error={error}
                onBlur={onBlur}
            />
        </>
    );
}
