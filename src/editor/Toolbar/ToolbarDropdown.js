import React from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';

export const ToolbarDropdown = ({ title, value, onChange, children }) => {
  return (
    <FormControl>
      <InputLabel>{title}</InputLabel>
      <Select native value={value} onChange={(e) => onChange(e.target.value)}>
        {children}
      </Select>
    </FormControl>
  );
};
