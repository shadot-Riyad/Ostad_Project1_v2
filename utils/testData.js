const unique = () => `${Date.now()}${Math.floor(Math.random() * 1000)}`;

// Q1: Wrong user and passward
export const invalidCredentials = {
  email: `invalid.${unique()}@mailtest.com`,
  password: 'WrongPass@999',
};

// Q2 (new): every Time New Password
export function generateUser() {
  const id = unique();
  return {
    firstName: 'Riyad',
    lastName: 'Tester',
    email: `riyad.${id}@mailtest.com`,
    password: 'Test@12345',
  };
}

// Q2 (NOTUN): category ar product
export const products = {
  category: 'Books',
  name: 'Computing and Internet',
  // [Q3 te add hobe]: searchTerm: 'Computing'
};

// [Q3 ]: billingAddress
