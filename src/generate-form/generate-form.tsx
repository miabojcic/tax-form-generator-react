import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { RenderForm } from './render-form';


export const GenerateForm: React.FC = () => {
    const useStyles = makeStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            margin: '50px',
            alignItems: 'center',
        },
        formControl: {
            width: '200px',
        },
        input: {
            margin: '10px',
        },
    });

    const classes = useStyles();
    const [formType, setFormType] = React.useState('');
    function handleChange(event: any) {
        setFormType(event.target.value);
    }
    return(
        <div className={classes.container}>
            <form className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-form-type">Select form type</InputLabel>
                    <Select
                        value={formType}
                        onChange={handleChange}
                        inputProps={{
                            name: 'formType',
                            id: 'select-form-type',
                        }}
                    >
                        <MenuItem value="SalaryJOPPD">Salary JOPPD</MenuItem>
                        <MenuItem value="DividendJOPPD">Dividend JOPPD</MenuItem>
                    </Select>
                </FormControl>

            </form>
            <RenderForm formType={formType}/>
        </div>
    );
}
