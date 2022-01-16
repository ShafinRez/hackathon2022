//reference: https://onestepcode.com/creating-a-material-ui-form/

import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import './App.css';


const defaultValues = {
  task: "",
  numberofHours: 0,
  priority: "",
};

export default function UserForm(){
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => { const { name, value } = e.target;
                                        setFormValues({
                                            ...formValues,
                                            [name]: value,
                                        });
                                        };

  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
    <div class="rectangle">
      <Grid >
        <h1> Please Input tasks </h1> 
        <Grid item class = "formtextName">
          <TextField 
            id="task-input"
            name="task"
            label="Task Name"
            type="text"
            value={formValues.task}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField 
            id="numberofHours-input"
            name="numberofHours"
            label="Number of hours required"
            type="number"
            value={formValues.numberofHours}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <FormControl >
            <FormLabel class = "formtextName">Is it a Priority? </FormLabel>
            <RadioGroup
              name="priority"
              value={formValues.priority}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel 
                key="yes"
                value="yes"
                control={<Radio size="small" />}
                label="yes"
              />
              <FormControlLabel
                key="no"
                value="no"
                control={<Radio size="small" />}
                label="no"
              />
              <FormControlLabel
                key="maybe"
                value="maybe"
                control={<Radio size="small" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
      </div>
    </form>
  );
};