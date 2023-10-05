interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Wait Staff', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant information', 'View menus', 'Make a reservation', 'View order status'],
  ownerAbilities: [
    'Manage restaurant information',
    'Manage restaurant menus',
    'Manage restaurant reservations',
    'Manage restaurant tables',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/1539841c-932a-4e3b-91bc-b4ef3d2641f4',
};
