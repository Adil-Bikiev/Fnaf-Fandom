document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const clearBtn = document.getElementById('clear-btn');
    const artCards = document.querySelectorAll('.art-card');
    const noResults = document.getElementById('no-results');
    
    // Search function
    function searchArtworks() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let foundResults = false;
        
        if (searchTerm === '') {
            // Show all cards if search is empty
            artCards.forEach(card => {
                card.style.display = 'block';
            });
            noResults.style.display = 'none';
            return;
        }
        
        // Search through each card
        artCards.forEach(card => {
            const tags = card.getAttribute('data-tags').toLowerCase();
            const title = card.querySelector('.art-title').textContent.toLowerCase();
            
            // Check if search term matches tags or title
            if (tags.includes(searchTerm) || title.includes(searchTerm)) {
                card.style.display = 'block';
                foundResults = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show or hide no results message
        if (foundResults) {
            noResults.style.display = 'none';
        } else {
            noResults.style.display = 'block';
        }
    }
    
    // Event listeners
    searchBtn.addEventListener('click', searchArtworks);
    
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchArtworks();
        }
    });
    
    clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        searchArtworks();
    });
    
    // Optional: Show tag suggestions when clicking on tags
    const tagElements = document.querySelectorAll('.art-tag');
    tagElements.forEach(tag => {
        tag.addEventListener('click', function() {
            const tagText = this.textContent.toLowerCase();
            searchInput.value = tagText;
            searchArtworks();
        });
    });
});