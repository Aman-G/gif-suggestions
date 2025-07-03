document.getElementById('gifForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Collect data
  const name = document.getElementById('name').value;
  const gifName = document.getElementById('gifName').value;
  const gifLink = document.getElementById('gifLink').value;
  const description = document.getElementById('description').value;

  // Log to console (replace with API call or Google Sheet/Backend later)
  console.log({ name, gifName, gifLink, description });

  // Clear form & show thank you
  this.reset();
  document.getElementById('thanks').classList.remove('hidden');
});
