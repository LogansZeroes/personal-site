'use client';

import Script from 'next/script';
import React, { useMemo } from 'react';

export default function Page() {
  const age = useMemo(() => {
    const birth = new Date(1990, 11, 27);
    const ageDate = new Date(Date.now() - birth.getTime());
    return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
  }, []);

  return (
    <>
      <div id="wrapper">
        <nav id="nav">
          <a href="#home" className="icon fa-home"><span>Home</span></a>
          <a href="#about" className="icon fa-user"><span>About</span></a>
          <a href="#work" className="icon fa-folder"><span>Portfolio</span></a>
          <a href="https://linkedin.com/in/radologan" target="_blank" className="icon fa-linkedin"><span>Linkedin</span></a>
          <a href="https://github.com/LogansZeroes" target="_blank" className="icon fa-github"><span>Github</span></a>
        </nav>

        <div id="main">
          <article id="home" className="panel intro">
            <header>
              <h1>Hey there, I'm Logan!</h1>
              <hr />
              <p>I'm a developer with experience growing and managing teams and shipping apps for the web, browser, iOS, Android, and blockchain.</p>
              <br />
              <p>I live in California, where I strive to create technology and happiness for as many people as possible.</p>
            </header>
            <a href="#about" className="jumplink pic">
              <span className="arrow icon fa-chevron-right"><span>About me</span></span>
              <img src="/images/iphone.png" alt="" />
            </a>
          </article>

          <article id="about" className="panel">
            <header>
              <h1>About me:</h1>
              <hr />
              <span>I'm a </span><span id="age">{age}</span><span>-year-old developer with a history of delivering elegant products and enjoyable experiences.
                As an engineer and even in my day-to-day, I strive to make things better for others.
                I'm most excited by products with the potential to improve lives, such as cryptocurrency.</span>
            </header>
          </article>

          <article id="work" className="panel">
            <header>
              <h2>Featured Works</h2>
              <hr />
            </header>
            <section>
              <p>
                This is a small selection of public-facing projects.
              </p>
              <div className="row">
                <div className="col-12 col-6-medium col-12-small">
                  <a target="_blank" href="https://www.ancestroo.com" className="image fit">
                    <img src="/images/ancestroo.png" alt="" />
                  </a>
                  <div className="text">Ancestroo is a guided journal for documenting and sharing your life story with your loved ones. Next.js with NextAuth.js, Resent, Stripe, jsPDF, FFmpeg, and AWS.</div>
                </div>
                <div className="col-12 col-6-medium col-12-small">
                  <a target="_blank" href="https://www.tosabout.com" className="image fit">
                    <img src="/images/tosabout.png" alt="" />
                  </a>
                  <div className="text">ToSabout is a free web app and browser extension to empower people with knowledge of legal policies like Terms of Service and Privacy Policies. Next.js app with serverless scraping and processing daily.</div>
                </div>
                <div className="col-12 col-6-medium col-12-small">
                  <a target="_blank" href="https://www.bamboozledapp.com" className="image fit">
                    <img src="/images/bamboozled.png" alt="" />
                  </a>
                  <div className="text">Bamboozled is a trivia game for F*R*I*E*N*D*S lovers! Live in the App and Play Stores with over 100 users, Bamboozled brings hard trivia questions and no multiple choice answers. React Native with RoR.</div>
                </div>
                <div className="col-12 col-6-medium col-12-small">
                  <a target="_blank" href="https://www.makeplaydate.com" className="image fit">
                    <img src="/images/playdate.png" alt="" />
                  </a>
                  <div className="text">Playdate is a friendship app that matches users on-demand for mutual interests. At its peak, Playdate had over 7k active users. React Native with PHP.</div>
                </div>
                <div className="col-12 col-6-medium col-12-small">
                  <a target="_blank" href="https://etherscan.io/token/0xf6962cfe3b9618374097d51bc6691efb3974d06f" className="image fit">
                    <img src="/images/teamhodl.png" alt="" />
                  </a>
                  <div className="text">TeamHODL is a pioneer in cryptocurrency and music, bringing the best of both together. TeamHODL's token and initial coin offering is written in Solidity and live on the Ethereum blockchain. TeamHODL now produces music for cryptocurrency's soundtrack. Visit teamHODL.com to learn more.</div>
                </div>
                <div className="col-12 col-6-medium col-12-small">
                  <a target="_blank" href="http://www.dancedanceevolution.com" className="image fit">
                    <img src="/images/dde.png" alt="" />
                  </a>
                  <div className="text">Dance Dance Evolution is a version of StepMania that lives entirely in the browser. DDE looks to pay our respects to one of our childhood favorite games while also looking to turn the page onto a new era of music-themed games. Written in the MEAN stack.</div>
                </div>
              </div>
            </section>
          </article>
        </div>

        <div id="footer">
          <ul className="copyright">
            <li>Thank you for visiting my page</li><li>As long as you don't try to spam/solicit me, please feel free to <a href="mailto:loganrado@pm.me">email me</a></li>
          </ul>
        </div>
      </div>

      <Script src="/assets/js/jquery.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/browser.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/breakpoints.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/util.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
}
