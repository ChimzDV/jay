/* ==========================================================================
   FOR JAY ♡ — PHASE 3 DARK-ROMANCE INTERACTIVE ENGINE (SCRIPT.JS)
   Features:
   - Interactive Seductive Chest Touch & Downward Finger-Slide Opening Experience
   - Reference Poster Interactions (Polaroid Whisper, Desire Checklist, Stay With Me, 3 Fantasy Circles)
   - Personal Confession Lockbox (Unlocks when all 3 confessions are opened)
   - 3-Chapter Progressive Story over her Portrait (assets/jay.jpeg)
   - Atmospheric Slow Background Reveal of her Eyes (assets/eyes.jpeg)
   - "Pick Your Temptation" 3-Card Interactive Experience (Slow & Teasing | Close & Intimate | Surprise Me)
   - Interactive Mood Promise Pills + 4-Mood Late-Night Dial
   - Dark-Romance Midnight Finale + Separate Optional Chocolate Bonus Easter Egg
   ========================================================================== */

// Automatically normalize 127.0.0.1 to localhost so YouTube's embedded player
// does not reject the numeric loopback IP with errorCode: "auth" (Error 150).
if (
  typeof window !== "undefined" &&
  window.location &&
  window.location.hostname === "127.0.0.1" &&
  (window.location.protocol === "http:" || window.location.protocol === "https:")
) {
  window.location.replace(
    window.location.href.replace("//127.0.0.1", "//localhost")
  );
}

const JAY_DATA = {
  // 1. Official YouTube IFrame Player API Sequential 3-Song Playlist
  //    Plays sequentially 1 -> 2 -> 3 from beginning to end, independent of scrolling,
  //    and stops after the 3rd song finishes.
  //    All primary and fallback video IDs are verified embeddable YouTube tracks.
  youtubePlaylist: [
    {
      index: 0,
      title: "Wicked Games",
      artist: "The Weeknd",
      phaseLabel: "Playlist • Track 1 of 3",
      videoId: "O1OTWCd40bc",
      fallbackIds: ["wJ0FCXHl8ig", "vt5MPyvZdEc", "a8ujOHn1ghg"]
    },
    {
      index: 1,
      title: "Earned It",
      artist: "The Weeknd",
      phaseLabel: "Playlist • Track 2 of 3",
      videoId: "waU75jdUnYw",
      fallbackIds: ["L0YmZF8jxik", "xe_iCkFsQKE", "aXVtbNRWgAc"]
    },
    {
      index: 2,
      title: "Adorn",
      artist: "Miguel",
      phaseLabel: "Playlist • Track 3 of 3",
      videoId: "8dM5QYdTo08",
      fallbackIds: ["eqsiuDFrlEk", "h9UwBwnhJgo", "7DOv07S8OyE"]
    }
  ],

  // Reference Section 2 ("I Crave You") polaroid tap whispers
  craveWhispers: [
    "I want you. So bad.",
    "Whether you're dressed or undressed, every picture you share drives me wild.",
    "I keep wondering how your skin will feel the first time my hands finally find your waist.",
    "And honestly, I won't be able to hide how badly I've been waiting for that moment."
  ],

  // Reference Section 4 ("Stay with Me... ♡") progressive 3-beat confession
  stayWithMeReplies: [
    "“Beat I: I've only seen you through pictures, yet you already have this kind of hold over my thoughts every night.”",
    "“Beat II: I keep imagining how your voice will sound in the dark when my hands finally slide around your waist for the first time.”",
    "“Beat III: When we finally test this chemistry in person, I'm not holding a single thing back. Keep scrolling—let me show you what I'm picturing next.”"
  ],

  // Reference Section 5 ("I'm Thinking About You... ♡") 3 Neon Circle Tabs
  thinkingFantasies: {
    lips: "Finally finding out how soft your lips are—tracing your bottom lip with my thumb before kissing you slow, deep, and hard enough to steal your breath.",
    touch: "Discovering what your touch actually feels like when your nails dig into my shoulders and my hands pull you flush against me for the very first time.",
    body: "Seeing you standing right in front of me instead of through a screen—dressed or undressed—and learning every curve until you're arching into my hands."
  },

  // Stage 2: Personal Confessions for Jay + Lockbox
  allegations: [
    {
      id: "eyes",
      emoji: "👁️",
      title: "Those eyes and that smile in every photo.",
      hasEyesBackdrop: true,
      message:
        "I've only seen you through the pictures you've shared, but your eyes and that smile capture my attention every single time. One look at the way you stare into the camera and my mind goes straight to how those eyes will look staring up at me in person when we're finally alone.",
      followUpButton: "Tell me what else you're imagining...",
      followUpReply:
        "That first moment the shyness fades, my hands tangle in your hair, and I hear the very first soft gasp leave your lips."
    },
    {
      id: "attitude",
      emoji: "👑",
      title: "Dressed or undressed—you ruin my focus.",
      message:
        "It doesn't matter whether you're fully dressed or showing off just enough to tease me—you are ridiculously attractive. You love acting bold while there's a screen between us, and it makes me wonder how long that composure will last once you're actually standing right in front of me.",
      followUpButton: "Think our chemistry will be that intense?",
      followUpReply:
        "Intense doesn't even cover it. The second my hands finally find your waist in person, all this built-up tension is going to catch fire."
    },
    {
      id: "attractive",
      emoji: "🔥",
      title: "Anticipating your voice, your touch, your moans.",
      message:
        "Containing my desire for you is getting harder by the day. I'm curious about everything—how warm your skin feels, how your kisses taste, how your voice sounds up close, and especially how you sound when you lose control and moan for me for the first time.",
      followUpButton: "Don't hold back now...",
      followUpReply:
        "Trust me—when the day finally comes that I have you beside me, 'holding back' won't even be in my vocabulary."
    }
  ],

  // Stage 3: Progressive 3-Chapter Story over her actual portrait (assets/jay.jpeg)
  distanceChapters: {
    1: {
      quote:
        "“I've stared at your pictures a hundred times, but seeing you standing right in front of me is going to hit completely different.”",
      narrative:
        "Scene I — First Sight: The moment I finally see you in person, I don't think I'll be able to hide how badly I've been looking forward to it. Taking in your eyes, that smile, and your body up close before closing the last inch of space between us.",
      nextLabel: "Next Scene: The First Touch ♡"
    },
    2: {
      quote:
        "“No more screens. No more having to imagine what your skin feels like under my hands.”",
      narrative:
        "Scene II — First Touch: Sliding my palms along your waist for the very first time, pulling you flush against my chest, and finally discovering how your lips taste when you open up for me.",
      nextLabel: "Next Scene: Hearing You Let Go ♡"
    },
    3: {
      quote:
        "“Every fantasy we've built from a distance finally turning into reality in the dark.”",
      narrative:
        "Scene III — First Night: Discovering our chemistry skin-to-skin—learning every spot on your neck and body that makes you shiver until I finally hear the moans I've been anticipating for so long.",
      nextLabel: "Replay From Scene I ↺"
    }
  },

  // Stage 5: "Pick Your Temptation" 3-Card Interactive Experience
  temptations: {
    slow: {
      kicker: "✦ Option I • Slow & Teasing ✦",
      title: "Savoring Our Very First Moment",
      lead:
        "When I finally have you beside me, I don't rush a single second. I start by taking in every detail I've only seen in pictures—my fingertips slowly tracing your jawline, collarbone, and waist while I watch your breath catch in the candlelight.",
      escalated:
        "I want to see the goosebumps rise on your skin for the first time, brushing my lips right below your ear until you're squirming, holding onto my shoulders, and begging me to stop teasing.",
      buttonLabel: "Turn Up The Heat... ♡"
    },
    close: {
      kicker: "✦ Option II • Close & Intimate ✦",
      title: "Finally Skin Against Skin",
      lead:
        "Closing every inch of distance that used to keep us apart. I pull you flush against my chest so we can finally feel each other's heat for real, tasting your lips in a slow, deep kiss we've both been waiting for.",
      escalated:
        "Whether you start out dressed to tease me or we lose the clothes right away, my hands are learning every curve of your body until our chemistry takes over completely.",
      buttonLabel: "Pull Me Even Closer... ♡"
    },
    surprise: {
      kicker: "✦ Option III • Surprise Me ✦",
      title: "Unleashing Everything I've Imagined",
      lead:
        "My favorite choice. You step inside, hand over control completely, and let me decide the pace. I've spent way too many nights imagining what I'd do the day I finally had you within reach...",
      escalated:
        "...and I won't stop until I've heard every soft gasp and helpless moan I've been anticipating—proving in person that the chemistry between us is ten times hotter than anything we imagined.",
      buttonLabel: "Unleash The Full Fantasy... ♡"
    }
  },

  // Stage 6: Deep Desire & Intimate Connection (6 Paragraphs)
  heartfeltMessage: {
    paragraphs: [
      "I've only seen you through pictures, Jay, but somehow you've managed to get completely into my head. Every photo you share—your eyes, that smile, the way you look at the camera—captures my attention in a way I can't shake.",
      "I catch myself imagining what it would feel like to finally stand right beside you. I'm curious about everything: how warm your skin feels, how your kisses taste, and the exact sound of your voice when it's right next to my ear instead of through a phone.",
      "And I won't pretend my thoughts are innocent. Whether you're fully dressed or undressed, I find you impossibly attractive—and containing my desire for you is becoming harder every single day.",
      "I keep picturing the moment we finally discover our chemistry in person. I want to watch your composure slip, feel you shiver under my hands for the first time, and hear you moan when we're finally together in the dark.",
      "At the same time, I love that even before meeting face to face, you can be completely unfiltered with me—playful, bratty, sketching late at night, or vulnerable after a long day, knowing I'm right here paying attention to every detail of who you are.",
      "I've seen you. You've captivated me. I keep imagining you. And honestly, I don't think I'll be able to hide how badly I've been looking forward to the day I finally experience you in person."
    ],
    endingPunchline:
      "Now take a slow breath, uncross your legs, and try not to think too hard about what happens the day we're finally in the same room."
  },

  // Stage 7: 4-Mood After-Hours Dial ("What Do You Need Tonight?")
  nightMoodMessages: {
    desired: [
      "Close your eyes for five seconds and imagine what it's going to feel like the first time my hands slide up your waist and pull you flush against me.",
      "Your eyes, that smile, and the pictures you share... you have absolutely no idea how effortlessly you ruin my self-control.",
      "Whether dressed or undressed, you look like pure temptation—and I can't wait to see how you react when I'm finally looking at you in person."
    ],
    heavy: [
      "Come here. Even before I can hold you in person, you don't have to pretend you're okay tonight—let me be the voice that helps you unwind.",
      "Take a slow breath and drop your shoulders. I can't wait for the day I can just pull you against my chest after a rough day and hold you close.",
      "Whatever weighed on you today doesn't stand a chance. You've got me in your corner tonight."
    ],
    sleepless: [
      "3 AM and your mind won't stay quiet? Text me right now—I'd rather stay up imagining you beside me than sleep anyway.",
      "I keep picturing what 3 AM is going to look like when we finally share the same bed and you're resting against my shoulder.",
      "Or if you don't want to sleep... I can think of a much more exhausting way we're going to pass the night once we're finally together."
    ],
    miss: [
      "I haven't even touched you yet and I already crave your skin like an addiction. The day we finally meet, I'm not letting go until morning.",
      "Every day we spend waiting is only making our first kiss, our first touch, and our first night together ten times more intense.",
      "Send me a text tonight and tell me what you're most curious to feel the moment you're finally standing right in front of me."
    ]
  },

  // Stage 8: The Final Intimate Confession
  finalLetter: {
    paragraphs: [
      "One last confession before I let you go.",
      "I've only known you through photographs, your eyes, your smile, and the pictures you've shared—yet somehow you've completely captured my attention.",
      "I want this page to linger in the back of your mind today. When you catch yourself smiling, blushing, or feeling a sudden rush of heat, remember that I am desperately looking forward to finally having you close to me.",
      "I can't wait to discover what your touch feels like, how your kisses taste, how your voice sounds up close, and how you sound when you finally moan my name in the dark.",
      "Keep sketching. Keep smiling at the camera the way you do. Keep being the irresistible temptation that makes containing my desire harder every single day.",
      "And when the moment finally comes that we're standing face to face? Don't expect me to hide how badly I've wanted you.",
      "P.S. Text me when you finish reading this, Jay. Tell me what you're imagining we'll do first when we finally meet in person. 😏"
    ],
    credits:
      "Made with genuine care, shameless desire, and an unreasonable amount of coding."
  },

  // Playful status toasts during the Cinematic Final Scene
  cinematicToasts: [
    "✨ Midnight desire & starlight deployed for Jay...",
    "🔥 Warning: Anticipation levels off the charts.",
    "💗 Counting down until I finally have you close.",
    "🍫 Tap below if you want the secret chocolate delivery!"
  ]
};

