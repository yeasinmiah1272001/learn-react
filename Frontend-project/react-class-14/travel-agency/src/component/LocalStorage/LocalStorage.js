// Function to retrieve data from local storage
const getStoreAppartment = () => {
  // Retrieve data from local storage
  const storeAppartment = localStorage.getItem("appartment-application");
  // If data exists, parse it from JSON format and return as an array, otherwise return an empty array
  if (storeAppartment) {
    return JSON.parse(storeAppartment);
  }
  return [];
};

// Function to save an apartment ID to local storage
const saveAppartment = (id) => {
  // Get current stored apartments from local storage
  let storeAppartments = getStoreAppartment();
  // Check if the provided ID already exists in the stored apartments
  const exists = storeAppartments.includes(id);
  // If the ID doesn't exist, add it to the array and update local storage
  if (!exists) {
    storeAppartments.push(id);
    localStorage.setItem(
      "appartment-application",
      JSON.stringify(storeAppartments)
    );
  }
};

// Exporting the functions to make them accessible to other parts of the application
export { getStoreAppartment, saveAppartment };
