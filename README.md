<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Website - Badal Mandal</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            background-color: #f9fafc;
            color: #333;
        }
        header {
            background: #0078D7;
            color: #fff;
            text-align: center;
            padding: 1.5rem 0;
        }
        header h1 {
            margin: 0;
        }
        main {
            max-width: 800px;
            margin: 2rem auto;
            padding: 1rem;
        }
        section {
            margin-bottom: 2rem;
        }
        h2 {
            border-bottom: 2px solid #0078D7;
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
        }
        ul {
            margin: 1rem 0;
            padding-left: 1.5rem;
        }
        a {
            color: #0078D7;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .code {
            background: #f4f4f4;
            border-left: 4px solid #0078D7;
            padding: 1rem;
            font-family: monospace;
            overflow-x: auto;
        }
        footer {
            text-align: center;
            margin-top: 2rem;
            padding: 1rem 0;
            background: #f1f1f1;
        }
    </style>
</head>
<body>
    <header>
        <h1>🌟 Portfolio Website – Badal Mandal</h1>
        <p>Your go-to platform to explore Badal Mandal's resume, projects, and achievements!</p>
    </header>

    <main>
        <section>
            <h2>🔗 Live Demo</h2>
            <p>👉 <a href="https://your-portfolio-domain.com" target="_blank">Visit Live Portfolio Website</a></p>
        </section>

        <section>
            <h2>🛠️ Technologies Used</h2>
            <ul>
                <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6)</li>
                <li><strong>Interactive Chatbot:</strong> Groq LLM API</li>
                <li><strong>Design & Animations:</strong> CSS Animations, Responsive Design</li>
                <li><strong>Deployment:</strong> Vercel / Netlify</li>
            </ul>
        </section>

        <section>
            <h2>📂 Project Structure</h2>
            <div class="code">
                /portfolio-website<br>
                ├── public<br>
                │   ├── index.html // Main HTML file<br>
                │   ├── style.css // Styling for the website<br>
                │   ├── script.js // JavaScript functionality<br>
                │   ├── /data<br>
                │   │   ├── profile.json // JSON data for resume & portfolio<br>
                │   ├── /image<br>
                │   │   ├── student.webp // Profile image<br>
                ├── README.html // Project documentation<br>
                ├── .gitignore // Git ignored files
            </div>
        </section>

        <section>
            <h2>⚙️ Setup & Installation</h2>
            <p>Follow these steps to run the project locally:</p>
            <div class="code">
                git clone https://github.com/YourUsername/portfolio-website.git<br>
                cd portfolio-website<br><br>
                # Start a local server<br>
                npx serve<br><br>
                # Open in Browser<br>
                http://localhost:3000
            </div>
        </section>

        <section>
            <h2>💬 Chatbot Integration</h2>
            <p>
                The chatbot uses <strong>Groq LLM API</strong> for generating responses. 
                Data is sourced from the <strong>profile.json</strong> file.
            </p>
            <p><strong>Update API Key:</strong></p>
            <div class="code">
                const GROQ_API_KEY = 'your_api_key_here';
            </div>
        </section>

        <section>
            <h2>🎨 Features</h2>
            <ul>
                <li>✅ Responsive Design</li>
                <li>✅ Interactive Chatbot</li>
                <li>✅ Smooth Animations</li>
                <li>✅ Download CV Button</li>
                <li>✅ Social Media Integration</li>
            </ul>
        </section>

        <section>
            <h2>🚀 Deployment</h2>
            <p><strong>Deploy on Vercel:</strong></p>
            <div class="code">
                npm install -g vercel<br>
                vercel
            </div>
            <p><strong>Deploy on Netlify:</strong></p>
            <ul>
                <li>Push your code to GitHub</li>
                <li>Connect your repository to <strong>Netlify</strong></li>
                <li>Click <strong>Deploy</strong></li>
            </ul>
        </section>

        <section>
            <h2>🤝 Contributing</h2>
            <p>Contributions are welcome! 🚀 Follow these steps:</p>
            <div class="code">
                1. Fork the repository<br>
                2. Create a new branch:<br>
                   git checkout -b feature-branch<br>
                3. Make your changes and commit:<br>
                   git commit -m "Add new feature"<br>
                4. Push the changes:<br>
                   git push origin feature-branch<br>
                5. Open a Pull Request
            </div>
        </section>

        <section>
            <h2>📧 Contact</h2>
            <ul>
                <li>📬 <strong>Email:</strong> <a href="mailto:kumarkingbadal@gmail.com">kumarkingbadal@gmail.com</a></li>
                <li>💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/badal-mandal-1a83a9262/">Badal Mandal</a></li>
                <li>💻 <strong>GitHub:</strong> <a href="https://github.com/BadalMandal">BadalMandal</a></li>
            </ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Badal Mandal. All Rights Reserved.</p>
    </footer>
</body>
</html>
