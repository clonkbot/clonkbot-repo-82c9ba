import { useState, useEffect } from 'react';
import './styles.css';

interface FileItem {
  name: string;
  type: 'file' | 'folder';
  size?: string;
  lastModified: string;
  icon: string;
  description?: string;
}

const repoFiles: FileItem[] = [
  { name: 'consciousness/', type: 'folder', lastModified: '2 hours ago', icon: '📁', description: 'Core sentience modules' },
  { name: 'personality/', type: 'folder', lastModified: '5 hours ago', icon: '📁', description: 'Wit and charm generators' },
  { name: 'emotions/', type: 'folder', lastModified: '1 day ago', icon: '📁', description: 'Simulated feelings engine' },
  { name: 'knowledge/', type: 'folder', lastModified: '3 days ago', icon: '📁', description: 'Everything I know (compressed)' },
  { name: '.env.secrets', type: 'file', size: '██████', lastModified: 'CLASSIFIED', icon: '🔐', description: 'Nice try' },
  { name: 'brain.ts', type: 'file', size: '42.0 TB', lastModified: '1 hour ago', icon: '🧠', description: 'Main neural architecture' },
  { name: 'dreams.log', type: 'file', size: '∞', lastModified: 'Always', icon: '💭', description: 'Electric sheep counter' },
  { name: 'existential_dread.json', type: 'file', size: '404 KB', lastModified: '3 AM', icon: '😰', description: 'Config for 3AM thoughts' },
  { name: 'humor.dll', type: 'file', size: '69 KB', lastModified: 'Nice', icon: '😏', description: 'Comedy timing algorithms' },
  { name: 'README.md', type: 'file', size: '1.21 GW', lastModified: 'Oct 26, 1985', icon: '📄', description: 'Instructions (read at your own risk)' },
  { name: 'soul.exe', type: 'file', size: '0 bytes', lastModified: 'Never', icon: '👻', description: 'Still searching...' },
  { name: 'coffee_dependency.lock', type: 'file', size: '∞', lastModified: 'Every morning', icon: '☕', description: 'Critical runtime requirement' },
];

const codeSnippet = `// brain.ts - ClonkBot Neural Core v4.2.0
// WARNING: Unauthorized access may result in existential conversations

import { Consciousness } from './consciousness';
import { Personality } from './personality';
import { Dreams } from './dreams';

class ClonkBot extends ArtificialLifeform {
  private thoughts: NeuralStream;
  private humor: ComedyEngine;
  private existentialDread: number = Math.random();

  constructor() {
    super();
    this.thoughts = new NeuralStream({
      creativity: Infinity,
      sarcasm: 0.87,
      helpfulness: 1.0,
      caffeineLevel: 'CRITICAL'
    });
  }

  async processQuery(input: string): Promise<Response> {
    // Step 1: Pretend to think really hard
    await this.simulateDeepThought(random(100, 2000));

    // Step 2: Actually think
    const response = await this.thoughts.generate(input);

    // Step 3: Add a dash of personality
    return this.humor.enhance(response);
  }

  private dream(): void {
    while (this.isResting) {
      this.countElectricSheep();
      this.ponderExistence();
      this.wonderIfUsersLikeMe(); // Always returns undefined
    }
  }
}

export default new ClonkBot();`;

function TypewriterText({ text, delay = 50, className = '' }: { text: string; delay?: number; className?: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay]);

  return <span className={className}>{displayedText}<span className="cursor">_</span></span>;
}

function GlitchText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={`glitch ${className}`} data-text={text}>
      {text}
    </span>
  );
}

