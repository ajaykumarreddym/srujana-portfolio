
// // Mobile menu functionality
// const menuToggle = document.getElementById('menu-toggle');
// const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('open');
//     menuToggle.classList.toggle('open');
// });

// // Close the mobile menu when a nav link is clicked
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//         navLinks.classList.remove('open');
//         menuToggle.classList.remove('open');
//     });
// });

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);
        
//         if (targetElement) {
//             // Offset for fixed header
//             const headerHeight = document.querySelector('header').offsetHeight;
//             const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
//             window.scrollTo({
//                 top: targetPosition,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// // Enhanced section reveal animations with staggered effect
// const observerOptions = {
//     threshold: 0.15,
//     rootMargin: '-50px 0px'
// };

// const sectionObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry, index) => {
//         if (entry.isIntersecting) {
//             // Add staggered delay based on child elements
//             if (entry.target.classList.contains('hidden-section')) {
//                 entry.target.classList.add('show');
                
//                 // Animate child elements with staggered delay
//                 const animatableElements = entry.target.querySelectorAll('.timeline-item, .project-card, .expertise-item, .cert-item, .skill');
//                 animatableElements.forEach((el, i) => {
//                     el.style.transitionDelay = `${i * 0.1}s`;
//                     el.classList.add('animate-in');
//                 });
                
//                 // Animate skill bars when the Skills section becomes visible
//                 if (entry.target.id === 'skills') {
//                     setTimeout(() => {
//                         document.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
//                             setTimeout(() => {
//                                 bar.style.width = bar.getAttribute('data-percent');
//                             }, i * 100);
//                         });
//                     }, 300);
//                 }
//             }
//             sectionObserver.unobserve(entry.target);
//         }
//     });
// }, observerOptions);

// // Observe all sections with animation classes
// document.querySelectorAll('.hidden-section').forEach(section => {
//     sectionObserver.observe(section);
// });

// // Particle background effect for hero section
// function createParticleCanvas() {
//     const canvas = document.createElement('canvas');
//     canvas.id = 'particle-canvas';
//     canvas.style.position = 'absolute';
//     canvas.style.top = '0';
//     canvas.style.left = '0';
//     canvas.style.width = '100%';
//     canvas.style.height = '100%';
//     canvas.style.pointerEvents = 'none';
//     canvas.style.zIndex = '1';
    
//     const heroSection = document.querySelector('.hero');
//     heroSection.style.position = 'relative';
//     heroSection.style.overflow = 'hidden';
//     heroSection.insertBefore(canvas, heroSection.firstChild);
    
//     return canvas;
// }

// function setupParticles() {
//     const canvas = createParticleCanvas();
//     const ctx = canvas.getContext('2d');
    
//     canvas.width = canvas.offsetWidth;
//     canvas.height = canvas.offsetHeight;
    
//     const particles = [];
//     const particleCount = Math.floor(canvas.width * 0.08); // Responsive particle count
    
//     // Particle class
//     class Particle {
//         constructor() {
//             this.x = Math.random() * canvas.width;
//             this.y = Math.random() * canvas.height;
//             this.size = Math.random() * 2 + 0.5;
//             this.speedX = Math.random() * 1 - 0.5;
//             this.speedY = Math.random() * 1 - 0.5;
//             this.color = '#2ecc71';
//             this.alpha = Math.random() * 0.5 + 0.1;
//         }
        
//         update() {
//             this.x += this.speedX;
//             this.y += this.speedY;
            
//             if (this.x > canvas.width) this.x = 0;
//             else if (this.x < 0) this.x = canvas.width;
            
//             if (this.y > canvas.height) this.y = 0;
//             else if (this.y < 0) this.y = canvas.height;
//         }
        
//         draw() {
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//             ctx.fillStyle = this.color;
//             ctx.globalAlpha = this.alpha;
//             ctx.fill();
//         }
//     }
    
//     // Create particles
//     for (let i = 0; i < particleCount; i++) {
//         particles.push(new Particle());
//     }
    
//     // Connect particles with lines
//     function connectParticles() {
//         const maxDistance = canvas.width * 0.07;
        
