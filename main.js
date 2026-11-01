/**
 * VILLENTE — ULTRA-LUXURY TURNKEY ARCHITECTURE & INTERIOR ATELIER
 * Dynamic Interactive Application Logic
 */

// Project Data for Interactive Reel & Modal Drawer
const PROJECTS_DATA = [
  {
    id: 'milan-penthouse',
    index: '01',
    name: 'Downtown Penthouse',
    city: 'Milano, Italy',
    category: 'Metropolitan Luxury',
    area: '480 m²',
    year: '2025',
    services: 'Turnkey Architectural Interior & Custom Joinery',
    heroImage: './assets/images/hero-art.jpg',
    galleryImages: [
      './assets/images/hero-art.jpg',
      './assets/images/marble-bath.jpg',
      './assets/images/bedroom-suite.jpg'
    ],
    narrative: 'Located in the historic Quadrilatero della Moda, this private penthouse balances high-contrast Italian craftsmanship with understated acoustic serenity. Featuring custom fluted walnut millwork, artisan textured radial gold leaf artwork, and monolithic Calacatta marble integrations throughout.',
    specs: [
      { label: 'Location', value: 'Milano, Italy' },
      { label: 'Scope', value: 'Full Turnkey Commission' },
      { label: 'Materials', value: 'Walnut, Calacatta Viola, Bronze' },
      { label: 'Timeline', value: '14 Months Completion' }
    ]
  },
  {
    id: 'seaside-villa-a',
    index: '02',
    name: 'Seaside Villa A',
    city: 'Cap d\'Antibes, France',
    category: 'Coastal Architecture',
    area: '850 m²',
    year: '2025',
    services: 'Turnkey Architectural Renovation & Interior Architecture',
    heroImage: './assets/images/seaside-villa.jpg',
    galleryImages: [
      './assets/images/seaside-villa.jpg',
      './assets/images/bedroom-suite.jpg',
      './assets/images/villa-facade.jpg'
    ],
    narrative: 'Perched along the Mediterranean cliffs of Cap d\'Antibes, this residence reinterprets coastal warmth through sculpted curves, Italian bouclé textiles, and vaulted skylight dormers. The bespoke living pavilion centres around an exposed heritage chimney and seamless panoramic sea horizons.',
    specs: [
      { label: 'Location', value: 'Cap d\'Antibes, France' },
      { label: 'Scope', value: 'Architecture & Turnkey Living' },
      { label: 'Materials', value: 'French Oak, Italian Bouclé, Travertine' },
      { label: 'Timeline', value: '18 Months Completion' }
    ]
  },
  {
    id: 'lake-como-retreat',
    index: '03',
    name: 'Lake Como Sanctuary',
    city: 'Bellagio, Italy',
    category: 'Private Architectural Estate',
    area: '1,200 m²',
    year: '2026',
    services: 'Ground-Up Architecture & Bespoke Interior Atelier',
    heroImage: './assets/images/villa-facade.jpg',
    galleryImages: [
      './assets/images/villa-facade.jpg',
      './assets/images/hero-art.jpg',
      './assets/images/marble-bath.jpg'
    ],
    narrative: 'A masterclass in alpine-waterfront architecture. Cantilevered travertine terraces suspend private living pavilions directly above Lake Como, integrated with mirror-finish reflection pools, bronze facade screening, and double-height minimalist glazing.',
    specs: [
      { label: 'Location', value: 'Bellagio, Lake Como' },
      { label: 'Scope', value: 'Turnkey Architectural Estate' },
      { label: 'Materials', value: 'Roman Travertine, Brushed Brass, Silk' },
      { label: 'Timeline', value: '22 Months Completion' }
    ]
  },
  {
    id: 'mayfair-atelier-home',
    index: '04',
    name: 'Mayfair Atelier Home',
    city: 'London, United Kingdom',
    category: 'Heritage Turnkey Residence',
    area: '620 m²',
    year: '2024',
    services: 'Grade II Listed Restoration & Bespoke Furnishing',
    heroImage: './assets/images/studio-dark.jpg',
    galleryImages: [
      './assets/images/studio-dark.jpg',
      './assets/images/bedroom-suite.jpg',
      './assets/images/marble-bath.jpg'
    ],
    narrative: 'An intimate Georgian townhome restored with moody modern opulence. Featuring deep espresso timber paneling, velvet lounge salons, architectural brass wall sconces, and curated museum-grade art procurement.',
    specs: [
      { label: 'Location', value: 'Mayfair, London' },
      { label: 'Scope', value: 'Heritage Turnkey Commission' },
      { label: 'Materials', value: 'Smoked Oak, Mohair Velvet, Murano Glass' },
      { label: 'Timeline', value: '16 Months Completion' }
    ]
  }
];

