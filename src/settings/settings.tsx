import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '50px',
    },
    margin: {
        margin: '0 2px',
    },
    btnSubmit: {
        marginTop: '30px',
        textAlign: 'center',
    },
});
const classes=useStyles();

export const Settings: React.FC = () => {
    return(
        <form className={classes.container}>
            <div className="personalSettings">
                <h2>Personal</h2>
                <TextField
                    type="number"
                    label="OIB"
                    required
                    className={classes.margin}
                />
                <TextField
                    type="text"
                    label="Street Name"
                    required
                    className={classes.margin}
                />
                <TextField
                    type="text"
                    label="Street Number"
                    required
                    className={classes.margin}
                />
                <TextField
                    type="text"
                    label="Postcode"
                    required
                    className={classes.margin}
                />
                <TextField
                    type="text"
                    label="City"
                    required
                    className={classes.margin}
                />
            </div>
            <div className="citySettings">
                <h2>City</h2>
                <TextField
                    type="text"
                    label="Name"
                    required
                    className={classes.margin}
                />
                <TextField
                    type="text"
                    label="IBAN"
                    required
                    className={classes.margin}
                />
                <TextField
                    type="text"
                    label="Code"
                    required
                    className={classes.margin}
                />
                <TextField
                    type="number"
                    label="Surtax"
                    placeholder='e.g. 20% = 0.20'
                    required
                    className={classes.margin}
                />
            </div>
            <div className="companySettings">
                <h2>Company</h2>
                <TextField
                    type="number"
                    label="OIB"
                    required
                    className={classes.margin}
                />
                <TextField
                    type="email"
                    label="E-mail"
                    required
                    className={classes.margin}
                />
                <TextField
                    type="text"
                    label="Name"
                    required
                    className={classes.margin}
                />
                <TextField
                    type="text"
                    label="Street"
                    required
                    className={classes.margin}
                />
                <TextField
                    type="text"
                    label="City"
                    required
                    className={classes.margin}
                />
            </div>
            <div className="salarySettings">
                <h2>Salary</h2>
                <TextField
                    type="number"
                    label="Amount"
                    required
                    className={classes.margin}
                />
                <TextField
                    type="text"
                    label="Currency"
                    required
                    className={classes.margin}
                />
                <TextField
                    type="number"
                    label="Non Taxable Amount"
                    required
                    className={classes.margin}
                />
                <TextField
                    type="number"
                    label="Tax"
                    required
                    className={classes.margin}
                    placeholder='e.g. 20% = 0.20'
                />
                <div>
                    <h5>Contributions</h5>
                    <TextField
                        type="number"
                        label="Health Insurance"
                        required
                        className={classes.margin}
                        placeholder='e.g. 20% = 0.20'
                    />
                    <TextField
                        type="number"
                        label="Work Safety"
                        required
                        className={classes.margin}
                        placeholder='e.g. 20% = 0.20'
                    />
                    <TextField
                        type="number"
                        label="Employment"
                        required
                        className={classes.margin}
                        placeholder='e.g. 20% = 0.20'
                    />
                    <TextField
                        type="number"
                        label="Pension Pillar 1"
                        required
                        className={classes.margin}
                        placeholder='e.g. 20% = 0.20'
                    />
                    <TextField
                        type="number"
                        label="Pension Pillar 2"
                        required
                        className={classes.margin}
                        placeholder='e.g. 20% = 0.20'
                    />
                </div>
            </div>
            <div className="dividendSettings">
                <h2>Dividend</h2>
                <TextField
                    type="number"
                    label="Tax"
                    required
                    className={classes.margin}
                    placeholder='e.g. 20% = 0.20'
                />
            </div>
            <div className={classes.btnSubmit}>
                <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                >
                    Save Changes
                </Button>
            </div>
        </form>
    );
}