//         for (let i = 0; i < particles.length; i++) {
//             for (let j = i; j < particles.length; j++) {
//                 const dx = particles[i].x - particles[j].x;
//                 const dy = particles[i].y - particles[j].y;
//                 const distance = Math.sqrt(dx * dx + dy * dy);
                
//                 if (distance < maxDistance) {
//                     ctx.beginPath();
//                     ctx.strokeStyle = '#2ecc71';
//                     ctx.globalAlpha = 0.2 * (1 - distance / maxDistance);
//                     ctx.lineWidth = 0.5;
//                     ctx.moveTo(particles[i].x, particles[i].y);
//                     ctx.lineTo(particles[j].x, particles[j].y);
//                     ctx.stroke();
//                 }
//             }
//         }
//     }
    
//     // Animation loop
//     function animate() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
        
//         for (let i = 0; i < particles.length; i++) {
//             particles[i].update();
//             particles[i].draw();
//         }
        
//         connectParticles();
//         requestAnimationFrame(animate);
//     }
    
//     // Handle window resize
//     window.addEventListener('resize', () => {
//         canvas.width = canvas.offsetWidth;
//         canvas.height = canvas.offsetHeight;
//     });
    
//     // Start animation
//     animate();
// }

// // Initialize particles when the DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     setupParticles();
// });

// // Typing effect for hero headline
// function setupTypingEffect() {
//     const targetElement = document.querySelector('.hero-text h1');
//     if (!targetElement) return;
    
//     const originalText = targetElement.innerHTML;
//     const highlightSpan = targetElement.querySelector('.highlight');
//     const highlightText = highlightSpan ? highlightSpan.textContent : '';
    
//     let baseText = originalText.replace(/<span class="highlight">.*?<\/span>/, '');
    
//     targetElement.innerHTML = '';
    
//     let charIndex = 0;
//     const typingSpeed = 70; // milliseconds per character
    
//     function typeWriter() {
//         if (charIndex < baseText.length) {
//             // Check if we're at the position where the highlight should be inserted
//             if (baseText.substring(0, charIndex).includes("I'm ")) {
//                 targetElement.innerHTML = baseText.substring(0, charIndex) + 
//                                          `<span class="highlight typing-cursor">${highlightText}</span>`;
//                 charIndex = baseText.length;
//                 setTimeout(finishTyping, 500);
//             } else {
//                 targetElement.innerHTML = baseText.substring(0, charIndex) + 
//                                          '<span class="typing-cursor">|</span>';
//                 charIndex++;
//                 setTimeout(typeWriter, typingSpeed);
//             }
//         }
//     }
    
//     function finishTyping() {
//         targetElement.innerHTML = baseText + 
//                                 `<span class="highlight">${highlightText}</span>`;
//     }
    
//     // Start typing effect with a delay
//     setTimeout(typeWriter, 500);
// }

// // Contact form enhanced validation and animation
// function setupContactForm() {
//     const contactForm = document.getElementById('contact-form');
//     const formFields = contactForm.querySelectorAll('input, textarea');
    
//     // Add floating label effect
//     formFields.forEach(field => {
//         field.addEventListener('focus', () => {
//             field.parentElement.classList.add('focused');
//         });
        
//         field.addEventListener('blur', () => {
//             if (field.value === '') {
//                 field.parentElement.classList.remove('focused');
//             }
//         });
        
//         // Check for pre-filled fields (e.g. on page reload)
//         if (field.value !== '') {
//             field.parentElement.classList.add('focused');
//         }
//     });
    
//     // Form submission with validation
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         // Basic validation
//         let isValid = true;
//         formFields.forEach(field => {
//             if (field.required && field.value.trim() === '') {
//                 isValid = false;
//                 field.parentElement.classList.add('error');
//             } else {
//                 field.parentElement.classList.remove('error');
//             }
//         });
        
//         if (isValid) {
//             // Success animation
//             contactForm.classList.add('submitted');
            
//             // Show success message
//             const successMessage = document.createElement('div');
//             successMessage.className = 'success-message';
//             successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you for your message! I\'ll be in touch soon.';
            
