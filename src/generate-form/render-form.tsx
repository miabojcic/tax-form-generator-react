import React, { ChangeEvent, FormEvent } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { DividendJOPPD, SalaryJOPPD } from './form';
import { authHttp } from '../shared/http';
import { useSnackbar } from 'notistack';
import * as H from 'history';

const useStyles = makeStyles({
  input: {
    margin: '10px',
    width: '200px'
  },
  formLayout: {
    display: 'flex',
    flexDirection: 'column'
  },
  btnSubmit: {
    marginTop: '30px',
    alignSelf: 'center'
  }
});

export const RenderForm: React.FC<{ formType: string; history: H.History }> = ({
  formType,
  history
}) => {
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();

  const [formDate, setFormDate] = React.useState(new Date());
  const [paymentDate, setPaymentDate] = React.useState(new Date());
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [amount, setAmount] = React.useState();
  const [currency, setCurrency] = React.useState();
  const [salaryMonth, setSalaryMonth] = React.useState();

  const handleFormDate = (date: any) => {
    setFormDate(date);
  };

  const handlePaymentDate = (date: any) => {
    setPaymentDate(date);
  };

  const handleStartDate = (date: any) => {
    setStartDate(date);
  };

  const handleEndDate = (date: any) => {
    setEndDate(date);
  };

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleChangeCurrency = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrency(e.target.value);
  };

  const handleChangeSalaryMonth = (e: ChangeEvent<HTMLInputElement>) => {
    setSalaryMonth(e.target.value);
  };

  const handleSubmitForDividend = (event: FormEvent) => {
    event.preventDefault();
    const form = {
      formType: 'DIVIDEND_JOPPD',
      formDate: formDate.toDateString(),
      paymentDate: paymentDate.toDateString(),
      startDate: startDate.toDateString(),
      endDate: endDate.toDateString(),
      amount: amount,
      currency: currency
    };
    sendRequest(form);
  };

  const handleSubmitForSalary = (event: FormEvent) => {
    event.preventDefault();
    const form = {
      formType: 'SALARY_JOPPD',
      formDate: formDate.toDateString(),
      paymentDate: paymentDate.toDateString(),
      amount: amount,
      currency: currency,
      salaryMonth: salaryMonth
    };
    sendRequest(form);
  };

  const sendRequest = (form: DividendJOPPD | SalaryJOPPD) => {
    authHttp
      .post(`api/forms/${form.formType}`, form)
      .then(() => {
        enqueueSnackbar('Saved successfully.', { autoHideDuration: 1000 });
        history.push('/dashboard');
      })
      .catch(() =>
        enqueueSnackbar('Error. Failed to generate form.', {
          autoHideDuration: 3000
        })
      );
  };

  switch (formType) {
    case 'DividendJOPPD':
      return (
        <form className={classes.formLayout} onSubmit={handleSubmitForDividend}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.input}
              name="formDate"
              label="Form date"
              value={formDate}
              onChange={handleFormDate}
              required
            />
            <KeyboardDatePicker
              className={classes.input}
              name="paymentDate"
              label="Payment date"
              value={paymentDate}
              onChange={handlePaymentDate}
              required
            />
          </MuiPickersUtilsProvider>
          <TextField
            className={classes.input}
            name="amount"
            label="Amount"
            type="number"
            required
            onChange={handleChangeAmount}
          />
          <TextField
            className={classes.input}
            name="currency"
            label="Currency"
            type="text"
            required
            onChange={handleChangeCurrency}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.input}
              name="startDate"
              label="Start date"
              value={startDate}
              onChange={handleStartDate}
              required
            />
            <KeyboardDatePicker
              className={classes.input}
              name="endDate"
              label="End date"
              value={endDate}
              onChange={handleEndDate}
              required
            />
          </MuiPickersUtilsProvider>
          <div className={classes.btnSubmit}>
            <Button
              variant="contained"
              size="medium"
              color="secondary"
              type="submit"
            >
              Generate
            </Button>
          </div>
        </form>
      );
    case 'SalaryJOPPD':
      return (
        <form className={classes.formLayout} onSubmit={handleSubmitForSalary}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.input}
              name="formDate"
              label="Form date"
              value={formDate}
              onChange={handleFormDate}
              required
            />
            <KeyboardDatePicker
              className={classes.input}
              name="paymentDate"
              label="Payment date"
              value={paymentDate}
              onChange={handlePaymentDate}
              required
            />
          </MuiPickersUtilsProvider>
          <TextField
            className={classes.input}
            name="amount"
            label="Amount"
            type="number"
            required
            onChange={handleChangeAmount}
          />
          <TextField
            className={classes.input}
            name="currency"
            label="Currency"
            type="text"
            required
            onChange={handleChangeCurrency}
          />
          <TextField
            className={classes.input}
            name="salaryMonth"
            label="Salary Month"
            type="text"
            required
            onChange={handleChangeSalaryMonth}
          />
          <div className={classes.btnSubmit}>
            <Button
              variant="contained"
              size="medium"
              color="secondary"
              type="submit"
            >
              Generate
            </Button>
          </div>
        </form>
      );
    default:
      return null;
  }
};
