// POPULATE CONTENT FROM content.js
function populateContent() {
    // Header / Overview
    document.getElementById('name').textContent = portfolioContent.name;
    document.getElementById('tagline').textContent = portfolioContent.tagline;
    document.getElementById('welcomeText').textContent = portfolioContent.welcomeText;
    
    // Overview expanded section
    const overviewExpanded = document.getElementById('overviewExpanded');
    portfolioContent.overviewExpanded.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        overviewExpanded.appendChild(p);
    });

    // Tech card
    document.getElementById('techTitle').textContent = portfolioContent.tech.title;
    document.getElementById('techSummary').textContent = portfolioContent.tech.summary;
    const techDetails = document.getElementById('techDetails');
    techDetails.innerHTML = `
        <p><strong>Current Focus:</strong> ${portfolioContent.tech.details.focus}</p>
        <p><strong>Previous Experience:</strong> ${portfolioContent.tech.details.experience}</p>
        <p><strong>Philosophy:</strong> ${portfolioContent.tech.details.philosophy}</p>
    `;

    // Writing card
    document.getElementById('writingTitle').textContent = portfolioContent.writing.title;
    document.getElementById('writingSummary').textContent = portfolioContent.writing.summary;
    const writingDetails = document.getElementById('writingDetails');
    writingDetails.innerHTML = `
        <p><strong>Topics I Cover:</strong> ${portfolioContent.writing.details.topics}</p>
        <p><strong>Recent Pieces:</strong> ${portfolioContent.writing.details.recent}</p>
        <p><strong>Where to Read:</strong> ${portfolioContent.writing.details.where}</p>
    `;

    // Music card
    document.getElementById('musicTitle').textContent = portfolioContent.music.title;
    document.getElementById('musicSummary').textContent = portfolioContent.music.summary;
    const musicDetails = document.getElementById('musicDetails');
    musicDetails.innerHTML = `
        <p><strong>Style:</strong> ${portfolioContent.music.details.style}</p>
        <p><strong>Latest Project:</strong> ${portfolioContent.music.details.latest}</p>
        <p><strong>Process:</strong> ${portfolioContent.music.details.process}</p>
    `;

    // About page
    document.getElementById('aboutIntro').textContent = portfolioContent.about.intro;
    document.getElementById('aboutTech').textContent = portfolioContent.about.techSection;
    document.getElementById('aboutWriting').textContent = portfolioContent.about.writingSection;
    document.getElementById('aboutMusic').textContent = portfolioContent.about.musicSection;
    document.getElementById('aboutContact').textContent = portfolioContent.about.contact;

    // Populate card stacks
    populateStack('techStack', portfolioContent.tech.stack);
    populateStack('writingStack', portfolioContent.writing.stack);
    populateStack('musicStack', portfolioContent.music.stack);
}

// Helper function to populate stack cards
function populateStack(stackId, stackItems) {
    const stackContainer = document.getElementById(stackId);
    stackItems.forEach((item, index) => {
        const stackCard = document.createElement('div');
        stackCard.className = 'stack-card';
        stackCard.style.setProperty('--stack-index', index);
        stackCard.innerHTML = `
            <div class="stack-card-emoji">${item.image}</div>
            <h4>${item.title}</h4>
            <p>${item.description}</p>
        `;
        
        // Hide initially
        stackCard.style.opacity = '0';
        stackCard.style.transform = 'translateX(0) translateY(0) scale(0.95) rotate(0deg)';
        stackCard.style.pointerEvents = 'auto'; // enable clicking
        stackContainer.appendChild(stackCard);
    });
}

// Call populate on page load
populateContent();

// Set random initial positions and rotation angles
function randomizeCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // Random initial rotation (-3 to 3 degrees)
        const initialRotate = (Math.random() - 0.5) * 6;
        card.style.setProperty('--initial-rotate', `${initialRotate}deg`);
        card.style.setProperty('--initial-rotate', `${initialRotate}deg)`);
        
        // Random hover rotation for variety (-4 to 4 degrees)
        const hoverRotate = (Math.random() - 0.5) * 8;
        card.style.setProperty('--hover-rotate', `${hoverRotate}deg`);
        
        // Random horizontal offset (-20 to 20 pixels)
        const offset = (Math.random() - 0.5) * 40;
        card.style.marginLeft = `${offset}px`;
        card.style.marginRight = `${-offset}px`; // Compensate to maintain container width
    });
}

// Randomize on load
randomizeCards();

// Re-randomize hover angle on each mouseenter for variety
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Skip hover behavior if expanded
        if (card.classList.contains('expanded')) return;
        
        const newHoverRotate = (Math.random() - 0.5) * 8;
        card.style.setProperty('--hover-rotate', `${newHoverRotate}deg`);
    });
    
    card.addEventListener('mouseleave', () => {
        // Skip hover behavior if expanded
        if (card.classList.contains('expanded')) return;

        // Reset hover rotate back to initial rotate
        const initialRotate = card.style.getPropertyValue('--initial-rotate') || '0deg';
        card.style.setProperty('--hover-rotate', initialRotate);
    });
});

// Page navigation
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        document.getElementById(targetPage).classList.add('active');
        window.history.pushState({}, '', `#${targetPage}`);
    });
});

window.addEventListener('popstate', () => {
    const hash = window.location.hash.slice(1) || 'home';
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(hash).classList.add('active');
});

