
import React, { useEffect } from 'react';
import type { ReactNode } from 'react';

export default function Root({ children }: { children: ReactNode }) {
  useEffect(() => {
    console.log('[GTranslate] Root mounted');

    (window as any).gtranslateSettings = {
      default_language: 'en',
      native_language_names: true,
      languages: ['en', 'zh-CN', 'zh-TW'],
      wrapper_selector: '.gtranslate_wrapper',
    };

    console.log('[GTranslate] Settings:', (window as any).gtranslateSettings);

    const script = document.createElement('script');
    script.id = 'gtranslate-widget-script';
    script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
    script.async = true;

    script.onload = () => {
      console.log('[GTranslate] Script loaded successfully');
    };

    script.onerror = () => {
      console.error('[GTranslate] Script failed to load');
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <div className="gtranslate_wrapper" />
      {children}
    </>
  );
}
