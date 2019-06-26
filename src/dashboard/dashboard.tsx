import React, { useEffect, useState } from 'react';
import { authHttp } from '../shared/http';
import { Table } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';

export const Dashboard: React.FC = () => {
    const useStyles = makeStyles({
        container: {
            width: '100%',
            marginTop: '50px',
            overflowX: 'auto'
        },
        table: {
            minWidth: 650
        }
    });

    const [displayForms, setDisplayForms] = useState<any[]>([]);
    const classes = useStyles();
    useEffect(() => {
        authHttp.get('api/forms').then((response) =>
        {
            setDisplayForms(response.data);
        }
        )
    }, []);
    return(
      <Paper className={classes.container}>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Date Generated</TableCell>
                    <TableCell>Form Type</TableCell>
                    <TableCell>Amount</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {displayForms.map((row, index: number) => (
                    <TableRow key={index}>
                        <TableCell>{row.formDate}</TableCell>
                        <TableCell>{row.formType}</TableCell>
                        <TableCell>{row.amount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </Paper>
    );
}
