import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth(props) {
  // const [day, setDay] = React.useState('');

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth:300 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Day</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={(e)=> props.targetfu(e.target.value)}
          autoWidth
          label="Day"
        >
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={7}>every day</MenuItem>
          
        </Select>
      </FormControl>
    </div>
  );
}
