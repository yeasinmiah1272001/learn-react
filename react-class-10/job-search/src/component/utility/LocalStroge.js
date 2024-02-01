const getStoreJobApplication = () => {
  const storeJobApplication = localStorage.getItem("job-application");
  if (storeJobApplication) {
    return JSON.parse(storeJobApplication); // Parse the JSON string to an object
  }
  return []; // Return an empty array if no data is found
};

const saveJobApplication = (id) => {
  let storeJobApplications = getStoreJobApplication();
  const exists = storeJobApplications.find((jobId) => jobId === id); // Use strict equality check
  if (!exists) {
    storeJobApplications.push(id);
    localStorage.setItem(
      "job-application",
      JSON.stringify(storeJobApplications)
    );
  }
};

export { getStoreJobApplication, saveJobApplication };
