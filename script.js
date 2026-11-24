/* ==========================================================================
   THE JOYCE EXPERIENCE — FINAL MOBILE-FIRST IMMERSIVE ENGINE (SCRIPT.JS)
   Includes Full-Screen Cinematic Ending Sequence & Foreground Sparkle Overlay
   ========================================================================== */

const JOYCE_DATA = {
  // 1. Audio configuration: probes exact case assets/Song.mp3 and common extensions
  audio: {
    candidates: [
      "assets/Song.mp3",
      "assets/song.mp3",
      "assets/Song.m4a",
      "assets/song.m4a",
      "assets/Song.ogg",
      "assets/song.ogg",
      "assets/Song.wav",
      "assets/song.wav"
    ]
  },

  // 2. Stage 2: The Joyce Allegations (Eyes Card with atmospheric eyes.jpeg backdrop)
  allegations: [
    {
      id: "eyes",
      emoji: "👁️",
      title: "Those eyes, though...",
      hasEyesBackdrop: true,
      message:
        "I've told you before, baby girl, there's something dangerous about your eyes. There's this particular picture of yours where I genuinely get lost staring at them—thinking thoughts that would make you blush right through the screen. And before you get too confident, no, I'm not taking it back.",
      followUpButton: "You're staring again, aren't you?",
      followUpReply:
        "What can I say, pretty girl? When you look like that, looking away isn't even on my list of options."
    },
    {
      id: "attitude",
      emoji: "👑",
      title: "The attitude problem.",
      message:
        "Don't give me that attitude, pretty girl. 90% eye-rolls, 10% bratty backtalk, and 100% begging to be put in your place. You love acting tough and unbothered, Joyce, as if we both don't know how quickly you fold the second I take control."
    },
    {
      id: "attractive",
      emoji: "🔥",
      title: "The dangerously attractive human.",
      message:
        "Behave yourself. Or at least pretend to. It's actually criminal how good you look while causing this much trouble. Between that body, that wicked mouth, and the way you tease me late at night, keeping my hands to myself would be a lost cause if I were in the same room."
    }
  ],

  cheekyObservations: [
    "Look at you, being all shy now. We both know you're smiling at your phone, baby girl.",
    "Behave yourself, Joyce. Or at least pretend to for five minutes.",
    "Come on, baby. You know better than to test my patience when you look that good.",
    "That bratty little smirk of yours? Yeah, it's going to get you into very fun trouble one of these nights, babes."
  ],

  horrorReplies: [
    "Survival Odds: 0%. I saw you in the dark hallway, pretty girl, and locked the door behind us myself.",
    "Plot twist: The ghost left the haunted house because the tension between us got way too heated.",
    "If you're the villain in this horror movie, babes, I'm pinning you against the wall in scene one.",
    "Red flags? Come on, baby. In this lighting, they just look like an invitation."
  ],

  // Stage 5: A Little Game (4-word mobile crossword)
  crossword: {
    rewardMessage:
      "That's my good girl. Look at you solving all four. Your reward is knowing you're still my favourite little menace, Joyce.",
    entries: [
      {
        number: 1,
        answer: "CHOCOLATE",
        clue: "Something sweet that can improve almost any day. It comes in bars, boxes and many flavours."
      },
      {
        number: 2,
        answer: "ANIME",
        clue: "Japanese animation. Think of your favourite characters and shows."
      },
      {
        number: 3,
        answer: "CAKE",
        clue: "Something sweet you love eating on birthdays and probably on ordinary days too."
      },
      {
        number: 4,
        answer: "BASKETBALL",
        clue: "Your favourite sport involving a ball, a hoop and a lot of running."
      }
    ]
  },

  // Stage 6: The Message I Actually Wanted You to Read
  heartfeltMessage: {
    paragraphs: [
      "Listen to me,love. Pause the teasing for a minute. I know you're usually the one making people laugh and acting strong, but even on your terrible days, you still have me right here.",
      "Come here, baby girl. You don't need to explain everything right now. You don't owe me an act, big explanations, or vulnerability on command—I care about you because you're my friend and because you matter to me.",
      "I know you cry sometimes, and I wish I could be there beside you on those nights. Listen to me, Joyce—you don't have to hide those tears from me. Not to force you to talk or try to fix everything. Just to hold your hand, pull you close, let you cry if you need to, and remind you that you don't have to face everything alone.",
      "Let it out. You don't have to pretend you're okay just because everyone expects you to be. And if you can't find the words, that's fine. I'll still be here.",
      "I'm here when you're happy, and I'm here when you're struggling. You can call, text, vent, cry, sit in silence, send a random message at 3 AM, or let me distract you with the most ridiculous nonsense imaginable.",
      "I can't always be physically beside you, but don't mistake distance for absence. You've got me in your corner, trouble. Always."
    ],
    endingPunchline: "Now wipe that face and go eat something, baby girl. That's an order."
  },

  // Stage 7: Your Emergency Button ("Having one of those days?")
  emergencyMessages: [
    "I said take a breath. That's an order, trouble. Unclench your jaw and drop your shoulders for me.",
    "Come here, baby girl. You don't have to solve your entire life tonight. Just rest.",
    "You heard me, baby girl—you're allowed to have days when you do absolutely nothing and let someone else look out for you.",
    "Want to cry or vent? I'm listening. Want distraction? Come here, babes, I'm very available to take your mind off things.",
    "Don't mistake distance for absence. One random text from you and I'm right there in your corner.",
    "Even on your worst days, pretty girl, you're still worthy of kindness and someone who stays.",
    "Deep breath for me, baby. That's my good girl. You're not carrying tonight alone."
  ],

  // Stage 8: The Final Little Surprise
  finalLetter: {
    paragraphs: [
      "One last thing, baby girl.",
      "I hope life gives you more reasons to smile than reasons to overthink.",
      "I hope you always remember that with me, you never have to pretend to be anyone other than yourself—bratty attitude, soft heart, and all.",
      "Keep drawing. Keep playing. Keep laughing at stupid things. Keep being the dangerously pretty, wonderfully weird trouble you are.",
      "And whenever things get a little too heavy, remember that somewhere in this world there's an idiot who is always ready to hear from you.",
      "No conditions. No pressure. You've got me in your corner, babes.",
      "P.S. Behave yourself tonight. Or don't—we both know which one I prefer. 😏"
    ],
    credits:
      "Made with genuine care, a little teasing and an unreasonable amount of coding."
  },

  // Playful status toasts during the Cinematic Final Scene
  cinematicToasts: [
    "🍫 Chocolate delivery incoming for baby girl...",
    "✨ Joyce.exe has stopped functioning because of excessive sweetness.",
    "💗 Now whose a good girl?",
    "🌙 Warning: Trouble levels off the charts."
  ]
};

