interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Specialist', 'Employee'],
  tenantName: 'Company',
  applicationName: 'Stanch-HRM',
  addOns: ['chat', 'notifications', 'file'],
};
