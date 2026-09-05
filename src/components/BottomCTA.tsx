import { QrCode } from 'lucide-react';

export default function BottomCTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-circle cta-circle--top"></div>
          <div className="cta-circle cta-circle--bottom"></div>

          <div className="cta-content">
            <h2 className="cta-title">
              Take Your Vocabulary <br className="hero-break" /> Anywhere You Go
            </h2>
            <p className="cta-text">
              Download NROQ now and start your journey to confident conversations.
            </p>

            <div className="cta-buttons">
              <button className="cta-download-button">
                <img src="/src/assets/play-store-icon.svg" alt="Play Store svg" width="40" height="30" />
                <div className="cta-download-text">
                  <div className="download-label">GET IT ON</div>
                  <div className="download-title">Google Play</div>
                </div>
              </button>

              <button className="cta-download-button">
                <img src="/src/assets/apple.svg" alt="apple svg" width="40" height="30"   style={{ filter: "brightness(0) invert(1)" }}/>
                <div className="cta-download-text">
                  <div className="download-label">Download on the</div>
                  <div className="download-title">App Store</div>
                </div>
              </button>

              <div className="cta-qr">
                <div className="cta-qr-box">
                  <QrCode className="button-icon" />
                </div>
                <div className="cta-qr-copy">
                  Scan to download<br />the app
                </div>
              </div>
            </div>
          </div>

          <div className="cta-mockup">
            <div className="cta-mockup-inner"   style={{ height:"600", width:"900" }}>
              <img src="/src/assets/hero-phones.png" alt="NROQ App Mockups" height="800" width="800" />
            </div>
            {/* <svg className="cta-leaf" viewBox="0 0 100 100" fill="currentColor">
               <path d="M50 100 C 50 50, 0 50, 0 10 C 20 10, 50 30, 50 100"/>
               <path d="M50 100 C 50 60, 80 60, 90 20 C 70 20, 50 40, 50 100"/>
            </svg> */}
          </div>
        </div>
      </div>
    </section>
  );
}
