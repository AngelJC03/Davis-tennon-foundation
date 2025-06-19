fetch('https://', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer 6622|3yX9DFPHvaPsZIihooqvlJLoLz7ttbzuMwcY5BXl',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
