document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Create sakura petals
    function createSakuraPetals() {
        const container = document.querySelector('.sakura-petals');
        const petalCount = 15;
        
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.classList.add('sakura-petal');
            
            // Random size between 15px and 30px
            const size = Math.random() * 15 + 15;
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
            
            // Random position
            petal.style.left = `${Math.random() * 100}%`;
            
            // Random animation duration between 10s and 20s
            const duration = Math.random() * 10 + 10;
            petal.style.animationDuration = `${duration}s`;
            
            // Random delay
            petal.style.animationDelay = `${Math.random() * 5}s`;
            
            // Random x movement
            petal.style.setProperty('--random-x', `${Math.random() * 100 - 50}px`);
            
            container.appendChild(petal);
        }
    }
    
    createSakuraPetals();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Editor functionality (placeholder)
    const importBtn = document.querySelector('.tool-btn:nth-child(1)');
    const previewPlaceholder = document.querySelector('.preview-placeholder');
    
    importBtn.addEventListener('click', function() {
        previewPlaceholder.innerHTML = '<i class="fas fa-spinner fa-spin"></i><p>Processing your media...</p>';
        
        // Simulate loading
        setTimeout(() => {
            previewPlaceholder.style.display = 'none';
            // In a real app, you would show the actual video preview here
        }, 1500);
    });
    
    // Export button functionality
    const exportBtns = document.querySelectorAll('.export-btn');
    const exportProgress = document.querySelector('.export-progress');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    exportBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            exportProgress.classList.remove('hidden');
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 5;
                if (progress > 100) progress = 100;
                
                progressFill.style.width = `${progress}%`;
                progressText.textContent = `Processing frames... ${Math.floor(progress)}%`;
                
                if (progress === 100) {
                    clearInterval(interval);
                    progressText.textContent = 'Export complete! Your video is ready to download.';
                    
                    // Create a download button
                    const downloadBtn = document.createElement('button');
                    downloadBtn.className = 'btn primary';
                    downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download Video';
                    downloadBtn.style.marginTop = '20px';
                    downloadBtn.addEventListener('click', function() {
                        alert('In a real app, this would download your video file.');
                    });
                    
                    exportProgress.appendChild(downloadBtn);
                }
            }, 300);
        });
    });
    
    // Scroll animation
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .step, .export-preset');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.feature-card, .step, .export-preset').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});
