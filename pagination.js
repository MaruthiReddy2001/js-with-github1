const itemsPerPage = 5;
let currentPage = 1;
const totalItems = 50; 
const totalPages = Math.ceil(totalItems / itemsPerPage); 

const contentDiv = document.getElementById('content');
const pageInfo = document.getElementById('page-info');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function renderContent() {
    contentDiv.innerHTML = ''; 
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, totalItems);
    
    for (let i = start; i <= end; i++) {
        const item = document.createElement('div');
        item.textContent = Item ${i};
        contentDiv.appendChild(item);
    }
    
    pageInfo.textContent = Page ${currentPage} of ${totalPages};
    
    
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}


prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderContent();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderContent();
    }
});

renderContent();