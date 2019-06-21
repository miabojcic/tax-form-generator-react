import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    function handleDateChange(date: any) {
        setSelectedDate(date);
    }
    switch (formType) {
        case 'DividendJOPPD':
            return (
                <form className={classes.formLayout}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            className={classes.input}
                            id="formDate"
                            name="formDate"
                            label="Form date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            required
                        />
                        <KeyboardDatePicker
                            className={classes.input}
                            id="paymentDate"
                            name="paymentDate"
                            label="Payment date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            required
                        />
                        <TextField
                            className={classes.input}
                            id="amount"
                            name="amount"
                            label="Amount"
                            type="number"
                            required
                        />
                        <TextField
                            className={classes.input}
                            id="currency"
                            name="currency"
                            label="Currency"
                            type="text"
                            required
                        />
                        <KeyboardDatePicker
                            className={classes.input}
                            id="startDate"
                            name="startDate"
                            label="Start date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            required
                        />
                        <KeyboardDatePicker
                            className={classes.input}
                            id="endDate"
                            name="endDate"
                            label="End date"
                            value={selectedDate}
                            onChange={handleDateChange}
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
                    </MuiPickersUtilsProvider>
                </form>

            );
        case 'SalaryJOPPD':
            return (
                <form className={classes.formLayout}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            className={classes.input}
                            id="formDate"
                            name="formDate"
                            label="Form date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            required
                        />
                        <KeyboardDatePicker
                            className={classes.input}
                            id="paymentDate"
                            name="paymentDate"
                            label="Payment date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            required
                        />
                        <TextField
                            className={classes.input}
                            id="amount"
                            name="amount"
                            label="Amount"
                            type="number"
                            required
                        />
                        <TextField
                            className={classes.input}
                            id="currency"
                            name="currency"
                            label="Currency"
                            type="text"
                            required
                        />
                        <TextField
                            className={classes.input}
                            id="salaryMonth"
                            name="salaryMonth"
                            label="Salary Month"
                            type="text"
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
                    </MuiPickersUtilsProvider>
                </form>
            );
        default:
            return null;

    }
}
