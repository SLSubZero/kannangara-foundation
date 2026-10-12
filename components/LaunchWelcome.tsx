"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kannangara-launch-welcome-seen";

export default function LaunchWelcome() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const [showFoundationIntro, setShowFoundationIntro] = useState(false);

  useEffect(() => {
    try {
      const hasSeen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
      if (!hasSeen) {
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeWelcome();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
    // closeWelcome is stable in practice and only updates state/storage.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  function closeWelcome() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // The welcome screen still works if storage is unavailable.
    }
    setIsOpen(false);
  }

  function launchWebsite() {
    if (isLaunching) return;

    setIsLaunching(true);

    window.setTimeout(() => {
      setIsOpen(false);
      setShowFoundationIntro(true);

      window.setTimeout(() => {
        setShowFoundationIntro(false);
        closeWelcome();
      }, 5000);
    }, 250);
  }

  if (!isReady || (!isOpen && !showFoundationIntro)) return null;

  return (
    <>
      {showFoundationIntro && (
        <div
          className="foundation-intro-overlay"
          role="status"
          aria-live="polite"
          style={{ display: "flex", position: "fixed", inset: 0, zIndex: 10050 }}
        >
          <div className="foundation-intro-content">
            <img
              src="/foundation-logo.png"
              alt="Dr. C.W.W. Kannangara Commemorative Foundation logo"
              className="foundation-intro-logo"
              width="220"
              height="220"
              style={{ display: "block", width: "min(240px, 55vw)", height: "auto", objectFit: "contain" }}
            />
            <p lang="si" className="foundation-intro-name foundation-intro-sinhala">
              ආචාර්ය සී. ඩබ්ලිව්. ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම
            </p>
            <p lang="en" className="foundation-intro-name foundation-intro-english">
              DR. C.W.W. KANNANGARA COMMEMORATIVE FOUNDATION
            </p>
            <p lang="ta" className="foundation-intro-name foundation-intro-tamil">
              டாக்டர் சி.டபிள்யூ.டபிள்யூ. கண்ணங்கரா நினைவு அறக்கட்டளை
            </p>
          </div>
        </div>
      )}
      {isOpen && (
    <div
      className="launch-welcome-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="launch-welcome-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeWelcome();
      }}
    >
      <div className="launch-welcome-card">
        <div className="launch-welcome-icon" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none">
            <path
              d="m4 17 20-10 20 10-20 10L4 17Z"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinejoin="round"
            />
            <path
              d="M12 21v11c7 7 17 7 24 0V21M44 18v13"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="launch-welcome-eyebrow">
          ආචාර්ය සී. ඩබ්ලිව්. ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම
        </p>

        <h2 id="launch-welcome-title" className="launch-welcome-title">
          අපගේ නිල වෙබ් අඩවියට
          <br className="hidden sm:block" /> සාදරයෙන් පිළිගනිමු!
        </h2>

        <p className="launch-welcome-copy">
          නිදහස් අධ්‍යාපනයේ පියාණන් වූ ආචාර්ය සී. ඩබ්ලිව්. ඩබ්ලිව්.
          කන්නන්ගර ශ්‍රීමතාණන්ගේ උදාර මෙහෙවර සහ අධ්‍යාපනික උරුමය
          ආදරයෙන් පරපුරෙන් පරපුරට ගෙන යන අපගේ මෙහෙවර සමඟ එක්වන්න.
        </p>

        <p className="launch-welcome-copy launch-welcome-copy-secondary">
          පදනමේ කටයුතු, වැඩසටහන්, සමරු මෙහෙවර සහ ඉදිරි ක්‍රියාකාරකම්
          පිළිබඳව තොරතුරු දැනගැනීමට සාදරයෙන් පිළිගනිමු.
        </p>

        <div className="launch-welcome-divider" />

        <p className="launch-welcome-motto">
          අධ්‍යාපනයෙන් සුපිපුණු හෙටක් වෙනුවෙන් — අපි එක්ව ඉදිරියට යමු!
        </p>

        <button
          type="button"
          className="launch-welcome-button"
          onClick={launchWebsite}
          disabled={isLaunching}
          autoFocus
        >
          {isLaunching ? "නිල වෙබ් අඩවිය විවෘත වෙමින්..." : "වෙබ් අඩවියට පිවිසෙන්න!"}
          <span aria-hidden="true">{isLaunching ? "✦" : "→"}</span>
        </button>

        <p className="launch-welcome-hint">
          {isLaunching
            ? "අපගේ නිල වෙබ් අඩවිය ඔබ වෙත විවෘත වෙමින් පවතී..."
            : "වෙබ් අඩවියට පිවිසීම සඳහා මෙය ක්ලික් කරන්න."}
        </p>
      </div>

    </div>
      )}
      <style jsx>{`
        .foundation-intro-overlay {
          position: fixed;
          inset: 0;
          z-index: 10005;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(9, 19, 32, 0.76);
          backdrop-filter: blur(7px);
          animation: foundationIntroFadeIn 500ms ease-out both;
        }

        .foundation-intro-content {
          display: flex;
          width: min(900px, 100%);
          flex-direction: column;
          align-items: center;
          gap: 18px;
          text-align: center;
          animation: foundationIntroRise 650ms cubic-bezier(.2,.8,.2,1) both;
        }

        .foundation-intro-logo {
          display: block;
          width: clamp(150px, 24vw, 240px);
          height: auto;
          max-height: 32vh;
          margin: 0 auto;
          object-fit: contain;
          filter: drop-shadow(0 12px 28px rgba(0,0,0,.22));
        }

        .foundation-intro-name {
          margin: 0;
          color: #fffaf0;
          text-wrap: balance;
          line-height: 1.55;
          text-shadow: 0 2px 18px rgba(0,0,0,.2);
        }

        .foundation-intro-sinhala {
          color: #f1d28a;
          font-size: clamp(17px, 2.3vw, 25px);
          font-weight: 700;
        }

        .foundation-intro-english {
          font-size: clamp(13px, 1.7vw, 20px);
          font-weight: 650;
          letter-spacing: .045em;
        }

        .foundation-intro-tamil {
          font-size: clamp(15px, 2vw, 22px);
          font-weight: 600;
        }

        @keyframes foundationIntroFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes foundationIntroRise {
          from { opacity: 0; transform: translateY(18px) scale(.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .foundation-intro-overlay,
          .foundation-intro-content {
            animation: none !important;
          }
        }

        .launch-welcome-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow-y: auto;
          padding: 20px;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(7px);
          animation: launchOverlayIn 380ms ease-out both;
        }

        .launch-welcome-card {
          position: relative;
          width: min(100%, 940px);
          max-height: calc(100dvh - 40px);
          overflow-y: auto;
          border: 1px solid rgba(213, 177, 93, 0.4);
          border-radius: 24px;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(213, 177, 93, 0.11),
              transparent 42%
            ),
            #102744;
          padding: clamp(25px, 5vw, 48px);
          text-align: center;
          color: white;
          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.55);
          animation: launchCardIn 650ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }

        .launch-welcome-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 20px;
          color: #e5c16b;
          animation: launchIconIn 850ms 120ms both;
        }

        .launch-welcome-icon svg {
          width: 100%;
          height: 100%;
        }

        .launch-welcome-eyebrow {
          color: #e5c16b;
          font-size: clamp(12px, 1.6vw, 15px);
          font-weight: 700;
          line-height: 1.8;
          letter-spacing: 0.025em;
        }

        .launch-welcome-title {
          margin-top: 20px;
          color: #fff;
          font-size: clamp(23px, 3vw, 34px);
          font-weight: 800;
          line-height: 1.45;
          text-wrap: balance;
        }

        .launch-welcome-copy {
          max-width: 790px;
          margin: 17px auto 0;
          color: #edf3fb;
          font-size: clamp(13px, 1.5vw, 16px);
          line-height: 2;
        }

        .launch-welcome-copy-secondary {
          margin-top: 12px;
        }

        .launch-welcome-divider {
          height: 1px;
          margin: 25px 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(213, 177, 93, 0.9),
            transparent
          );
        }

        .launch-welcome-motto {
          color: #f0cf79;
          font-size: clamp(14px, 1.8vw, 18px);
          font-weight: 600;
          line-height: 1.8;
        }

        .launch-welcome-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 54px;
          margin-top: 22px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 13px;
          background: linear-gradient(135deg, #f0d184, #d2aa53);
          padding: 14px 25px;
          color: #142943;
          font-size: 15px;
          font-weight: 800;
          box-shadow: 0 0 0 0 rgba(229, 193, 107, 0.42);
          cursor: pointer;
          animation: launchButtonGlow 2.4s 1s ease-in-out infinite;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            background 180ms ease;
        }

        .launch-welcome-button span {
          display: inline-block;
          font-size: 21px;
          transition: transform 180ms ease;
        }

        .launch-welcome-button:disabled {
          cursor: wait;
          animation: none;
          transform: scale(0.98);
        }

        .launch-welcome-button:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, #ffe7a2, #e0b95f);
          box-shadow: 0 10px 28px rgba(229, 193, 107, 0.22);
          animation-play-state: paused;
        }

        .launch-welcome-button:hover span {
          transform: translateX(4px);
        }

        .launch-welcome-button:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 4px;
        }

        .launch-welcome-hint {
          margin-top: 17px;
          color: #cbd8e8;
          font-size: 12px;
        }

        @keyframes launchOverlayIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes launchCardIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes launchIconIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes launchButtonGlow {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(229, 193, 107, 0.25);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(229, 193, 107, 0);
          }
        }

        @media (max-width: 480px) {
          .launch-welcome-overlay {
            padding: 12px;
          }

          .launch-welcome-card {
            max-height: calc(100dvh - 24px);
            border-radius: 18px;
            padding: 25px 19px;
          }

          .launch-welcome-icon {
            width: 40px;
            height: 40px;
            margin-bottom: 15px;
          }

          .launch-welcome-title {
            margin-top: 14px;
          }

          .launch-welcome-copy {
            line-height: 1.85;
          }

          .launch-welcome-divider {
            margin: 20px 0;
          }

          .launch-welcome-button {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .launch-welcome-overlay,
          .launch-welcome-card,
          .launch-welcome-icon,
          .launch-welcome-button {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
