exports.formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};