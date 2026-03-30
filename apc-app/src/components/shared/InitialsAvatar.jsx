export default function InitialsAvatar({ initials, size = 40, className = '', phase = 'both' }) {
  const borderColor = phase === 'preconstruction' ? '#990000' : phase === 'construction' ? '#336699' : '#990000';
  return (
    <div
      className={`rounded-full flex items-center justify-center text-white font-semibold shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: '#990000',
        fontSize: size * 0.38,
        fontFamily: 'Raleway, sans-serif',
        border: `2px solid ${borderColor}`,
      }}
    >
      {initials}
    </div>
  );
}