/* ==========================================================================
   APPLICATION STATE
   ========================================================================== */
const STATE = {
  introStep: 0,
  gateUnlocked: false,
  musicPlaying: false,
  playlistStarted: false,
  playlistFinished: false,
  playlistIndex: 0,
  userHasInteracted: false,
  userManuallyPaused: false,
  isPrimingAudio: false,
  playerPrimed: false,
  isMuted: false,
  targetVolume: 75,
  ytPlayer: null,
  ytReady: false,
  loadedVideoId: null,
  ytFallbackIndices: { 0: 0, 1: 0, 2: 0 },
  playbackWatchdogTimer: null,
  volumeFadeTimer: null,
  craveWhisperIdx: 0,
  stayReplyIdx: 0,
  openedAllegations: new Set(),
  distanceChapter: 1,
  eyesRevealStep: 1,
  activeTemptation: null,
  exploredTemptations: new Set(),
  revealedParagraphs: 1,
  activeNightMood: "desired",
  nightMoodIndices: { desired: 0, heavy: 0, sleepless: 0, miss: 0 },
  emergencyTapCount: 0,
  cinematicTimers: [],
  cinematicToastInterval: null,
  cinematicBlackoutTimer: null,
  foregroundOverlayActive: false,
  foregroundBlackoutDrifting: false
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initAssetExtensionFallbacks();
  initSeductiveChestOpeningGate();
  initAudioControls();
  initReferencePosterInteractions();
  initStage2Allegations();
  initStage3DistanceStory();
  initStage4EyesMoment();
  initStage5PickYourTemptation();
  initStage6Heartfelt();
  initStage7NightMoodDial();
  initStage8FinalSurprise();
  initCinematicEndingSequence();
  initScrollStageTracker();
  initStarsCanvas();
  initForegroundSparklesOverlay();
});

/* ==========================================================================
   REFERENCE POSTER INTERACTIONS
   ========================================================================== */
