import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ProductCategory() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"90px"}}
    >
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="electronics">Electronics</ToggleButton>
      <ToggleButton value="food">Food</ToggleButton>
      <ToggleButton value="footwear">Footwear</ToggleButton>
      <ToggleButton value="vehicles">Vehicles</ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}