// Material Library Data for Atelier Explorer
const MATERIALS_DATA = {
  marble: {
    origin: 'APUAN ALPS • CARRARA, ITALY',
    title: 'Calacatta Viola Monolith',
    text: 'Characterized by deep cabernet wine veining across crystalline white breccia. Quarried exclusively in Tuscany, hand-honed by third-generation Italian stone carvers for Villente custom sinks and architectural fireplaces.',
    attrs: ['Honed Satin Finish', 'Book-Matched Grain', 'Grade A Certified']
  },
  boucle: {
    origin: 'BIELLA • PIEDMONT, ITALY',
    title: 'Cashmere Bouclé & Mohair',
    text: 'Spun from virgin mongolian cashmere and high-altitude kid mohair. Woven on heritage narrow looms in northern Italy for deep acoustic comfort, stain-resistant natural resilience, and supreme tactile warmth.',
    attrs: ['Hand-Woven Texture', 'Organic Acoustic Dampening', 'Natural Tone']
  },
  oak: {
    origin: 'ARDENNES FOREST • BELGIUM',
    title: 'Smoked Belgian Oak',
    text: 'Fumed with traditional vegetable tannins to produce deep, complex chocolate and charcoal hues through the core of the timber. Hand-waxed with organic beeswax for custom fluted architectural millwork.',
    attrs: ['Fumed Solid Core', 'Matte Wax Patina', 'FSC Sustainably Harvested']
  },
  brass: {
    origin: 'FLORENCE • TUSCANY, ITALY',
    title: 'Brushed Champagne Brass',
    text: 'Solid artisan brass alloy cold-formed and brushed in directional hairlines. Treated with a micro-thin unlacquered living patina that deepens with grace as light glides across handrails and architectural joinery.',
    attrs: ['Unlacquered Living Finish', 'Solid Extruded Alloy', 'Hand-Distressed Edge']
  },
  glass: {
    origin: 'MURANO • VENICE, ITALY',
    title: 'Murano Cast Glass',
    text: 'Hand-poured into open silica sand beds, cooling with natural air fissures and liquid bubbles that refract daylight like rippling water. Engineered for custom architectural room dividers and luminous sconces.',
    attrs: ['Sand-Cast Artisanal', 'Low-Iron Purity', 'Bespoke Annealed']
  }
};

class VillenteApplication {
  constructor() {
    this.cursor = document.getElementById('custom-cursor');
    this.follower = document.getElementById('cursor-follower');
    this.header = document.getElementById('main-header');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('section');
    this.heroTiltContainer = document.getElementById('hero-tilt-container');
    this.heroArtFrame = document.getElementById('hero-art-frame');
    this.mastheadLetters = document.querySelectorAll('.masthead-letter');
    this.swatchButtons = document.querySelectorAll('.swatch-btn');
    this.reelItems = document.querySelectorAll('.project-reel-item');
    this.reelTrack = document.getElementById('project-reel-track');
    this.reelPrevBtn = document.getElementById('reel-prev-btn');
    this.reelNextBtn = document.getElementById('reel-next-btn');
    this.reelDots = document.querySelectorAll('.reel-dot');
    this.nextProjectTrigger = document.getElementById('project-interactive-trigger');
    this.modal = document.getElementById('project-modal');
    this.modalBackdrop = document.getElementById('modal-backdrop');
    this.modalCloseBtn = document.getElementById('modal-close-btn');
    this.modalDynamicContent = document.getElementById('modal-dynamic-content');
    this.soundToggleBtn = document.getElementById('sound-toggle');
    this.soundStateText = document.getElementById('sound-state');
    this.inquireQuickBtn = document.getElementById('inquire-quick-btn');

    // Mobile & Tablet Navigation Drawer elements
    this.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    this.mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    this.mobileNavClose = document.getElementById('mobile-nav-close');
    this.mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
    this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    this.mobileSoundToggle = document.getElementById('mobile-sound-toggle');
    this.mobileSoundState = document.getElementById('mobile-sound-state');
    this.mobileInquireLink = document.getElementById('mobile-inquire-link');

    this.activeProjectIndex = 0;
    this.audioContext = null;
    this.isAudioPlaying = false;
    this.synthInterval = null;

    this.init();
  }

