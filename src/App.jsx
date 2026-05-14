import { useEffect, useState } from 'react'
import logoImage from './assets/images/alwaysfir logo.jpg'
import heroCoachImage from './assets/images/photo-output (4) (1).jpg'
import aboutImage from './assets/images/IMG_1692.jpg'
import transformationOne from './assets/images/before after.jpeg'
import transformationThree from './assets/images/IMG_0415.JPG'
import transformationFour from './assets/images/C2FA53C3-EFDD-4623-AB61-6E19BA443922 (2).PNG'
import galleryOne from './assets/images/648624B6-5595-4867-A166-F0E36611A401 (2).PNG'
import galleryTwo from './assets/images/IMG_0342.jpg'
import galleryThree from './assets/images/IMG_9364.JPG'
import galleryFour from './assets/images/IMG_1111.jpg'
import resultOne from './assets/images/IMG_0413.JPG'
import resultTwo from './assets/images/AFAAD35F-1891-4CC5-8B83-0635CF6E4337.JPG'
import resultThree from './assets/images/C4B4F7EF-502D-4D00-A265-308956F853B9.JPG'
import resultFour from './assets/images/FA4A2053-3277-480E-A481-8688A9ED3DDA.JPG'
import resultFive from './assets/images/IMG_6572.jpg'
import resultSix from './assets/images/IMG_8788.jpg'
import resultSeven from './assets/images/IMG_8927.PNG'
import resultEight from './assets/images/IMG_8931.JPG'
import resultNine from './assets/images/IMG_9291.jpg'
import resultTen from './assets/images/IMG_9292.jpg'
import resultEleven from './assets/images/IMG_9293.jpg'
import resultTwelve from './assets/images/IMG_9294.jpg'
import resultThirteen from './assets/images/IMG_9302.jpg'
import resultFourteen from './assets/images/IMG_9306.jpg'

const aboutVideo = '/assets/videos/about-video.mov'
const trainingVideos = [
  {
    title: 'Strength Coaching',
    text: 'Controlled, coached reps with clear intent and progression.',
    src: '/assets/videos/exercise-1.mov',
  },
  {
    title: 'Movement Quality',
    text: 'Technique work that builds safer, stronger patterns.',
    src: '/assets/videos/exercise-2.mov',
  },
  {
    title: 'Performance Work',
    text: 'Training sessions built around output, control, and recovery.',
    src: '/assets/videos/exercise-3.mov',
  },
  {
    title: 'Form Detail',
    text: 'One-on-one attention to the small details that drive results.',
    src: '/assets/videos/exercise-4.mov',
  },
]

