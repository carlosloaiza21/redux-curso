const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";

export const getCountries = () => ({
  type: GET_ALL_COUNTRIES,
  countries: [
    {
      name: 'Mexico',
      code: 'MX'
    },
    {
      name: "Canada",
      code: "CA"
    }
  ]
});
