// Filters.js
import React from 'react';
import TextField from '@mui/material/TextField';

const Filters = ({ filters, handleFilterChange }) => {
  return (
    <div className="filters">
      <TextField
        label="Name"
        value={filters.name}
        onChange={(e) => handleFilterChange('name', e.target.value)}
      />
      <TextField
        label="ISO Code"
        value={filters.code}
        onChange={(e) => handleFilterChange('code', e.target.value)}
      />
      <TextField
        label="Population"
        value={filters.population}
        onChange={(e) => handleFilterChange('population', e.target.value)}
      />
      <TextField
        label="Size (km²)"
        value={filters.size}
        onChange={(e) => handleFilterChange('size', e.target.value)}
      />
    </div>
  );
};

export default Filters;