export default function AlwaysFitPreview() {
  const [page, setPage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    ['home', 'Home'],
    ['about', 'About'],
    ['services', 'Services'],
    ['transformations', 'Transformations'],
    ['contact', 'Contact'],
  ]

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <AboutPage />
      case 'services':
        return <ServicesPage />
      case 'transformations':
        return <TransformationsPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage setPage={setPage} />
    }
  }

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [page])

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 md:gap-4 py-4 md:py-5 px-4 sm:px-6">
          <button
            onClick={() => setPage('home')}
            className="flex items-center gap-3 min-w-0"
          >
            <img
              src={logoImage}
              alt="Always Fit"
              className="h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover ring-1 ring-white/15"
            />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-widest leading-none whitespace-nowrap">
              ALWAYS <span className="text-red-500">FIT</span>
            </span>
          </button>

          <nav className="hidden lg:flex gap-6 xl:gap-8 text-sm uppercase tracking-wider text-white/80">
            {navItems.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setPage(key)}
                className={`transition hover:text-red-500 ${
                  page === key ? 'text-red-500' : ''
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage('contact')}
              className="hidden lg:inline-flex bg-red-600 hover:bg-red-700 transition px-4 xl:px-6 py-3 rounded-full text-sm font-semibold shadow-2xl shadow-red-900/40"
            >
              Book Free Assessment
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              <span className="relative flex h-4 w-5 items-center justify-center">
                <span
                  className={`absolute h-0.5 w-5 bg-current transition-transform duration-200 ${
                    mobileMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-5 bg-current transition-opacity duration-200 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-5 bg-current transition-transform duration-200 ${
                    mobileMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-nav-menu"
          className={`lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-md transition-all duration-300 ${
            mobileMenuOpen
              ? 'max-h-96 opacity-100 pointer-events-auto'
              : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-4">
            <nav className="flex flex-col gap-1 text-sm uppercase tracking-wider text-white/80">
              {navItems.map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setPage(key)}
                  className={`w-full rounded-2xl px-4 py-3 text-left transition ${
                    page === key
                      ? 'bg-white/10 text-red-500'
                      : 'hover:bg-white/5 hover:text-red-500'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setPage('contact')}
              className="inline-flex w-full items-center justify-center bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full text-sm font-semibold shadow-2xl shadow-red-900/40"
            >
              Book Free Assessment
            </button>
          </div>
        </div>
      </header>

      <main>{renderPage()}</main>

      <footer className="bg-[#050505] border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImage}
                alt="Always Fit"
                className="h-12 w-12 rounded-full object-cover ring-1 ring-white/15"
              />
              <h3 className="text-3xl font-black">
                ALWAYS <span className="text-red-500">FIT</span>
              </h3>
            </div>
            <p className="text-white/60 leading-relaxed">
              Premium hormone-aware performance coaching in Atlanta.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-red-500">
              Navigation
            </h4>
            <div className="flex flex-col gap-3 text-white/70">
              {navItems.map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setPage(key)}
                  className="text-left hover:text-red-500 transition"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-red-500">
              Contact
            </h4>
            <div className="space-y-3 text-white/70">
              <p>470-218-3360</p>
              <p>alwaysfitdaniel@gmail.com</p>
              <p>Chamblee / Brookhaven Atlanta GA</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-red-500">
              Hours
            </h4>
            <div className="space-y-3 text-white/70">
              <p>Mon – Sat: 5 AM – 9 PM</p>
              <p>Sunday: By appointment</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function HomePage({ setPage }) {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      tag: 'Performance Coaching',
      title: 'Train smarter. Optimize your physiology.',
      subtitle: 'Get the body that matches your goals.',
      text:
        'Performance coaching for women navigating PCOS, perimenopause, and menopause, for men battling stubborn body fat, low energy, and the changes that come with age, and for athletes who want to train with the science, not against it.',
      button: 'Book Your Free Assessment',
      action: 'contact',
      image: heroCoachImage,
      backgroundPosition: '54% top',
      portraitImage: heroCoachImage,
      portraitPosition: '54% top',
    },
    {
      tag: 'Hormonal Optimization',
      title: 'Built for Bodies That Have Changed',
      subtitle:
        'Hormone-aware training for PCOS, perimenopause & menopause.',
      text:
        "Insulin resistance, stubborn weight, and low energy can be frustrating, but your body is not broken, it just needs the right training. Programming designed by an ACE Hormonal Support Specialist.",
      button: 'Learn More',
      action: 'services',
      image: aboutImage,
      backgroundPosition: '72% center',
      portraitImage: aboutImage,
      portraitPosition: '84% center',
    },
    {
      tag: 'Performance Science',
      title: 'Train With the Science',
      subtitle: 'Strength, performance & body composition coaching.',
      text:
        'Periodized programming, biomarker tracking, and recovery science. For athletes and high performers who want measurable results, not guesswork.',
      button: 'See Transformations',
      action: 'transformations',
      image: galleryThree,
      backgroundPosition: '48% center',
      portraitImage: galleryThree,
      portraitPosition: '46% center',
    },
  ]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [slides.length])

  return (
    <>
      <section className="relative h-screen min-h-[680px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              activeSlide === index
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-0 scale-105 z-0'
            }`}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.88)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: slide.backgroundPosition,
              }}
            />

            <div className="relative z-20 h-full flex items-center px-6">
              <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_0.68fr] gap-10 items-center pt-24">
                <div className="max-w-4xl">
                  <p className="uppercase tracking-[6px] text-red-500 text-sm mb-6">
                    {slide.tag}
                  </p>

                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight mb-5 max-w-4xl">
                    {slide.title}
                  </h1>

                  <h2 className="text-lg md:text-xl text-white/80 font-medium mb-6 max-w-3xl">
                    {slide.subtitle}
                  </h2>

                  <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-3xl mb-8">
                    {slide.text}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-5">
                    <button
                      onClick={() => setPage(slide.action)}
                      className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-semibold text-lg transition shadow-2xl shadow-red-900/40"
                    >
                      {slide.button}
                    </button>

                    <button
                      onClick={() => setPage('about')}
                      className="border border-white/20 hover:border-red-500 hover:bg-red-500/10 px-8 py-4 rounded-full font-semibold text-lg transition"
                    >
                      About Daniel
                    </button>
                  </div>
                </div>

                <div className="hidden lg:block relative">
                  <div className="absolute -inset-5 rounded-[44px] bg-red-600/20 blur-3xl"></div>
                  <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-white/[0.04] shadow-2xl shadow-black/60">
                    <img
                      src={slide.portraitImage}
                      alt="Daniel Myrick, Always Fit performance coach"
                      className="h-[min(600px,calc(100vh-150px))] min-h-[500px] w-full object-cover"
                      style={{ objectPosition: slide.portraitPosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/10 bg-black/35 p-6 backdrop-blur-xl">
                      <p className="mb-2 text-xs uppercase tracking-[4px] text-red-500">
                        Coach Daniel
                      </p>
                      <h3 className="text-3xl font-black">Always Fit Atlanta</h3>
                      <p className="mt-3 text-white/65">
                        One-on-one performance and hormone-aware coaching.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`transition-all rounded-full ${
                activeSlide === index
                  ? 'w-14 h-3 bg-red-600'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-28 px-6 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[4px] text-red-500 mb-4 text-sm">
              Core Pillars
            </p>
            <h2 className="text-4xl md:text-5xl font-black">
              Science-Driven Coaching
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hormone-Aware Programming',
                description:
                  'Training is tailored to your hormones, life stage, and metabolism so progress feels consistent, measurable, and realistic for your body.',
                icon: '🧬',
              },
              {
                title: 'Strength & Conditioning Science',
                description:
                  'Programs follow proven strength and conditioning principles with clear progression, performance tracking, and recovery planning to build lasting results.',
                icon: '🏋️',
              },
              {
                title: 'Nutrition & Lifestyle Coaching',
                description:
                  'Nutrition, sleep, stress, and lifestyle coaching work with training so you build sustainable habits and maintain strong results year round.',
                icon: '🥗',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-white/8 to-white/[0.03] border border-white/10 rounded-[32px] p-10 md:p-12 hover:-translate-y-4 transition-all duration-500 hover:border-red-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-3xl text-red-500 mb-10 group-hover:bg-red-600 group-hover:text-white transition duration-500">
                    {item.icon}
                  </div>

                  <div className="mb-6">
                    <p className="uppercase tracking-[4px] text-red-500 text-xs mb-3">
                      Premium Coaching Pillar
                    </p>

                    <h3 className="min-h-[84px] text-3xl md:min-h-[116px] md:text-4xl font-black leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-white/65 text-lg leading-relaxed mb-10">
                    {item.description}
                  </p>

                  <button
                    onClick={() => setPage('services')}
                    className="flex items-center gap-3 text-white/80 hover:text-red-500 transition font-semibold tracking-wide"
                  >
                    Learn More
                    <span className="text-red-500 text-xl">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-600/10 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-transparent rounded-[40px] blur-2xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

            <div className="relative overflow-hidden rounded-[36px] border border-white/10">
              <img
                src={aboutImage}
                alt="Daniel Myrick"
                className="w-full h-[700px] object-cover group-hover:scale-105 transition duration-[2500ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl p-6">
                  <p className="uppercase tracking-[4px] text-red-500 text-xs mb-3">
                    Atlanta Performance Coaching
                  </p>

                  <h3 className="text-3xl font-black mb-3">
                    Always Fit
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    Personal coaching. In person. Science backed transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[5px] text-red-500 text-sm mb-5">
              About Daniel
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 max-w-3xl">
              Performance & Hormonal Optimization Coach
            </h2>

            <div className="w-24 h-1 bg-red-600 mb-10 rounded-full"></div>

            <div className="space-y-8 text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl">
              <p>
                I've spent the last decade studying how the body actually works, first as a strength coach, then through a biology degree, and now through clinical training in human physiology.
              </p>

              <p>
                What I've learned is this: most fitness advice ignores the systems that actually drive change. Hormones. Recovery. Stress. Insulin response. When you train with those systems instead of against them, everything changes.
              </p>

              <p>
                I built Always Fit to bring that level of coaching to Atlanta, with personal sessions in person, no app subscriptions, and no generic programs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 mt-12">
              <button
                onClick={() => setPage('about')}
                className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-semibold text-lg transition shadow-2xl shadow-red-900/40"
              >
                Learn More About Daniel
              </button>

              <button
                onClick={() => setPage('contact')}
                className="border border-white/15 hover:border-red-500 hover:bg-red-500/10 px-8 py-4 rounded-full font-semibold text-lg transition"
              >
                Book Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-[#070707] overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-red-600/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'PHYSIOLOGY',
                description:
                  'Programming built around your hormones, recovery, and metabolic individuality.',
                icon: '🧬',
              },
              {
                title: 'STRENGTH',
                description:
                  'Periodized training rooted in NSCA strength & conditioning science.',
                icon: '🏋️',
              },
              {
                title: 'OPTIMIZATION',
                description:
                  'Nutrition, sleep, stress, and biomarker tracking in one complete system.',
                icon: '🎯',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent rounded-[32px] p-10 hover:border-red-500 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-10">
                    <div className="w-16 h-16 rounded-2xl border border-red-500/20 bg-red-600/10 flex items-center justify-center text-3xl leading-none group-hover:bg-red-600 transition duration-500">
                      <span className="transition duration-500 group-hover:scale-110">{item.icon}</span>
                    </div>

                    <div className="h-[1px] flex-1 bg-gradient-to-r from-red-500/40 to-transparent ml-6"></div>
                  </div>

                  <h3 className="text-4xl font-black tracking-wide mb-6 leading-none">
                    {item.title}
                  </h3>

                  <p className="text-white/65 text-lg leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600/10 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <p className="uppercase tracking-[5px] text-red-500 text-sm mb-5">
              Who I Work With
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
              Three Audiences.
              <br />
              One Science-Based Approach.
            </h2>

            <p className="text-white/65 text-xl leading-relaxed">
              Train smarter, optimize physiology, and get measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Women Optimizing Physiology',
                subtitle:
                  'For women navigating PCOS, perimenopause, menopause, or post-pregnancy hormonal shifts.',
                bullets: [
      'Insulin resistance & stubborn weight gain',
      'Cycle aware or stage appropriate training',
      'Energy, sleep, and recovery optimization',
      'Body recomposition without crash dieting',
      'Strength training that respects your hormones',
                ],
                icon: '👩',
              },
              {
                title: 'Men Reclaiming Performance',
                subtitle:
                  'For men in their 30s, 40s, and 50s who feel their body changing, and want to fight back with science.',
                bullets: [
      'Stubborn belly fat & visceral fat reduction',
      'Low energy, poor sleep, declining drive',
      'Strength and muscle mass after 35',
      'Metabolic and hormonal optimization',
      'Training that actually fits a busy life',

                ],
                icon: '👨',
              },
              {
                title: 'Athletes & High Performers',
                subtitle:
                  'For athletes and serious lifters who want measurable progress, not guesswork.',
                bullets: [
      'Periodized strength & hypertrophy programming',
      'Performance metrics, lifts, HRV, body comp tracked',
      "Conditioning that doesn't destroy recovery",
      'Body composition without losing strength',
      'Training built around your sport or goal',
                ],
                icon: '🏃',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-10 hover:border-red-500 transition-all duration-500 hover:-translate-y-4"
              >
                <div className="absolute top-0 right-0 w-52 h-52 bg-red-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-3xl leading-none group-hover:bg-red-600 transition duration-500">
                      <span className="transition duration-500 group-hover:scale-110">{item.icon}</span>
                    </div>

                    <div className="h-[1px] flex-1 bg-gradient-to-r from-red-500/40 to-transparent ml-6"></div>
                  </div>

                  <h3 className="text-4xl font-black leading-tight mb-6 max-w-sm">
                    {item.title}
                  </h3>

                  <p className="text-white/65 text-lg leading-relaxed mb-10">
                    {item.subtitle}
                  </p>

                  <div className="space-y-5">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <div
                        key={bulletIndex}
                        className="flex items-start gap-4"
                      >
                        <div className="w-3 h-3 rounded-full bg-red-500 mt-2"></div>

                        <p className="text-white/70 leading-relaxed text-base">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-28 px-4 sm:px-6 bg-[#050505] overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-0 w-[400px] h-[400px] bg-red-600/10 blur-3xl rounded-full"></div>
          <div className="absolute right-1/4 bottom-0 w-[300px] h-[300px] bg-red-600/10 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
            {[
              {
                number: '8+',
                label: 'Years Coaching Experience',
              },
              {
                number: '500+',
                label: 'Client Transformations',
              },
              {
                number: '6',
                label: 'Active Certifications',
              },
              {
                number: '3',
                label: 'Languages Spoken',
                sub: 'English • Italian • Spanish',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative text-center border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent rounded-[24px] px-4 py-8 sm:px-5 sm:py-10 md:px-6 md:py-12 hover:border-red-500 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-red-600/15 blur-3xl rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl sm:text-4xl md:text-7xl font-black text-red-500 mb-3 sm:mb-4 md:mb-5 leading-none tracking-tight">
                    {item.number}
                  </h3>

                  <div className="w-12 sm:w-14 md:w-16 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-4 md:mb-6"></div>

                  <p className="text-white text-sm sm:text-base md:text-xl font-semibold leading-snug max-w-[220px] mx-auto">
                    {item.label}
                  </p>

                  {item.sub && (
                    <p className="text-white/50 text-xs sm:text-sm mt-3 md:mt-4 tracking-wide">
                      {item.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-32 px-4 sm:px-6 bg-black overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-20 left-10 w-[450px] h-[450px] bg-red-600/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-red-600/10 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-24">
            <p className="uppercase tracking-[5px] text-red-500 text-sm mb-5">
              Process
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5 md:mb-8">
              How We Get You There
            </h2>

            <p className="text-white/65 text-base sm:text-lg md:text-xl leading-relaxed">
              A structured science-based coaching system designed around your physiology, recovery, and measurable transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 relative">
            {[
              {
                step: '01',
                title: 'Assess',
                description:
                  'Free 30-minute consultation. Goals, lifestyle, history, blood work review. We map your starting point honestly.',
              },
              {
                step: '02',
                title: 'Design',
                description:
                  'Custom programming built around your physiology, schedule, and equipment access. Strength, conditioning, nutrition — fully integrated.',
              },
              {
                step: '03',
                title: 'Train',
                description:
                  'One-on-one, in person, every session coached. No phoning it in, no generic plans, no app coaching.',
              },
              {
                step: '04',
                title: 'Optimize',
                description:
                  'Monthly biomarker reviews, programming adjustments, and lifestyle audits. Your plan evolves as you do.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-5 sm:p-6 md:p-10 hover:border-red-500 transition-all duration-500 hover:-translate-y-4"
              >
                <div className="absolute top-0 right-0 w-52 h-52 bg-red-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5 md:mb-10">
                    <div className="text-red-500 text-3xl sm:text-4xl md:text-6xl font-black leading-none tracking-tight group-hover:scale-110 transition duration-500">
                      {item.step}
                    </div>

                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 text-base sm:text-lg group-hover:bg-red-600 group-hover:text-white transition duration-500">
                      →
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-4xl font-black mb-3 md:mb-6 leading-none">
                    {item.title}
                  </h3>

                  <div className="w-12 md:w-16 h-[2px] bg-gradient-to-r from-red-500 to-transparent mb-4 md:mb-8"></div>

                  <p className="text-white/65 text-xs sm:text-sm md:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-36 px-6 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-600/10 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <p className="uppercase tracking-[5px] text-red-500 text-sm mb-5">
              Transformations
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
              Real Transformations.
              <br />
              Real Science.
            </h2>

            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              Every transformation below is from a client trained one-on-one with hormone-aware, performance-driven programming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                title: 'Weight Loss + Body Recomposition',
                subtitle:
                  'Before/after side-profile transformation with hormone-aware training.',
                image: transformationOne,
              },
              {
                title: 'Significant Weight Loss Transformation',
                subtitle:
                  'One-on-one coaching focused on sustainable metabolic optimization.',
                image: galleryTwo,
              },
              {
                title: 'Body Recomposition + Slimming',
                subtitle:
                  'Strength-focused transformation with nutrition and recovery integration.',
                image: transformationThree,
              },
              {
                title: 'Core & Midsection Transformation',
                subtitle:
                  'Performance-driven programming built around physiology and consistency.',
                image: transformationFour,
              },
              {
                title: 'Strength-Led Progress',
                subtitle:
                  'A practical coaching plan built around consistency and stronger movement.',
                image: resultOne,
              },
              {
                title: 'Lifestyle Rebuild',
                subtitle:
                  'Sustainable training, nutrition, and recovery habits working together.',
                image: resultTwo,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-3 transition-all duration-700 hover:-translate-y-2 hover:border-red-500"
              >
                <div className="relative overflow-hidden rounded-[22px] bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[360px] w-full object-contain object-center transition duration-[2200ms] group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent"></div>

                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-xl">
                    Client Transformation
                  </div>
                </div>

                <div className="p-5">
                  <p className="mb-3 text-xs uppercase tracking-[4px] text-red-500">
                    Hormone-Aware Coaching
                  </p>

                  <h3 className="mb-3 text-2xl font-black leading-tight">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-white/65">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <section className="relative py-24 px-6 bg-black overflow-hidden border-t border-white/5 border-b border-white/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/3 top-0 w-[350px] h-[350px] bg-red-600/10 blur-3xl rounded-full"></div>
          <div className="absolute right-1/4 bottom-0 w-[300px] h-[300px] bg-red-600/10 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-red-500 text-sm mb-5">
              Credentials
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Certifications & Education
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {[
              'ACE Certified Personal Trainer',
              'NSCA Certified Strength & Conditioning Specialist',
              'ACE Hormonal Support Specialist',
              'ACE Fitness Nutrition Specialist',
              'ACE Health Coach',
              'B.S. Biology',
            ].map((credential, index) => (
              <div
                key={index}
                className="group relative overflow-hidden px-7 py-5 rounded-full border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent hover:border-red-500 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-600/10 blur-3xl rounded-full"></div>
                </div>

                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>

                  <p className="text-white/85 font-medium tracking-wide text-sm md:text-base whitespace-nowrap">
                    {credential}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-black overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-600/10 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[5px] text-red-500 text-sm mb-5">
              FAQ
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
              Frequently Asked Questions
            </h2>

            <p className="text-white/65 text-xl leading-relaxed max-w-3xl mx-auto">
              Science-based answers for clients navigating hormonal optimization, performance, and sustainable transformation.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'I have PCOS — how is your training different?',
                a: 'PCOS-aware training prioritizes insulin sensitivity, manages cortisol, and uses strength training as the primary tool for metabolic improvement. Programming includes lower-volume, higher-intensity strength work, careful conditioning dosing, and integrated nutrition strategies. As an ACE Hormonal Support Specialist, I build every program around the realities of your hormonal profile.',
              },
              {
                q: "I'm in perimenopause and gaining weight no matter what I do — can you help?",
                a: 'Yes. Perimenopause shifts your hormonal landscape dramatically — declining estrogen, changing insulin response, altered recovery. The fitness strategies that worked in your 30s often stop working. We rebuild your training around what your body needs now, not what worked a decade ago.',
              },
              {
                q: "I'm a man in my 40s and feel my body changing — what should I expect?",
                a: 'Declining testosterone, slower recovery, and increased visceral fat are all real — and all addressable. Smart strength training, proper recovery, sleep optimization, and nutrition strategy can dramatically shift the trajectory. We\'ll measure where you are, build a plan, and track results monthly.',
              },
              {
                q: 'Do I need to get blood work done before we start?',
                a: 'Not required, but encouraged. If you have recent labs (hormone panel, metabolic markers, lipids), bring them — we\'ll integrate them into your programming.',
              },
              {
                q: 'What if I have an injury or medical condition?',
                a: 'My background includes clinical physiology training, so I work confidently with clients managing common conditions. For complex issues, we coordinate with your physician.',
              },
              {
                q: 'How long until I see results?',
                a: 'Most clients see noticeable changes in energy and strength within 3-4 weeks, and visible body composition changes within 8-12 weeks. Hormonal recalibration and sustainable transformation typically take 4-6 months of consistent training.',
              },
              {
                q: "What's included in the free assessment?",
                a: 'A 30-minute conversation about your goals, history, lifestyle, and physiology. You leave with a clear understanding of how I\'d program for you and what timeline is realistic. No sales pressure.',
              },
              {
                q: 'Cancellation policy?',
                a: '24-hour notice for session changes. Membership cancellations require 30 days written notice.',
              },
            ].map((item, index) => (
              <div
                key={index}
                tabIndex={0}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 md:p-8 hover:border-red-500 focus-within:border-red-500 transition-all duration-500 outline-none"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 font-black text-xl shrink-0 group-hover:bg-red-600 group-hover:text-white transition duration-500">
                      ?
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-black leading-tight max-w-4xl">
                        {item.q}
                      </h3>

                      <div className="w-16 h-[2px] bg-gradient-to-r from-red-500 to-transparent mt-5 mb-0 transition-all duration-500 group-hover:mb-5 group-focus-within:mb-5"></div>

                      <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                        <p className="overflow-hidden text-white/65 text-base md:text-lg leading-relaxed max-w-4xl opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center mt-20">
            <button
              onClick={() => setPage('transformations')}
              className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-full font-semibold text-lg transition shadow-2xl shadow-red-900/40"
            >
              View More Transformations
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <section className="relative pt-24 lg:pt-28 xl:pt-32 pb-16 lg:pb-20 xl:pb-24 px-4 sm:px-6 bg-black min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-600/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8 items-start mb-8 lg:mb-10">
          <div className="relative group self-center w-full max-w-[520px] lg:max-w-[480px] justify-self-center lg:justify-self-start">
            <div className="absolute -inset-2 lg:-inset-3 bg-gradient-to-r from-red-600/20 to-transparent rounded-[32px] lg:rounded-[40px] blur-2xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

            <div className="relative overflow-hidden rounded-[28px] lg:rounded-[36px] border border-white/10 bg-black aspect-[5/6] lg:aspect-[5/6]">
              <video
                src={aboutVideo}
                poster={aboutImage}
                className="block h-full w-full object-cover object-[center_18%] bg-black"
                controls
                playsInline
                preload="auto"
                aria-label="Daniel Myrick explaining Always Fit coaching"
              />
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[5px] text-red-500 text-xs lg:text-sm mb-2 lg:mb-3">
              About Daniel
            </p>

            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-black leading-tight mb-2 lg:mb-3 max-w-4xl">
              Performance & Hormonal Optimization Coach
            </h1>

            <h2 className="text-sm lg:text-base xl:text-lg text-white/70 font-medium mb-3 lg:mb-4">
              Atlanta, GA
            </h2>

            <div className="w-16 lg:w-20 h-1 bg-red-600 rounded-full mb-3 lg:mb-4"></div>

            <div className="space-y-2 lg:space-y-3 text-white/70 text-sm lg:text-base leading-relaxed max-w-3xl">
              <p>
                I've been coaching for over 8 years, but my real obsession is physiology, how the body actually works, what drives change, and why most fitness advice fails the people who need it most.
              </p>

              <p>
                I started Always Fit after watching too many clients spin their wheels on programs that ignored the variables that actually matter: hormones, recovery, stress, sleep, and metabolic individuality. Generic fitness plans don't fail because people lack discipline.
              </p>

              <p>
                My approach is different. I program for your physiology, your hormonal status, your life stage, your training history, and your recovery capacity. Whether you're a woman navigating PCOS or perimenopause, a man fighting back against age related decline, or an athlete chasing measurable performance, the science adapts to you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-4 lg:mt-5">
              <button className="bg-red-600 hover:bg-red-700 px-7 lg:px-8 py-3 rounded-full font-semibold text-sm lg:text-base transition shadow-2xl shadow-red-900/40">
                Book Free Assessment
              </button>

              <button className="border border-white/15 hover:border-red-500 hover:bg-red-500/10 px-7 lg:px-8 py-3 rounded-full font-semibold text-sm lg:text-base transition">
                View Transformations
              </button>
            </div>
          </div>
        </div>

        <section className="relative py-20 border-t border-white/10">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-red-500 text-sm mb-5">
              Credentials
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Certifications & Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'ACE Certified Personal Trainer',
              'NSCA Certified Strength & Conditioning Specialist',
              'ACE Hormonal Support Specialist',
              'ACE Fitness Nutrition Specialist',
              'ACE Health Coach',
              'B.S. Biology',
            ].map((credential, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 hover:border-red-500 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                <div className="relative z-10 flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 text-xl font-black group-hover:bg-red-600 group-hover:text-white transition duration-500">
                    ✓
                  </div>

                  <div>
                    <p className="uppercase tracking-[3px] text-red-500 text-xs mb-2">
                      Certified
                    </p>

                    <h3 className="text-white text-lg font-semibold leading-snug">
                      {credential}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

function ServicesPage() {
  return (
    <section className="relative pt-32 lg:pt-36 pb-20 lg:pb-24 px-4 sm:px-6 bg-[#050505] min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-600/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-16 lg:mb-20">
          <p className="uppercase tracking-[5px] text-red-500 mb-5 text-sm">
            Coaching Tracks
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 lg:mb-8">
            Premium One-on-One
            <br />
            Performance Coaching
          </h1>

          <p className="text-white/65 text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            All training is one-on-one, in-person, at our private studio in Chamblee / Brookhaven Metro ATL Area. Pricing shared during your free assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-6 xl:gap-7 mb-20 lg:mb-24">
          {[
            {
              tier: 'TIER 1',
              title: 'Performance Foundations',
              subtitle: '1 session per week',
              description:
                'For clients building habits, learning fundamentals, and creating consistency with structured coaching.',
              features: [
                'Custom programming',
                'One 60-minute coached session per week',
                'Form coaching and progression tracking',
              ],
              highlight: false,
            },
            {
              tier: 'TIER 2',
              title: 'Performance Standard',
              subtitle: '2 sessions per week',
              description:
                'The ideal track for hormonal optimization, body composition, and reliable strength progress.',
              features: [
                'Everything in Foundations',
                'Two 60-minute coached sessions per week',
                'Nutrition guidance',
              ],
              highlight: true,
              badge: 'Most Popular',
            },
            {
              tier: 'TIER 3',
              title: 'Performance Elite',
              subtitle: '3 sessions per week + nutrition review',
              description:
                'For clients chasing aggressive results with high accountability and complete coaching support.',
              features: [
                'Everything in Standard',
                'Three 60-minute coached sessions per week',
                'Custom nutrition programming',
              ],
              highlight: false,
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[28px] lg:rounded-[32px] p-5 sm:p-6 lg:p-6 xl:p-7 border transition-all duration-700 hover:-translate-y-4 h-full flex flex-col ${
                plan.highlight
                  ? 'border-red-500 bg-gradient-to-b from-red-600/15 to-black shadow-2xl shadow-red-900/20'
                  : 'border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent hover:border-red-500'
              }`}
            >
              <div className="absolute top-0 right-0 w-60 h-60 bg-red-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

              {plan.badge && (
                <div className="absolute top-6 right-6 backdrop-blur-xl bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-2xl shadow-red-900/40 z-20">
                  {plan.badge}
                </div>
              )}

              <div className="relative z-10 h-full flex flex-col">
                <p className="uppercase tracking-[4px] text-red-500 text-xs mb-4">
                  {plan.tier}
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[2.1rem] font-black leading-tight mb-2 md:mb-3">
                  {plan.title}
                </h2>

                <p className="text-white text-sm sm:text-base font-semibold mb-3 md:mb-4">
                  {plan.subtitle}
                </p>

                <div className="w-12 md:w-16 h-[2px] bg-gradient-to-r from-red-500 to-transparent mb-3 md:mb-4"></div>

                <p className="text-white/65 text-sm leading-relaxed mb-4 md:mb-5">
                  {plan.description}
                </p>

                <div className="space-y-2 md:space-y-3 mb-5 md:mb-7 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-2.5 md:gap-3"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500 mt-1.5"></div>

                      <p className="text-white/75 leading-relaxed text-sm">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-500 mt-auto ${
                  plan.highlight
                    ? 'bg-red-600 hover:bg-red-700 shadow-2xl shadow-red-900/40'
                    : 'border border-white/15 hover:border-red-500 hover:bg-red-500/10'
                }`}>
                  Book Assessment
                </button>
              </div>
            </div>
          ))}
        </div>

        <section className="relative mb-20 lg:mb-24 overflow-hidden rounded-[32px] lg:rounded-[40px] border border-white/10 bg-black/40 p-4 sm:p-6 md:p-8">
          <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-3xl"></div>

          <div className="relative z-10 mb-8 lg:mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm uppercase tracking-[5px] text-red-500">
                Training In Action
              </p>

              <h2 className="mb-4 text-3xl font-black leading-tight md:text-5xl">
                See How The Work Looks
              </h2>

              <p className="text-base leading-relaxed text-white/65 md:text-lg lg:text-xl">
                Real coaching clips from the floor: strength, movement quality, and focused form work inside the Always Fit training system.
              </p>
            </div>

            <button className="w-full rounded-full bg-red-600 px-8 py-3.5 text-sm sm:text-base font-semibold shadow-2xl shadow-red-900/40 transition hover:bg-red-700 sm:w-auto">
              Book Assessment
            </button>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {trainingVideos.map((video) => (
              <div
                key={video.title}
                className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-red-500 h-full flex flex-col"
              >
                <div className="relative bg-black">
                  <video
                    src={video.src}
                    className="block h-[260px] sm:h-[300px] md:h-[320px] lg:h-[340px] w-full object-contain"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={`${video.title} training video`}
                  />
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <p className="mb-3 text-xs uppercase tracking-[4px] text-red-500">
                    Coaching Clip
                  </p>

                  <h3 className="mb-2 text-xl sm:text-2xl font-black leading-tight md:text-3xl">
                    {video.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-white/65">
                    {video.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative py-16 px-8 rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-red-600/10 blur-3xl rounded-full"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-3xl">
              <p className="uppercase tracking-[5px] text-red-500 text-sm mb-5">
                Optional Add-On
              </p>

              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Couples / Partner Training
              </h2>

              <p className="text-white/65 text-xl leading-relaxed">
                Train with a spouse or training partner at a discounted per-person rate while still receiving individualized coaching and programming.
              </p>
            </div>

            <button className="bg-red-600 hover:bg-red-700 transition px-10 py-5 rounded-full text-lg font-semibold shadow-2xl shadow-red-900/40 whitespace-nowrap">
              Ask About Partner Training
            </button>
          </div>
        </section>

        <div className="text-center">
          <p className="uppercase tracking-[5px] text-red-500 text-sm mb-6">
            Start Your Transformation
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 max-w-5xl mx-auto">
            Book Your Free
            <br />
            30-Minute Assessment
          </h2>

          <p className="text-white/65 text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            Walk away with clarity on your goals, your physiology, and the most effective strategy for your transformation.
          </p>

          <button className="bg-red-600 hover:bg-red-700 px-12 py-5 rounded-full text-lg font-semibold transition shadow-2xl shadow-red-900/40">
            Book Free Assessment
          </button>
        </div>
      </div>
    </section>
  )
}

function TransformationsPage() {
  const results = [
    {
      image: transformationOne,
      title: 'Body Recomposition',
      text: 'Focused strength, nutrition, and consistency coaching.',
      featured: true,
    },
    {
      image: galleryTwo,
      title: 'Sustainable Fat Loss',
      text: 'Progress built around physiology, recovery, and habits.',
    },
    {
      image: transformationThree,
      title: 'Strength Transformation',
      text: 'A structured path from starting point to stronger body.',
    },
    {
      image: transformationFour,
      title: 'Performance Reset',
      text: 'Training that supports real life and measurable results.',
      featured: true,
    },
    {
      image: resultOne,
      title: 'Consistency Built Results',
      text: 'Coaching designed around long-term adherence and measurable change.',
    },
    {
      image: galleryOne,
      title: 'Lean Muscle Focus',
      text: 'Progressive programming with recovery and nutrition alignment.',
    },
    {
      image: resultTwo,
      title: 'Conditioning Progress',
      text: 'A practical training system for strength, energy, and confidence.',
    },
    {
      image: resultThree,
      title: 'Lifestyle Rebuild',
      text: 'Sustainable work across training, food, sleep, and stress.',
    },
    {
      image: resultFour,
      title: 'Strength-Led Change',
      text: 'Body composition work supported by smart strength progression.',
    },
    {
      image: resultFive,
      title: 'Metabolic Momentum',
      text: 'Hormone-aware structure for steady and realistic progress.',
    },
    {
      image: galleryFour,
      title: 'Performance Detail',
      text: 'A training snapshot from the work behind the result.',
    },
    {
      image: resultSix,
      title: 'Athletic Detail',
      text: 'Performance habits translated into visible composition change.',
    },
    {
      image: resultSeven,
      title: 'Client Milestone',
      text: 'One-on-one accountability with a clear training target.',
      featured: true,
    },
    {
      image: resultEight,
      title: 'Confidence Phase',
      text: 'A focused block built around strength and consistency.',
    },
    {
      image: resultNine,
      title: 'Training Foundation',
      text: 'Better movement, better recovery, better output.',
    },
    {
      image: resultTen,
      title: 'Body Composition',
      text: 'Structured coaching for measurable visual change.',
    },
    {
      image: resultEleven,
      title: 'Progress Check-In',
      text: 'Tracking what matters and adjusting the plan as the body adapts.',
    },
    {
      image: resultTwelve,
      title: 'Rebuild Phase',
      text: 'A sustainable approach to strength and physique goals.',
    },
    {
      image: resultThirteen,
      title: 'Result Snapshot',
      text: 'Clear progress from consistent, individualized coaching.',
    },
    {
      image: resultFourteen,
      title: 'Always Fit Result',
      text: 'Real-world coaching built for repeatable progress.',
    },
  ]

  return (
    <section className="relative pt-28 lg:pt-32 pb-20 lg:pb-24 px-4 sm:px-6 bg-black min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-red-600/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-red-600/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <p className="uppercase tracking-[4px] text-red-500 mb-4 text-sm">
            Transformations
          </p>

          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 md:mb-6">
            Real Results. Real Science.
          </h1>

          <p className="text-white/65 text-base md:text-lg lg:text-xl leading-relaxed">
            A broader look at client progress, training milestones, and body-composition work shaped by individualized coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {results.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[24px] lg:rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-2.5 sm:p-3 transition-all duration-700 hover:-translate-y-2 hover:border-red-500 h-full flex flex-col"
            >
              <div className="relative overflow-hidden rounded-[18px] lg:rounded-[22px] bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`h-[260px] sm:h-[300px] md:h-[320px] w-full object-contain object-center transition duration-[2200ms] group-hover:scale-[1.02] ${
                    item.featured ? 'lg:h-[360px]' : 'lg:h-[330px]'
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent"></div>

                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-xl">
                  Client Result
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <p className="mb-3 text-xs uppercase tracking-[4px] text-red-500">
                  Hormone-Aware Coaching
                </p>

                <h3 className="mb-2 text-xl sm:text-2xl font-black leading-tight">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-sm sm:text-base text-white/65">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="relative pt-40 pb-32 px-6 bg-[#050505] min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-600/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-24">
          <p className="uppercase tracking-[5px] text-red-500 text-sm mb-5">
            Contact & Booking
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8">
            Book Your Free Assessment
          </h1>

          <p className="text-white/65 text-xl leading-relaxed max-w-4xl mx-auto">
            30 minutes. No obligation. Walk away with clarity on your goals, your physiology, and your path forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start mb-24">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-10 md:p-14">
            <div className="absolute top-0 right-0 w-72 h-72 bg-red-600/10 blur-3xl"></div>

            <div className="relative z-10">
              <div className="mb-12">
                <p className="uppercase tracking-[4px] text-red-500 text-xs mb-4">
                  Free Consultation Form
                </p>

                <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                  Start Your
                  <br />
                  Transformation
                </h2>

                <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
                  Fill out the form below and we'll reach out to schedule your complimentary 30-minute assessment.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    placeholder="Full Name"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500 transition"
                  />

                  <input
                    placeholder="Email Address"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500 transition"
                  />
                </div>

                <input
                  placeholder="Phone Number"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500 transition"
                />

                <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-red-500 transition">
                  <option className="bg-black">Which describes you best?</option>
                  <option className="bg-black">
                    Woman managing PCOS / perimenopause / menopause
                  </option>
                  <option className="bg-black">
                    Man 35+ wanting performance & body composition
                  </option>
                  <option className="bg-black">
                    Athlete / serious lifter
                  </option>
                  <option className="bg-black">Other</option>
                </select>

                <textarea
                  rows="5"
                  placeholder="What's your #1 goal?"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500 transition resize-none"
                ></textarea>

                <input
                  placeholder="Best time to reach you"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/40 focus:outline-none focus:border-red-500 transition"
                />

                <button className="w-full bg-red-600 hover:bg-red-700 transition-all duration-500 py-5 rounded-full text-lg font-semibold shadow-2xl shadow-red-900/40 hover:shadow-red-900/60">
                  Book Free Assessment
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-10">
              <div className="absolute top-0 right-0 w-60 h-60 bg-red-600/10 blur-3xl"></div>

              <div className="relative z-10">
                <p className="uppercase tracking-[4px] text-red-500 text-xs mb-5">
                  Contact Information
                </p>

                <h2 className="text-4xl font-black mb-10 leading-tight">
                  Reach Out Directly
                </h2>

                <div className="space-y-8">
                  <div>
                    <p className="uppercase tracking-[3px] text-red-500 text-xs mb-3">
                      Phone
                    </p>
                    <p className="text-white/80 text-xl font-medium">
                      470-218-3360
                    </p>
                  </div>

                  <div>
                    <p className="uppercase tracking-[3px] text-red-500 text-xs mb-3">
                      Email
                    </p>
                    <p className="text-white/80 text-xl font-medium break-all">
                      alwaysfitdaniel@gmail.com
                    </p>
                  </div>

                  <div>
                    <p className="uppercase tracking-[3px] text-red-500 text-xs mb-3">
                      Studio Location
                    </p>
                    <p className="text-white/70 text-lg leading-relaxed">
                      Private Studio — Chamblee / Brookhaven,
                      <br />
                      Atlanta GA Metro ATL Area
                    </p>
                  </div>

                  <div>
                    <p className="uppercase tracking-[3px] text-red-500 text-xs mb-3">
                      Hours
                    </p>
                    <p className="text-white/70 text-lg leading-relaxed">
                      Mon – Sat: 5 AM – 9 PM
                      <br />
                      Sunday: By appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-black h-[420px] group">
              <iframe
                title="Always Fit Studio Location"
                src="https://maps.google.com/maps?q=Brookhaven%20Atlanta&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition duration-700"
                loading="lazy"
              ></iframe>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl p-5">
                  <p className="uppercase tracking-[4px] text-red-500 text-xs mb-3">
                    Metro Atlanta Studio
                  </p>

                  <h3 className="text-2xl font-black mb-2">
                    Chamblee / Brookhaven Area
                  </h3>

                  <p className="text-white/65 leading-relaxed text-sm">
                    Exact address shared after consultation booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
