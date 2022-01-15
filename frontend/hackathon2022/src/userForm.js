import React, { useState } from "react";
import { Grid} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";


const initialFValues = {
    id: 0,
    availability: '',
    fullName: '',
    email: '',
    mobile: '',
    task: '',
    deadline: new Date(),
    isDone: false,
    hoursneeded: '',
}
export default function userForm(){
	const [values, setValues] = useState({
                                            id: 0,
                                            availability: '',
                                            fullName: '',
                                            email: '',
                                            mobile: '',
                                            task: '',
                                            deadline: new Date(),
                                            isDone: false,
                                            hoursneeded: '',
                                        });

	return(
	    <form>
        <Grid container>
                <Grid item xs={6}>
                    <TextField
                    variant = "outlined"
                    label = "fullName"
                    value = {values.fullName}
                    />
                    <TextField
                    variant = "outlined"
                    label = "email"
                    value = {values.email}
                    />
                    <TextField
                    label="Mobile"
                    name="mobile"
                    value={values.mobile}
                    />
                    <TextField
                    label="Task"
                    name="task"
                    value={values.task}
                    />
                    <TextField
                    label="availability"
                    name="availability"
                    value={values.availability}
                    />
                    <TextField
                    label="hoursneeded"
                    name="hoursneeded"
                    value={values.hoursneeded}
                    />
                    </Grid>
                <Grid item xs={6}></Grid>
                </Grid>     
	            </form> 
	)
}