/* ==========================================================================
   APPLICATION STATE
   ========================================================================== */
const STATE = {
  headphoneClicks: 0,
  gateUnlocked: false,
  musicPlaying: false,
  usingSynthFallback: false,
  audioCtx: null,
  synthTimer: null,
  openedAllegations: new Set(),
  cheekyIdx: 0,
  horrorIdx: 0,
  eyesRevealStep: 1,
  revealedParagraphs: 1,
  lastEmergencyIndex: -1,
  emergencyTapCount: 0,
  crosswordInputs: {},
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
  initStrictHeadphoneGate();
  initAudioControls();
  initStage2Allegations();
  initStage3HorrorPortrait();
  initStage4EyesMoment();
  initStage5Crossword();
  initStage6Heartfelt();
  initStage7Emergency();
  initStage8FinalSurprise();
  initCinematicEndingSequence();
  initScrollStageTracker();
  initStarsCanvas();
  initForegroundSparklesOverlay();
});

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
   1. STRICT 3-CLICK HEADPHONE GATE
   ========================================================================== */
function initStrictHeadphoneGate() {
  const gateEl = document.getElementById("headphone-gate");
  const actionBtn = document.getElementById("hp-action-btn");
  const btnLabel = document.getElementById("hp-btn-label");
  const primaryText = document.getElementById("hp-primary-text");
  const dot2 = document.getElementById("hp-dot-2");
  const dot3 = document.getElementById("hp-dot-3");

  if (!gateEl || !actionBtn || !btnLabel || !primaryText) return;

  const blockScrollWhileLocked = (e) => {
    if (!STATE.gateUnlocked) {
      e.preventDefault();
    }
  };
  gateEl.addEventListener("touchmove", blockScrollWhileLocked, {
    passive: false
  });
  gateEl.addEventListener("wheel", blockScrollWhileLocked, { passive: false });

  actionBtn.addEventListener("click", () => {
    STATE.headphoneClicks++;

    if (STATE.headphoneClicks === 1) {
      if (dot2) dot2.classList.add("active");
      primaryText.style.opacity = "0";
      setTimeout(() => {
        primaryText.textContent =
          "You heard me, baby girl. Go get your headphones, woman. You're not listening to this through your phone speaker.";
        primaryText.style.opacity = "1";
      }, 150);
      btnLabel.textContent = "Okay, okay... I'm going";
      burstStars(14);
    } else if (STATE.headphoneClicks === 2) {
      if (dot3) dot3.classList.add("active");
      primaryText.style.opacity = "0";
      setTimeout(() => {
        primaryText.textContent =
          "I KNOW you haven't moved. Don't give me that attitude, pretty girl. Be a good girl for daddy and put those headphones on. I'll wait. 😂";
        primaryText.style.opacity = "1";
      }, 150);
      btnLabel.textContent = "I actually have them now, damn.";
      burstStars(18);
    } else if (STATE.headphoneClicks === 3) {
      actionBtn.disabled = true;
      primaryText.style.opacity = "0";
      setTimeout(() => {
        primaryText.textContent =
          "That's my good girl. I knew you'd listen eventually. Put them on, get comfortable and let's go.";
        primaryText.style.opacity = "1";
      }, 140);
      btnLabel.textContent = "Starting soundtrack...";

      startBackgroundMusic();
      burstStars(42);

      setTimeout(() => {
        STATE.gateUnlocked = true;
        document.documentElement.classList.remove("gate-locked");
        document.body.classList.remove("gate-locked");
        gateEl.classList.add("gate-fade-out");

        const stage2 = document.getElementById("stage-2");
        if (stage2) {
          stage2.scrollIntoView({ behavior: "smooth" });
        }
      }, 1650);
    }
  });
}