  init() {
    this.initCustomCursor();
    this.initHeaderScroll();
    this.initHeroParallax();
    this.initScrollSpy();
    this.initMultiAxisParallax();
    this.initMaterialExplorer();
    this.initProjectReel();
    this.initProjectReelControls();
    this.initMobileNav();
    this.initAudioSynthesizer();
    this.initModalEvents();
    this.initQuickInquire();
  }

  /* 1. Custom Magnetic Cursor */
  initCustomCursor() {
    if (!this.cursor || !this.follower) return;

    // Detect touch / coarse pointer devices
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) {
      this.cursor.style.display = 'none';
      this.follower.style.display = 'none';
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      this.cursor.style.left = `${mouseX}px`;
      this.cursor.style.top = `${mouseY}px`;
    }, { passive: true });

    // Smooth follower easing
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.16;
      followerY += (mouseY - followerY) * 0.16;

      this.follower.style.left = `${followerX}px`;
      this.follower.style.top = `${followerY}px`;

      requestAnimationFrame(animateFollower);
    };
    requestAnimationFrame(animateFollower);

    // Interactive element hover states
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, .project-reel-item, .next-project-trigger-box, .swatch-btn, .mobile-menu-toggle');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* 2. Header State on Scroll */
  initHeaderScroll() {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 60) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  /* 3. Hero 3D Parallax & Mouse Movement */
  initHeroParallax() {
    if (!this.heroTiltContainer || !this.heroArtFrame) return;

    // Only run on non-touch devices with fine pointers to ensure buttery smooth performance
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    window.addEventListener('mousemove', (e) => {
      const { innerWidth, innerHeight } = window;
      const xPercent = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const yPercent = (e.clientY / innerHeight - 0.5) * 2;

      // Subtle 3D tilt on artwork
      const tiltX = -yPercent * 7;
      const tiltY = xPercent * 7;
      const moveX = xPercent * 16;
      const moveY = yPercent * 16;

      this.heroArtFrame.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

      // Counter-shift typography letters for multi-plane depth
      this.mastheadLetters.forEach(letter => {
        const speed = parseFloat(letter.dataset.speed || '0.1');
        const letterMoveX = -xPercent * speed * 30;
        const letterMoveY = -yPercent * speed * 20;
        letter.style.transform = `translate3d(${letterMoveX}px, ${letterMoveY}px, 0)`;
      });
    }, { passive: true });
  }

  /* 4. Scroll Spy & Section Tracker */
  initScrollSpy() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          
          // Update desktop editorial navigation
          this.navLinks.forEach(link => {
            if (link.dataset.target === sectionId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });

          // Update mobile navigation drawer links
          if (this.mobileNavLinks) {
            this.mobileNavLinks.forEach(link => {
              if (link.dataset.target === sectionId) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }

          // Check if entering dark section (Studio)
          if (sectionId === 'studio') {
            document.body.classList.add('in-dark-section');
          } else {
            document.body.classList.remove('in-dark-section');
          }
        }
      });
    }, { threshold: 0.35 });

    this.sections.forEach(section => observer.observe(section));
  }

  /* 5. Multi-Axis Parallax for Floating Cards */
  initMultiAxisParallax() {
    const cards = document.querySelectorAll('.mosaic-card, .detail-grid-item');
    if (!cards.length) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      // Strictly run only on desktop displays (> 1024px)
      if (window.innerWidth <= 1024) {
        cards.forEach(card => {
          if (card.style.transform) card.style.transform = '';
        });
        return;
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const speed = parseFloat(card.dataset.speed || '0.1');
              const offset = (window.innerHeight - rect.top) * speed * 0.25;
              card.style.transform = `translate3d(0, ${offset}px, 0)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Ensure reset on viewport resize
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1024) {
        cards.forEach(card => {
          card.style.transform = '';
        });
      }
    });
  }

  /* 6. Studio Material Library Explorer */
  initMaterialExplorer() {
    this.swatchButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const materialKey = btn.dataset.material;
        const data = MATERIALS_DATA[materialKey];
        if (!data) return;

        // Active button toggle
        this.swatchButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Play gentle harmonic crystal chime if audio is enabled
        this.playHarmonicChime(materialKey === 'marble' ? 440 : materialKey === 'brass' ? 523.25 : 659.25);

        // Update detail card
        const originEl = document.getElementById('swatch-origin');
        const titleEl = document.getElementById('swatch-title');
        const textEl = document.getElementById('swatch-text');
        const attr1 = document.getElementById('swatch-attr-1');
        const attr2 = document.getElementById('swatch-attr-2');
        const attr3 = document.getElementById('swatch-attr-3');

        if (originEl) originEl.textContent = data.origin;
        if (titleEl) titleEl.textContent = data.title;
        if (textEl) textEl.textContent = data.text;
        if (attr1) attr1.textContent = data.attrs[0] || '';
        if (attr2) attr2.textContent = data.attrs[1] || '';
        if (attr3) attr3.textContent = data.attrs[2] || '';

        // Animate re-render
        const detailBox = document.getElementById('swatch-detail-box');
        if (detailBox) {
          detailBox.style.animation = 'none';
          void detailBox.offsetHeight; // force reflow
          detailBox.style.animation = 'fadeIn 0.35s ease-out';
        }
      });
    });
  }

  /* 7. Interactive Project Reel & Flow */
  initProjectReel() {
    this.reelItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.selectProject(index);
        this.openProjectModal(index);
      });
    });

    if (this.nextProjectTrigger) {
      this.nextProjectTrigger.addEventListener('click', () => {
        this.openProjectModal(this.activeProjectIndex);
      });
    }
  }

  selectProject(index) {
    this.activeProjectIndex = index;
    const project = PROJECTS_DATA[index];
    if (!project) return;

    this.reelItems.forEach((item, i) => {
      if (i === index) item.classList.add('active');
      else item.classList.remove('active');
    });

    this.updateActiveDot(index);

    const categoryEyebrow = document.getElementById('active-project-category');
    if (categoryEyebrow) {
      categoryEyebrow.textContent = `${project.name.toUpperCase()} • ${project.city.toUpperCase()}`;
    }
  }

  /* 7b. Interactive Project Reel Controls (Touch, Tablet & Desktop) */
  initProjectReelControls() {
    if (!this.reelTrack) return;

    const getScrollOffset = () => {
      const firstItem = this.reelTrack.querySelector('.project-reel-item');
      return firstItem ? firstItem.offsetWidth + 24 : 320;
    };

    if (this.reelPrevBtn) {
      this.reelPrevBtn.addEventListener('click', () => {
        this.reelTrack.scrollBy({ left: -getScrollOffset(), behavior: 'smooth' });
      });
    }

    if (this.reelNextBtn) {
      this.reelNextBtn.addEventListener('click', () => {
        this.reelTrack.scrollBy({ left: getScrollOffset(), behavior: 'smooth' });
      });
    }

    this.reelDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.selectProject(index);
        if (this.reelItems[index]) {
          this.reelItems[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        }
      });
    });

    // Sync active dot on touch / horizontal scroll
    let scrollDebounce;
    this.reelTrack.addEventListener('scroll', () => {
      clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(() => {
        const trackLeft = this.reelTrack.getBoundingClientRect().left;
        let closestIndex = 0;
        let minDistance = Infinity;

        this.reelItems.forEach((item, idx) => {
          const itemLeft = item.getBoundingClientRect().left;
          const dist = Math.abs(itemLeft - trackLeft);
          if (dist < minDistance) {
            minDistance = dist;
            closestIndex = idx;
          }
        });

        this.updateActiveDot(closestIndex);
        this.activeProjectIndex = closestIndex;
        const project = PROJECTS_DATA[closestIndex];
        const categoryEyebrow = document.getElementById('active-project-category');
        if (project && categoryEyebrow) {
          categoryEyebrow.textContent = `${project.name.toUpperCase()} • ${project.city.toUpperCase()}`;
        }
      }, 90);
    }, { passive: true });
  }

  updateActiveDot(index) {
    this.reelDots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
        dot.setAttribute('aria-selected', 'true');
      } else {
        dot.classList.remove('active');
        dot.setAttribute('aria-selected', 'false');
      }
    });
  }

  /* 7c. Mobile & Tablet Navigation Drawer System */
  initMobileNav() {
    if (!this.mobileMenuToggle || !this.mobileNavDrawer) return;

    const openDrawer = () => {
      this.mobileNavDrawer.classList.add('active');
      this.mobileNavDrawer.setAttribute('aria-hidden', 'false');
      this.mobileMenuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      this.mobileNavDrawer.classList.remove('active');
      this.mobileNavDrawer.setAttribute('aria-hidden', 'true');
      this.mobileMenuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    this.mobileMenuToggle.addEventListener('click', () => {
      const isOpen = this.mobileNavDrawer.classList.contains('active');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (this.mobileNavClose) {
      this.mobileNavClose.addEventListener('click', closeDrawer);
    }

    if (this.mobileNavBackdrop) {
      this.mobileNavBackdrop.addEventListener('click', closeDrawer);
    }

    this.mobileNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        closeDrawer();
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    if (this.mobileInquireLink) {
      this.mobileInquireLink.addEventListener('click', () => {
        closeDrawer();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileNavDrawer.classList.contains('active')) {
        closeDrawer();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && this.mobileNavDrawer.classList.contains('active')) {
        closeDrawer();
      }
    });
  }

  /* 8. Full-screen Modal Case Study Drawer */
  initModalEvents() {
    if (this.modalCloseBtn) {
      this.modalCloseBtn.addEventListener('click', () => this.closeProjectModal());
    }
    if (this.modalBackdrop) {
      this.modalBackdrop.addEventListener('click', () => this.closeProjectModal());
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.closeProjectModal();
      }
    });
  }

  openProjectModal(index) {
    const project = PROJECTS_DATA[index];
    if (!project || !this.modalDynamicContent) return;

    this.playHarmonicChime(587.33); // D5 chime

    const specsHtml = project.specs.map(s => `
      <div class="modal-spec-col">
        <span class="spec-k">${s.label}</span>
        <span class="spec-v">${s.value}</span>
      </div>
    `).join('');

    const galleryHtml = project.galleryImages.map(img => `
      <img src="${img}" alt="${project.name}" class="modal-gallery-img" loading="lazy">
    `).join('');

    this.modalDynamicContent.innerHTML = `
      <div class="modal-hero-header">
        <span class="modal-category">${project.category} &bull; ${project.year}</span>
        <h2 class="modal-title">${project.name}</h2>
        <div class="modal-specs-bar">
          ${specsHtml}
        </div>
      </div>
      
      <p class="modal-narrative-text">${project.narrative}</p>

      <div class="modal-main-gallery">
        ${galleryHtml}
      </div>

      <div style="margin-top: 3rem; text-align: center;">
        <button class="inquire-nav-btn" onclick="window.VillenteApp.closeProjectModal(); window.location.hash='#contact';">
          <span>INQUIRE ABOUT THIS COMMISSION</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    `;

    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* 9. Web Audio API Ambient Atmosphere Soundscape */
  initAudioSynthesizer() {
    if (this.soundToggleBtn) {
      this.soundToggleBtn.addEventListener('click', () => this.toggleAudio());
    }
    if (this.mobileSoundToggle) {
      this.mobileSoundToggle.addEventListener('click', () => this.toggleAudio());
    }
  }

  toggleAudio() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioCtx();
    }

    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }

    this.isAudioPlaying = !this.isAudioPlaying;

    if (this.isAudioPlaying) {
      if (this.soundToggleBtn) this.soundToggleBtn.classList.add('playing');
      if (this.soundStateText) this.soundStateText.textContent = 'SOUND ON';
      if (this.mobileSoundToggle) this.mobileSoundToggle.classList.add('playing');
      if (this.mobileSoundState) this.mobileSoundState.textContent = 'SOUND ON';
      this.startAmbientDrones();
      this.playHarmonicChime(523.25);
    } else {
      if (this.soundToggleBtn) this.soundToggleBtn.classList.remove('playing');
      if (this.soundStateText) this.soundStateText.textContent = 'MUTE';
      if (this.mobileSoundToggle) this.mobileSoundToggle.classList.remove('playing');
      if (this.mobileSoundState) this.mobileSoundState.textContent = 'MUTE';
      this.stopAmbientDrones();
    }
  }

  startAmbientDrones() {
    if (!this.audioContext) return;
    
    // Low, soothing, warm harmonic resonant drone (E2 and B2 frequencies)
    this.droneGain = this.audioContext.createGain();
    this.droneGain.gain.setValueAtTime(0.001, this.audioContext.currentTime);
    this.droneGain.gain.exponentialRampToValueAtTime(0.04, this.audioContext.currentTime + 3);

    // Filter for luxurious warm silk tone
    const filter = this.audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, this.audioContext.currentTime);

    const osc1 = this.audioContext.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(82.41, this.audioContext.currentTime); // E2

    const osc2 = this.audioContext.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(123.47, this.audioContext.currentTime); // B2

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(this.droneGain);
    this.droneGain.connect(this.audioContext.destination);

    osc1.start();
    osc2.start();

    this.activeOscillators = [osc1, osc2];
  }

  stopAmbientDrones() {
    if (this.droneGain && this.audioContext) {
      this.droneGain.gain.exponentialRampToValueAtTime(0.0001, this.audioContext.currentTime + 1.2);
      setTimeout(() => {
        if (this.activeOscillators) {
          this.activeOscillators.forEach(osc => {
            try { osc.stop(); } catch(e) {}
          });
          this.activeOscillators = [];
        }
      }, 1300);
    }
  }

  playHarmonicChime(freq = 523.25) {
    if (!this.audioContext || !this.isAudioPlaying) return;

    try {
      const now = this.audioContext.currentTime;
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      // Gentle subtle crystalline decay
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.start(now);
      osc.stop(now + 1.8);
    } catch (e) {
      // Audio context was blocked or not yet initiated
    }
  }

  /* 10. Quick Inquire Button */
  initQuickInquire() {
    if (this.inquireQuickBtn) {
      this.inquireQuickBtn.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  /* Form submission handler */
  handleFormSubmit(form) {
    const feedbackEl = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('submit-inquiry-btn');
    const name = document.getElementById('client-name').value;
    const location = document.getElementById('project-location').value;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>DISPATCHING TO CONCIERGE...</span>`;
    }

    setTimeout(() => {
      if (feedbackEl) {
        feedbackEl.className = 'form-feedback success';
        feedbackEl.innerHTML = `<strong>Commission Inquiry Received.</strong> Reference VL-${Math.floor(1000 + Math.random() * 9000)}. Our senior principal concierge will contact you discreetly within 24 hours.`;
      }
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>SUBMIT CONFIDENTIAL INQUIRY</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor">
            <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke-width="1.3" stroke-linecap="round"/>
          </svg>
        `;
      }
      this.playHarmonicChime(659.25);
    }, 1200);
  }
}

// Bootstrap Application
document.addEventListener('DOMContentLoaded', () => {
  window.VillenteApp = new VillenteApplication();
});
