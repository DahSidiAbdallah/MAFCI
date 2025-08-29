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
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_MAX_RESULTS = 1;

const SocialFeedsSection: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [ytError, setYtError] = useState<string | null>(null);

  const tweetRef = useRef<HTMLDivElement>(null);
  const [tweetLoaded, setTweetLoaded] = useState(false);
  const [tweetError, setTweetError] = useState<string | null>(null);
  const [tweetRetryKey, setTweetRetryKey] = useState(0);
  const [fbLoaded, setFbLoaded] = useState(false);
  const [fbError, setFbError] = useState<string | null>(null);
  const [fbRetryKey, setFbRetryKey] = useState(0);
  const fbCheckInterval = useRef<number | null>(null);
  // Facebook widget effect (robust loading/error handling)
  useEffect(() => {
    setFbLoaded(false);
    setFbError(null);
    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
      document.body.appendChild(script);
    }
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
      const fbWidget = document.querySelector('.fb-page');
      if (!fbWidget?.querySelector('iframe')) {
        setFbError('Facebook feed failed to load.');
        setFbLoaded(false);
      }
      if (fbCheckInterval.current) clearInterval(fbCheckInterval.current);
    }, 10000);
    return () => {
      if (fbCheckInterval.current) clearInterval(fbCheckInterval.current);
      clearTimeout(timeout);
    };
  }, [fbRetryKey]);

  // Always display the static tweet and stop loading when it's rendered (robust)
  useEffect(() => {
    setTweetLoaded(false);
    setTweetError(null);
    if (!tweetRef.current) return;
    tweetRef.current.innerHTML = '';
    const blockquote = document.createElement('blockquote');
    blockquote.className = 'twitter-tweet';
    blockquote.setAttribute('data-width', '380');
    blockquote.setAttribute('data-theme', 'light');
    blockquote.innerHTML = `
      <p lang="fr" dir="ltr">
        𝗠𝗔𝗙𝗖𝗜, recrute via la plateforme <a href="https://twitter.com/hashtag/TECHGHIL?src=hash&amp;ref_src=twsrc%5Etfw">#TECHGHIL</a> des stagiaires pour les postes suivants:<br />
        • 𝗗𝗲𝘂𝘅 É𝗹𝗲𝗰𝘁𝗿𝗶𝗰𝗶𝗲𝗻𝘀 <a href="https://t.co/zmkIwSpE4X">https://t.co/zmkIwSpE4X</a><br />
        • 𝗢𝗽é𝗿𝗮𝘁𝗲𝘂𝗿 𝗯𝗿𝗼𝘆𝗲𝘂𝗿<a href="https://t.co/DeNMZuWqeC">https://t.co/DeNMZuWqeC</a><br />
        Date limite : 24 juillet 2025<br />
        L <a href="https://twitter.com/hashtag/stage?src=hash&amp;ref_src=twsrc%5Etfw">#stage</a> <a href="https://twitter.com/hashtag/emploi?src=hash&amp;ref_src=twsrc%5Etfw">#emploi</a> <a href="https://twitter.com/hashtag/Mauritanie?src=hash&amp;ref_src=twsrc%5Etfw">#Mauritanie</a>
      </p>
      &mdash; MAFCI- مافسي موريتانيا (@mafcimr) <a href="https://twitter.com/mafcimr/status/1947362201628467667?ref_src=twsrc%5Etfw">July 21, 2025</a>
    `;
    tweetRef.current.appendChild(blockquote);
    function renderTweet() {
      if (window.twttr?.widgets) {
        window.twttr.widgets.load(tweetRef.current);
      }
    }
    let loaded = false;
    function checkLoaded() {
      if (tweetRef.current?.querySelector('iframe')) {
        setTweetLoaded(true);
        loaded = true;
      }
    }
    let interval: any;
    let timeout: any;
    function fail() {
      setTweetError('Twitter feed failed to load.');
      setTweetLoaded(false);
    }
    if (!document.getElementById('twitter-wjs')) {
      const script = document.createElement('script');
      script.id = 'twitter-wjs';
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = () => {
        renderTweet();
        interval = setInterval(() => {
          checkLoaded();
          if (loaded) clearInterval(interval);
        }, 300);
        timeout = setTimeout(() => {
          clearInterval(interval);
          if (!loaded) fail();
        }, 10000);
      };
      document.body.appendChild(script);
    } else {
      renderTweet();
      interval = setInterval(() => {
        checkLoaded();
        if (loaded) clearInterval(interval);
      }, 300);
      timeout = setTimeout(() => {
        clearInterval(interval);
        if (!loaded) fail();
      }, 10000);
    }
    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [tweetRetryKey]);

  // YouTube API effect (robust loading/error/fallback)
  useEffect(() => {
    const cacheKey = `yt_latest_video_${YOUTUBE_CHANNEL_ID}`;
    const cache = localStorage.getItem(cacheKey);
    let cacheValid = false;
    if (cache) {
      try {
        const parsed = JSON.parse(cache);
        if (parsed.timestamp && Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000 && parsed.items) {
          setVideos(parsed.items);
          cacheValid = true;
        }
      } catch {}
    }
    if (!cacheValid) {
      async function fetchVideos() {
        try {
          const res = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=${YOUTUBE_MAX_RESULTS}`
          );
          const data = await res.json();
          if (data.items) {
            const filtered = data.items.filter((item: any) => item.id.kind === 'youtube#video');
            setVideos(filtered);
            setYtError(null);
            localStorage.setItem(cacheKey, JSON.stringify({ items: filtered, timestamp: Date.now() }));
          } else {
            setYtError(t('socialFeeds.noVideosFound'));
            setVideos([]);
            console.error('YouTube API error:', data);
          }
        } catch (e) {
          setYtError(t('socialFeeds.youtubeError'));
          setVideos([]);
          console.error('YouTube fetch error:', e);
        }
      }
      fetchVideos();
    }
  }, []);

  const { t, i18n } = useTranslation();


  // Only update translatable text on language change, do not reload widgets or API data
  // This prevents remounting and unnecessary API calls
  // If you want to mimic a page refresh, you can force a full reload, but that's not recommended for SPA UX
  // Instead, keep the widgets/data and only update the UI text
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
                className="w-full flex flex-col items-center bg-white rounded-2xl shadow p-2 fb-feed-scroll custom-scrollbar"
                style={{ maxWidth: 380, height: 480, overflowY: 'auto', overflowX: 'hidden', position: 'relative', boxSizing: 'border-box', borderRadius: '1.5rem', justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize: '0.95rem' }}
              >
                {!fbLoaded && !fbError && (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#1877f3] mb-2"></div>
                    <div className="text-gray-500 text-center">{t('socialFeeds.facebookLoading')}</div>
                  </div>
                )}
                {fbError && !fbLoaded && (
                  <div className="flex flex-col items-center justify-center mb-2">
                    <div className="text-red-500 text-center mb-2">{t('socialFeeds.facebookError') || fbError}</div>
                    <button
                      className="mt-2 px-4 py-2 bg-[#1877f3] text-white rounded hover:bg-[#145db2] transition"
                      onClick={() => setFbRetryKey(k => k + 1)}
                    >
                      {t('socialFeeds.retry') || 'Retry'}
                    </button>
                  </div>
                )}
                <div
                  className="fb-page"
                  data-href={FACEBOOK_PAGE_URL}
                  data-tabs="timeline"
                  data-width="360"
                  data-height="460"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                  style={{
                    width: 360,
                    height: 460,
                    display: fbLoaded ? 'block' : 'none',
                    margin: '0 auto',
                    overflow: 'visible',
                    borderRadius: '1rem',
                    boxSizing: 'border-box',
                    fontSize: '0.95rem',
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
            <div className="w-full flex flex-col items-center justify-start" style={{ position: 'relative', minHeight: 60 }}>
              {/* Only show the heading/label above the widget, not inside the widget */}
              <div className="text-base font-medium text-gray-800 text-center mb-2">{t('socialFeeds.tweetsBy')}</div>
              {/* Always show loading until the tweet is rendered, then show the tweet only */}
              {!tweetLoaded && !tweetError && (
                <div className="flex flex-col items-center justify-center mb-4 w-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#1da1f2] mb-2"></div>
                  <div className="text-gray-500 text-center">{t('socialFeeds.twitterLoading')}</div>
                </div>
              )}
              {tweetError && !tweetLoaded && (
                <div className="flex flex-col items-center justify-center mb-2">
                  <div className="text-red-500 text-center mb-2">{t('socialFeeds.twitterError') || tweetError}</div>
                  <button
                    className="mt-2 px-4 py-2 bg-[#1da1f2] text-white rounded hover:bg-[#0d8ddb] transition"
                    onClick={() => setTweetRetryKey(k => k + 1)}
                  >
                    {t('socialFeeds.retry') || 'Retry'}
                  </button>
                </div>
              )}
              <div ref={tweetRef} style={{ width: '100%' }} />
            </div>
          </div>
          {/* YouTube Feed */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center min-h-[600px] max-w-full">
            <div className="mb-4 flex items-center justify-center">
              <FaYoutube size={36} className="text-[#ff0000]" title="YouTube" />
            </div>
            <div className="w-full flex flex-col items-center">
              {/* Only show error if there is an error and no video is available */}
              {ytError && videos.length === 0 && (
                <div className="text-red-500 text-center">
                  {ytError}
                  <div className="mt-2 text-sm text-gray-500">
                    {t('socialFeeds.youtubeErrorDetails')}
                  </div>
                  <a
                    href={"https://www.youtube.com/channel/" + YOUTUBE_CHANNEL_ID}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 bg-[#ff0000] text-white rounded hover:bg-[#c20000] transition"
                  >
                    {t('socialFeeds.visitYoutubeChannel')}
                  </a>
                </div>
              )}
              {!ytError && videos.length === 0 && (
                <div className="text-gray-500 text-center">
                  {t('socialFeeds.youtubeLoading')}
                </div>
              )}
              {videos.length > 0 && (
                <div className="w-full flex flex-col items-center">
                  <div
                    className="w-full mb-4"
                    style={{ maxWidth: 380, height: 240, aspectRatio: '16/9', position: 'relative' }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
                      title={videos[0].snippet.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg w-full h-full"
                      style={{ display: 'block', height: '100%' }}
                    ></iframe>
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