function initReferencePosterInteractions() {
  // 1. Section 2 ("I Crave You"): Tilted Polaroid tap cycles whispers
  const polaroidCard = document.getElementById("crave-polaroid-card");
  const craveWhisperEl = document.getElementById("crave-dynamic-whisper");
  if (polaroidCard && craveWhisperEl) {
    const cycleCrave = () => {
      STATE.craveWhisperIdx =
        (STATE.craveWhisperIdx + 1) % JAY_DATA.craveWhispers.length;
      craveWhisperEl.style.opacity = "0";
      setTimeout(() => {
        craveWhisperEl.textContent =
          JAY_DATA.craveWhispers[STATE.craveWhisperIdx];
        craveWhisperEl.style.opacity = "1";
      }, 150);
      burstStars(14);
    };
    polaroidCard.addEventListener("click", cycleCrave);
    polaroidCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        cycleCrave();
      }
    });
  }

  // 2. Section 3 ("What I Love About You"): Checklist items reveal intimate whisper
  const checkItems = document.querySelectorAll(".neon-check-item");
  const loveWhisperBox = document.getElementById("love-whisper-box");
  checkItems.forEach((item) => {
    const activateItem = () => {
      checkItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
      const whisper = item.getAttribute("data-whisper");
      if (loveWhisperBox && whisper) {
        loveWhisperBox.textContent = `“${whisper}”`;
      }
      burstStars(10);
    };
    item.addEventListener("click", activateItem);
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activateItem();
      }
    });
  });

  // 3. Section 4 ("I Can't Resist You"): Progressive 3-Beat Confession
  const stayBtn = document.getElementById("stay-with-me-btn");
  const resistReply = document.getElementById("resist-secret-reply");
  if (stayBtn && resistReply) {
    stayBtn.addEventListener("click", () => {
      resistReply.removeAttribute("hidden");
      const idx = STATE.stayReplyIdx % JAY_DATA.stayWithMeReplies.length;
      resistReply.textContent = JAY_DATA.stayWithMeReplies[idx];
      STATE.stayReplyIdx++;
      stayBtn.innerHTML =
        idx < 2
          ? `<span>Keep Holding On... (${idx + 1} / 3)</span><span class="btn-heart" aria-hidden="true">♡</span>`
          : `<span>Feel The Full Pull</span><span class="btn-heart" aria-hidden="true">♡</span>`;
      burstStars(18);
    });
  }

  // 4. Section 5 ("I'm Thinking About You"): 3 Circular Neon Icon Tabs
  const circleTabs = document.querySelectorAll(".neon-circle-tab");
  const thinkingCopy = document.getElementById("thinking-dynamic-copy");
  const comeCloserBtn = document.getElementById("come-closer-btn");

  circleTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      circleTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      const key = tab.getAttribute("data-fantasy");
      if (thinkingCopy && key && JAY_DATA.thinkingFantasies[key]) {
        thinkingCopy.textContent = JAY_DATA.thinkingFantasies[key];
      }
      burstStars(14);
    });
  });

  if (comeCloserBtn) {
    comeCloserBtn.addEventListener("click", () => {
      const truthSection = document.getElementById("section-truth");
      if (truthSection) {
        burstStars(20);
        truthSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // 5. Section 6 ("The Truth is..."): "Let's Make It Real ♡" scrolls to Stage 2
  const makeItRealBtn = document.getElementById("make-it-real-btn");
  if (makeItRealBtn) {
    makeItRealBtn.addEventListener("click", () => {
      burstStars(32);
      const vaultStart = document.getElementById("stage-2");
      if (vaultStart) {
        vaultStart.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

/* ==========================================================================
   DYNAMIC IMAGE EXTENSION FALLBACK FOR assets/eyes
   ========================================================================== */
function initAssetExtensionFallbacks() {
  const eyesImg = document.getElementById("eyes-photo-img");
  if (!eyesImg) return;

  const candidateExts = ["jpeg", "jpg", "png", "webp", "avif"];
  let triedIdx = 0;
  eyesImg.addEventListener("error", () => {
    triedIdx++;
    if (triedIdx < candidateExts.length) {
      const nextSrc = `assets/eyes.${candidateExts[triedIdx]}`;
      eyesImg.src = nextSrc;
      document
        .querySelectorAll(".allegation-card-eyes-bg")
        .forEach((bg) => (bg.style.backgroundImage = `url("${nextSrc}")`));
    }
  });
}

/* ==========================================================================
   1. FULL-SCREEN IMMERSIVE TORSO TOUCH & DOWNWARD SWIPE OPENING EXPERIENCE
   - No cards, no borders, no skip button, no automatic advance.
   - First touch (Step 0 -> Step 1):
     Detects her touch, zooms the torso slightly closer towards the viewer,
     intensifies crimson lighting, and displays:
     "Already curious? Come a little closer..."
   - Second interaction (Step 1 -> Complete):
     Requires a genuine downward swipe gesture on a subsequent touch,
     makes the torso image respond naturally to her finger movement,
     gradually fades out the image and transitions into the main website,
     and starts Track 1 (Wicked Games – The Weeknd).
   ========================================================================== */
function initSeductiveChestOpeningGate() {
  const gateEl = document.getElementById("headphone-gate");
  const overlayEl = document.getElementById("chest-gate-card");
  const touchZone = document.getElementById("chest-touch-zone");
  const torsoImg = document.getElementById("chest-torso-img");
  const rippleEl = document.getElementById("chest-touch-ripple");
  const swipeFill = document.getElementById("chest-swipe-fill");
  const primaryText = document.getElementById("hp-primary-text");
  const instructionText = document.getElementById("chest-instruction-text");

  if (!gateEl || !touchZone) return;

  let isPointerDown = false;
  let gestureMode = "none"; // "first-touch" | "second-swipe"
  let startX = 0;
  let startY = 0;
  let currentDeltaY = 0;
  let maxHorizontalDrift = 0;

  // Prevent accidental page scrolling while the opening experience is active
  const blockScrollWhileLocked = (e) => {
    if (!STATE.gateUnlocked) {
      e.preventDefault();
    }
  };
  gateEl.addEventListener("touchmove", blockScrollWhileLocked, {
    passive: false
  });
  gateEl.addEventListener("wheel", blockScrollWhileLocked, { passive: false });

  // Complete the opening after a genuine downward swipe in Step 1
  const completeChestOpening = () => {
    if (STATE.gateUnlocked) return;
    STATE.gateUnlocked = true;
    touchZone.classList.remove("is-swiping");

    if (swipeFill) swipeFill.style.height = "100%";

    // Unlock document & controller opacity immediately so the YouTube IFrame is unthrottled
    document.documentElement.classList.remove("gate-locked");
    document.body.classList.remove("gate-locked");

    // Start the first YouTube song (Wicked Games – The Weeknd) following this intentional interaction
    STATE.userHasInteracted = true;
    startSequentialPlaylist();
    burstStars(42);

    if (torsoImg) {
      torsoImg.style.transition =
        "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.85s ease";
      torsoImg.style.transform = "scale(1.24) translateY(28px)";
      torsoImg.style.opacity = "0";
    }
    if (overlayEl) {
      overlayEl.style.transition = "opacity 0.65s ease, transform 0.65s ease";
      overlayEl.style.opacity = "0";
      overlayEl.style.transform = "translateY(16px)";
    }

    setTimeout(() => {
      gateEl.classList.add("gate-fade-out");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 680);
  };

  // Trigger First Touch (Step 0 -> Step 1): Zoom torso closer + lighting + teasing message
  const triggerFirstTouchResponse = (clientX, clientY) => {
    if (STATE.introStep >= 1) return;
    STATE.introStep = 1;

    // Silently unlock/prime the YouTube IFrame audio context during this discrete first tap
    // so that when she finishes the second downward swipe, mobile & desktop autoplay policies allow audio.
    primeYouTubePlayerOnFirstTouch();

    if (rippleEl && typeof clientX === "number" && typeof clientY === "number") {
      const rect = touchZone.getBoundingClientRect();
      const relX = Math.max(24, Math.min(rect.width - 24, clientX - rect.left));
      const relY = Math.max(24, Math.min(rect.height - 24, clientY - rect.top));
      rippleEl.style.left = `${relX}px`;
      rippleEl.style.top = `${relY}px`;
      rippleEl.classList.remove("ripple-active");
      void rippleEl.offsetWidth;
      rippleEl.classList.add("ripple-active");
    }

    touchZone.classList.add("chest-touched");

    if (primaryText) {
      primaryText.style.opacity = "0";
      setTimeout(() => {
        primaryText.textContent =
          "Already curious? Come a little closer...";
        primaryText.style.opacity = "1";
      }, 160);
    }

    if (instructionText) {
      instructionText.removeAttribute("hidden");
      instructionText.textContent =
        "Now slowly slide your finger down...";
    }

    burstStars(18);
  };

  // Real-time natural torso response as she slides her finger down in Step 1
  const updateSwipeVisualProgress = (deltaY) => {
    const clampedDelta = Math.max(0, deltaY);
    const swipeThreshold = 120;
    const progress = Math.min(1, clampedDelta / swipeThreshold);

    if (swipeFill) {
      swipeFill.style.height = `${Math.round(progress * 100)}%`;
    }
    if (torsoImg) {
      const dynamicScale = 1.14 + progress * 0.09;
      const dynamicShiftY = progress * 24;
      const dynamicOpacity = 1 - progress * 0.55;
      torsoImg.style.transform = `scale(${dynamicScale.toFixed(3)}) translateY(${dynamicShiftY.toFixed(1)}px)`;
      torsoImg.style.opacity = String(dynamicOpacity.toFixed(3));
    }
    if (overlayEl) {
      overlayEl.style.opacity = String((1 - progress * 0.7).toFixed(3));
      overlayEl.style.transform = `translateY(${(progress * 12).toFixed(1)}px)`;
    }
  };

  const resetIncompleteSwipe = () => {
    if (STATE.gateUnlocked) return;
    touchZone.classList.remove("is-swiping");
    if (swipeFill) swipeFill.style.height = "0%";
    if (torsoImg) {
      torsoImg.style.transform = "";
      torsoImg.style.opacity = "1";
    }
    if (overlayEl) {
      overlayEl.style.opacity = "1";
      overlayEl.style.transform = "translateY(0)";
    }
  };

  const onGestureStart = (clientX, clientY) => {
    if (STATE.gateUnlocked) return;
    isPointerDown = true;
    startX = clientX;
    startY = clientY;
    currentDeltaY = 0;
    maxHorizontalDrift = 0;

    if (STATE.introStep === 0) {
      // First interaction is a touch; must release before the second downward swipe gesture begins
      gestureMode = "first-touch";
      triggerFirstTouchResponse(clientX, clientY);
    } else {
      // Second interaction: ready to detect a genuine downward swipe
      gestureMode = "second-swipe";
      touchZone.classList.add("is-swiping");
    }
  };

  const onGestureMove = (clientX, clientY) => {
    if (!isPointerDown || STATE.gateUnlocked) return;
    if (gestureMode !== "second-swipe") return;

    const deltaX = Math.abs(clientX - startX);
    const deltaY = clientY - startY;
    if (deltaX > maxHorizontalDrift) {
      maxHorizontalDrift = deltaX;
    }
    currentDeltaY = deltaY;

    // Only respond to downward movement (not upward or predominantly horizontal)
    if (deltaY > 6 && deltaY > deltaX * 1.15) {
      updateSwipeVisualProgress(deltaY);
    }
  };

  const onGestureEnd = () => {
    if (!isPointerDown || STATE.gateUnlocked) return;
    isPointerDown = false;

    if (gestureMode === "second-swipe") {
      const isGenuineDownwardSwipe =
        currentDeltaY >= 75 && currentDeltaY > maxHorizontalDrift * 1.2;

      if (isGenuineDownwardSwipe) {
        completeChestOpening();
      } else {
        resetIncompleteSwipe();
      }
    }

    gestureMode = "none";
  };

  // Mobile Touch Listeners
  touchZone.addEventListener(
    "touchstart",
    (e) => {
      if (!e.touches.length) return;
      const t = e.touches[0];
      onGestureStart(t.clientX, t.clientY);
    },
    { passive: true }
  );

  touchZone.addEventListener(
    "touchmove",
    (e) => {
      if (!e.touches.length) return;
      const t = e.touches[0];
      onGestureMove(t.clientX, t.clientY);
    },
    { passive: true }
  );

  touchZone.addEventListener("touchend", onGestureEnd);
  touchZone.addEventListener("touchcancel", onGestureEnd);

  // Desktop Pointer / Mouse Listeners
  touchZone.addEventListener("mousedown", (e) => {
    onGestureStart(e.clientX, e.clientY);
  });

  window.addEventListener("mousemove", (e) => {
    if (isPointerDown) {
      onGestureMove(e.clientX, e.clientY);
    }
  });

  window.addEventListener("mouseup", () => {
    if (isPointerDown) {
      onGestureEnd();
    }
  });
}

/* ==========================================================================
   OFFICIAL YOUTUBE IFRAME PLAYER API — SEQUENTIAL 3-SONG PLAYLIST
   Playlist (plays sequentially 1 -> 2 -> 3, independent of scrolling):
   1. Wicked Games – The Weeknd
   2. Earned It – The Weeknd
   3. Adorn – Miguel
   Stops playback after the 3rd song finishes.
   ========================================================================== */
function initAudioControls() {
  const topPillBtn = document.getElementById("music-control-btn");
  const playPauseBtn = document.getElementById("yt-play-pause-btn");
  const muteBtn = document.getElementById("yt-mute-btn");
  const volumeSlider = document.getElementById("yt-volume-slider");
  const drawerToggleBtn = document.getElementById("yt-drawer-toggle-btn");
  const drawerCloseBtn = document.getElementById("yt-drawer-close-btn");
  const drawerEl = document.getElementById("yt-player-drawer");
  const statusActionBtn = document.getElementById("yt-status-action-btn");

  // Load official YouTube IFrame API script if not already loaded
  if (typeof window.YT === "undefined" || typeof window.YT.Player === "undefined") {
    const existingScript = document.querySelector(
      'script[src*="youtube.com/iframe_api"]'
    );
    if (!existingScript) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      document.head.appendChild(tag);
    }
  } else {
    createYouTubePlayerInstance();
  }

  const togglePlayPause = () => {
    STATE.userHasInteracted = true;
    hideYouTubeStatusBanner();
    if (STATE.musicPlaying) {
      STATE.userManuallyPaused = true;
      pauseBackgroundMusic();
    } else {
      STATE.userManuallyPaused = false;
      if (STATE.playlistFinished) {
        // If she presses play after all 3 songs finished, restart playlist from song 1
        STATE.playlistFinished = false;
        playPlaylistTrackAtIndex(0);
      } else {
        startBackgroundMusic();
      }
    }
  };

  if (topPillBtn) {
    topPillBtn.addEventListener("click", togglePlayPause);
  }
  if (playPauseBtn) {
    playPauseBtn.addEventListener("click", togglePlayPause);
  }
  if (statusActionBtn) {
    statusActionBtn.addEventListener("click", () => {
      STATE.userHasInteracted = true;
      STATE.userManuallyPaused = false;
      hideYouTubeStatusBanner();
      playPlaylistTrackAtIndex(STATE.playlistIndex, true);
    });
  }

  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      STATE.userHasInteracted = true;
      toggleMuteMusic();
    });
  }

  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      STATE.userHasInteracted = true;
      const val = Number(e.target.value);
      setMusicVolume(val);
    });
  }

  const setDrawerOpen = (isOpen) => {
    if (!drawerEl || !drawerToggleBtn) return;
    drawerEl.classList.toggle("drawer-open", isOpen);
    drawerEl.setAttribute("aria-hidden", String(!isOpen));
    drawerToggleBtn.classList.toggle("drawer-active", isOpen);
    drawerToggleBtn.setAttribute("aria-expanded", String(isOpen));
  };

  if (drawerToggleBtn && drawerEl) {
    drawerToggleBtn.addEventListener("click", () => {
      const isOpen = !drawerEl.classList.contains("drawer-open");
      setDrawerOpen(isOpen);
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", () => setDrawerOpen(false));
  }

  updateTrackMetadataUI(STATE.playlistIndex);
}

function showYouTubeStatusBanner(message, showPlayButton = false) {
  const banner = document.getElementById("yt-status-banner");
  const textEl = document.getElementById("yt-status-text");
  const actionBtn = document.getElementById("yt-status-action-btn");
  if (!banner || !textEl) return;

  textEl.textContent = message;
  banner.removeAttribute("hidden");
  if (actionBtn) {
    if (showPlayButton) {
      actionBtn.removeAttribute("hidden");
    } else {
      actionBtn.setAttribute("hidden", "");
    }
  }
}

function hideYouTubeStatusBanner() {
  const banner = document.getElementById("yt-status-banner");
  if (banner) {
    banner.setAttribute("hidden", "");
  }
}

// Global callback invoked automatically by https://www.youtube.com/iframe_api
window.onYouTubeIframeAPIReady = function () {
  createYouTubePlayerInstance();
};

function createYouTubePlayerInstance() {
  if (STATE.ytPlayer || typeof window.YT === "undefined" || !window.YT.Player) {
    return;
  }
  const container = document.getElementById("yt-iframe-player");
  if (!container) return;

  const firstVideoId = getActiveVideoIdForIndex(0);
  STATE.loadedVideoId = firstVideoId;

  // Never include origin: undefined in playerVars (which serializes as "&origin=undefined" and breaks postMessage on file://)
  const playerVars = {
    autoplay: 0,
    controls: 1,
    disablekb: 1,
    fs: 0,
    iv_load_policy: 3,
    modestbranding: 1,
    playsinline: 1,
    rel: 0
  };
  if (
    window.location &&
    (window.location.protocol === "http:" || window.location.protocol === "https:") &&
    window.location.origin &&
    window.location.origin !== "null"
  ) {
    playerVars.origin = window.location.origin;
  }

  STATE.ytPlayer = new window.YT.Player("yt-iframe-player", {
    width: "200",
    height: "200",
    videoId: firstVideoId,
    playerVars,
    events: {
      onReady: onYouTubePlayerReady,
      onStateChange: onYouTubePlayerStateChange,
      onError: onYouTubePlayerError
    }
  });
}

function onYouTubePlayerReady(event) {
  STATE.ytReady = true;
  try {
    event.target.setVolume(STATE.targetVolume);
    if (STATE.isMuted) {
      event.target.mute();
    } else {
      event.target.unMute();
    }
  } catch (_e) {
    // Volume control may be hardware-managed on some mobile devices
  }

  // Only start playback if the user has already completed the intentional opening interaction
  if (STATE.playlistStarted && !STATE.userManuallyPaused && !STATE.playlistFinished) {
    playPlaylistTrackAtIndex(STATE.playlistIndex, true);
  }
}

/**
 * Silently unlocks/primes the YouTube IFrame player during the discrete First Touch
 * so mobile and desktop browsers allow audio playback when the Second Swipe completes.
 */
function primeYouTubePlayerOnFirstTouch() {
  if (STATE.playerPrimed || STATE.playlistStarted) return;
  if (!STATE.ytReady || !STATE.ytPlayer) {
    createYouTubePlayerInstance();
    return;
  }
  try {
    STATE.isPrimingAudio = true;
    STATE.ytPlayer.mute();
    STATE.ytPlayer.playVideo();
  } catch (_e) {
    STATE.isPrimingAudio = false;
  }
}

function clearPlaybackWatchdog() {
  if (STATE.playbackWatchdogTimer) {
    clearTimeout(STATE.playbackWatchdogTimer);
    STATE.playbackWatchdogTimer = null;
  }
}

function schedulePlaybackWatchdog() {
  clearPlaybackWatchdog();
  STATE.playbackWatchdogTimer = setTimeout(() => {
    if (!STATE.playlistStarted || STATE.userManuallyPaused || STATE.playlistFinished) {
      return;
    }
    if (!STATE.ytReady || !STATE.ytPlayer) {
      showYouTubeStatusBanner(
        "YouTube player could not connect. Check your internet connection.",
        false
      );
      return;
    }
    try {
      const st = STATE.ytPlayer.getPlayerState();
      if (st !== window.YT.PlayerState.PLAYING && st !== window.YT.PlayerState.BUFFERING) {
        if (window.location && window.location.protocol === "file:") {
          showYouTubeStatusBanner(
            "YouTube blocks embedded music on file:// URLs (Error 153). Open via http://localhost or a live web server.",
            false
          );
        } else {
          showYouTubeStatusBanner(
            "Browser paused autoplay. Tap Play to start the soundtrack.",
            true
          );
        }
        STATE.musicPlaying = false;
        updateMusicUI(false);
      }
    } catch (_e) {
      // Ignore
    }
  }, 4200);
}

function onYouTubePlayerStateChange(event) {
  if (!window.YT) return;
  const playerState = event.data;

  // If we were silently priming the player on the first touch, pause immediately at 0s until the second swipe finishes
  if (STATE.isPrimingAudio) {
    if (
      playerState === window.YT.PlayerState.PLAYING ||
      playerState === window.YT.PlayerState.BUFFERING
    ) {
      STATE.isPrimingAudio = false;
      STATE.playerPrimed = true;
      if (!STATE.playlistStarted) {
        try {
          event.target.pauseVideo();
          event.target.seekTo(0, true);
          if (!STATE.isMuted) {
            event.target.unMute();
            event.target.setVolume(STATE.targetVolume);
          }
        } catch (_e) {
          // Ignore
        }
        return;
      }
    }
  }

  if (playerState === window.YT.PlayerState.PLAYING) {
    clearPlaybackWatchdog();
    hideYouTubeStatusBanner();
    try {
      if (!STATE.isMuted) {
        event.target.unMute();
        event.target.setVolume(STATE.targetVolume);
      }
    } catch (_e) {
      // Ignore
    }
    STATE.musicPlaying = true;
    updateMusicUI(true);
  } else if (playerState === window.YT.PlayerState.PAUSED) {
    if (STATE.userManuallyPaused) {
      STATE.musicPlaying = false;
      updateMusicUI(false);
    }
  } else if (playerState === window.YT.PlayerState.ENDED) {
    if (!STATE.playlistStarted) return;
    // Sequential playlist progression: 0 (Wicked Games) -> 1 (Earned It) -> 2 (Adorn) -> Stop
    advanceSequentialPlaylistOnEnd();
  }
}

function advanceSequentialPlaylistOnEnd() {
  const nextIndex = STATE.playlistIndex + 1;
  if (nextIndex < JAY_DATA.youtubePlaylist.length) {
    playPlaylistTrackAtIndex(nextIndex, true);
  } else {
    // After the third song finishes, stop playback completely
    clearPlaybackWatchdog();
    STATE.playlistFinished = true;
    STATE.musicPlaying = false;
    updateMusicUI(false);
  }
}

function onYouTubePlayerError(event) {
  const errorCode = event ? event.data : null;
  const idx = STATE.playlistIndex;
  const track = JAY_DATA.youtubePlaylist[idx];
  if (!track || !STATE.ytPlayer) return;

  // If opened directly from file://, YouTube rejects all music embeds with Error 153 (missing HTTP Referer)
  if (window.location && window.location.protocol === "file:" && errorCode === 153) {
    if (STATE.playlistStarted) {
      showYouTubeStatusBanner(
        "YouTube blocks embedded music on local file:// URLs (Error 153). Open via http://localhost or GitHub Pages.",
        false
      );
      STATE.musicPlaying = false;
      updateMusicUI(false);
    }
    return;
  }

  const fallbackIdx = STATE.ytFallbackIndices[idx] || 0;
  if (track.fallbackIds && fallbackIdx < track.fallbackIds.length) {
    const nextVideoId = track.fallbackIds[fallbackIdx];
    STATE.ytFallbackIndices[idx] = fallbackIdx + 1;
    STATE.loadedVideoId = nextVideoId;
    try {
      if (STATE.playlistStarted && !STATE.userManuallyPaused && !STATE.playlistFinished) {
        STATE.ytPlayer.loadVideoById({ videoId: nextVideoId, startSeconds: 0 });
        STATE.ytPlayer.playVideo();
      } else {
        STATE.ytPlayer.cueVideoById({ videoId: nextVideoId, startSeconds: 0 });
      }
      return;
    } catch (_err) {
      // Fall through to status banner
    }
  }

  // All candidate IDs for this track were blocked by YouTube
  clearPlaybackWatchdog();
  STATE.musicPlaying = false;
  updateMusicUI(false);
  if (STATE.playlistStarted) {
    showYouTubeStatusBanner(
      `YouTube blocked playback for "${track.title}" (Error ${errorCode || "restricted"}).`,
      true
    );
  }
}

function getActiveVideoIdForIndex(index) {
  const track =
    JAY_DATA.youtubePlaylist[index] || JAY_DATA.youtubePlaylist[0];
  const fallbackIdx = STATE.ytFallbackIndices[index] || 0;
  if (fallbackIdx === 0 || !track.fallbackIds || !track.fallbackIds.length) {
    return track.videoId;
  }
  return (
    track.fallbackIds[Math.min(fallbackIdx - 1, track.fallbackIds.length - 1)] ||
    track.videoId
  );
}

function updateTrackMetadataUI(index) {
  const track =
    JAY_DATA.youtubePlaylist[index] || JAY_DATA.youtubePlaylist[0];
  const titleEl = document.getElementById("yt-track-title");
  const artistEl = document.getElementById("yt-track-artist");
  const phaseEl = document.getElementById("yt-track-phase");
  const pills = document.querySelectorAll("[data-playlist-index]");

  if (titleEl) titleEl.textContent = track.title;
  if (artistEl) artistEl.textContent = track.artist;
  if (phaseEl) phaseEl.textContent = track.phaseLabel;

  pills.forEach((pill) => {
    const isMatch = Number(pill.getAttribute("data-playlist-index")) === track.index;
    pill.classList.toggle("active", isMatch);
  });
}

/**
 * Starts the 3-song sequential playlist from Track 1 (Wicked Games – The Weeknd).
 * Does not restart if the playlist is already running.
 */
function startSequentialPlaylist() {
  STATE.userHasInteracted = true;
  if (STATE.playlistStarted) return;
  STATE.playlistStarted = true;
  STATE.playlistFinished = false;
  STATE.userManuallyPaused = false;
  STATE.isPrimingAudio = false;
  playPlaylistTrackAtIndex(0, false);
}

function playPlaylistTrackAtIndex(index, forceReload = false) {
  if (index < 0 || index >= JAY_DATA.youtubePlaylist.length) return;

  const isTrackSwitch = STATE.playlistIndex !== index;
  STATE.playlistIndex = index;
  STATE.playlistStarted = true;
  STATE.playlistFinished = false;
  STATE.isPrimingAudio = false;
  updateTrackMetadataUI(index);

  if (!STATE.ytReady || !STATE.ytPlayer) {
    createYouTubePlayerInstance();
    return;
  }

  const videoId = getActiveVideoIdForIndex(index);
  const needsLoad =
    forceReload ||
    isTrackSwitch ||
    STATE.loadedVideoId !== videoId;

  try {
    if (!STATE.isMuted) {
      if (typeof STATE.ytPlayer.unMute === "function") {
        STATE.ytPlayer.unMute();
      }
      if (typeof STATE.ytPlayer.setVolume === "function") {
        STATE.ytPlayer.setVolume(STATE.targetVolume);
      }
    }

    if (needsLoad) {
      STATE.loadedVideoId = videoId;
      STATE.ytPlayer.loadVideoById({ videoId, startSeconds: 0 });
    }
    STATE.ytPlayer.playVideo();

    STATE.musicPlaying = true;
    updateMusicUI(true);
    schedulePlaybackWatchdog();
  } catch (_err) {
    showYouTubeStatusBanner(
      "Tap Play to start the YouTube soundtrack.",
      true
    );
  }
}

function startBackgroundMusic() {
  STATE.userHasInteracted = true;
  STATE.userManuallyPaused = false;
  hideYouTubeStatusBanner();

  if (!STATE.playlistStarted) {
    startSequentialPlaylist();
    return;
  }

  if (STATE.ytReady && STATE.ytPlayer && typeof STATE.ytPlayer.playVideo === "function") {
    try {
      if (!STATE.isMuted) {
        if (typeof STATE.ytPlayer.unMute === "function") {
          STATE.ytPlayer.unMute();
        }
        if (typeof STATE.ytPlayer.setVolume === "function") {
          STATE.ytPlayer.setVolume(STATE.targetVolume);
        }
      }
      const st =
        typeof STATE.ytPlayer.getPlayerState === "function"
          ? STATE.ytPlayer.getPlayerState()
          : -1;
      if (st === -1 || st === 5) {
        playPlaylistTrackAtIndex(STATE.playlistIndex, true);
      } else {
        STATE.ytPlayer.playVideo();
        STATE.musicPlaying = true;
        updateMusicUI(true);
        schedulePlaybackWatchdog();
      }
      return;
    } catch (_err) {
      showYouTubeStatusBanner("Tap Play to resume YouTube music.", true);
    }
  } else {
    createYouTubePlayerInstance();
  }
}

function pauseBackgroundMusic() {
  clearPlaybackWatchdog();
  if (STATE.volumeFadeTimer) {
    clearInterval(STATE.volumeFadeTimer);
    STATE.volumeFadeTimer = null;
  }
  if (STATE.ytReady && STATE.ytPlayer && typeof STATE.ytPlayer.pauseVideo === "function") {
    try {
      STATE.ytPlayer.pauseVideo();
    } catch (_err) {
      // Ignore
    }
  }
  STATE.musicPlaying = false;
  updateMusicUI(false);
}

function toggleMuteMusic() {
  STATE.isMuted = !STATE.isMuted;

  if (STATE.ytReady && STATE.ytPlayer) {
    try {
      if (STATE.isMuted) {
        STATE.ytPlayer.mute();
      } else {
        STATE.ytPlayer.unMute();
        STATE.ytPlayer.setVolume(STATE.targetVolume);
      }
    } catch (_err) {
      // Ignore
    }
  }

  updateMuteUI();
}

function setMusicVolume(vol) {
  const clamped = Math.max(0, Math.min(100, Math.round(vol)));
  STATE.targetVolume = clamped;

  if (clamped === 0 && !STATE.isMuted) {
    STATE.isMuted = true;
  } else if (clamped > 0 && STATE.isMuted) {
    STATE.isMuted = false;
  }

  if (STATE.ytReady && STATE.ytPlayer) {
    try {
      if (STATE.isMuted) {
        STATE.ytPlayer.mute();
      } else {
        STATE.ytPlayer.unMute();
        STATE.ytPlayer.setVolume(clamped);
      }
    } catch (_err) {
      // Ignore
    }
  }

  updateMuteUI();
}

function updateMuteUI() {
  const muteBtn = document.getElementById("yt-mute-btn");
  const muteIcon = document.getElementById("yt-mute-icon");
  const slider = document.getElementById("yt-volume-slider");

  if (muteBtn) {
    muteBtn.setAttribute("aria-pressed", String(STATE.isMuted));
  }
  if (muteIcon) {
    muteIcon.textContent =
      STATE.isMuted || STATE.targetVolume === 0
        ? "🔇"
        : STATE.targetVolume < 45
          ? "🔉"
          : "🔊";
  }
  if (slider && Number(slider.value) !== STATE.targetVolume) {
    slider.value = String(STATE.targetVolume);
  }
}

function updateMusicUI(isPlaying) {
  const pillBtn = document.getElementById("music-control-btn");
  const textEl = document.getElementById("music-pill-text");
  const floatPlayBtn = document.getElementById("yt-play-pause-btn");
  const floatPlayIcon = document.getElementById("yt-play-pause-icon");

  if (pillBtn) {
    pillBtn.setAttribute("aria-pressed", String(isPlaying));
    pillBtn.classList.toggle("is-playing", isPlaying);
  }
  if (textEl) {
    textEl.textContent = isPlaying ? "On" : "Off";
  }
  if (floatPlayBtn) {
    floatPlayBtn.setAttribute("aria-pressed", String(isPlaying));
    floatPlayBtn.classList.toggle("is-playing", isPlaying);
  }
  if (floatPlayIcon) {
    floatPlayIcon.textContent = isPlaying ? "❚❚" : "▶";
  }
}

/* ==========================================================================
   STAGE 2: PERSONAL CONFESSIONS + AUTO-UNLOCKING PERSONAL LOCKBOX
   ========================================================================== */
function initStage2Allegations() {
  const listEl = document.getElementById("allegations-list");
  const progressEl = document.getElementById("allegations-progress");
  const lockboxCard = document.getElementById("secret-lockbox-card");
  const lockIcon = document.getElementById("lockbox-status-icon");
  const lockTitle = document.getElementById("lockbox-status-title");
  const pokeBtn = document.getElementById("cheeky-poke-btn");
  const pokeOut = document.getElementById("cheeky-poke-output");

  if (!listEl) return;
  listEl.innerHTML = "";

  const unlockPersonalNote = () => {
    if (lockboxCard) lockboxCard.classList.add("unlocked");
    if (lockIcon) lockIcon.textContent = "🔓";
    if (lockTitle) {
      lockTitle.textContent = "Unfiltered Personal Note • Unlocked For Jay";
    }
    if (pokeOut) pokeOut.removeAttribute("hidden");
    if (pokeBtn) pokeBtn.style.display = "none";
    burstStars(22);
  };

  JAY_DATA.allegations.forEach((item) => {
    const card = document.createElement("article");
    card.className = "allegation-card";

    const backdropHtml = item.hasEyesBackdrop
      ? `<div class="allegation-card-eyes-bg" aria-hidden="true"></div>`
      : "";

    const followUpHtml = item.followUpButton
      ? `
        <div class="allegation-followup-wrap">
          <button type="button" class="btn-staring-trigger" data-followup-btn="${item.id}">
            ${item.followUpButton}
          </button>
          <div class="staring-reply-box" id="followup-reply-${item.id}" hidden>
            “${item.followUpReply}”
          </div>
        </div>
      `
      : "";

    card.innerHTML = `
      ${backdropHtml}
      <button type="button" class="allegation-trigger" aria-expanded="false">
        <div class="allegation-left">
          <span class="allegation-emoji" aria-hidden="true">${item.emoji}</span>
          <span class="allegation-title">${item.title}</span>
        </div>
        <span class="allegation-badge">Tap to open</span>
      </button>
      <div class="allegation-body">
        <p>${item.message}</p>
        ${followUpHtml}
      </div>
    `;

    const triggerBtn = card.querySelector(".allegation-trigger");
    const badge = card.querySelector(".allegation-badge");

    if (triggerBtn) {
      triggerBtn.addEventListener("click", () => {
        const isOpened = card.classList.toggle("opened");
        triggerBtn.setAttribute("aria-expanded", String(isOpened));
        if (badge) {
          badge.textContent = isOpened ? "Unsealed ♡" : "Tap to open";
        }
        if (isOpened) {
          STATE.openedAllegations.add(item.id);
        }
        if (progressEl) {
          progressEl.textContent = `${STATE.openedAllegations.size} / ${JAY_DATA.allegations.length} confessions opened`;
        }
        if (STATE.openedAllegations.size === JAY_DATA.allegations.length) {
          unlockPersonalNote();
        }
      });
    }

    const followBtn = card.querySelector(`[data-followup-btn="${item.id}"]`);
    const replyBox = card.querySelector(`#followup-reply-${item.id}`);
    if (followBtn && replyBox) {
      followBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        replyBox.removeAttribute("hidden");
        burstStars(16);
      });
    }

    listEl.appendChild(card);
  });

  if (pokeBtn) {
    pokeBtn.addEventListener("click", unlockPersonalNote);
  }
}

/* ==========================================================================
   STAGE 3: PROGRESSIVE 3-CHAPTER DISTANCE STORY OVER HER PORTRAIT (jay.jpeg)
   ========================================================================== */
function initStage3DistanceStory() {
  const stageBox = document.getElementById("atmospheric-jay-stage");
  const tabs = document.querySelectorAll(".distance-tab");
  const quoteEl = document.getElementById("horror-caption-1");
  const narrativeEl = document.getElementById("haunted-house-reply");
  const nextBtn = document.getElementById("haunted-house-btn");
  const nextLabel = document.getElementById("haunted-btn-label");

  const setChapter = (num) => {
    STATE.distanceChapter = num;
    const data = JAY_DATA.distanceChapters[num];
    if (!data) return;

    if (stageBox) stageBox.setAttribute("data-story-chapter", String(num));
    tabs.forEach((t) => {
      const isMatch = Number(t.dataset.chapter) === num;
      t.classList.toggle("active", isMatch);
      t.setAttribute("aria-selected", String(isMatch));
    });

    if (quoteEl) quoteEl.textContent = data.quote;
    if (narrativeEl) narrativeEl.textContent = data.narrative;
    if (nextLabel) nextLabel.textContent = data.nextLabel;
    burstStars(16);
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setChapter(Number(tab.dataset.chapter) || 1);
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const nextNum = STATE.distanceChapter < 3 ? STATE.distanceChapter + 1 : 1;
      setChapter(nextNum);
    });
  }
}