//             contactForm.parentElement.appendChild(successMessage);
            
//             // Reset form after delay
//             setTimeout(() => {
//                 contactForm.reset();
//                 formFields.forEach(field => {
//                     field.parentElement.classList.remove('focused');
//                 });
                
//                 // Remove success message after some time
//                 setTimeout(() => {
//                     successMessage.classList.add('fade-out');
//                     setTimeout(() => {
//                         successMessage.remove();
//                         contactForm.classList.remove('submitted');
//                     }, 500);
//                 }, 3000);
//             }, 1000);
//         }
//     });
// }

// // Initialize all enhanced features
// document.addEventListener('DOMContentLoaded', () => {
//     setupTypingEffect();
//     setupContactForm();
    
//     // Add CSS for new animations
//     const styleElement = document.createElement('style');
//     styleElement.textContent = `
//         /* Animation classes */
//         .animate-in {
//             opacity: 0;
//             transform: translateY(20px);
//             transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//         }
        
//         .show .animate-in {
//             opacity: 1;
//             transform: translateY(0);
//         }
        
//         /* Typing cursor animation */
//         .typing-cursor {
//             animation: blink 0.7s infinite;
//         }
        
//         @keyframes blink {
//             0%, 100% { opacity: 1; }
//             50% { opacity: 0; }
//         }
        
//         /* Enhanced form styling */
//         .form-field {
//             position: relative;
//         }
        
//         .form-field.focused label {
//             transform: translateY(-20px);
//             font-size: 0.8em;
//             color: #2ecc71;
//         }
        
//         .form-field.error input,
//         .form-field.error textarea {
//             border-color: #e74c3c !important;
//         }
        
//         .form-field.error::after {
//             content: "This field is required";
//             position: absolute;
//             bottom: -18px;
//             left: 0;
//             color: #e74c3c;
//             font-size: 0.8em;
//         }
        
//         /* Success message */
//         .success-message {
//             background: rgba(46, 204, 113, 0.1);
//             border: 1px solid #2ecc71;
//             color: #2ecc71;
//             padding: 15px;
//             border-radius: 4px;
//             margin-top: 20px;
//             text-align: center;
//             animation: fadeIn 0.5s;
//         }
        
//         .success-message.fade-out {
//             opacity: 0;
//             transition: opacity 0.5s;
//         }
        
//         .success-message i {
//             margin-right: 8px;
//         }
        
//         @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(10px); }
//             to { opacity: 1; transform: translateY(0); }
//         }
        
//         /* Enhanced project cards */
//         .project-card {
//             position: relative;
//             overflow: hidden;
//         }
        
//         .project-card::before {
//             content: "";
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 4px;
//             background: #2ecc71;
//             transform: scaleX(0);
//             transform-origin: left;
//             transition: transform 0.3s ease-out;
//         }
        
//         .project-card:hover::before {
//             transform: scaleX(1);
//         }
        
//         /* Skill bar animations */
//         .skill-bar-fill {
//             position: relative;
//         }
        
//         .skill-bar-fill::after {
//             content: attr(data-percent);
//             position: absolute;
//             right: 0;
//             top: -20px;
//             font-size: 0.8em;
//             color: #2ecc71;
//             opacity: 0;
//             transition: opacity 0.3s;
//         }
        
//         .skill-bar-fill:hover::after {
//             opacity: 1;
//         }
//     `;
    
//     document.head.appendChild(styleElement);
// });

// // Create a scroll progress indicator
// function createScrollProgressIndicator() {
//     const progressBar = document.createElement('div');
//     progressBar.className = 'scroll-progress';
//     progressBar.style.cssText = `
//         position: fixed;
//         top: 0;
//         left: 0;
//         height: 3px;
//         width: 0;
//         background: #2ecc71;
//         z-index: 1001;
//         transition: width 0.1s;
//     `;
    
//     document.body.appendChild(progressBar);
    
//     window.addEventListener('scroll', () => {
//         const scrollTop = window.scrollY || document.documentElement.scrollTop;
//         const scrollHeight = document.documentElement.scrollHeight;
//         const clientHeight = document.documentElement.clientHeight;
//         const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
        
