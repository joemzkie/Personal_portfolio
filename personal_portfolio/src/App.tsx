import { useState } from 'react'
import './App.css'

function App() {
  // This state controls what is shown in Section 3
  const [activeTab, setActiveTab] = useState('projects')

  return (
    <div className="layout-container">
      
      {/* SECTION 1: Top Navbar */}
      <nav className="navbar">
        <div className="nav-brand">Welcome to My Portfolio</div>
        <div className="nav-links">
          <button 
            className={activeTab === 'projects' ? 'active' : ''} 
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={activeTab === 'about' ? 'active' : ''} 
            onClick={() => setActiveTab('about')}
          >
            About Me
          </button>
          <button 
            className={activeTab === 'contact' ? 'active' : ''} 
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </button>
        </div>
      </nav>

      <div className="main-wrapper">
        
        {/* SECTION 2: Left Sidebar */}
        <aside className="sidebar">
          <h2>Jose Emmanuel E. Dioso</h2>
          <div className="sidebar-info">
            <p><strong>Birthdate:</strong> August 01, 2004</p>
            <p><strong>Education:</strong> BS Computer Science</p>
            <p><strong>Status:</strong> Fresh Graduate</p>
            <p className="skills-highlight">C++ | Python | SQL | Java </p>
          </div>
        </aside>

        {/* SECTION 3: Main Content Area */}
        <main className="content-area">
          {activeTab === 'projects' && (
            <section className="fade-in">
              <h1>My Projects</h1>
              <div className="project-card">
                <h3>Low-Latency Stock Tracker</h3>
                <p>Hybrid system built with Python and C++ (pybind11).</p>
                <a href="https://github.com/joemzkie/finance_project" target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
              <div className="project-card">
                <h3>Live Asset Tracker</h3>
                <p>An asset tracker that requires a ticker to fetch the live price of assets the user holds.</p>
                <a href="https://github.com/joemzkie/Asset_Tracker" target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
              <div className="project-card">
                <h3>Shelf Control</h3>
                <p>A low-level programming system using C++ and the fstream library to store data and track shelf stock.</p>
                <a href="https://github.com/joemzkie/Shelf-control" target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
              <div className="project-card">
                <h3>Clinical Dysmorphology Classifier</h3>
                <p>A clinical decision support prototype utilizing computer vision to detect phenotypic markers.</p>
                <a href="https://github.com/joemzkie/Down-tensorflow" target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            </section>
          )}

          {activeTab === 'about' && (
            <section className="fade-in">
              <h1>About Me</h1>
              <p>I am a goal-oriented Computer Science student nearing graduation, specializing in backend architecture, quantitative development, and machine learning. Driven by a preference for rigorous, high-performance logic over frontend frameworks, my technical core is built on C++, Python, SQL, and Java. Whether I am leading a development team to engineer an NLP-driven feature fusion system or bridging Python and C++ to build low-latency financial engines, my focus is on delivering scalable, uncompromising solutions. I thrive on practical execution, taking complex architectural challenges and turning them into efficient, data-grounded systems.</p>
              
            {/* PDF Viewer Addition */}
              <div className="pdf-container">
                {/* Notice the lowercase 'v' in vFinal below */}
                <object data="/Jose_Emmanuel_Dioso_CV_vFinal.pdf" type="application/pdf" width="100%" height="100%">
                  <p>It appears your browser doesn't support embedded PDFs. <a href="/Jose_Emmanuel_Dioso_CV_vFinal.pdf">Click here to download it</a>.</p>
                </object>
              </div>

              <a href="/Jose_Emmanuel_Dioso_CV_vFinal.pdf" download className="download-btn">Download Resume</a>
            </section>
          )}

          {activeTab === 'contact' && (
            <section className="fade-in">
              <h1>Contact Information</h1>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:joemdioso@gmail.com">joemdioso@gmail.com</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/joem-dioso-321b24365/" target="_blank" rel="noopener noreferrer">My Linkedin Profile</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/joemzkie" target="_blank" rel="noopener noreferrer">github.com/joemzkie</a></li>
              </ul>
            </section>
          )}
        </main>

      </div>
    </div>
  )
}

export default App