/* ==========================================================================
   STAGE 4: THE EYES PHOTOGRAPH ATMOSPHERIC MOMENT (assets/eyes.jpeg)
   ========================================================================== */
function initStage4EyesMoment() {
  const sanctuary = document.getElementById("eyes-atmospheric-sanctuary");
  const line2 = document.getElementById("eyes-line-2");
  const line3 = document.getElementById("eyes-line-3");
  const revealBtn = document.getElementById("eyes-reveal-btn");
  const btnText = document.getElementById("eyes-reveal-btn-text");

  if (!revealBtn || !line2 || !line3) return;

  revealBtn.addEventListener("click", () => {
    if (STATE.eyesRevealStep === 1) {
      STATE.eyesRevealStep = 2;
      line2.removeAttribute("hidden");
      if (sanctuary) sanctuary.setAttribute("data-reveal-level", "2");
      if (btnText) btnText.textContent = "Tap for the last thought...";
      burstStars(14);
    } else if (STATE.eyesRevealStep === 2) {
      STATE.eyesRevealStep = 3;
      line3.removeAttribute("hidden");
      if (sanctuary) sanctuary.setAttribute("data-reveal-level", "3");
      if (btnText) btnText.textContent = "Pick Your Temptation Below ↓";
      burstStars(22);
    } else {
      const stage5 = document.getElementById("stage-5");
      if (stage5) stage5.scrollIntoView({ behavior: "smooth" });
    }
  });
}

