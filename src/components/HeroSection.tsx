import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

// Import poster image (you'll need to add a poster image to your assets)
const PosterImage = './assets/heroposter.png';

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

    // Check if video can play
    const video = videoRef.current;
    if (video) {
      const canPlay = video.canPlayType('video/mp4');
      if (canPlay === '') {
        setShowFallback(true);
      }
    }

    // Cleanup
    return () => {
      if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
      }
    };
  }, [i18n.language]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    // Try to play the video (muted autoplay)
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn('Video autoplay failed:', error);
        setShowFallback(true);
      });
    }
  };

  const handleVideoError = () => {
    console.error('Error loading video');
    setShowFallback(true);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        {/* Fallback image that shows while video loads or if video fails */}
        {(!isVideoLoaded || showFallback) && (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${PosterImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}
        
        {/* Optimized Video */}
        {!showFallback && (
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            preload="metadata"
            poster={PosterImage}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ objectPosition: 'center' }}
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
            onCanPlayThrough={handleVideoLoaded}
          >
            {/* Multiple quality levels would be better if you have them */}
            <source 
              src="./assets/video mafci r.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      
      {/* Hero Content */}
      <div className={`relative z-20 flex flex-col justify-center items-center text-center p-4 h-full transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          className="max-w-3xl px-4 py-8 mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            {i18n.language === 'fr' && (
              <a
                href="./assets/presentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
              >
                {t('presentationFR')}
              </a>
            )}
            {i18n.language === 'ar' && (
              <a
                href="./assets/presentation-ar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
              >
                {t('presentationAR')}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;