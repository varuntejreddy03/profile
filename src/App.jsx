import { useState } from 'react';
import './App.css';
import Status from './status';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header className="header">
        <h1>Welcome back, Alex!</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <Status />

      <section className="feed">
        <h2>Recent Posts</h2>
        <ul>
          <li><strong>10:00 AM</strong>: Just joined the platform!</li>
          <li><strong>10:15 AM</strong>: Loving the UI so far.</li>
          <li><strong>10:30 AM</strong>: Any feedback is welcome!</li>
        </ul>
      </section>

      <div className="profile-card">
        <img
          src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Profile"
        />
        <h3>Alex Smith</h3>
        <p>Frontend Developer</p>

        {/* View Portfolio Button */}
        <a
          href="https://your-portfolio-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-button"
        >
          🚀 View Portfolio
        </a>
      </div>
    </div>
  );
}

export default App;