/* ==========================================================================
   STAGE 5: "PICK YOUR TEMPTATION" 3-CARD INTERACTIVE EXPERIENCE
   Replaces the Crossword Game
   ========================================================================== */
function initStage5PickYourTemptation() {
  const cards = document.querySelectorAll(".temptation-choice-card");
  const scenarioStage = document.getElementById("temptation-scenario-stage");
  const kickerEl = document.getElementById("scenario-kicker");
  const titleEl = document.getElementById("scenario-title");
  const leadEl = document.getElementById("scenario-lead-text");
  const escalatedEl = document.getElementById("scenario-escalated-text");
  const escalateBtn = document.getElementById("scenario-escalate-btn");
  const escalateLabel = document.getElementById("scenario-escalate-label");
  const progressCount = document.getElementById("temptation-progress-count");
  const progressFill = document.getElementById("temptation-progress-fill");
  const rewardBanner = document.getElementById("temptation-reward-banner");

  if (!cards.length || !scenarioStage) return;

  const selectTemptation = (key, cardEl) => {
    const data = JAY_DATA.temptations[key];
    if (!data) return;

    STATE.activeTemptation = key;
    STATE.exploredTemptations.add(key);

    cards.forEach((c) => {
      const isSelected = c === cardEl;
      c.classList.toggle("selected", isSelected);
      c.setAttribute("aria-pressed", String(isSelected));
      if (STATE.exploredTemptations.has(c.dataset.temptation)) {
        c.classList.add("explored");
      }
    });

    scenarioStage.removeAttribute("hidden");
    if (kickerEl) kickerEl.textContent = data.kicker;
    if (titleEl) titleEl.textContent = data.title;
    if (leadEl) leadEl.textContent = data.lead;

    if (escalatedEl) {
      escalatedEl.textContent = data.escalated;
      escalatedEl.setAttribute("hidden", "");
    }
    if (escalateBtn) {
      escalateBtn.removeAttribute("hidden");
    }
    if (escalateLabel) {
      escalateLabel.textContent = data.buttonLabel;
    }

    const count = STATE.exploredTemptations.size;
    if (progressCount) {
      progressCount.textContent = `${count} / 3 Explored`;
    }
    if (progressFill) {
      progressFill.style.width = `${(count / 3) * 100}%`;
    }

    if (count === 3 && rewardBanner && rewardBanner.hasAttribute("hidden")) {
      rewardBanner.removeAttribute("hidden");
      burstStars(36);
    } else {
      burstStars(18);
    }
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      selectTemptation(card.dataset.temptation, card);
    });
  });

  if (escalateBtn && escalatedEl) {
    escalateBtn.addEventListener("click", () => {
      escalatedEl.removeAttribute("hidden");
      escalateBtn.setAttribute("hidden", "");
      burstStars(24);
    });
  }
}

