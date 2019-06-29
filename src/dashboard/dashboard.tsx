import React, { useEffect, useState } from 'react';
import { authHttp } from '../shared/http';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, makeStyles } from '@material-ui/core';
import { Form } from '../generate-form/form';
import { RouteComponentProps } from 'react-router';

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

export const Dashboard: React.FC<RouteComponentProps> = () => {
  const [displayForms, setDisplayForms] = useState<Form[]>([]);

  const classes = useStyles();

  useEffect(() => {
    authHttp.get<Form[]>('api/forms').then(response => {
      setDisplayForms(response.data);
    });
  }, []);

  return (
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
};
