// Create a function to load the CSV file
function loadCSVFile(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(`Error ${xhr.status} occurred while fetching the file.`));
      }
    };
    xhr.onerror = () => {
      reject(new Error('An error occurred while fetching the file.'));
    };
    xhr.open('GET', file, true);
    xhr.send();
  });
}

// Example usage
// loadCSVFile('data.csv')
  // .then((csvData) => {
  //   // Parse the CSV data
  //   const parsedData = parseCSV(csvData);

  //   // Use the parsed data to display on the website
  //   displayData(parsedData);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });

// Function to parse CSV data
function parseCSV(csvData) {
  // Parse the CSV data into an array or object structure
  // You can use a CSV parsing library or write custom code depending on your requirements
  // Here's a simple example using split() function:
  const rows = csvData.split('\n');
  const headers = rows[0].split(',');
  const data = [];
  for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split(',');
    const rowObject = {};
    for (let j = 0; j < headers.length; j++) {
      rowObject[headers[j]] = rowData[j];
    }
    data.push(rowObject);
  }
  return data;
}

// Function to display data on the website
function displayData(data) {
  // Update your website's HTML or DOM elements to display the data
  console.log(data); // Example: log the data to the console
}
