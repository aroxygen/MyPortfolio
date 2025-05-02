document.getElementById('join-realm').addEventListener('click', () => {
  const selectedRealm = document.querySelector('#realm-list li.selected');
  if (selectedRealm) {
    alert(`Joining ${selectedRealm.textContent}`);
    // Send request to server to join realm
  } else {
    alert('Please select a realm first!');
  }
});

document.getElementById('create-realm-btn').addEventListener('click', () => {
  const realmName = document.getElementById('realm-name').value.trim();
  if (realmName) {
    alert(`Creating new realm: ${realmName}`);
    // Send request to server to create realm
  } else {
    alert('Please enter a name for the realm.');
  }
});