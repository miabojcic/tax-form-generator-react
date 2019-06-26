import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { SettingsData } from './settings-data';
import { authHttp } from '../shared/http';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    spacing: {
        margin: '0 2px',
    },
    btnSubmit: {
        marginTop: '20px',
        alignSelf: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
    },

});

export const Settings: React.FC = () => {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const [settingsData, setSettingsData] = useState<SettingsData>({
        personal: {
            personalOib: 0,
            streetName: '',
            streetNumber: '',
            postcode: '',
            city: '',
        },
        city: {
            cityName: '',
            cityIban: '',
            cityCode: '',
            surtax: 0,
        },
        company: {
            companyOib: 0,
            companyEmail: '',
            companyName: '',
            companyStreet: '',
            companyCity: '',
        },
        salary: {
            amount: 0,
            currency: '',
            nonTaxableAmount: 0,
            salaryTax: 0,
            healthInsuranceContribution: 0,
            workSafetyContribution: 0,
            employmentContribution: 0,
            pensionPillar1Contribution: 0,
            pensionPillar2Contribution: 0,
        },
        dividend: {
            dividendTax: 0,
        }
    });
    function onChange(e: any) {
        const personal = {...settingsData.personal, [e.target.name]: e.target.value};
        const city = {...settingsData.city, [e.target.name]: e.target.value};
        const company = {...settingsData.company, [e.target.name]: e.target.value};
        const salary = {...settingsData.salary, [e.target.name]: e.target.value};
        const dividend = {...settingsData.dividend, [e.target.name]: e.target.value};
        const data = {
            personal,
            city,
            company,
            salary,
            dividend
        }

        setSettingsData(data);

    }
    function handleSubmit(e: any) {
        e.preventDefault();
        authHttp.post('api/settings', settingsData)
            .then(() => {
                enqueueSnackbar('Saved successfully.',{ autoHideDuration: 3000 });
            })
            .catch( () => {
                enqueueSnackbar('Error. Failed to save settings.',{ autoHideDuration: 3000 });

            })

    }
    useEffect(() => {
        authHttp.get('api/settings').then((response) =>
            setSettingsData(response.data)
        );
    }, []);
    return(
      <div className={classes.container}>
        <form className={classes.form}  onSubmit={handleSubmit}>
            <div className="personalSettings">
                <h2>Personal</h2>
                <TextField
                    name="personalOib"
                    type="number"
                    label="OIB"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {(settingsData.personal && settingsData.personal.personalOib) || ''}
                />
                <TextField
                    name="streetName"
                    type="text"
                    label="Street Name"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {settingsData.personal && settingsData.personal.streetName}
                />
                <TextField
                    name="streetNumber"
                    type="text"
                    label="Street Number"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {settingsData.personal && settingsData.personal.streetNumber}
                />
                <TextField
                    name="postcode"
                    type="text"
                    label="Postcode"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {settingsData.personal && settingsData.personal.postcode}
                />
                <TextField
                    name="city"
                    type="text"
                    label="City"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {settingsData.personal && settingsData.personal.city}
                />
            </div>
            <div className="citySettings">
                <h2>City</h2>
                <TextField
                    name="cityName"
                    type="text"
                    label="Name"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {settingsData.personal && settingsData.city.cityName}
                />
                <TextField
                    name="cityIban"
                    type="text"
                    label="IBAN"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {settingsData.personal && settingsData.city.cityIban}
                />
                <TextField
                    name="cityCode"
                    type="text"
                    label="Code"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {settingsData.personal && settingsData.city.cityCode}
                />
                <TextField
                    name="surtax"
                    type="number"
                    label="Surtax"
                    placeholder='e.g. 20% = 0.20'
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {(settingsData.personal && settingsData.city.surtax) || ''}
                />
            </div>
            <div className="companySettings">
                <h2>Company</h2>
                <TextField
                    name="companyOib"
                    type="number"
                    label="OIB"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {(settingsData.company && settingsData.company.companyOib) || ''}
                />
                <TextField
                    name="companyEmail"
                    type="email"
                    label="E-mail"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {settingsData.company && settingsData.company.companyEmail}
                />
                <TextField
                    name="companyName"
                    type="text"
                    label="Name"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {settingsData.company && settingsData.company.companyName}
                />
                <TextField
                    name="companyStreet"
                    type="text"
                    label="Street"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {settingsData.company && settingsData.company.companyStreet}
                />
                <TextField
                    name="companyCity"
                    type="text"
                    label="City"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {settingsData.company && settingsData.company.companyCity}
                />
            </div>
            <div className="salarySettings">
                <h2>Salary</h2>
                <TextField
                    name="amount"
                    type="number"
                    label="Amount"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {(settingsData.salary && settingsData.salary.amount) || ''}
                />
                <TextField
                    name="currency"
                    type="text"
                    label="Currency"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {settingsData.salary && settingsData.salary.currency}
                />
                <TextField
                    name="nonTaxableAmount"
                    type="number"
                    label="Non Taxable Amount"
                    required
                    className={classes.spacing}
                    onChange={onChange}
                    value = {(settingsData.salary && settingsData.salary.nonTaxableAmount) || ''}
                />
                <TextField
                    name="salaryTax"
                    type="number"
                    label="Tax"
                    required
                    className={classes.spacing}
                    placeholder='e.g. 20% = 0.20'
                    onChange={onChange}
                    value = {(settingsData.salary && settingsData.salary.salaryTax) || ''}
                />
                <div>
                    <h5>Contributions</h5>
                    <TextField
                        name= "healthInsuranceContribution"
                        type="number"
                        label="Health Insurance"
                        required
                        className={classes.spacing}
                        placeholder='e.g. 20% = 0.20'
                        onChange={onChange}
                        value = {(settingsData.salary && settingsData.salary.healthInsuranceContribution) || ''}
                    />
                    <TextField
                        name="workSafetyContribution"
                        type="number"
                        label="Work Safety"
                        required
                        className={classes.spacing}
                        placeholder='e.g. 20% = 0.20'
                        onChange={onChange}
                        value = {(settingsData.salary && settingsData.salary.workSafetyContribution) || ''}
                    />
                    <TextField
                        name="employmentContribution"
                        type="number"
                        label="Employment"
                        required
                        className={classes.spacing}
                        placeholder='e.g. 20% = 0.20'
                        onChange={onChange}
                        value = {(settingsData.salary && settingsData.salary.employmentContribution) || ''}
                    />
                    <TextField
                        name="pensionPillar1Contribution"
                        type="number"
                        label="Pension Pillar 1"
                        required
                        className={classes.spacing}
                        placeholder='e.g. 20% = 0.20'
                        onChange={onChange}
                        value = {(settingsData.salary && settingsData.salary.pensionPillar1Contribution) || ''}
                    />
                    <TextField
                        name="pensionPillar2Contribution"
                        type="number"
                        label="Pension Pillar 2"
                        required
                        className={classes.spacing}
                        placeholder='e.g. 20% = 0.20'
                        onChange={onChange}
                        value = {(settingsData.salary && settingsData.salary.pensionPillar2Contribution) || ''}
                    />
                </div>
            </div>
            <div className="dividendSettings">
                <h2>Dividend</h2>
                <TextField
                    name="dividendTax"
                    type="number"
                    label="Tax"
                    required
                    className={classes.spacing}
                    placeholder='e.g. 20% = 0.20'
                    onChange={onChange}
                    value = {(settingsData.dividend && settingsData.dividend.dividendTax) || ''}
                />
            </div>
            <div className={classes.btnSubmit}>
                <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    type="submit"
                >
                    Save Changes
                </Button>
            </div>
        </form>
      </div>
    );
}
