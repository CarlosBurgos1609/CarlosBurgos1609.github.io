import { useEffect, useState } from 'react';
import './../Style/style.scss';
import profileImage from './../img/my profile/profile.png';
import perfilImage from './../img/perfil.png';
import spotify from './../img/logos/spotify.png';
import youtube from './../img/logos/youtube.png';
import youtubemusic from './../img/logos/youtube-music.png';
import profileYoutubeDark from './../img/my profile/profileYoutubeDark.png';
import profileYoutubeLight from './../img/my profile/profileYoutubeLight.png';
import PlayLists from './playlists';

function Home() {
  const [currentTheme, setCurrentTheme] = useState('light');

  // YouTube playlists data
  const youtubePlaylists = [
    {
      id: 1,
      title: "Rock en Inglés",
      embedUrl: "https://www.youtube.com/embed/videoseries?si=0oUa5yP5FcpVrnXm&amp;list=PLv8lOsaMAfyYxhZf_vPxs7nR-JP6UIL3n"
    },
    {
      id: 2,
      title: "Rock en Español", 
      embedUrl: "https://www.youtube.com/embed/videoseries?si=AYUbSj2qw0xZlkJv&amp;list=PLv8lOsaMAfyYnO8uy1vPbiklGUuUuhFPs"
    },
    {
      id: 3,
      title: "Trap Argentino",
      embedUrl: "https://www.youtube.com/embed/videoseries?si=hm4WD4Cpnf3c8Ce0&amp;list=PLv8lOsaMAfya4nrCEKg9FLD_HM-96AP-a"
    },
    {
      id: 4,
      title: "Anime",
      embedUrl: "https://www.youtube.com/embed/videoseries?si=_LvIH3BP_lEsc_2x&amp;list=PLv8lOsaMAfyZh5FBj6ggszF5lYVJEo4Gj"
    },
    {
      id: 5,
      title: "Cumbia",
      embedUrl: "https://www.youtube.com/embed/videoseries?si=AXrp4LsgvlY-cHy0&amp;list=PLv8lOsaMAfyYm8v8kQ7w_O-NJoiKQ365h"
    },
    {
      id: 6,
      title: "Salsa",
      embedUrl: "https://www.youtube.com/embed/videoseries?si=10NvCONmcUEtNdl_&amp;list=PLv8lOsaMAfyYkyf5QnXUoBC_JO-DwycvJ"
    }
  ];

  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);

  // Component for YouTube playlist slider
  const YouTubePlaylistSlider = () => {
    const currentPlaylist = youtubePlaylists[currentPlaylistIndex];
    
    const nextPlaylist = () => {
      setCurrentPlaylistIndex((prev) => 
        prev === youtubePlaylists.length - 1 ? 0 : prev + 1
      );
    };

    const prevPlaylist = () => {
      setCurrentPlaylistIndex((prev) => 
        prev === 0 ? youtubePlaylists.length - 1 : prev - 1
      );
    };

    return (
      <div className="youtube-playlist-slider">
        <div className="playlist-header">
          <h3>{currentPlaylist.title}</h3>
          <div className="playlist-nav">
            <button onClick={prevPlaylist} className="nav-btn">‹</button>
            <span className="playlist-counter">
              {currentPlaylistIndex + 1} / {youtubePlaylists.length}
            </span>
            <button onClick={nextPlaylist} className="nav-btn">›</button>
          </div>
        </div>
        <div className="playlist-content">
          <iframe 
            width="100%" 
            height="300" 
            src={currentPlaylist.embedUrl}
            title={currentPlaylist.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    );
  };

  useEffect(() => {
    // Detectar el tema actual del body
    const detectTheme = () => {
      const theme = document.body.getAttribute('data-theme') || 'light';
      setCurrentTheme(theme);
    };

    // Detectar tema inicial
    detectTheme();

    // Crear un observer para detectar cambios en el atributo data-theme
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          detectTheme();
        }
      });
    });

    // Observar cambios en el body
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <body>
      <div className="github-container">{/* Removed theme toggle button since it's now in the header */}
        {/* Header Section - GitHub Style */}
        <section className="profile-header">
          <div className="profile-sidebar">
            <div className="profile-image-container">
              <img src={profileImage} alt="Carlos Alexander Burgos" className="profile-image" />
            </div>
            <div className="profile-info">
              <h1 className="profile-name">Carlos Alexander Burgos J.</h1>
              <p className="profile-username">CarlosBurgos1609</p>
              <p className="profile-bio">
                🎓 Systems Engineer<br/>
                💻 Full Stack Developer<br/>
                🎵 Music Lover<br/>
                🚀 Always learning new technologies
              </p>
              <div className="profile-details">
                <div className="detail-item">
                  <span className="icon">🏢</span>
                  <span>CESMAG University</span>
                </div>
                <div className="detail-item">
                  <span className="icon">🇨🇴</span>
                  <span>Colombia</span>
                </div>
                <div className="detail-item">
                  <span className="icon">🔗</span>
                  <a href="https://carlosburgos1609.github.io/build/" target="_blank">carlosburgos1609.github.io</a>
                </div>
                <div className="detail-item">
                  <span className="icon">📧</span>
                  <span>caburgos.0325@unicesmag.edu.co</span>
                </div>
              </div>
              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Repositories</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10</span>
                  <span className="stat-label">Following</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="profile-content">
            {/* Contribution Graph */}
            <div className="contribution-section">
              <h2>Contribution Activity</h2>
              <div className="contribution-graph">
                <img 
                  alt="pacman contribution graph" 
                  src={currentTheme === 'dark' 
                    ? "https://raw.githubusercontent.com/CarlosBurgos1609/CarlosBurgos1609/output/pacman-contribution-graph-dark.svg"
                    : "https://raw.githubusercontent.com/CarlosBurgos1609/CarlosBurgos1609/output/pacman-contribution-graph.svg"
                  } 
                />
              </div>
            </div>

            {/* Popular Repositories */}
            <div className="repositories-section">
              <h2>Popular repositories</h2>
              <div className="repo-grid">
                <div className="repo-card">
                  <div className="repo-header">
                    <h3>CarlosBurgos1609.github.io</h3>
                    <span className="repo-visibility">Public</span>
                  </div>
                  <p className="repo-description">Personal portfolio website built with React</p>
                  <div className="repo-footer">
                    <span className="repo-language">
                      <span className="language-color" style={{backgroundColor: '#61dafb'}}></span>
                      React
                    </span>
                    <span className="repo-stars">⭐ 2</span>
                  </div>
                </div>
                
                <div className="repo-card">
                  <div className="repo-header">
                    <h3>Flutter-Projects</h3>
                    <span className="repo-visibility">Public</span>
                  </div>
                  <p className="repo-description">Collection of Flutter mobile applications</p>
                  <div className="repo-footer">
                    <span className="repo-language">
                      <span className="language-color" style={{backgroundColor: '#02569B'}}></span>
                      Dart
                    </span>
                    <span className="repo-stars">⭐ 5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Section */}
            <div className="technologies-section">
              <h2>
                <picture> 
                  <img src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Programming_Languages.gif?raw=true" width="30px" />
                </picture>
                Tech Stack & Skills
                <picture> 
                  <img src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Programming_Languages.gif?raw=true" width="30px" />
                </picture>
              </h2>
              <div className="tech-grid">
                {/* Programming Languages */}
                <div className="tech-category">
                  <h3>Programming Languages</h3>
                  <div className="tech-icons">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
                    </a>
                    <a href="https://www.python.org" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" />
                    </a>
                    <a href="https://www.java.com" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40" />
                    </a>
                    <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40" />
                    </a>
                    <a href="https://dart.dev" target="_blank" rel="noreferrer">
                      <img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart" width="40" height="40" />
                    </a>
                    <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40" />
                    </a>
                    <a href="https://www.php.net" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40" />
                    </a>
                  </div>
                </div>

                {/* Frontend Development */}
                <div className="tech-category">
                  <h3>Frontend Development</h3>
                  <div className="tech-icons">
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
                    </a>
                    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
                    </a>
                    <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
                    </a>
                    <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40" />
                    </a>
                  </div>
                </div>

                {/* Backend Development */}
                <div className="tech-category">
                  <h3>Backend Development</h3>
                  <div className="tech-icons">
                    <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" />
                    </a>
                    <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
                      <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" width="40" height="40" />
                    </a>
                  </div>
                </div>

                {/* Mobile Development */}
                <div className="tech-category">
                  <h3>Mobile Development</h3>
                  <div className="tech-icons">
                    <a href="https://flutter.dev" target="_blank" rel="noreferrer">
                      <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40" />
                    </a>
                    <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
                      <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40" />
                    </a>
                    <a href="https://developer.android.com" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40" />
                    </a>
                  </div>
                </div>

                {/* Databases */}
                <div className="tech-category">
                  <h3>Databases</h3>
                  <div className="tech-icons">
                    <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" />
                    </a>
                    <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" />
                    </a>
                    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" />
                    </a>
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div className="tech-category">
                  <h3>Tools & Technologies</h3>
                  <div className="tech-icons">
                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                      <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" />
                    </a>
                    <a href="https://postman.com" target="_blank" rel="noreferrer">
                      <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" />
                    </a>
                    <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40" />
                    </a>
                    <a href="https://unity.com/" target="_blank" rel="noreferrer">
                      <img src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity" width="40" height="40" />
                    </a>
                    <a href="https://www.mathworks.com/" target="_blank" rel="noreferrer">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="matlab" width="40" height="40" />
                    </a>
                    <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer">
                      <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width="40" height="40" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Spotify Section */}
            <div className="spotify-section">
              <h2>
                <img src={spotify} alt="spotify" width="30" /> 
                My Music 
                <img src={spotify} alt="spotify" width="30" />
              </h2>
              <div className="spotify-content">
                <div className="spotify-now-playing">
                  <div className="spotify-profile-section">
                    <div className="profile-image-container">
                      <img src={perfilImage} alt="Profile" className="spotify-profile-img" />
                    </div>
                    <div className="now-playing-container">
                      <a href="https://open.spotify.com/user/yw3aqvvd0zb5rsjn8wz0kez0j" target="_blank" rel="noreferrer">
                        <img 
                          src={currentTheme === 'dark' 
                            ? "https://novatorem-sage-one.vercel.app/api/spotify?background_color=0d1117&border_color=ffffff"
                            : "https://novatorem-sage-one.vercel.app/api/spotify?background_color=ffffff&border_color=000000"
                          } 
                          alt="Spotify Now Playing" 
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="spotify-playlists-preview">
                  <iframe src="https://open.spotify.com/embed/playlist/5P6n1BNwogBmLXZqIwlk3e?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  <iframe src="https://open.spotify.com/embed/playlist/7ARdbqV0W6SQSYyJ0pH3ZY?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div className="spotify-button">
                  <a href="https://carlosburgos1609.github.io/build/#/playlists">
                    <button className="view-all-playlists">View all playlists →</button>
                  </a>
                </div>
              </div>
            </div>

            {/* YouTube Section */}
            <div className="youtube-section">
              <h2>
                <img src={youtubemusic} alt="youtube-music" width="30" /> 
                My YouTube Playlists 
                <img src={youtubemusic} alt="youtube-music" width="30" />
              </h2>
              <div className="youtube-content">
                <div className="youtube-profile-section">
                  <div className="youtube-profile-container">
                    <img 
                      src={currentTheme === 'dark' ? profileYoutubeDark : profileYoutubeLight} 
                      alt="YouTube Profile" 
                      className="youtube-profile-img" 
                    />
                  </div>
                  <div className="youtube-playlists-container">
                    <YouTubePlaylistSlider />
                  </div>
                </div>
                <div className="youtube-button">
                  <a href="https://www.youtube.com/@solracb/playlists" target="_blank" rel="noreferrer">
                    <button className="view-all-playlists">View all YouTube playlists →</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
}

export default Home;