/* ==========================================================================
   PERSISTENT AUDIO CONTROLLER
   ========================================================================== */
function initAudioControls() {
  const pillBtn = document.getElementById("music-control-btn");
  if (!pillBtn) return;

  pillBtn.addEventListener("click", () => {
    if (STATE.musicPlaying) {
      pauseBackgroundMusic();
    } else {
      startBackgroundMusic();
    }
  });
}

async function startBackgroundMusic() {
  const audioEl = document.getElementById("bg-song-player");
  if (!audioEl) return;

  if (STATE.musicPlaying && !audioEl.paused) {
    updateMusicUI(true);
    return;
  }

  try {
    audioEl.volume = 0.78;
    await audioEl.play();
    STATE.musicPlaying = true;
    STATE.usingSynthFallback = false;
    updateMusicUI(true);
    return;
  } catch (_initialErr) {
    for (const candidatePath of JOYCE_DATA.audio.candidates) {
      try {
        audioEl.src = candidatePath;
        await audioEl.play();
        STATE.musicPlaying = true;
        STATE.usingSynthFallback = false;
        updateMusicUI(true);
        return;
      } catch (_extErr) {
        // Continue trying candidate paths
      }
    }
  }

  startGentleNocturneFallback();
  STATE.musicPlaying = true;
  STATE.usingSynthFallback = true;
  updateMusicUI(true);
}

function pauseBackgroundMusic() {
  const audioEl = document.getElementById("bg-song-player");
  if (audioEl && !audioEl.paused) {
    audioEl.pause();
  }
  stopGentleNocturneFallback();
  STATE.musicPlaying = false;
  updateMusicUI(false);
}

function updateMusicUI(isPlaying) {
  const pillBtn = document.getElementById("music-control-btn");
  const iconEl = document.getElementById("music-pill-icon");
  const textEl = document.getElementById("music-pill-text");

  if (pillBtn) {
    pillBtn.setAttribute("aria-pressed", String(isPlaying));
    pillBtn.classList.toggle("is-playing", isPlaying);
  }
  if (iconEl) {
    iconEl.textContent = isPlaying ? "🎵" : "🎧";
  }
  if (textEl) {
    textEl.textContent = isPlaying ? "Playing" : "Paused";
  }
}

function startGentleNocturneFallback() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  if (!STATE.audioCtx) {
    STATE.audioCtx = new AudioCtx();
  }
  if (STATE.audioCtx.state === "suspended") {
    STATE.audioCtx.resume();
  }
  if (STATE.synthTimer) clearInterval(STATE.synthTimer);

  const notes = [293.66, 349.23, 440.0, 523.25, 440.0, 392.0, 349.23, 329.63];
  let idx = 0;

  const strike = (freq) => {
    if (!STATE.musicPlaying || !STATE.audioCtx) return;
    const now = STATE.audioCtx.currentTime;
    const osc = STATE.audioCtx.createOscillator();
    const gain = STATE.audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.035, now + 0.09);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
    osc.connect(gain);
    gain.connect(STATE.audioCtx.destination);
    osc.start(now);
    osc.stop(now + 2.25);
  };

  strike(notes[0]);
  STATE.synthTimer = setInterval(() => {
    idx = (idx + 1) % notes.length;
    strike(notes[idx]);
  }, 1250);
}

