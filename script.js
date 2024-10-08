function searchStudents() {
    // get the search term input by the user
    var input = document.getElementById('searchInput').value;
    // find all students whose names match the search term
    var students = document.querySelectorAll('.student');
    for (var i = 0; i < students.length; i++) {
      if (students[i].querySelector('.name').textContent.includes(input)) {
        students[i].style.display = '';
      } else {
        students[i].style.display = 'none';
      }
    }
  }
  function validateForm() {
    // get the input fields to be validated
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    // validate the name input
    if (name.value == '') {
      alert('Please enter your name');
      name.focus();
      return false;
    }
    // validate the email input
    if (!email.value.includes('@')) {
      alert('Please enter a valid email address');
      email.focus();
      return false;
    }
    // if all inputs are valid, submit the form
    return true;
  }
  
  function toggleMenu() {
    // get the dropdown menu
    var menu = document.getElementById('menu');
    // toggle the class that shows or hides the menu
    menu.classList.toggle('show');
  }
  
  // close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
      var menu = document.getElementById('menu');
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
      }
    }
  }