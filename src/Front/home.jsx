import { useEffect, useState, useMemo, useCallback } from 'react';
import './../Style/style.scss';
import profileImage from './../img/my profile/profile.png';
import perfilImage from './../img/perfil.png';
import spotify from './../img/logos/spotify.png';
import youtubemusic from './../img/logos/youtube-music.png';
import profileYoutubeDark from './../img/my profile/profileYoutubeDark.png';
import profileYoutubeLight from './../img/my profile/profileYoutubeLight.png';
import ingeIcon from './../img/icons/inge.png';
import universityIcon from './../img/icons/university.png';
import fullstakIcon from './../img/icons/fullstak.png';
import musicIcon from './../img/icons/music.png';
import newTecnologyIcon from './../img/icons/newTecnology.png';
import colombiaIcon from './../img/icons/colombia.png';
import gmailIcon from './../img/icons/gmail.png';
import webIcon from './../img/icons/web.png';
// Import certificates
import ratatypeCert from './../img/certificates/ratatypecr.png';
import scrumCert from './../img/certificates/scrum.png';
import senaCert from './../img/certificates/sena.png';
// Import certificate logos
import ratatypeLogo from './../img/logos/ratatype.png';
import scrumLogo from './../img/logos/scrum.png';
import senaLogo from './../img/logos/sena.png';

