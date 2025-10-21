$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 70,
            },
            500,
            'linear'
        );
    });

    // Mobile menu toggle
    $('.menu-toggle').click(function() {
        $('.nav-links').slideToggle();
    });

    // Skill bar animation - Trigger when the skills section is in view
    function animateSkillBars() {
        $('.skill-level').each(function() {
            $(this).animate({
                width: $(this).data('level')
            }, 1500);
        });
    }

    // Check if skills section is in view
    $(window).scroll(function() {
        var skillsSection = $('#skills');
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var skillsTop = skillsSection.offset().top;

        if (scrollTop + windowHeight > skillsTop + 100) {
            animateSkillBars();
            // Unbind the scroll event after animation so it doesn't repeat
            $(window).unbind('scroll');
        }
    });

    // Set current year in footer
    $('#year').text(new Date().getFullYear());
});


// JavaScript - Professional Competency Rotator
document.addEventListener('DOMContentLoaded', function() {
    // Competencies rotation
    const competencies = [
        'Functional & Regression Testing',
        'Exploratory & Ad-hoc Testing',
        'Cross-Browser Compatibility',
        'Mobile Application Testing',
        'Test Case Design & Execution',
        'Bug Tracking & Lifecycle Management',
        'API & Integration Testing',
        'User Acceptance Testing (UAT)',
        'Quality Metrics & Reporting',
        'Agile/Scrum Methodology'
    ];
    
    const competencyText = document.getElementById('competency-text');
    let currentCompetency = 0;
    
    function rotateCompetencies() {
        currentCompetency = (currentCompetency + 1) % competencies.length;
        
        // Fade out
        competencyText.style.opacity = '0';
        competencyText.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            competencyText.textContent = competencies[currentCompetency];
            // Fade in
            competencyText.style.opacity = '1';
            competencyText.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Rotate every 3 seconds
    setInterval(rotateCompetencies, 3000);
    
    // Animated counters
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(() => animateSingleCounter(counter, target, increment), 1);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    function animateSingleCounter(counter, target, increment) {
        const count = +counter.innerText;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateSingleCounter(counter, target, increment), 1);
        } else {
            counter.innerText = target;
        }
    }
    
    // Start counters when about section is in view
    const aboutSection = document.getElementById('about');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(aboutSection);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(aboutSection);
});

// This should already be in your script.js from earlier
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top - 70,
        },
        500,
        'linear'
    );
});

function sendEmailToMe() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Direct Gmail compose URL - this actually sends to you
    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=youssef03014@gmail.com&su=${encodeURIComponent(`Portfolio Contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}%0A%0A---%0ASent via portfolio contact form`)}`;
    
    // Open Gmail in new tab
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    
    // Show success message
    setTimeout(() => {
        alert('✅ Gmail opened! Please click "Send" to complete.\n\nIf Gmail didn\'t open, check your popup blocker.');
        document.getElementById('contactForm').reset();
    }, 1000);
}


// Updated competencies array for penetration testing
const competencies = [
    'Network Penetration Testing',
    'Web Application Security',
    'Vulnerability Assessment',
    'OWASP Top 10 Implementation',
    'Social Engineering Testing',
    'Wireless Security Assessment',
    'Cloud Security (AWS/Azure/GCP)',
    'Incident Response & Forensics',
    'Security Tool Development',
    'MITRE ATT&CK Framework'
];
