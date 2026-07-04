// Floating WhatsApp contact button. On mobile it sits above the glassy bottom
// nav so the two never overlap.
const PHONE = '919956464994' // +91 99564 64994
const MESSAGE = encodeURIComponent("Hi SandeshUnik! I'd like to know more about your kidswear.")

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-[92px] z-[160] flex items-center gap-0 lg:bottom-6"
    >
      <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_28px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-105">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.44 9.44 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.46-9.44 2.53 0 4.9.99 6.68 2.78a9.38 9.38 0 0 1 2.77 6.67c0 5.21-4.24 9.45-9.46 9.45zm8.04-17.49A11.36 11.36 0 0 0 12.05.5C5.8.5.72 5.58.72 11.83c0 2 .53 3.95 1.53 5.68L.62 23.5l6.13-1.61a11.32 11.32 0 0 0 5.29 1.35h.01c6.24 0 11.32-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.01z" />
        </svg>
      </span>
    </a>
  )
}