/* ==========================================================================
   STAGE 6: DEEP DESIRE & INTIMATE CONFESSION + INTERACTIVE PROMISE PILLS
   ========================================================================== */
function initStage6Heartfelt() {
  const stackEl = document.getElementById("heartfelt-paragraphs");
  const endingEl = document.getElementById("heartfelt-ending");
  const punchlineEl = document.getElementById("heartfelt-punchline");
  const nextBtn = document.getElementById("next-paragraph-btn");
  const showAllBtn = document.getElementById("show-all-paragraphs-btn");
  const pills = document.querySelectorAll("#here-pills-grid .here-pill");

  if (!stackEl || !nextBtn) return;

  const paragraphs = JAY_DATA.heartfeltMessage.paragraphs;
  if (punchlineEl) {
    punchlineEl.textContent = JAY_DATA.heartfeltMessage.endingPunchline;
  }

  const renderUpTo = (count, highlightIdx = -1) => {
    const existingCount = stackEl.children.length;
    for (let i = existingCount; i < count && i < paragraphs.length; i++) {
      const p = document.createElement("p");
      p.className = "heartfelt-para";
      p.dataset.paraIdx = String(i);
      p.textContent = paragraphs[i];
      stackEl.appendChild(p);
    }

    Array.from(stackEl.children).forEach((el, idx) => {
      el.classList.toggle("highlighted-para", idx === highlightIdx);
    });

    if (count >= paragraphs.length) {
      if (endingEl) endingEl.removeAttribute("hidden");
      nextBtn.innerHTML = `<span>Continue to After-Hours Dial</span><span aria-hidden="true">↓</span>`;
      if (showAllBtn) showAllBtn.style.display = "none";
    } else {
      nextBtn.innerHTML = `<span>Tap for Next Part (${count} / ${paragraphs.length})</span><span aria-hidden="true">♡</span>`;
    }
  };

  renderUpTo(1, 0);

  nextBtn.addEventListener("click", () => {
    if (STATE.revealedParagraphs < paragraphs.length) {
      STATE.revealedParagraphs++;
      pills.forEach((pill, i) =>
        pill.classList.toggle("active", i === STATE.revealedParagraphs - 1)
      );
      renderUpTo(STATE.revealedParagraphs, STATE.revealedParagraphs - 1);
    } else {
      const stage7 = document.getElementById("stage-7");
      if (stage7) stage7.scrollIntoView({ behavior: "smooth" });
    }
  });

  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      STATE.revealedParagraphs = paragraphs.length;
      renderUpTo(paragraphs.length);
    });
  }

  // Interactive Promise Pills jump/reveal up to that exact paragraph and highlight it
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const targetIdx = Number(pill.dataset.paraIndex) || 0;
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      if (STATE.revealedParagraphs < targetIdx + 1) {
        STATE.revealedParagraphs = targetIdx + 1;
      }
      renderUpTo(STATE.revealedParagraphs, targetIdx);
      burstStars(12);
    });
  });
}

/* ==========================================================================
   STAGE 7: 4-MOOD AFTER-HOURS DIAL ("What Do You Need Tonight?")
   ========================================================================== */
function initStage7NightMoodDial() {
  const moodChips = document.querySelectorAll(".night-mood-chip");
  const btn = document.getElementById("emergency-comfort-btn");
  const textEl = document.getElementById("emergency-message-text");
  const metaEl = document.getElementById("emergency-tap-counter");

  if (!textEl) return;

  const showMoodMessage = (moodKey, advance = false) => {
    const list =
      JAY_DATA.nightMoodMessages[moodKey] ||
      JAY_DATA.nightMoodMessages.desired;
    if (advance) {
      STATE.nightMoodIndices[moodKey] =
        ((STATE.nightMoodIndices[moodKey] || 0) + 1) % list.length;
    }
    const idx = (STATE.nightMoodIndices[moodKey] || 0) % list.length;
    STATE.emergencyTapCount++;

    textEl.style.opacity = "0";
    setTimeout(() => {
      textEl.textContent = `“${list[idx]}”`;
      textEl.style.opacity = "1";
    }, 140);

    if (metaEl) {
      metaEl.textContent = `Mood note ${idx + 1} of ${list.length} • Tap below for another`;
    }
    burstStars(14);
  };

  moodChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      moodChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const mood = chip.dataset.mood || "desired";
      STATE.activeNightMood = mood;
      showMoodMessage(mood, false);
    });
  });

  if (btn) {
    btn.addEventListener("click", () => {
      showMoodMessage(STATE.activeNightMood, true);
    });
  }
}

