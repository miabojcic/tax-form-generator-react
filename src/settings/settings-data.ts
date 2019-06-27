export interface SettingsData {
  personal: PersonalSettings;
  city: CitySettings;
  company: CompanySettings;
  salary: SalarySettings;
  dividend: DividendSettings;
}

export interface PersonalSettings {
  personalOib: number;
  streetName: string;
  streetNumber: string;
  postcode: string;
  city: string;
}

export interface CitySettings {
  cityName: string;
  cityIban: string;
  cityCode: string;
  surtax: number;
}

export interface CompanySettings {
  companyOib: number;
  companyEmail: string;
  companyName: string;
  companyStreet: string;
  companyCity: string;
}

export interface SalarySettings {
  amount: number;
  currency: string;
  nonTaxableAmount: number;
  salaryTax: number;
  healthInsuranceContribution: number;
  workSafetyContribution: number;
  employmentContribution: number;
  pensionPillar1Contribution: number;
  pensionPillar2Contribution: number;
}

export interface DividendSettings {
  dividendTax: number;
}