//         progressBar.style.width = `${scrollPercent}%`;
//     });
// }
























// // Initialize scroll progress indicator
// document.addEventListener('DOMContentLoaded', createScrollProgressIndicator);
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
    initScrollProgress();
    initBackToTop();
    
    // Create particles canvas if supported
    if (document.getElementById('particle-canvas')) {
        initParticles();
    }
});

// Navigation functionality
function initNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
    }
    
    // Close menu when clicking on a link
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                menuToggle.classList.remove('open');
                navLinks.classList.remove('open');
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Scroll animations for sections
function initScrollAnimations() {
    const hiddenSections = document.querySelectorAll('.hidden-section');
    
    // Initial check for elements in viewport
    checkSections();
    
    // Check on scroll
    window.addEventListener('scroll', checkSections);
    
    function checkSections() {
        const triggerPoint = window.innerHeight * 0.8;
        
        hiddenSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerPoint) {
                section.classList.add('show');
            }
        });
    }
}

// Animate skill bars
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percent = entry.target.getAttribute('data-percent');
                entry.target.style.width = percent;
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.5});
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contact-form');
    const formFields = document.querySelectorAll('.form-field input, .form-field textarea');
    
    // Handle input focus events
    formFields.forEach(field => {
        // Check if field already has value on page load
        if (field.value.trim() !== '') {
            field.parentElement.classList.add('focused');
        }
        
        // Add focus class on focus
        field.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        // Remove focus class on blur if empty
        field.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    });
    
    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (validateForm()) {
                // Show loading state
                const submitBtn = form.querySelector('.submit-btn');
                submitBtn.classList.add('loading');
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    // Hide form
                    form.style.display = 'none';
                    
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.innerHTML = `
                        <i class="fas fa-check-circle"></i>
                        <h3>Message Sent!</h3>
                        <p>Thank you for reaching out. I'll get back to you soon!</p>
                    `;
                    form.parentElement.appendChild(successMessage);
                    
                    // Show success message with animation
                    setTimeout(() => {
                        successMessage.style.display = 'block';
                        successMessage.style.opacity = '1';
                    }, 100);
                }, 1500);
            }
        });
    }
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        const fields = form.querySelectorAll('input, textarea');
        
        fields.forEach(field => {
            const parent = field.parentElement;
            
            // Remove previous validation classes
            parent.classList.remove('error', 'success');
            
            // Check if field is empty
            if (field.required && field.value.trim() === '') {
                parent.classList.add('error');
                isValid = false;
                
                // Add error message if not exists
                if (!parent.querySelector('.error-message')) {
                    const errorMsg = document.createElement('div');
                    errorMsg.className = 'error-message';
                    errorMsg.textContent = 'This field is required';
                    parent.appendChild(errorMsg);
                }
            } else if (field.type === 'email' && field.value.trim() !== '') {
                // Validate email format
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(field.value)) {
                    parent.classList.add('error');
                    isValid = false;
                    
                    // Add error message if not exists
                    if (!parent.querySelector('.error-message')) {
                        const errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.textContent = 'Please enter a valid email address';
                        parent.appendChild(errorMsg);
                    }
                } else {
                    parent.classList.add('success');
                }
            } else if (field.value.trim() !== '') {
                parent.classList.add('success');
            }
        });
        
        return isValid;
    }
}

// Scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / scrollTotal) * 100;
        progressBar.style.width = progress + '%';
    });
}

// Back to top button
function initBackToTop() {
    const backToTopBtn = document.createElement('a');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.href = '#';
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Particles background
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const particles = [];
    const particleCount = 50;
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = '#2ecc71';
            this.alpha = Math.random() * 0.5 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width || this.x < 0) {
                this.speedX = -this.speedX;
            }
            
            if (this.y > canvas.height || this.y < 0) {
                this.speedY = -this.speedY;
            }
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    function createParticles() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Connect particles
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = '#2ecc71';
                    ctx.globalAlpha = 0.1;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    // Handle resize
    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    });
    
    createParticles();
    animate();
}