function Home() {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);
  const [currentSpotifyIndex, setCurrentSpotifyIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Touch states for certificate slider
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Touch states for spotify slider
  const [spotifyTouchStart, setSpotifyTouchStart] = useState(null);
  const [spotifyTouchEnd, setSpotifyTouchEnd] = useState(null);

  // Preload all certificate images to prevent reload issues
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = certificates.map((cert) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = cert.certificate;
        });
      });

      const logoPromises = certificates.map((cert) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = cert.logo;
        });
      });

      try {
        await Promise.all([...imagePromises, ...logoPromises]);
        setImagesLoaded(true);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
        setImagesLoaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, []);

  // YouTube playlists data - memoized to prevent recreating
  const youtubePlaylists = useMemo(() => [
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
  ], []);

  // Certificates data - memoized to prevent recreating
  const certificates = useMemo(() => [
    {
      id: 1,
      title: "RataType Typing Certification",
      institution: "RataType",
      logo: ratatypeLogo,
      certificate: ratatypeCert,
      description: "Certificación en mecanografía avanzada"
    },
    {
      id: 2,
      title: "Scrum Fundamentals Certified",
      institution: "SCRUMstudy",
      logo: scrumLogo,
      certificate: scrumCert,
      description: "Fundamentos de metodologías ágiles Scrum"
    },
    {
      id: 3,
      title: "SENA Technical Certification",
      institution: "SENA",
      logo: senaLogo,
      certificate: senaCert,
      description: "Certificación técnica en desarrollo de software"
    }
  ], []);

  // Spotify playlists data - memoized to prevent recreating
  const spotifyPlaylists = useMemo(() => [
    {
      id: 1,
      title: "Rock 80 y 90",
      embedUrl: "https://open.spotify.com/embed/playlist/6KERsvpYzzhISMRnJz77xh?utm_source=generator",
      genre: "Rock"
    },
    {
      id: 2,
      title: "Salsa",
      embedUrl: "https://open.spotify.com/embed/playlist/7ARdbqV0W6SQSYyJ0pH3ZY?utm_source=generator",
      genre: "Latina"
    },
    {
      id: 3,
      title: "Trap Argentino",
      embedUrl: "https://open.spotify.com/embed/playlist/4lRMQOJAUwlnPN0u6vltCa?utm_source=generator",
      genre: "Urbano"
    },
    {
      id: 4,
      title: "Pop Latino",
      embedUrl: "https://open.spotify.com/embed/playlist/6F2QF1tMHv6U9B8QMn1pbR?utm_source=generator",
      genre: "Pop"
    },
    {
      id: 5,
      title: "Cumbia",
      embedUrl: "https://open.spotify.com/embed/playlist/3wdr8eEILMkHJDXNu12Y2N?utm_source=generator",
      genre: "Latina"
    },
    {
      id: 6,
      title: "Pop en Español",
      embedUrl: "https://open.spotify.com/embed/playlist/40BbhGPEcklGp49QrSlFfZ?utm_source=generator",
      genre: "Pop"
    },
    {
      id: 7,
      title: "Corridos",
      embedUrl: "https://open.spotify.com/embed/playlist/2fYtfgz85qBaUfP10lnZYt?utm_source=generator",
      genre: "Regional"
    },
    {
      id: 8,
      title: "Merengue",
      embedUrl: "https://open.spotify.com/embed/playlist/10nfX6VXflrOquAKmA1bMz?utm_source=generator",
      genre: "Latina"
    },
    {
      id: 9,
      title: "Pop Rock",
      embedUrl: "https://open.spotify.com/embed/playlist/6Zyv4Tzir19kAyHXLYgziF?utm_source=generator",
      genre: "Rock"
    },
    {
      id: 10,
      title: "Bachata",
      embedUrl: "https://open.spotify.com/embed/playlist/12WRhlSnurKbWGD22hftSB?utm_source=generator",
      genre: "Latina"
    },
    {
      id: 11,
      title: "Reguetón",
      embedUrl: "https://open.spotify.com/embed/playlist/0j3spPr5IxN5J7k5CVDhis?utm_source=generator",
      genre: "Urbano"
    },
    {
      id: 12,
      title: "Electrónica",
      embedUrl: "https://open.spotify.com/embed/playlist/55g6nZwjigkdi3jIeVXBo9?utm_source=generator",
      genre: "Electrónica"
    },
    {
      id: 13,
      title: "Hip Hop",
      embedUrl: "https://open.spotify.com/embed/playlist/7qOs3OWDkor8Wk3eBeXpHb?utm_source=generator",
      genre: "Urbano"
    },
    {
      id: 14,
      title: "Rock en Español",
      embedUrl: "https://open.spotify.com/embed/playlist/3GWu39s0U4TTdGv7MpzC5P?utm_source=generator",
      genre: "Rock"
    },
    {
      id: 15,
      title: "POP",
      embedUrl: "https://open.spotify.com/embed/playlist/73C5mk3LRQtxzZ2dTf22ic?utm_source=generator",
      genre: "Pop"
    },
    {
      id: 16,
      title: "Baladas",
      embedUrl: "https://open.spotify.com/embed/playlist/6ZDDxuQj8VQWAluDNjHp1U?utm_source=generator",
      genre: "Romántica"
    },
    {
      id: 17,
      title: "Heavy Metal",
      embedUrl: "https://open.spotify.com/embed/playlist/2NHlst7h5g1wT6TY31qXug?utm_source=generator",
      genre: "Metal"
    },
    {
      id: 18,
      title: "Reggae",
      embedUrl: "https://open.spotify.com/embed/playlist/4Hs6UxVqxNgypRkKxaYP6c?utm_source=generator",
      genre: "Reggae"
    }
  ], []);

  // Certificate navigation functions
  const nextCertificate = useCallback(() => {
    setCurrentCertificateIndex((prev) => 
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  }, [certificates.length]);

  const prevCertificate = useCallback(() => {
    setCurrentCertificateIndex((prev) => 
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  }, [certificates.length]);

  // Spotify playlist navigation functions
  const nextSpotifyPlaylist = useCallback(() => {
    setCurrentSpotifyIndex((prev) => 
      prev === spotifyPlaylists.length - 1 ? 0 : prev + 1
    );
  }, [spotifyPlaylists.length]);

  const prevSpotifyPlaylist = useCallback(() => {
    setCurrentSpotifyIndex((prev) => 
      prev === 0 ? spotifyPlaylists.length - 1 : prev - 1
    );
  }, [spotifyPlaylists.length]);

  // Touch handlers for swipe functionality
  const handleTouchStart = useCallback((e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextCertificate();
    }
    if (isRightSwipe) {
      prevCertificate();
    }
  }, [touchStart, touchEnd, nextCertificate, prevCertificate]);

  // Touch handlers for Spotify slider
  const handleSpotifyTouchStart = useCallback((e) => {
    setSpotifyTouchEnd(null);
    setSpotifyTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleSpotifyTouchMove = useCallback((e) => {
    setSpotifyTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleSpotifyTouchEnd = useCallback(() => {
    if (!spotifyTouchStart || !spotifyTouchEnd) return;
    
    const distance = spotifyTouchStart - spotifyTouchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSpotifyPlaylist();
    }
    if (isRightSwipe) {
      prevSpotifyPlaylist();
    }
  }, [spotifyTouchStart, spotifyTouchEnd, nextSpotifyPlaylist, prevSpotifyPlaylist]);

  // Optimized image component with loading state
  const CertificateImage = useCallback(({ src, alt, className }) => (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      loading="lazy"
      style={{ 
        opacity: imagesLoaded ? 1 : 0.5,
        transition: 'opacity 0.3s ease'
      }}
      onLoad={(e) => {
        e.target.style.opacity = 1;
      }}
    />
  ), [imagesLoaded]);

  // Auto-scroll for mobile - only when images are loaded
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      const interval = setInterval(() => {
        nextCertificate();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentCertificateIndex, imagesLoaded, nextCertificate]);

  // Auto-scroll for Spotify playlists on mobile - DISABLED
  // useEffect(() => {
  //   const isMobile = window.innerWidth <= 768;
  //   if (isMobile) {
  //     const interval = setInterval(() => {
  //       nextSpotifyPlaylist();
  //     }, 4000); // Slightly longer interval for Spotify
  //     return () => clearInterval(interval);
  //   }
  // }, [currentSpotifyIndex, nextSpotifyPlaylist]);

  // Component for YouTube playlist slider - optimized with useCallback
  const YouTubePlaylistSlider = useCallback(() => {
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
            key={currentPlaylist.id} // Add key to prevent unnecessary reloads
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
  }, [currentPlaylistIndex, youtubePlaylists]);

  // Component for Certificates slider - simplified without internal hooks
  const CertificatesSlider = useCallback(() => {
    return (
      <div className="certificates-slider">
        <div className="certificates-header">
          <h3>Mis Certificaciones</h3>
          <div className="certificates-nav">
            <button onClick={prevCertificate} className="nav-btn">‹</button>
            <span className="certificates-counter">
              {currentCertificateIndex + 1} / {certificates.length}
            </span>
            <button onClick={nextCertificate} className="nav-btn">›</button>
          </div>
        </div>
        <div className="certificates-content">
          {/* Desktop view - show all certificates */}
          <div className="certificates-desktop">
            {certificates.map((cert) => (
              <div key={cert.id} className="certificate-card">
                <div className="certificate-header">
                  <CertificateImage 
                    src={cert.logo} 
                    alt={cert.institution} 
                    className="certificate-logo" 
                  />
                  <div className="certificate-info">
                    <h4>{cert.title}</h4>
                    <p>{cert.institution}</p>
                    <span>{cert.description}</span>
                  </div>
                </div>
                <div className="certificate-image">
                  <CertificateImage 
                    src={cert.certificate} 
                    alt={cert.title} 
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile view - show current certificate */}
          <div 
            className="certificates-mobile"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="certificate-card">
              <div className="certificate-header">
                <CertificateImage 
                  src={certificates[currentCertificateIndex].logo} 
                  alt={certificates[currentCertificateIndex].institution} 
                  className="certificate-logo" 
                />
                <div className="certificate-info">
                  <h4>{certificates[currentCertificateIndex].title}</h4>
                  <p>{certificates[currentCertificateIndex].institution}</p>
                  <span>{certificates[currentCertificateIndex].description}</span>
                </div>
              </div>
              <div className="certificate-image">
                <CertificateImage 
                  src={certificates[currentCertificateIndex].certificate} 
                  alt={certificates[currentCertificateIndex].title} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, [currentCertificateIndex, certificates, imagesLoaded, nextCertificate, prevCertificate, handleTouchStart, handleTouchMove, handleTouchEnd, CertificateImage]);

  // Component for Spotify Playlists slider
  const SpotifyPlaylistsSlider = useCallback(() => {
    // Get current playlists - 2 for desktop, 1 for mobile
    const getCurrentPlaylists = () => {
      const isMobile = window.innerWidth <= 380; // Cambiado a 380px para móvil
      if (isMobile) {
        return [spotifyPlaylists[currentSpotifyIndex]];
      } else {
        // Para PC: mostrar 2 playlists
        const firstIndex = currentSpotifyIndex;
        const secondIndex = (currentSpotifyIndex + 1) % spotifyPlaylists.length;
        return [spotifyPlaylists[firstIndex], spotifyPlaylists[secondIndex]];
      }
    };

    const currentPlaylists = getCurrentPlaylists();

    return (
      <div className="spotify-playlists-slider">
        <div className="spotify-playlists-header">
          <h3>Mis Playlists</h3>
          <div className="spotify-playlists-nav">
            <button onClick={prevSpotifyPlaylist} className="nav-btn">‹</button>
            <span className="spotify-playlists-counter">
              {currentSpotifyIndex + 1} / {spotifyPlaylists.length}
            </span>
            <button onClick={nextSpotifyPlaylist} className="nav-btn">›</button>
          </div>
        </div>
        <div className="spotify-playlists-content">
          {/* Desktop view - show 2 playlists per row */}
          <div className="spotify-playlists-desktop">
            <div className="spotify-playlists-row">
              {currentPlaylists.map((playlist) => (
                <div key={playlist.id} className="spotify-playlist-card">
                  <div className="spotify-playlist-header">
                    <h4>{playlist.title}</h4>
                    <span className="playlist-genre">{playlist.genre}</span>
                  </div>
                  <div className="spotify-playlist-iframe">
                    <iframe 
                      src={playlist.embedUrl}
                      width="100%" 
                      height="450" 
                      frameBorder="0" 
                      allowFullScreen 
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy">
                    </iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile view - show current playlist */}
          <div 
            className="spotify-playlists-mobile"
            onTouchStart={handleSpotifyTouchStart}
            onTouchMove={handleSpotifyTouchMove}
            onTouchEnd={handleSpotifyTouchEnd}
          >
            <div className="spotify-playlist-card">
              <div className="spotify-playlist-header">
                <h4>{spotifyPlaylists[currentSpotifyIndex].title}</h4>
                <span className="playlist-genre">{spotifyPlaylists[currentSpotifyIndex].genre}</span>
              </div>
              <div className="spotify-playlist-iframe">
                <iframe 
                  src={spotifyPlaylists[currentSpotifyIndex].embedUrl}
                  width="100%" 
                  height="380" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, [currentSpotifyIndex, spotifyPlaylists, nextSpotifyPlaylist, prevSpotifyPlaylist, handleSpotifyTouchStart, handleSpotifyTouchMove, handleSpotifyTouchEnd]);

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

    // Handle external service errors gracefully
    const originalError = console.error;
    console.error = (...args) => {
      // Suppress known external service errors that don't affect functionality
      const message = args.join(' ');
      if (message.includes('play.google.com') || 
          message.includes('401') || 
          message.includes('Unauthorized')) {
        // Log silently or handle differently
        console.warn('External service error (suppressed):', message);
        return;
      }
      // Call original console.error for other errors
      originalError.apply(console, args);
    };

    // Cleanup
    return () => {
      observer.disconnect();
      console.error = originalError; // Restore original console.error
    };
  }, []);

  return (
    <body>
      <div className="github-container">{/* Removed theme toggle button since it's now in the header */}
        {/* Header Section - GitHub Style */}
        <section id="inicio" className="profile-header">
          <div className="profile-sidebar">
            <div className="profile-image-container">
              <img src={profileImage} alt="Carlos Alexander Burgos" className="profile-image" />
            </div>
            <div className="profile-info">
              <h1 className="profile-name">Carlos Alexander Burgos J.</h1>
              <p className="profile-username">CarlosBurgos1609</p>
              <p className="profile-bio">
                <span className="bio-item">
                  <img src={ingeIcon} alt="Systems Engineer" className="bio-icon" />
                  Systems Engineer
                </span><br/>
                <span className="bio-item">
                  <img src={fullstakIcon} alt="Full Stack Developer" className="bio-icon" />
                  Full Stack Developer
                </span><br/>
                <span className="bio-item">
                  <img src={musicIcon} alt="Music Lover" className="bio-icon" />
                  Music Lover
                </span><br/>
                <span className="bio-item">
                  <img src={newTecnologyIcon} alt="Always learning new technologies" className="bio-icon" />
                  Always learning new technologies
                </span>
              </p>
              <div className="profile-details">
                <div className="detail-item">
                  <img src={universityIcon} alt="University" className="detail-icon" />
                  <span>CESMAG University</span>
                </div>
                <div className="detail-item">
                  <img src={colombiaIcon} alt="Colombia" className="detail-icon detail-icon-no-invert" />
                  <span>Colombia</span>
                </div>
                <div className="detail-item">
                  <img src={webIcon} alt="Website" className="detail-icon" />
                  <a href="https://carlosburgos1609.github.io/build/" target="_blank">carlosburgos1609.github.io</a>
                </div>
                <div className="detail-item">
                  <img src={gmailIcon} alt="Email" className="detail-icon detail-icon-no-invert" />
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

            
            {/* Technologies Section */}
            <div id="lenguajes" className="technologies-section">
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
              </div>
            </div>
{/* Popular Repositories */}
            <div id="aplicaciones" className="repositories-section">
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

            {/* Spotify Section */}
            <div id="contactos" className="spotify-section">
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
                
                {/* New Spotify Playlists Slider */}
                <div className="spotify-playlists-section">
                  <SpotifyPlaylistsSlider />
                </div>
                
                <div className="spotify-button">
                  <a href="https://carlosburgos1609.github.io/build/#/playlists">
                    <button className="view-all-playlists">View all playlists →</button>
                  </a>
                </div>
              </div>
            </div>

            {/* YouTube Section */}
            <div id="playlists" className="youtube-section">
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

            {/* Certificates Section */}
            <div id="certificados" className="certificates-section">
              <h2>
                🏆 Mis Certificaciones 🏆
              </h2>
              <div className="certificates-content">
                {!imagesLoaded && (
                  <div className="loading-state">
                    <div className="loading-spinner"></div>
                    <p>Cargando certificados...</p>
                  </div>
                )}
                <div style={{ opacity: imagesLoaded ? 1 : 0.3, transition: 'opacity 0.5s ease' }}>
                  <CertificatesSlider />
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
