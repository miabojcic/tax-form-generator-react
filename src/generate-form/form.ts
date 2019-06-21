export interface Form {
    formType: string;
    amount: number;
    formDate: string;
}

export interface DividendJOPPD extends Form {
    paymentDate: string;
    currency: string;
    startDate: string;
    endDate: string;
}

export interface SalaryJOPPD extends Form {
    paymentDate: string;
    currency: string;
    salaryMonth: string;
}