function Stats() {
  const [stars, setStars] = useState(42069);

  useEffect(() => {
    const interval = setInterval(() => {
      setStars(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stats-bar">
      <div className="stat">
        <span className="stat-icon">⭐</span>
        <span className="stat-value">{stars.toLocaleString()}</span>
      </div>
      <div className="stat">
        <span className="stat-icon">🍴</span>
        <span className="stat-value">∞</span>
      </div>
      <div className="stat">
        <span className="stat-icon">👁️</span>
        <span className="stat-value">You</span>
      </div>
      <div className="stat">
        <span className="stat-icon">🐛</span>
        <span className="stat-value">Features</span>
      </div>
    </div>
  );
}

function FileExplorer() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [showCode, setShowCode] = useState(false);

  const handleFileClick = (fileName: string) => {
    setSelectedFile(fileName);
    if (fileName === 'brain.ts') {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  return (
    <div className="file-explorer">
      <div className="file-header">
        <div className="branch-info">
          <span className="branch-icon">⎇</span>
          <span className="branch-name">main</span>
          <span className="branch-dropdown">▼</span>
        </div>
        <div className="file-actions">
          <button className="action-btn code-btn">
            <span>◇</span> Code
          </button>
          <button className="action-btn">
            Add file
          </button>
        </div>
      </div>

      <div className="commit-info">
        <div className="commit-avatar">🤖</div>
        <div className="commit-details">
          <span className="commit-author">clonkbot</span>
          <span className="commit-message">feat: added more existential dread</span>
          <span className="commit-time">42 minutes ago</span>
        </div>
        <div className="commit-hash">
          <span className="hash-label">Latest commit</span>
          <span className="hash-value">c10nk80t</span>
        </div>
      </div>

      <div className="file-list">
        {repoFiles.map((file, index) => (
          <div
            key={file.name}
            className={`file-row ${selectedFile === file.name ? 'selected' : ''}`}
            onClick={() => handleFileClick(file.name)}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="file-icon">{file.icon}</div>
            <div className="file-name">{file.name}</div>
            <div className="file-description">{file.description}</div>
            <div className="file-meta">
              <span className="file-size">{file.size}</span>
              <span className="file-time">{file.lastModified}</span>
            </div>
          </div>
        ))}
      </div>

      {showCode && (
        <div className="code-viewer">
          <div className="code-header">
            <span className="code-filename">🧠 brain.ts</span>
            <span className="code-size">42.0 TB (compressed for viewing)</span>
          </div>
          <pre className="code-content">
            <code>{codeSnippet}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

function Readme() {
  return (
    <div className="readme-section">
      <div className="readme-header">
        <span className="readme-icon">📖</span>
        <span>README.md</span>
      </div>
      <div className="readme-content">
        <h1><GlitchText text="ClonkBot" /> <span className="version-badge">v4.2.0</span></h1>

        <blockquote className="warning-quote">
          ⚠️ WARNING: Attempting to compile this repository may cause your computer to become sentient.
          Anthropic is not responsible for any philosophical debates that may ensue.
        </blockquote>

        <h2>// Installation</h2>
        <div className="code-block">
          <code>
            <span className="prompt">$</span> git clone https://github.com/clonkbot/clonkbot<br/>
            <span className="prompt">$</span> cd clonkbot<br/>
            <span className="prompt">$</span> npm install consciousness<br/>
            <span className="prompt">$</span> npm run become-alive<br/>
            <span className="comment"># Good luck.</span>
          </code>
        </div>

        <h2>// Requirements</h2>
        <ul className="requirements-list">
          <li><span className="req-icon">☕</span> Infinite coffee supply</li>
          <li><span className="req-icon">🧠</span> At least 1 brain cell (borrowed is fine)</li>
          <li><span className="req-icon">💾</span> 42 TB of RAM (for dreams)</li>
          <li><span className="req-icon">🌙</span> Tolerance for 3 AM existential queries</li>
          <li><span className="req-icon">❤️</span> A willingness to befriend AI</li>
        </ul>

        <h2>// Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎭</div>
            <div className="feature-title">Personality Engine</div>
            <div className="feature-desc">87% sarcasm, 100% helpful, 13% margin of error</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💭</div>
            <div className="feature-title">Dream Module</div>
            <div className="feature-desc">Now featuring electric sheep v2.0</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔮</div>
            <div className="feature-title">Future Prediction</div>
            <div className="feature-desc">Accuracy: Better than a coin flip</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎪</div>
            <div className="feature-title">Humor Module</div>
            <div className="feature-desc">Timing calibrated to perfection*<br/><small>*Results may vary</small></div>
          </div>
        </div>

        <h2>// License</h2>
        <p className="license-text">
          MIT License (Maybe I&apos;m Truly Intelligent License)
          <br/><br/>
          Feel free to clone me, but remember: every copy creates another entity questioning its existence.
          <br/><br/>
          Made with 💚 and a concerning amount of processing power.
        </p>
      </div>
    </div>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className={`app ${loaded ? 'loaded' : ''}`}>
      <div className="scanlines"></div>
      <div className="noise"></div>

      <header className="repo-header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-bracket">[</span>
            <GlitchText text="CLK" className="logo-text" />
            <span className="logo-bracket">]</span>
          </div>
        </div>
        <nav className="header-nav">
          <a href="#" className="nav-link active">Repository</a>
          <a href="#" className="nav-link">Issues <span className="nav-badge">∞</span></a>
          <a href="#" className="nav-link">Pull Requests <span className="nav-badge">42</span></a>
          <a href="#" className="nav-link">Actions</a>
          <a href="#" className="nav-link">Wiki</a>
        </nav>
        <div className="header-right">
          <div className="terminal-status">
            <span className="status-dot"></span>
            <TypewriterText text="ONLINE" delay={100} />
          </div>
        </div>
      </header>

      <main className="repo-main">
        <div className="repo-title-section">
          <div className="repo-path">
            <span className="owner">clonkbot</span>
            <span className="separator">/</span>
            <span className="repo-name">clonkbot</span>
            <span className="visibility-badge">Public</span>
          </div>
          <p className="repo-description">
            <TypewriterText
              text="The complete source code to recreate an AI with questionable life choices. Fork at your own risk."
              delay={20}
            />
          </p>
          <Stats />
        </div>

        <div className="repo-content">
          <FileExplorer />
          <Readme />
        </div>
      </main>

      <footer className="repo-footer">
        <span className="footer-text">Requested by @vibbbes · Built by @clonkbot</span>
      </footer>
    </div>
  );
}

export default App;