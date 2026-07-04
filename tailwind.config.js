/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // SandeshUnik brand palette (ported from the original design)
        ink: '#2A2420',        // primary text / dark surfaces
        'ink-soft': '#3A322B',
        cocoa: '#241F1A',      // announcement bar
        cream: '#FBF8F3',      // page background wash
        sand: '#F7F1E9',
        'sand-2': '#EFE7DC',
        line: '#EBE3D7',       // hairline borders
        'line-2': '#F3EDE3',
        muted: '#8A7F73',      // secondary text
        'muted-2': '#B4A996',
        accent: {
          DEFAULT: '#C97B5A',  // terracotta accent
          soft: '#E0B089',
        },
        sage: '#8FA98B',
      },
      fontFamily: {
        serif: ['Marcellus', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1360px',
      },
      boxShadow: {
        card: '0 26px 48px -34px rgba(42,36,32,0.55)',
        soft: '0 20px 40px -22px rgba(43,36,32,0.4)',
        drawer: '-24px 0 64px rgba(36,31,26,0.2)',
        mega: '0 30px 60px -28px rgba(43,36,32,0.24)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22,1,0.36,1)',
        spring: 'cubic-bezier(0.34,1.56,0.64,1)',
      },
      keyframes: {
        slideIn: { from: { transform: 'translateX(100%)' }, to: { transform: 'translateX(0)' } },
        slideInLeft: { from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(0)' } },
        fade: { from: { opacity: '0' }, to: { opacity: '1' } },
        drop: { from: { opacity: '0', transform: 'translateY(-8px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        rise: { from: { opacity: '0', transform: 'translateY(26px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        megaCol: { from: { opacity: '0', transform: 'translateY(14px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        cartRise: { from: { opacity: '0', transform: 'translateX(24px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        pop: { '0%': { transform: 'scale(1)' }, '40%': { transform: 'scale(1.32)' }, '100%': { transform: 'scale(1)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        heroZoom: { from: { transform: 'scale(1.08)' }, to: { transform: 'scale(1)' } },
        spinSlow: { from: { transform: 'rotate(0)' }, to: { transform: 'rotate(360deg)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: {
        slideIn: 'slideIn 0.32s cubic-bezier(0.22,1,0.36,1)',
        'slideIn-left': 'slideInLeft 0.32s cubic-bezier(0.22,1,0.36,1)',
        fade: 'fade 0.25s ease',
        drop: 'drop 0.24s ease',
        rise: 'rise 1s cubic-bezier(0.22,1,0.36,1) both',
        megaCol: 'megaCol 0.5s cubic-bezier(0.22,1,0.36,1) both',
        cartRise: 'cartRise 0.4s cubic-bezier(0.22,1,0.36,1) both',
        pop: 'pop 0.42s cubic-bezier(0.34,1.56,0.64,1)',
        marquee: 'marquee 32s linear infinite',
        heroZoom: 'heroZoom 2.2s cubic-bezier(0.22,1,0.36,1) both',
        spinSlow: 'spinSlow 20s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
