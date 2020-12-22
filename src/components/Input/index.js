import React from 'react';
import { TextField } from "@material-ui/core";

export default function Input({id, placeHolder, onChange, helperText, error, onBlur, type}) {
    return (
        <>
            <TextField 
                id={id}
                label={placeHolder} 
                fullWidth={true}
                margin='normal'
                helperText={helperText}
                onChange={onChange}
                error={error}
                onBlur={onBlur}
                type={type}
            />
        </>
    );
}