/* ==========================================================================
   STAGE 8: THE FINAL INTIMATE LETTER
   ========================================================================== */
function initStage8FinalSurprise() {
  const sealedBox = document.getElementById("letter-sealed-box");
  const unfoldedBox = document.getElementById("letter-unfolded-box");
  const sealBtn = document.getElementById("unfold-letter-btn");
  const ctaBtn = document.getElementById("unfold-letter-cta");
  const bodyWrap = document.getElementById("final-letter-content");
  const creditsEl = document.getElementById("final-credits-line");

  if (bodyWrap) {
    bodyWrap.innerHTML = JAY_DATA.finalLetter.paragraphs
      .map((line) => `<p>${line}</p>`)
      .join("");
  }
  if (creditsEl) {
    creditsEl.textContent = JAY_DATA.finalLetter.credits;
  }

  const unfoldLetter = () => {
    if (sealedBox) sealedBox.setAttribute("hidden", "");
    if (unfoldedBox) unfoldedBox.removeAttribute("hidden");
    burstStars(45);
  };

  if (sealBtn) sealBtn.addEventListener("click", unfoldLetter);
  if (ctaBtn) ctaBtn.addEventListener("click", unfoldLetter);
}

/* ==========================================================================
   CINEMATIC FINAL SCENE & SEPARATE OPTIONAL CHOCOLATE BONUS EASTER EGG
   ========================================================================== */
function initCinematicEndingSequence() {
  const triggerBtn = document.getElementById("send-midnight-sparkles-btn");
  const bonusEasterEggBtn = document.getElementById(
    "bonus-chocolate-easter-egg-btn"
  );
  const oneMoreChocoBtn = document.getElementById("one-more-chocolate-btn");

  // Primary climax button launches the dark-romance midnight finale (anime chocolate hidden unless requested)
  if (triggerBtn) {
    triggerBtn.addEventListener("click", () => startCinematicFinalScene(false));
  }

  // Optional Bonus Easter Egg button launches the finale with the cute anime chocolate girl & falling chocolates
  if (bonusEasterEggBtn) {
    bonusEasterEggBtn.addEventListener("click", () =>
      startCinematicFinalScene(true)
    );
  }

  if (oneMoreChocoBtn) {
    oneMoreChocoBtn.addEventListener("click", () => {
      const hero = document.getElementById("cinematic-anime-hero");
      if (hero) {
        hero.removeAttribute("hidden");
        requestAnimationFrame(() => hero.classList.add("hero-emerged"));
      }
      dropChocolatesFromTop(10);
      spawnForegroundBurst(24);
      showTemporaryCinematicToast("🍫 Secret chocolate delivery air-dropped for Jay!");
      scheduleFinalFadeToBlack(9500);
    });
  }
}

function clearCinematicTimers() {
  STATE.cinematicTimers.forEach((t) => clearTimeout(t));
  STATE.cinematicTimers = [];
  if (STATE.cinematicToastInterval) {
    clearInterval(STATE.cinematicToastInterval);
    STATE.cinematicToastInterval = null;
  }
  if (STATE.cinematicBlackoutTimer) {
    clearTimeout(STATE.cinematicBlackoutTimer);
    STATE.cinematicBlackoutTimer = null;
  }
}

function startCinematicFinalScene(showChocolateEasterEgg = false) {
  clearCinematicTimers();

  const scene = document.getElementById("cinematic-ending-scene");
  const stageInner = document.getElementById("cinematic-stage-inner");
  const hero = document.getElementById("cinematic-anime-hero");
  const line1 = document.getElementById("cine-line-1");
  const line2 = document.getElementById("cine-line-2");
  const line3 = document.getElementById("cine-line-3");
  const line4 = document.getElementById("cine-line-4");
  const finalBlock = document.getElementById("cine-final-block");
  const interactiveRow = document.getElementById("cine-interactive-row");
  const epilogueScreen = document.getElementById("cinematic-epilogue-screen");

  if (!scene || !stageInner || !hero) return;

  scene.classList.remove("scene-visible", "scene-blackout");
  stageInner.classList.remove("fade-into-black");
  hero.classList.remove("hero-emerged");

  // Keep the anime chocolate illustration as an optional bonus Easter egg
  if (showChocolateEasterEgg) {
    hero.removeAttribute("hidden");
  } else {
    hero.setAttribute("hidden", "");
  }

  [line1, line2, line3, line4, finalBlock, interactiveRow].forEach((el) => {
    if (el) el.setAttribute("hidden", "");
  });
  if (epilogueScreen) {
    epilogueScreen.setAttribute("hidden", "");
    epilogueScreen.classList.remove("epilogue-visible");
  }

  document.body.classList.add("cinematic-ending-active");
  scene.removeAttribute("hidden");

  STATE.foregroundOverlayActive = true;
  STATE.foregroundBlackoutDrifting = false;
  spawnForegroundBurst(45);

  requestAnimationFrame(() => {
    scene.classList.add("scene-visible");
  });

  STATE.cinematicTimers.push(
    setTimeout(() => {
      if (showChocolateEasterEgg) {
        hero.classList.add("hero-emerged");
        dropChocolatesFromTop(8);
        showTemporaryCinematicToast("🍫 Bonus Easter Egg: Chocolate delivery incoming...");
      } else {
        showTemporaryCinematicToast("✨ Midnight finale unlocked for Jay...");
      }
    }, 500)
  );

  STATE.cinematicTimers.push(
    setTimeout(() => {
      if (line1) line1.removeAttribute("hidden");
    }, 2100)
  );

  STATE.cinematicTimers.push(
    setTimeout(() => {
      if (line2) line2.removeAttribute("hidden");
    }, 3900)
  );

  STATE.cinematicTimers.push(
    setTimeout(() => {
      if (line3) line3.removeAttribute("hidden");
      triggerForegroundShootingStar();
    }, 5800)
  );

  STATE.cinematicTimers.push(
    setTimeout(() => {
      if (line4) line4.removeAttribute("hidden");
      spawnForegroundBurst(25);
    }, 7600)
  );

  STATE.cinematicTimers.push(
    setTimeout(() => {
      if (finalBlock) finalBlock.removeAttribute("hidden");
      if (interactiveRow) interactiveRow.removeAttribute("hidden");
      triggerForegroundShootingStar();

      let toastIdx = 1;
      STATE.cinematicToastInterval = setInterval(() => {
        const msg =
          JAY_DATA.cinematicToasts[
            toastIdx % JAY_DATA.cinematicToasts.length
          ];
        toastIdx++;
        showTemporaryCinematicToast(msg);
      }, 4200);

      scheduleFinalFadeToBlack(9500);
    }, 9300)
  );
}

function showTemporaryCinematicToast(text) {
  const toastEl = document.getElementById("cinematic-floating-toast");
  if (!toastEl) return;

  toastEl.classList.remove("toast-visible");
  setTimeout(() => {
    toastEl.textContent = text;
    toastEl.classList.add("toast-visible");
  }, 120);
}

function dropChocolatesFromTop(count = 8) {
  const container = document.getElementById("foreground-falling-chocolates");
  if (!container) return;

  const treats = ["🍫", "🍫", "🍬", "💗", "✨", "🍫"];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.className = "falling-choco-item";
    el.textContent = treats[i % treats.length];
    el.style.left = `${8 + Math.random() * 84}%`;
    el.style.animationDelay = `${Math.random() * 0.65}s`;
    el.style.animationDuration = `${2.2 + Math.random() * 1.1}s`;
    container.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 3600);
  }
}

function scheduleFinalFadeToBlack(delayMs = 9500) {
  if (STATE.cinematicBlackoutTimer) {
    clearTimeout(STATE.cinematicBlackoutTimer);
  }

  STATE.cinematicBlackoutTimer = setTimeout(() => {
    const scene = document.getElementById("cinematic-ending-scene");
    const stageInner = document.getElementById("cinematic-stage-inner");
    const epilogueScreen = document.getElementById("cinematic-epilogue-screen");

    if (STATE.cinematicToastInterval) {
      clearInterval(STATE.cinematicToastInterval);
      STATE.cinematicToastInterval = null;
    }

    if (scene) scene.classList.add("scene-blackout");
    if (stageInner) stageInner.classList.add("fade-into-black");

    STATE.foregroundBlackoutDrifting = true;

    setTimeout(() => {
      if (epilogueScreen) {
        epilogueScreen.removeAttribute("hidden");
        requestAnimationFrame(() => {
          epilogueScreen.classList.add("epilogue-visible");
        });
      }
    }, 2200);
  }, delayMs);
}

/* ==========================================================================
   DEDICATED TOP-MOST FOREGROUND SPARKLE LAYER
   ========================================================================== */
let FG_CANVAS = null;
let FG_CTX = null;
let FG_PARTICLES = [];
let FG_SHOOTING_STARS = [];

