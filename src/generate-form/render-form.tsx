import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { DividendJOPPD, SalaryJOPPD } from './form';
import { authHttp } from '../shared/http';
import { useSnackbar } from 'notistack';
import { Redirect, Switch } from 'react-router';


export const RenderForm: React.FC<{ formType: string }> = ({ formType }) => {
    const useStyles = makeStyles({
        input: {
            margin: '10px',
            width: '200px',
        },
        formLayout: {
            display: 'flex',
            flexDirection: 'column',
        },
        btnSubmit: {
            marginTop: '30px',
            alignSelf: 'center',
        },

    });
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    const [redirection, setRedirection] = useState(false);

    const [formDate, setFormDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [paymentDate, setPaymentDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [startDate, setStartDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [endDate, setEndDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [amount, setAmount] = React.useState();
    const [currency, setCurrency] = React.useState();
    const [salaryMonth, setSalaryMonth] = React.useState();

    function handleFormDate(date: any) {
        setFormDate(date);
    }
    function handlePaymentDate(date: any) {
        setPaymentDate(date);
    }
    function handleStartDate(date: any) {
        setStartDate(date);
    }
    function handleEndDate(date: any) {
        setEndDate(date);
    }
    function handleChangeAmount(e: any) {
        setAmount(e.target.value);
    }
    function handleChangeCurrency(e: any) {
        setCurrency(e.target.value);
    }
    function handleChangeSalaryMonth(e: any) {
        setSalaryMonth(e.target.value);
    }

    function handleSubmitForDividend(event: any) {
        event.preventDefault();
        const form = {
            formType: 'DIVIDEND_JOPPD',
            formDate: formDate.toDateString(),
            paymentDate: paymentDate.toDateString(),
            startDate: startDate.toDateString(),
            endDate: endDate.toDateString(),
            amount: amount,
            currency: currency
        }
        sendRequest(form);
    }
    function handleSubmitForSalary(event: any) {
        event.preventDefault();
        const form = {
            formType: 'SALARY_JOPPD',
            formDate: formDate.toDateString(),
            paymentDate: paymentDate.toDateString(),
            amount: amount,
            currency: currency,
            salaryMonth: salaryMonth
        }
        sendRequest(form);

    }
    function sendRequest(form: DividendJOPPD | SalaryJOPPD) {
        authHttp.post(`api/forms/${form.formType}`, form)
            .then( () => {
                setRedirection(true);
                enqueueSnackbar('Saved successfully.',{ autoHideDuration: 1000 })
            }

            )
            .catch(() =>
                enqueueSnackbar('Error. Failed to generate form.',{ autoHideDuration: 3000 })
            )
    }
    function navigate() {
        return(
            <Switch>
                <Redirect to="/dashboard"/>
            </Switch>
        );

    }

    switch (formType) {
        case 'DividendJOPPD':
            return (
                <form className={classes.formLayout} onSubmit={handleSubmitForDividend}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            className={classes.input}
                            id="formDate"
                            name="formDate"
                            label="Form date"
                            value={formDate}
                            onChange={handleFormDate}
                            required
                        />
                        <KeyboardDatePicker
                            className={classes.input}
                            id="paymentDate"
                            name="paymentDate"
                            label="Payment date"
                            value={paymentDate}
                            onChange={handlePaymentDate}
                            required
                        />
                        <TextField
                            className={classes.input}
                            id="amount"
                            name="amount"
                            label="Amount"
                            type="number"
                            required
                            onChange={handleChangeAmount}

                        />
                        <TextField
                            className={classes.input}
                            id="currency"
                            name="currency"
                            label="Currency"
                            type="text"
                            required
                            onChange={handleChangeCurrency}
                        />
                        <KeyboardDatePicker
                            className={classes.input}
                            id="startDate"
                            name="startDate"
                            label="Start date"
                            value={startDate}
                            onChange={handleStartDate}
                            required
                        />
                        <KeyboardDatePicker
                            className={classes.input}
                            id="endDate"
                            name="endDate"
                            label="End date"
                            value={endDate}
                            onChange={handleEndDate}
                            required
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
                        {redirection && navigate()}
                    </MuiPickersUtilsProvider>
                </form>

            );
        case 'SalaryJOPPD':
            return (
                <form className={classes.formLayout} onSubmit={handleSubmitForSalary}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            className={classes.input}
                            id="formDate"
                            name="formDate"
                            label="Form date"
                            value={formDate}
                            onChange={handleFormDate}
                            required
                        />
                        <KeyboardDatePicker
                            className={classes.input}
                            id="paymentDate"
                            name="paymentDate"
                            label="Payment date"
                            value={paymentDate}
                            onChange={handlePaymentDate}
                            required
                        />
                        <TextField
                            className={classes.input}
                            id="amount"
                            name="amount"
                            label="Amount"
                            type="number"
                            required
                            onChange={handleChangeAmount}
                        />
                        <TextField
                            className={classes.input}
                            id="currency"
                            name="currency"
                            label="Currency"
                            type="text"
                            required
                            onChange={handleChangeCurrency}
                        />
                        <TextField
                            className={classes.input}
                            id="salaryMonth"
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
                        {redirection && navigate()}
                    </MuiPickersUtilsProvider>
                </form>
            );
        default:
            return null;

    }
}
