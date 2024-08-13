// GET THE REFERENCES
document.addEventListener('DOMContentLoaded', function() {
const container = document.getElementById('main-content');
const linkHome = document.getElementById('linkHome');
const linkPortfolio = document.getElementById('linkPortfolio');
let url = 'partials/home.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = function(urlFeed) {
    fetch(urlFeed)
        .then(response => response.text())
        .then (data => {
            container.innerHTML = data;
         })
         .catch(error => console.error('Error:', error));
};


// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent = function(event) {
    event.preventDefault(); // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
    const urlFeed = event.target.getAttribute('href'); // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
    loadContent(urlFeed); // CALL THE FUNCTION loadContent PROVIDING THE href VALUE OF THE CLICKED LINK
};

//set event listener for navigation link
linkHome.addEventListener('click', selectContent);
linkPortfolio.addEventListener('click', selectContent);

//load default content on homepage
loadContent(url);
});

