const getStoreDonation = () => {
  const storeDonationApplication = localStorage.getItem("donation-applied");
  if (storeDonationApplication) {
    return JSON.parse(storeDonationApplication);
  }
  return [];
};

const saveDonationApplication = (id) => {
  const storeDonationApplications = getStoreDonation();
  const exists = storeDonationApplications.find((jobId) => jobId === id);
  if (!exists) {
    storeDonationApplications.push(id);
    localStorage.setItem(
      "donation-applied",
      JSON.stringify(storeDonationApplications)
    );
  }
};

export { getStoreDonation, saveDonationApplication };