function initForegroundSparklesOverlay() {
  FG_CANVAS = document.getElementById("foreground-sparkles-canvas");
  if (!FG_CANVAS) return;
  FG_CTX = FG_CANVAS.getContext("2d");

  const resize = () => {
    FG_CANVAS.width = window.innerWidth;
    FG_CANVAS.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  FG_PARTICLES = [];
  for (let i = 0; i < 42; i++) {
    FG_PARTICLES.push(createForegroundParticle(false));
  }

  requestAnimationFrame(tickForegroundSparkles);
}

function createForegroundParticle(isBurst = false) {
  const w = FG_CANVAS ? FG_CANVAS.width : 390;
  const h = FG_CANVAS ? FG_CANVAS.height : 800;

  const types = STATE.foregroundBlackoutDrifting
    ? ["gold-sparkle", "gold-star"]
    : ["gold-sparkle", "gold-star", "pink-dot", "heart"];
  const type = types[Math.floor(Math.random() * types.length)];

  const spawnFromSide = !isBurst && Math.random() < 0.28;
  const startX = isBurst
    ? w * (0.12 + Math.random() * 0.76)
    : spawnFromSide
      ? Math.random() < 0.5
        ? -10
        : w + 10
      : Math.random() * w;
  const startY = isBurst
    ? h * (0.25 + Math.random() * 0.55)
    : spawnFromSide
      ? h * (0.3 + Math.random() * 0.7)
      : h + 15 + Math.random() * 40;

  return {
    x: startX,
    y: startY,
    vx: isBurst
      ? (Math.random() - 0.5) * 2.2
      : spawnFromSide
        ? startX < 0
          ? 0.35 + Math.random() * 0.55
          : -0.35 - Math.random() * 0.55
        : (Math.random() - 0.5) * 0.45,
    vy: isBurst
      ? -0.8 - Math.random() * 1.8
      : -0.45 - Math.random() * 0.85,
    size: 2.2 + Math.random() * 3.8,
    phase: Math.random() * Math.PI * 2,
    spinSpeed: 0.02 + Math.random() * 0.03,
    type,
    isBurst,
    life: isBurst ? 130 : Infinity
  };
}

function spawnForegroundBurst(count = 30) {
  if (!FG_CANVAS) return;
  for (let i = 0; i < count; i++) {
    FG_PARTICLES.push(createForegroundParticle(true));
  }
}

function triggerForegroundShootingStar() {
  if (!FG_CANVAS) return;
  const w = FG_CANVAS.width;
  const h = FG_CANVAS.height;
  FG_SHOOTING_STARS.push({
    x: w * (0.05 + Math.random() * 0.35),
    y: h * (0.65 + Math.random() * 0.25),
    vx: 5.5 + Math.random() * 2.5,
    vy: -4.2 - Math.random() * 2.0,
    life: 48,
    maxLife: 48
  });
}

function drawFourPointSparkle(ctx, x, y, radius, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = color;
  ctx.beginPath();
  const inner = radius * 0.32;
  ctx.moveTo(0, -radius);
  ctx.quadraticCurveTo(inner, -inner, radius, 0);
  ctx.quadraticCurveTo(inner, inner, 0, radius);
  ctx.quadraticCurveTo(-inner, inner, -radius, 0);
  ctx.quadraticCurveTo(-inner, -inner, 0, -radius);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawTinyHeart(ctx, x, y, size, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, size * 0.35);
  ctx.bezierCurveTo(-size, -size * 0.35, -size * 0.5, -size * 1.15, 0, -size * 0.35);
  ctx.bezierCurveTo(size * 0.5, -size * 1.15, size, -size * 0.35, 0, size * 0.35);
  ctx.fill();
  ctx.restore();
}

function tickForegroundSparkles() {
  if (!FG_CTX || !FG_CANVAS) return;
  const w = FG_CANVAS.width;
  const h = FG_CANVAS.height;

  FG_CTX.clearRect(0, 0, w, h);

  if (STATE.foregroundOverlayActive) {
    if (!STATE.foregroundBlackoutDrifting && Math.random() < 0.008) {
      triggerForegroundShootingStar();
    }

    const activeTargetCount = STATE.foregroundBlackoutDrifting ? 18 : 42;
    while (FG_PARTICLES.length < activeTargetCount) {
      FG_PARTICLES.push(createForegroundParticle(false));
    }

    for (let i = FG_PARTICLES.length - 1; i >= 0; i--) {
      const p = FG_PARTICLES[i];
      p.x += p.vx;
      p.y += p.vy;
      p.phase += p.spinSpeed;

      if (p.isBurst) {
        p.life--;
        if (p.life <= 0) {
          FG_PARTICLES.splice(i, 1);
          continue;
        }
      } else if (p.y < -24 || p.x < -30 || p.x > w + 30) {
        if (FG_PARTICLES.length > activeTargetCount) {
          FG_PARTICLES.splice(i, 1);
          continue;
        } else {
          Object.assign(p, createForegroundParticle(false));
        }
      }

      if (STATE.foregroundBlackoutDrifting && p.type === "heart") {
        continue;
      }

      const alpha =
        (0.45 + 0.45 * Math.sin(p.phase)) *
        (p.isBurst ? Math.min(1, p.life / 35) : 1);

      FG_CTX.save();
      FG_CTX.globalAlpha = alpha;

      if (p.type === "gold-sparkle") {
        drawFourPointSparkle(FG_CTX, p.x, p.y, p.size * 1.45, "#f6dca8");
      } else if (p.type === "gold-star") {
        FG_CTX.fillStyle = "#e5b578";
        FG_CTX.beginPath();
        FG_CTX.arc(p.x, p.y, p.size * 0.55, 0, Math.PI * 2);
        FG_CTX.fill();
      } else if (p.type === "pink-dot") {
        FG_CTX.fillStyle = "#ff4d6d";
        FG_CTX.beginPath();
        FG_CTX.arc(p.x, p.y, p.size * 0.65, 0, Math.PI * 2);
        FG_CTX.fill();
      } else if (p.type === "heart") {
        drawTinyHeart(FG_CTX, p.x, p.y, p.size * 1.35, "#ff1e42");
      }

      FG_CTX.restore();
    }

    for (let j = FG_SHOOTING_STARS.length - 1; j >= 0; j--) {
      const st = FG_SHOOTING_STARS[j];
      st.x += st.vx;
      st.y += st.vy;
      st.life--;

      if (st.life <= 0) {
        FG_SHOOTING_STARS.splice(j, 1);
        continue;
      }

      const ratio = st.life / st.maxLife;
      FG_CTX.save();
      FG_CTX.globalAlpha = ratio;
      const grad = FG_CTX.createLinearGradient(
        st.x,
        st.y,
        st.x - st.vx * 6,
        st.y - st.vy * 6
      );
      grad.addColorStop(0, "#fff8e7");
      grad.addColorStop(0.5, "#ff1e42");
      grad.addColorStop(1, "rgba(255, 30, 66, 0)");

      FG_CTX.strokeStyle = grad;
      FG_CTX.lineWidth = 2.2;
      FG_CTX.beginPath();
      FG_CTX.moveTo(st.x, st.y);
      FG_CTX.lineTo(st.x - st.vx * 6, st.y - st.vy * 6);
      FG_CTX.stroke();

      drawFourPointSparkle(FG_CTX, st.x, st.y, 5.5, "#fff8e7");
      FG_CTX.restore();
    }
  }

  requestAnimationFrame(tickForegroundSparkles);
}

/* ==========================================================================
   SCROLL STAGE TRACKER (Does NOT interrupt or change sequential music playback)
   ========================================================================== */
function initScrollStageTracker() {
  const sections = document.querySelectorAll("[data-stage-index]");
  const fill = document.getElementById("top-progress-fill");
  const eyesSection = document.getElementById("stage-4");
  let eyesAutoTimerStarted = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          const idx = Number(entry.target.getAttribute("data-stage-index")) || 1;
          if (fill) {
            const pct = Math.min(100, Math.max(12, (idx / 8) * 100));
            fill.style.width = `${pct}%`;
          }

          if (entry.target === eyesSection && !eyesAutoTimerStarted) {
            eyesAutoTimerStarted = true;
            setTimeout(() => {
              if (STATE.eyesRevealStep === 1) {
                const btn = document.getElementById("eyes-reveal-btn");
                if (btn) btn.click();
              }
            }, 3400);
          }
        }
      });
    },
    { threshold: 0.25 }
  );

  sections.forEach((s) => observer.observe(s));
}

/* ==========================================================================
   SUBTLE FLOATING CRIMSON EMBERS & CANDLELIGHT SPARKS CANVAS
   ========================================================================== */
let STARS = [];
let STAR_CTX = null;
let STAR_CANVAS = null;

function initStarsCanvas() {
  STAR_CANVAS = document.getElementById("stars-canvas");
  if (!STAR_CANVAS) return;
  STAR_CTX = STAR_CANVAS.getContext("2d");

  const resize = () => {
    STAR_CANVAS.width = window.innerWidth;
    STAR_CANVAS.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  STARS = [];
  for (let i = 0; i < 30; i++) {
    STARS.push(makeStar(false));
  }

  requestAnimationFrame(tickStars);
}

function makeStar(isBurst = false) {
  const w = STAR_CANVAS ? STAR_CANVAS.width : 390;
  const h = STAR_CANVAS ? STAR_CANVAS.height : 800;
  const palette = ["#ff1e42", "#ff758f", "#e8b878"];
  return {
    x: isBurst ? w * (0.15 + Math.random() * 0.7) : Math.random() * w,
    y: isBurst ? h * (0.25 + Math.random() * 0.5) : Math.random() * h,
    vx: isBurst ? (Math.random() - 0.5) * 2.1 : (Math.random() - 0.5) * 0.16,
    vy: isBurst ? -0.6 - Math.random() * 1.6 : -0.12 - Math.random() * 0.24,
    r: 1.1 + Math.random() * 2.0,
    phase: Math.random() * Math.PI * 2,
    color: palette[Math.floor(Math.random() * palette.length)],
    isBurst,
    life: isBurst ? 105 : Infinity
  };
}

function burstStars(count = 20) {
  if (!STAR_CANVAS) return;
  for (let i = 0; i < count; i++) {
    STARS.push(makeStar(true));
  }
}

function tickStars() {
  if (!STAR_CTX || !STAR_CANVAS) return;
  const w = STAR_CANVAS.width;
  const h = STAR_CANVAS.height;

  STAR_CTX.clearRect(0, 0, w, h);

  for (let i = STARS.length - 1; i >= 0; i--) {
    const s = STARS[i];
    s.x += s.vx;
    s.y += s.vy;
    s.phase += 0.022;

    if (s.isBurst) {
      s.life--;
      if (s.life <= 0) {
        STARS.splice(i, 1);
        continue;
      }
    } else {
      if (s.y < -10) s.y = h + 10;
      if (s.x < -10) s.x = w + 10;
      if (s.x > w + 10) s.x = -10;
    }

    const alpha =
      (0.32 + 0.42 * Math.sin(s.phase)) *
      (s.isBurst ? Math.min(1, s.life / 30) : 1);

    STAR_CTX.globalAlpha = alpha;
    STAR_CTX.fillStyle = s.color;
    STAR_CTX.beginPath();
    STAR_CTX.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    STAR_CTX.fill();
  }

  requestAnimationFrame(tickStars);
}
