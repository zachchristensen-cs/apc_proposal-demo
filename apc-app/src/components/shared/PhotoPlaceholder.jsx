export default function PhotoPlaceholder({ width = '100%', height = 200, label = '', className = '' }) {
  return (
    <div
      className={`photo-placeholder ${className}`}
      style={{ width, height, borderRadius: 4 }}
    >
      <div className="relative z-10 flex flex-col items-center gap-1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        {label && <span className="text-[10px]">{label}</span>}
      </div>
    </div>
  );
}