// Toggle card expansion
// function toggleCard(card) {
//     const wasExpanded = card.classList.contains('expanded');

//     // Collapse all cards first
//     document.querySelectorAll('.card').forEach(c => {
//         c.classList.remove('expanded');
//         c.style.transform = 'translateX(0) scale(1) rotate(0deg)';

//         const stackCards = c.querySelectorAll('.stack-card');
//         stackCards.forEach((stackCard, index) => {
//             stackCard.style.opacity = '0';
//             stackCard.style.transform = 'translateX(20px) translateY(0) scale(0.95)';
//             stackCard.style.zIndex = '0';
//         });
//     });

//     if (!wasExpanded) {
//         card.classList.add('expanded');

//         // Move postcard slightly left
//         card.style.transform = 'translateX(-60px) scale(1.02) rotate(0deg)';

//         const stackCards = card.querySelectorAll('.stack-card');
//         const spacingY = 30; 
//         const scaleStep = 0.97; 

//         stackCards.forEach((stackCard, index) => {
//             const yOffset = spacingY * index;
//             const scale = Math.pow(scaleStep, index);
//             stackCard.style.transform = `translateX(${card.offsetWidth + 10}px) translateY(${yOffset}px) scale(${scale}) rotate(0deg)`;
//             stackCard.style.opacity = '1';
//             stackCard.style.zIndex = `${index + 1}`; 
//         });
//     }
// }
function toggleCard(card) {
    const wasExpanded = card.classList.contains('expanded');

    // Collapse all cards
    document.querySelectorAll('.card').forEach(c => {
        c.classList.remove('expanded');
        c.style.marginRight = '0'; // undo space for stack cards
        const stackCards = c.querySelectorAll('.stack-card');
        stackCards.forEach(sc => {
            sc.style.opacity = '0';
            sc.style.transform = 'translateX(20px) translateY(0) scale(0.95)';
            sc.style.zIndex = '0';
        });
    });

    if (!wasExpanded) {
        card.classList.add('expanded');
        card.style.marginRight = '220px'; // leave space for stack cards

        const stackCards = card.querySelectorAll('.stack-card');
        const spacingY = 30;
        const scaleStep = 0.97;

        stackCards.forEach((stackCard, index) => {
            const yOffset = spacingY * index;
            const scale = Math.pow(scaleStep, index);
            stackCard.style.transform = `translateX(20px) translateY(${yOffset}px) scale(${scale})`;
            stackCard.style.opacity = '1';
            stackCard.style.zIndex = `${index + 1}`;
        });
    }
}

// Toggle overview expansion
function toggleOverview(event) {
    event.stopPropagation();
    const overview = document.querySelector('.hero.postcard');
    overview.classList.toggle('expanded');
    
    const btn = overview.querySelector('.expand-btn');
    if (overview.classList.contains('expanded')) {
        btn.textContent = 'Show less ↑';
    } else {
        btn.textContent = 'Read more ↓';
    }
}

// Initialize stack cycling for each postcard
document.querySelectorAll('.card').forEach(card => {
    const stackCards = card.querySelectorAll('.stack-card');
    if (!stackCards.length) return;

    // Store which stack card is currently "pulled up"
    card.stackCurrentIndex = 0;

    // Position stack cards initially with vertical offset
    stackCards.forEach((stackCard, i) => {
        stackCard.style.transform = `translateY(${i * 20}px)`; // layered stack
        stackCard.style.zIndex = i; // bottom cards behind top
        stackCard.style.transition = 'transform 0.4s ease, z-index 0s';
        stackCard.style.opacity = 1; // keep visible
    });

    // Click handler to cycle stack cards
    stackCards.forEach(stackCard => {
        stackCard.addEventListener('click', (e) => {
            e.stopPropagation();

            const total = stackCards.length;
            const prevIndex = card.stackCurrentIndex;

            // Move previous pulled card back to stack
            const prevCard = stackCards[prevIndex];
            prevCard.style.transform = `translateY(${prevIndex * 20}px)`;
            prevCard.style.zIndex = prevIndex;

            // Update current index
            card.stackCurrentIndex = (card.stackCurrentIndex + 1) % total;
            const nextCard = stackCards[card.stackCurrentIndex];

            // Animate next card "up" so it fully reveals
            nextCard.style.transform = `translateY(-20px)`; // pulled up
            nextCard.style.zIndex = total; // bring to front
        });
    });
});

// Cycle stack function
function cycleStack(card) {
    const stackCards = Array.from(card.querySelectorAll('.stack-card'));
    if (stackCards.length <= 1) return;

    // Remove current transforms temporarily
    stackCards.forEach(c => c.style.transition = 'none');

    // Move the top card to the end of the array
    const first = stackCards.shift();
    stackCards.push(first);

    // Reapply layout with new order
    const spacingY = 30;
    const scaleStep = 0.97;
    const baseX = card.offsetWidth + 10;
    const baseY = 0;

    stackCards.forEach((stackCard, index) => {
        stackCard.style.zIndex = `${index}`;
        stackCard.style.transform = `translateX(${baseX}px) translateY(${baseY + spacingY * index}px) scale(${Math.pow(scaleStep, index)}) rotate(0deg)`;
    });

    // Restore transitions
    stackCards.forEach(c => {
        setTimeout(() => c.style.transition = 'all 0.5s ease', 20);
    });
}