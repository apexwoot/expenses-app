const axios = require('axios').default;
const KEY = '61391ee84c2f49e189d5'; // your API key

export const getRateData = async (origalCurrency = 'USD', desiredCurrency = 'USD') => {
  try {
    const { data } = await axios.get(
      `https://free.currconv.com/api/v7/convert?q=${origalCurrency}_${desiredCurrency}&compact=ultra&apiKey=${KEY}`
    );
    return Object.values(data)[0];
  } catch (error) {
    console.log(error);
  }
};

export const getCurList = async () => {
  try {
    const { data } = await axios.get(`https://free.currconv.com/api/v7/currencies?apiKey=${KEY}`);
    return Object.keys(data.results);
  } catch (error) {
    console.log(error);
  }
};
