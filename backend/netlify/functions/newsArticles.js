const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbz__jHa1zKYb7d6_sewmCKt-NwOwdPfvleIhTovtsJ2l7uc-ynw1O_Ofc6vgy8CsMJRyQ/exec';

    const response = await fetch(scriptUrl);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',  // Adjust to your frontend URL if needed
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  }
};
