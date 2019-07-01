import React, { ChangeEvent } from 'react';
import { FormControl, InputLabel, MenuItem, Select, makeStyles } from '@material-ui/core';
import { RenderForm } from './render-form';
import { RouteComponentProps } from 'react-router';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '50px',
    alignItems: 'center'
  },
  formControl: {
    width: '200px'
  },
  input: {
    margin: '10px'
  }
});

export const GenerateForm: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();

  const [formType, setFormType] = React.useState('');

  const onChange = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    setFormType(event.target.value as string);
  };

  return (
    <div className={classes.container}>
      <form className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-form-type">Select form type</InputLabel>
          <Select
            value={formType}
            onChange={onChange}
            inputProps={{
              name: 'formType',
              id: 'select-form-type'
            }}
          >
            <MenuItem value="SalaryJOPPD">Salary JOPPD</MenuItem>
            <MenuItem value="DividendJOPPD">Dividend JOPPD</MenuItem>
          </Select>
        </FormControl>
      </form>
      <RenderForm formType={formType} history={history} />
    </div>
  );
};
