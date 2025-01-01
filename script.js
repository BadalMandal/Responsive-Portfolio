let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['a CSE student in IIT Mandi','an AI/ML Engineer' , 'a Software Engineer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// Chatbot logic
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatDisplay = document.getElementById('chat-display');

const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

chatSend.addEventListener('click', async () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        // Display user message
        chatDisplay.innerHTML += `<div class="user-message">${userMessage}</div>`;
        chatInput.value = '';

        try {
            // Send user message to Groq API
            const response = await fetch(GROQ_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GROQ_API_KEY}`
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        { role: 'system', content: "You are a chatbot assistant trained to provide information about Badal's portfolio, including skills, projects, and certifications." },
                        { role: 'user', content: userMessage }
                    ]
                })
            });

            // Check for HTTP errors
            if (!response.ok) {
                throw new Error(`API Error: ${response.status} - ${response.statusText}`);
            }

            // Parse API response
            const data = await response.json();
            if (data?.choices?.[0]?.message?.content) {
                chatDisplay.innerHTML += `<div class="bot-message">${data.choices[0].message.content}</div>`;
            } else {
                throw new Error('Invalid API response structure.');
            }
        } catch (error) {
            console.error('Error:', error);
            chatDisplay.innerHTML += `<div class="bot-message">Error: ${error.message}</div>`;
        }
    }
});