function stopGentleNocturneFallback() {
  if (STATE.synthTimer) {
    clearInterval(STATE.synthTimer);
    STATE.synthTimer = null;
  }
}

/* ==========================================================================
   STAGE 2: THE JOYCE ALLEGATIONS
   ========================================================================== */
function initStage2Allegations() {
  const listEl = document.getElementById("allegations-list");
  const progressEl = document.getElementById("allegations-progress");
  const pokeBtn = document.getElementById("cheeky-poke-btn");
  const pokeOut = document.getElementById("cheeky-poke-output");

  if (!listEl) return;
  listEl.innerHTML = "";

  JOYCE_DATA.allegations.forEach((item) => {
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
          badge.textContent = isOpened ? "Unsealed ✦" : "Tap to open";
        }
        if (isOpened) {
          STATE.openedAllegations.add(item.id);
        }
        if (progressEl) {
          progressEl.textContent = `${STATE.openedAllegations.size} / ${JOYCE_DATA.allegations.length} cards opened`;
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

  if (pokeBtn && pokeOut) {
    pokeBtn.addEventListener("click", () => {
      const list = JOYCE_DATA.cheekyObservations;
      pokeOut.textContent = `“${list[STATE.cheekyIdx % list.length]}”`;
      STATE.cheekyIdx++;
      burstStars(10);
    });
  }
}

/* ==========================================================================
   STAGE 3: ATMOSPHERIC GOTHIC HORROR PORTRAIT (assets/jay.jpeg)
   ========================================================================== */
function initStage3HorrorPortrait() {
  const hauntedBtn = document.getElementById("haunted-house-btn");
  const replyEl = document.getElementById("haunted-house-reply");

  if (hauntedBtn && replyEl) {
    hauntedBtn.addEventListener("click", () => {
      const list = JOYCE_DATA.horrorReplies;
      replyEl.textContent = list[STATE.horrorIdx % list.length];
      STATE.horrorIdx++;
      burstStars(16);
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
      if (btnText) btnText.textContent = "Continue to A Little Game ↓";
      burstStars(22);
    } else {
      const stage5 = document.getElementById("stage-5");
      if (stage5) stage5.scrollIntoView({ behavior: "smooth" });
    }
  });
}

/* ==========================================================================
   STAGE 5: A LITTLE GAME (4-WORD MOBILE CROSSWORD)
   ========================================================================== */
function initStage5Crossword() {
  const entriesWrap = document.getElementById("cw-entries-list");
  const previewWrap = document.getElementById("cw-visual-preview");
  const checkBtn = document.getElementById("cw-check-btn");

  if (!entriesWrap) return;
  entriesWrap.innerHTML = "";

  JOYCE_DATA.crossword.entries.forEach((entry) => {
    const len = entry.answer.length;
    const card = document.createElement("div");
    card.className = "cw-entry-card";
    card.id = `cw-entry-card-${entry.number}`;

    let boxesHtml = "";
    for (let i = 0; i < len; i++) {
      boxesHtml += `
        <input
          type="text"
          maxlength="1"
          inputmode="text"
          autocomplete="off"
          autocapitalize="characters"
          spellcheck="false"
          class="cw-letter-input"
          data-word="${entry.number}"
          data-index="${i}"
          aria-label="Clue ${entry.number} letter ${i + 1} of ${len}"
        />
      `;
    }

    card.innerHTML = `
      <div class="cw-entry-top">
        <span class="cw-entry-num">Clue #${entry.number}</span>
        <span class="cw-letter-count">${len} letters</span>
      </div>
      <p class="cw-clue-text">${entry.clue}</p>
      <div class="cw-boxes-row" data-len="${len}">
        ${boxesHtml}
      </div>
      <div class="cw-entry-footer">
        <button type="button" class="cw-hint-btn" data-hint-word="${entry.number}">
          <span>💡 Hint (Reveal letter)</span>
        </button>
        <span class="cw-word-status" id="cw-word-status-${entry.number}">0 / ${len}</span>
      </div>
    `;

    entriesWrap.appendChild(card);

    const inputs = Array.from(card.querySelectorAll(".cw-letter-input"));
    STATE.crosswordInputs[entry.number] = inputs;

    inputs.forEach((input, idx) => {
      input.addEventListener("input", (e) => {
        const clean = e.target.value.replace(/[^a-zA-Z]/g, "").toUpperCase();
        e.target.value = clean ? clean.slice(-1) : "";
        e.target.classList.remove("is-correct", "is-wrong");

        updateCrosswordState(false);

        if (e.target.value && idx < inputs.length - 1) {
          inputs[idx + 1].focus();
        }
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && idx > 0) {
          e.preventDefault();
          inputs[idx - 1].focus();
        } else if (e.key === "ArrowRight" && idx < inputs.length - 1) {
          e.preventDefault();
          inputs[idx + 1].focus();
        } else if (e.key === "ArrowLeft" && idx > 0) {
          e.preventDefault();
          inputs[idx - 1].focus();
        }
      });
    });

    const hintBtn = card.querySelector(".cw-hint-btn");
    if (hintBtn) {
      hintBtn.addEventListener("click", () => {
        revealLetterForWord(entry);
      });
    }
  });

  if (previewWrap) {
    renderMiniCrosswordPreview();
  }

  if (checkBtn) {
    checkBtn.addEventListener("click", () => {
      updateCrosswordState(true);
    });
  }
}

function revealLetterForWord(entry) {
  const inputs = STATE.crosswordInputs[entry.number] || [];
  const answer = entry.answer.toUpperCase();
  const feedbackEl = document.getElementById("cw-feedback-msg");

  const targetIdx = inputs.findIndex(
    (inp, idx) => inp.value.toUpperCase() !== answer[idx]
  );

  if (targetIdx === -1) {
    if (feedbackEl) {
      feedbackEl.textContent = `Clue #${entry.number} is already solved, Joyce!`;
    }
    return;
  }

  inputs[targetIdx].value = answer[targetIdx];
  inputs[targetIdx].classList.remove("is-wrong");
  inputs[targetIdx].classList.add("is-correct");

  const nextEmpty = inputs.findIndex(
    (inp, idx) => inp.value.toUpperCase() !== answer[idx]
  );
  if (nextEmpty !== -1) {
    inputs[nextEmpty].focus();
  }

  if (feedbackEl) {
    feedbackEl.textContent = `Hint used on Clue #${entry.number}: revealed "${answer[targetIdx]}".`;
  }

  updateCrosswordState(false);
}

function updateCrosswordState(highlightErrors = false) {
  let solvedCount = 0;
  let totalFilledLetters = 0;

  JOYCE_DATA.crossword.entries.forEach((entry) => {
    const inputs = STATE.crosswordInputs[entry.number] || [];
    const answer = entry.answer.toUpperCase();
    const card = document.getElementById(`cw-entry-card-${entry.number}`);
    const statusEl = document.getElementById(`cw-word-status-${entry.number}`);

    let filledInWord = 0;
    let wordCorrect = true;

    inputs.forEach((inp, idx) => {
      const val = inp.value.toUpperCase();
      if (val) {
        filledInWord++;
        totalFilledLetters++;
      }
      if (val !== answer[idx]) {
        wordCorrect = false;
      }

      if (highlightErrors) {
        inp.classList.remove("is-correct", "is-wrong");
        if (val) {
          inp.classList.add(val === answer[idx] ? "is-correct" : "is-wrong");
        }
      } else if (val === answer[idx] && wordCorrect) {
        inp.classList.remove("is-wrong");
        inp.classList.add("is-correct");
      }
    });

    if (wordCorrect) {
      solvedCount++;
      inputs.forEach((inp) => {
        inp.classList.remove("is-wrong");
        inp.classList.add("is-correct");
      });
    }

    if (card) {
      card.classList.toggle("entry-solved", wordCorrect);
    }
    if (statusEl) {
      statusEl.textContent = wordCorrect
        ? "Solved ✓"
        : `${filledInWord} / ${answer.length}`;
    }
  });

  const countBadge = document.getElementById("cw-progress-count");
  const fillBar = document.getElementById("cw-progress-fill");
  const feedbackEl = document.getElementById("cw-feedback-msg");
  const rewardBanner = document.getElementById("cw-reward-banner");
  const rewardText = document.getElementById("cw-reward-text");

  if (countBadge) {
    countBadge.textContent = `${solvedCount} / 4 Solved`;
  }
  if (fillBar) {
    fillBar.style.width = `${(solvedCount / 4) * 100}%`;
  }

  renderMiniCrosswordPreview();

  if (solvedCount === 4) {
    if (rewardText) {
      rewardText.textContent = JOYCE_DATA.crossword.rewardMessage;
    }
    if (rewardBanner && rewardBanner.hasAttribute("hidden")) {
      rewardBanner.removeAttribute("hidden");
      burstStars(35);
    }
    if (feedbackEl) {
      feedbackEl.textContent = "All 4 answers verified! ✦";
    }
  } else if (highlightErrors && feedbackEl) {
    if (totalFilledLetters === 0) {
      feedbackEl.textContent =
        "Tap any box to type a letter, or tap a 💡 Hint button!";
    } else {
      feedbackEl.textContent =
        "Green letters are right! Fix any pink boxes or tap 💡 Hint.";
    }
  }
}

function renderMiniCrosswordPreview() {
  const previewWrap = document.getElementById("cw-visual-preview");
  if (!previewWrap) return;

  const words = JOYCE_DATA.crossword.entries.map((entry) => {
    const inputs = STATE.crosswordInputs[entry.number] || [];
    const current = inputs.map((i) => i.value.toUpperCase() || "·");
    const isSolved =
      inputs.map((i) => i.value.toUpperCase()).join("") === entry.answer;
    return { number: entry.number, current, len: entry.answer.length, isSolved };
  });

  let rowsHtml = `<span class="cw-map-caption">✦ Live Crossword Board ✦</span>`;
  words.forEach((w) => {
    const padLeft = Math.floor((10 - w.len) / 2);
    let cells = "";
    for (let c = 0; c < 10; c++) {
      const letterIdx = c - padLeft;
      if (letterIdx >= 0 && letterIdx < w.len) {
        const ch = w.current[letterIdx];
        const cls = w.isSolved ? "solved-slot" : "filled-slot";
        cells += `<div class="cw-mini-cell ${cls}">${ch}</div>`;
      } else {
        cells += `<div class="cw-mini-cell empty"></div>`;
      }
    }
    rowsHtml += `<div class="cw-mini-grid">${cells}</div>`;
  });

  previewWrap.innerHTML = rowsHtml;
}

/* ==========================================================================
   STAGE 6: THE MESSAGE I ACTUALLY WANTED YOU TO READ
   ========================================================================== */
function initStage6Heartfelt() {
  const stackEl = document.getElementById("heartfelt-paragraphs");
  const endingEl = document.getElementById("heartfelt-ending");
  const punchlineEl = document.getElementById("heartfelt-punchline");
  const nextBtn = document.getElementById("next-paragraph-btn");
  const showAllBtn = document.getElementById("show-all-paragraphs-btn");

  if (!stackEl || !nextBtn) return;

  const paragraphs = JOYCE_DATA.heartfeltMessage.paragraphs;
  if (punchlineEl) {
    punchlineEl.textContent = JOYCE_DATA.heartfeltMessage.endingPunchline;
  }

  const renderUpTo = (count) => {
    const existingCount = stackEl.children.length;
    for (let i = existingCount; i < count && i < paragraphs.length; i++) {
      const p = document.createElement("p");
      p.className = "heartfelt-para";
      p.textContent = paragraphs[i];
      stackEl.appendChild(p);
    }

    if (count >= paragraphs.length) {
      if (endingEl) endingEl.removeAttribute("hidden");
      nextBtn.innerHTML = `<span>Continue to Your Emergency Button</span><span aria-hidden="true">↓</span>`;
      if (showAllBtn) showAllBtn.style.display = "none";
    } else {
      nextBtn.innerHTML = `<span>Tap for Next Part (${count} / ${paragraphs.length})</span><span aria-hidden="true">✦</span>`;
    }
  };

  renderUpTo(1);

  nextBtn.addEventListener("click", () => {
    if (STATE.revealedParagraphs < paragraphs.length) {
      STATE.revealedParagraphs++;
      renderUpTo(STATE.revealedParagraphs);
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
}

/* ==========================================================================
   STAGE 7: YOUR EMERGENCY BUTTON
   ========================================================================== */
function initStage7Emergency() {
  const btn = document.getElementById("emergency-comfort-btn");
  const textEl = document.getElementById("emergency-message-text");
  const metaEl = document.getElementById("emergency-tap-counter");

  if (!btn || !textEl) return;

  btn.addEventListener("click", () => {
    const list = JOYCE_DATA.emergencyMessages;
    let idx = Math.floor(Math.random() * list.length);
    if (list.length > 1 && idx === STATE.lastEmergencyIndex) {
      idx = (idx + 1) % list.length;
    }
    STATE.lastEmergencyIndex = idx;
    STATE.emergencyTapCount++;

    textEl.style.opacity = "0";
    setTimeout(() => {
      textEl.textContent = `“${list[idx]}”`;
      textEl.style.opacity = "1";
    }, 150);

    if (metaEl) {
      metaEl.textContent = `Reminder #${STATE.emergencyTapCount} • Tap again anytime`;
    }
    burstStars(12);
  });
}

/* ==========================================================================
   STAGE 8: THE FINAL LITTLE SURPRISE
   ========================================================================== */
function initStage8FinalSurprise() {
  const sealedBox = document.getElementById("letter-sealed-box");
  const unfoldedBox = document.getElementById("letter-unfolded-box");
  const sealBtn = document.getElementById("unfold-letter-btn");
  const ctaBtn = document.getElementById("unfold-letter-cta");
  const bodyWrap = document.getElementById("final-letter-content");
  const creditsEl = document.getElementById("final-credits-line");

  if (bodyWrap) {
    bodyWrap.innerHTML = JOYCE_DATA.finalLetter.paragraphs
      .map((line) => `<p>${line}</p>`)
      .join("");
  }
  if (creditsEl) {
    creditsEl.textContent = JOYCE_DATA.finalLetter.credits;
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
   CINEMATIC FINAL SCENE & FOREGROUND SPARKLE / CHOCOLATE SEQUENCE
   Triggered when Joyce presses "Send Midnight Sparkles ✨"
   ========================================================================== */
function initCinematicEndingSequence() {
  const triggerBtn = document.getElementById("send-midnight-sparkles-btn");
  const oneMoreChocoBtn = document.getElementById("one-more-chocolate-btn");

  if (triggerBtn) {
    triggerBtn.addEventListener("click", startCinematicFinalScene);
  }

  if (oneMoreChocoBtn) {
    oneMoreChocoBtn.addEventListener("click", () => {
      dropChocolatesFromTop(10);
      spawnForegroundBurst(24);
      showTemporaryCinematicToast("🍫 Extra chocolate air-dropped for Joyce!");

      // Give her 9 full seconds after her click before fading to the black epilogue
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

function startCinematicFinalScene() {
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

  // Reset state so it works reliably every time the button is pressed
  scene.classList.remove("scene-visible", "scene-blackout");
  stageInner.classList.remove("fade-into-black");
  hero.classList.remove("hero-emerged");
  [line1, line2, line3, line4, finalBlock, interactiveRow].forEach((el) => {
    if (el) el.setAttribute("hidden", "");
  });
  if (epilogueScreen) {
    epilogueScreen.setAttribute("hidden", "");
    epilogueScreen.classList.remove("epilogue-visible");
  }

  // 1. Fade away existing page content & transition into dark cinematic background
  document.body.classList.add("cinematic-ending-active");
  scene.removeAttribute("hidden");

  // Activate the top-most foreground particle layer (OVER the anime girl & text)
  STATE.foregroundOverlayActive = true;
  STATE.foregroundBlackoutDrifting = false;
  spawnForegroundBurst(45);

  requestAnimationFrame(() => {
    scene.classList.add("scene-visible");
  });

  // 2. Slowly fade the large anime girl eating chocolate into visibility
  STATE.cinematicTimers.push(
    setTimeout(() => {
      hero.classList.add("hero-emerged");
      showTemporaryCinematicToast("Chocolate delivery incoming...");
    }, 550)
  );

  // 3. Let the scene breathe for a moment (~2.4s) before revealing the messages one at a time
  STATE.cinematicTimers.push(
    setTimeout(() => {
      if (line1) line1.removeAttribute("hidden");
    }, 2700)
  );

  STATE.cinematicTimers.push(
    setTimeout(() => {
      if (line2) line2.removeAttribute("hidden");
      showTemporaryCinematicToast(
        "Joyce.exe has stopped functioning because of excessive sweetness."
      );
    }, 4500)
  );

  STATE.cinematicTimers.push(
    setTimeout(() => {
      if (line3) line3.removeAttribute("hidden");
      triggerForegroundShootingStar();
    }, 6400)
  );

  STATE.cinematicTimers.push(
    setTimeout(() => {
      if (line4) line4.removeAttribute("hidden");
      spawnForegroundBurst(25);
    }, 8200)
  );

  STATE.cinematicTimers.push(
    setTimeout(() => {
      if (finalBlock) finalBlock.removeAttribute("hidden");
      if (interactiveRow) interactiveRow.removeAttribute("hidden");
      dropChocolatesFromTop(6);
      triggerForegroundShootingStar();

      // Rotate occasional playful floating toasts
      let toastIdx = 2;
      STATE.cinematicToastInterval = setInterval(() => {
        const msg =
          JOYCE_DATA.cinematicToasts[
          toastIdx % JOYCE_DATA.cinematicToasts.length
          ];
        toastIdx++;
        showTemporaryCinematicToast(msg);
      }, 4200);

      // 5. Schedule the final fade-out into deep black after ~9.5 seconds
      scheduleFinalFadeToBlack(9500);
    }, 10000)
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

    // Slowly fade illustration and text into deep black screen
    if (scene) scene.classList.add("scene-blackout");
    if (stageInner) stageInner.classList.add("fade-into-black");

    // Shift foreground canvas to gentle golden sparkles drifting across the black background
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
   DEDICATED TOP-MOST FOREGROUND SPARKLE LAYER (z-index: 9999)
   Renders golden sparkles, glowing stars, pink particles, floating hearts,
   tiny chocolates, and shooting stars IN FRONT OF the anime girl & text!
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

  // Pre-seed foreground particles (only drawn when STATE.foregroundOverlayActive is true)
  FG_PARTICLES = [];
  for (let i = 0; i < 42; i++) {
    FG_PARTICLES.push(createForegroundParticle(false));
  }

  requestAnimationFrame(tickForegroundSparkles);
}

function createForegroundParticle(isBurst = false) {
  const w = FG_CANVAS ? FG_CANVAS.width : 390;
  const h = FG_CANVAS ? FG_CANVAS.height : 800;

  // In blackout epilogue mode, keep gentle golden sparkles drifting
  const types = STATE.foregroundBlackoutDrifting
    ? ["gold-sparkle", "gold-star"]
    : ["gold-sparkle", "gold-star", "pink-dot", "heart", "choco"];
  const type = types[Math.floor(Math.random() * types.length)];

  // Spawn from the bottom or sides moving upward
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
    size: type === "choco" ? 13 : 2.2 + Math.random() * 3.8,
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
    // Occasionally launch a shooting star
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

      // In blackout epilogue, filter out non-golden items gently
      if (
        STATE.foregroundBlackoutDrifting &&
        (p.type === "choco" || p.type === "heart")
      ) {
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
        FG_CTX.fillStyle = "#f4a4bc";
        FG_CTX.beginPath();
        FG_CTX.arc(p.x, p.y, p.size * 0.65, 0, Math.PI * 2);
        FG_CTX.fill();
      } else if (p.type === "heart") {
        drawTinyHeart(FG_CTX, p.x, p.y, p.size * 1.35, "#f4a4bc");
      } else if (p.type === "choco") {
        FG_CTX.font = `${Math.round(p.size)}px sans-serif`;
        FG_CTX.fillText("🍫", p.x, p.y);
      }

      FG_CTX.restore();
    }

    // Draw shooting stars moving upward across the screen
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
      grad.addColorStop(0.5, "#f4a4bc");
      grad.addColorStop(1, "rgba(244, 164, 188, 0)");

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
   SCROLL STAGE TRACKER (DOES NOT RESTART MUSIC)
   ========================================================================== */
function initScrollStageTracker() {
  const stages = document.querySelectorAll(".stage[data-stage-index]");
  const dots = document.querySelectorAll(".stage-dot");
  const fill = document.getElementById("top-progress-fill");
  const eyesSection = document.getElementById("stage-4");
  let eyesAutoTimerStarted = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          const idx = Number(entry.target.getAttribute("data-stage-index")) || 2;

          dots.forEach((d) => {
            d.classList.toggle("active", Number(d.dataset.stage) === idx);
          });
          if (fill) {
            const pct = Math.min(100, Math.max(14, ((idx - 1) / 7) * 100));
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

  stages.forEach((s) => observer.observe(s));
}

/* ==========================================================================
   LIGHTWEIGHT BACKGROUND STARS CANVAS
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
  for (let i = 0; i < 32; i++) {
    STARS.push(makeStar(false));
  }

  requestAnimationFrame(tickStars);
}

function makeStar(isBurst = false) {
  const w = STAR_CANVAS ? STAR_CANVAS.width : 390;
  const h = STAR_CANVAS ? STAR_CANVAS.height : 800;
  const palette = ["#f4a4bc", "#e5b578", "#c8255d"];
  return {
    x: isBurst ? w * (0.15 + Math.random() * 0.7) : Math.random() * w,
    y: isBurst ? h * (0.25 + Math.random() * 0.5) : Math.random() * h,
    vx: isBurst ? (Math.random() - 0.5) * 2.1 : (Math.random() - 0.5) * 0.16,
    vy: isBurst ? -0.6 - Math.random() * 1.6 : -0.12 - Math.random() * 0.24,
    r: 1.2 + Math.random() * 2.1,
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
      (0.35 + 0.42 * Math.sin(s.phase)) *
      (s.isBurst ? Math.min(1, s.life / 30) : 1);

    STAR_CTX.globalAlpha = alpha;
    STAR_CTX.fillStyle = s.color;
    STAR_CTX.beginPath();
    STAR_CTX.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    STAR_CTX.fill();
  }

  requestAnimationFrame(tickStars);
}
