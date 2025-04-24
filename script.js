document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header if needed
                    behavior: 'smooth'
                });
            }
        });
    });

    // Function to handle project previews
    function handleProjectPreviews() {
        // Handle image previews that need screenshots
        const projectPreviews = document.querySelectorAll('img.project-preview[data-src]');
        
        projectPreviews.forEach(preview => {
            const url = preview.getAttribute('data-src');
            if (url) {
                // Set loading placeholder while generating the screenshot
                preview.src = 'assets/loading-placeholder.svg';
                
                // Generate screenshot using Microlink API
                const microlinkUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
                
                fetch(microlinkUrl)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Screenshot API request failed');
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (data && data.status === 'success' && data.data && data.data.screenshot && data.data.screenshot.url) {
                            // Use the screenshot URL from the API response
                            preview.src = data.data.screenshot.url;
                            
                            // Add a class to indicate the preview has loaded
                            preview.classList.add('preview-loaded');
                        } else {
                            throw new Error('Invalid screenshot data');
                        }
                    })
                    .catch(error => {
                        console.error('Error generating screenshot:', error);
                        
                        // Fallback to placeholder if screenshot generation fails
                        preview.src = 'assets/placeholder-project.svg';
                    });
            }
        });
    }

    // Call the function to handle project previews
    handleProjectPreviews();

    // Add a subtle animation for page elements as they come into view
    const fadeInElements = document.querySelectorAll('.project-card, .skill-category, .about-content');
    
    const fadeInOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, fadeInOptions);
    
    fadeInElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        fadeInObserver.observe(element);
    });
    
    // Handle resume preview for touch devices
    const resumePreview = document.querySelector('.resume-preview-container');
    if (resumePreview) {
        resumePreview.addEventListener('touchstart', function() {
            const overlay = this.querySelector('.resume-preview-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
                
                // Hide overlay after 3 seconds
                setTimeout(() => {
                    overlay.style.opacity = '';
                }, 3000);
            }
        });
    }
});
