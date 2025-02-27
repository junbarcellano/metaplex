import React from 'react';
import { useEffect } from 'react';

export const Banner = (props: {
  src: string;
  useBannerBg: boolean;
  headingText: string;
  subHeadingText: string;
  subHeadingText2: string;
  actionComponent?: JSX.Element;
  children?: React.ReactNode;
}) => {
  useEffect(() => {
    const mainBg = document.getElementById('main-bg');
    const gradient = document.getElementById('bg-gradient');
    if (mainBg && props.useBannerBg) {
      mainBg.style.backgroundImage = `url(${props.src})`;
      mainBg.style.display = 'inline-block';
      if (gradient) {
        gradient.style.display = 'inline-block';
      }
    }

    return () => {
      const mainBg = document.getElementById('main-bg');
      const gradient = document.getElementById('bg-gradient');
      if (mainBg && props.useBannerBg) {
        mainBg.style.backgroundImage = '';
        mainBg.style.display = 'none';
      }
      if (gradient) gradient.style.display = 'none';
    };
  }, [props.src, props.useBannerBg]);

  return (
    <>
      <div id="mobile-banner">
        <img className="banner-img" src={props.src} />
        <div className="banner-content">
          <div id={'main-heading'}>{props.headingText}</div>
          <div id={'sub-heading'}>{props.subHeadingText}</div>
          <div id={'sub-heading'}>{props.subHeadingText2}</div>
          {props.actionComponent}
        </div>
      </div>

      <div
        id={'current-banner'}
        style={{
          backgroundImage: `linear-gradient(to right, #651FFF , #AA00FF)`,
        }}
      >
        <span id={'gradient-banner'}></span>
        <div id="banner-inner" style={{ backgroundImage: `url(${props.src})` }}>
          <div id={'message-container'}>
            <div id={'main-heading'}>{props.headingText}</div>
            <div id={'sub-heading'}>{props.subHeadingText}</div>
            <div id={'sub-heading'}>{props.subHeadingText2}</div>
            <div>
              <b>COMING SOON!</b>
            </div>
            <div className="banner-buttons">
              <img height="40" src="/stores.png" />
            </div>
          </div>
          {props.children}
        </div>
      </div>
    </>
  );
};
