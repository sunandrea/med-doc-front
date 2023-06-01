import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import { useState } from 'react';

export default function BasicSelect({ styles, title, filter, sortDoctors }) {
    const [param, setParam] = useState('');

    const handleChange = event => {
        const selectedValue = event.target.value;
        setParam(selectedValue);
        sortDoctors(selectedValue);
    };

    return (
        <FormControl>
            <InputLabel variant="outlined" color="primary" id="select-label">
                {title}
            </InputLabel>
            <Select
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: '16px', ...styles }}
                labelId="select-label"
                value={param}
                onChange={handleChange}
            >
                {filter.map(item => {
                    return (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
}
