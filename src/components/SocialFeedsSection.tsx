// Fix for Twitter widget typing
declare global {
  interface Window {
    twttr?: any;
  }
}
import React, { useEffect, useState, useRef } from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Facebook and Twitter widgets are loaded via script tags
// YouTube feed will use API fetch

const FACEBOOK_PAGE_URL = "https://www.facebook.com/MAFCImr";
const TWITTER_HANDLE = "mafcimr";
const YOUTUBE_CHANNEL_ID = "UCzoxWhVUNk8h0xfxj-Zj-bw"; // Channel ID for @MAFCI_mr
const YOUTUBE_API_KEY = "AIzaSyAp40BHGoVaUCqiy-VL310npWA8jSWY0Y0";
const YOUTUBE_MAX_RESULTS = 1;

const SocialFeedsSection: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [ytError, setYtError] = useState<string | null>(null);

  const twitterRef = useRef<HTMLDivElement>(null);
  const [fbLoaded, setFbLoaded] = useState(false);
  const [fbError, setFbError] = useState<string | null>(null);
  const fbCheckInterval = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    // Load Facebook SDK
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
      document.body.appendChild(script);
    }
    // Facebook widget load detection
    const checkFbLoaded = () => {
      const fbWidget = document.querySelector('.fb-page');
      if (fbWidget?.querySelector('iframe')) {
        setFbLoaded(true);
        setFbError(null);
        if (fbCheckInterval.current) clearInterval(fbCheckInterval.current);
      }
    };
    fbCheckInterval.current = setInterval(checkFbLoaded, 500);
    const timeout = setTimeout(() => {
      if (!fbLoaded) {
        setFbError('Facebook feed failed to load.');
        if (fbCheckInterval.current) clearInterval(fbCheckInterval.current);
      }
    }, 10000);
    return () => {
      if (fbCheckInterval.current) clearInterval(fbCheckInterval.current);
      clearTimeout(timeout);
    };
    // Load Twitter widgets
    const renderTwitter = () => {
      if (window.twttr?.widgets && twitterRef.current) {
        window.twttr.widgets.load(twitterRef.current);
      }
    };
    if (!document.getElementById('twitter-wjs')) {
      const script = document.createElement('script');
      script.id = 'twitter-wjs';
      script.src = 'https://platform.twitter.com/widgets.js';
      script.onload = renderTwitter;
      document.body.appendChild(script);
    } else {
      renderTwitter();
    }
  }, []);

  useEffect(() => {
    // Fetch YouTube videos
    async function fetchVideos() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=${YOUTUBE_MAX_RESULTS}`
        );
        const data = await res.json();
        if (data.items) {
          setVideos(data.items.filter((item: any) => item.id.kind === 'youtube#video'));
        } else {
          setYtError('No videos found.');
          // Log error for debugging
          console.error('YouTube API error:', data);
        }
      } catch (e) {
        setYtError('Failed to load YouTube feed.');
        // Log error for debugging
        console.error('YouTube fetch error:', e);
      }
    }
    fetchVideos();
  }, []);

  const { t } = useTranslation();
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">{t('socialFeeds.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Facebook Feed */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center min-h-[600px] max-w-full">
            <div className="mb-4 flex items-center justify-center">
              <FaFacebook size={36} className="text-[#1877f3]" title="Facebook" />
            </div>
            <div className="w-full flex justify-center">
              <div
                className="w-full flex flex-col items-center bg-white rounded-2xl shadow p-2 fb-feed-scroll"
                style={{ maxWidth: 500, height: 500, overflowY: 'scroll', overflowX: 'hidden', position: 'relative', boxSizing: 'border-box', borderRadius: '1.5rem' }}
              >
                {!fbLoaded && !fbError && (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#1877f3] mb-2"></div>
                    <div className="text-gray-500 text-center">{t('socialFeeds.facebookLoading')}</div>
                  </div>
                )}
                {fbError && !fbLoaded && (
                  <div className="text-red-500 text-center mb-2">{t('socialFeeds.facebookError')}</div>
                )}
                <div
                  className="fb-page"
                  data-href={FACEBOOK_PAGE_URL}
                  data-tabs="timeline"
                  data-width="500"
                  data-height="500"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                  style={{
                    width: '100%',
                    height: '100%',
                    display: fbLoaded ? 'block' : 'none',
                    margin: '0 auto',
                    overflow: 'visible',
                    borderRadius: '1rem',
                    boxSizing: 'border-box',
                  }}
                >
                  <blockquote cite={FACEBOOK_PAGE_URL} className="fb-xfbml-parse-ignore">
                    <a href={FACEBOOK_PAGE_URL}>MAFCI Facebook</a>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          {/* Twitter Feed */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center min-h-[600px] max-w-full">
            <div className="mb-4 flex items-center justify-center">
              <FaTwitter size={36} className="text-[#1da1f2]" title="Twitter/X" />
            </div>
            <div className="w-full flex justify-center" ref={twitterRef}>
              <a
                className="twitter-timeline"
                data-height="500"
                data-theme="light"
                href={`https://twitter.com/${TWITTER_HANDLE}?ref_src=twsrc%5Etfw`}
              >
                {t('socialFeeds.tweetsBy')}
              </a>
            </div>
          </div>
          {/* YouTube Feed */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center min-h-[600px] max-w-full">
            <div className="mb-4 flex items-center justify-center">
              <FaYoutube size={36} className="text-[#ff0000]" title="YouTube" />
            </div>
            <div className="w-full flex flex-col items-center">
              {ytError && <div className="text-red-500 text-center">{ytError}</div>}
              {!ytError && videos.length === 0 && <div className="text-gray-500 text-center">Loading or no videos found. Please check your channel ID and API key.</div>}
              {videos.length > 0 && (
                <div className="w-full flex flex-col items-center">
                  <div className="aspect-w-16 aspect-h-9 w-full max-w-xl mb-4">
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
                      title={videos[0].snippet.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg w-full h-full"
                    ></iframe>
                  </div>
                  <div className="text-base font-medium text-gray-800 text-center">
                    {videos[0].snippet.title}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeedsSection;
