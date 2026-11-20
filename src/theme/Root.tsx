
import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export default function Root({ children }: { children: ReactNode }) {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Disable GTranslate during local development
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    (window as any).gtranslateSettings = {
      default_language: 'en',
      native_language_names: true,
      languages: ['en', 'zh-CN', 'zh-TW'],
      wrapper_selector: '.gtranslate_wrapper',
    };

    if (!document.getElementById('gtranslate-widget-script')) {
      const script = document.createElement('script');
      script.id = 'gtranslate-widget-script';
      script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    const wrapper = document.querySelector('.gtranslate_wrapper');
    if (!wrapper) return;

    const checkLanguage = () => {
      const languageCode = wrapper
        .querySelector('.gt-lang-code')
        ?.textContent?.trim()
        .toLowerCase();

      if (languageCode) {
        setShowDisclaimer(languageCode !== 'en');
      }
    };

    checkLanguage();

    const observer = new MutationObserver(checkLanguage);
    observer.observe(wrapper, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <div className="gtranslate_wrapper" />
      )}

      {showDisclaimer && (
        <div className="translation-disclaimer">
          <strong>Translation Disclaimer:</strong> This page is
          automatically translated for reference purposes only.
          In case of any translation errors or inconsistencies,
          please refer to the English version, which is the
          authoritative source.
        </div>
      )}

      {children}
    </>
  );
}
