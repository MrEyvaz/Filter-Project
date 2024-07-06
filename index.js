const inputField = document.querySelector('.input-text');
const userList = document.querySelectorAll('.user-list li,.user-list hr');

inputField.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  userList.forEach((element) => {
    if (element.tagName === 'LI') {
      const userName = element.querySelector('h2').textContent.toLowerCase();
      const userLocation = element.querySelector('p').textContent.toLowerCase();
      if (searchTerm === '') { // if input field is empty, show all li elements
        element.style.display = 'block';
      } else if (userName.includes(searchTerm) || userLocation.includes(searchTerm)) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    } else { // for hr elements
      if (searchTerm === '') { // if input field is empty, show all hr elements
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    }
  });
});