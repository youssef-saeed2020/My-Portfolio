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

// Method 1: Copy Template (MOST RELIABLE)
function copyEmailTemplate() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (!name || !email || !message) {
        alert(' Please fill in all fields before copying the template.');
        return;
    }
    
    // Create the email template
    const emailTemplate = `To: youssef03014@gmail.com
Subject: Cybersecurity Inquiry from ${name}

Dear Youssef,

I came across your portfolio and I'm interested in your cybersecurity services.

Here are my details:
• Name: ${name}
• Email: ${email}

My message:
${message}

I look forward to hearing from you.

Best regards,
${name}`;

    // Copy to clipboard
    navigator.clipboard.writeText(emailTemplate).then(() => {
        // Success message with clear instructions
        alert(` EMAIL TEMPLATE COPIED!

Here's exactly what to do next:

1.  OPEN your email app (Gmail, Outlook, Yahoo, etc.)
2.  CREATE a new email
3.  PASTE this template (Ctrl+V or Cmd+V)
4.  CLICK SEND

That's it! I'll receive your email directly at youssef03014@gmail.com

The email is ready to send - it includes your details and message.`);

        // Clear the form
        document.getElementById('contactForm').reset();
        
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = emailTemplate;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        alert(`EMAIL TEMPLATE COPIED!

Now please:
1. Open your email app
2. Create new email
3. Paste the content
4. Click SEND

I'll receive it at youssef03014@gmail.com`);
        
        document.getElementById('contactForm').reset();
    });
}

// Method 2: Direct Email App Openers
function openGmailCompose() {
    const name = document.getElementById('name').value || 'Portfolio Visitor';
    const email = document.getElementById('email').value || 'Not provided';
    const message = document.getElementById('message').value || 'Interested in your cybersecurity services';
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=youssef03014@gmail.com&su=${encodeURIComponent(`Cybersecurity Inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}%0A%0A---%0ASent via portfolio`)}`;
    
    window.open(gmailUrl, '_blank');
    showEmailInstructions('Gmail');
}

function openOutlookCompose() {
    const name = document.getElementById('name').value || 'Portfolio Visitor';
    const email = document.getElementById('email').value || 'Not provided';
    const message = document.getElementById('message').value || 'Interested in your cybersecurity services';
    
    const outlookUrl = `https://outlook.live.com/owa/?path=/mail/action/compose&to=youssef03014@gmail.com&subject=${encodeURIComponent(`Cybersecurity Inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`)}`;
    
    window.open(outlookUrl, '_blank');
    showEmailInstructions('Outlook');
}

function openDefaultEmail() {
    const name = document.getElementById('name').value || 'Portfolio Visitor';
    const email = document.getElementById('email').value || 'Not provided';
    const message = document.getElementById('message').value || 'Interested in your cybersecurity services';
    
    const mailtoUrl = `mailto:youssef03014@gmail.com?subject=${encodeURIComponent(`Cybersecurity Inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`)}`;
    
    window.location.href = mailtoUrl;
    showEmailInstructions('your email app');
}

function showEmailInstructions(provider) {
    setTimeout(() => {
        alert(` ${provider} should be open!

IMPORTANT:
1. Check the pre-filled email
2. Click the SEND button
3. Wait for sending to complete

If ${provider} didn't open, try the "Copy Template" method instead.`);
    }, 1000);
}

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    copyEmailTemplate();
});


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
