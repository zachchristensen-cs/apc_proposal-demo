export default function APCLogo({ size = 'md', light = false }) {
  const sizes = {
    sm: { triangle: 20, text: 'text-[10px]', gap: 'gap-1' },
    md: { triangle: 32, text: 'text-sm', gap: 'gap-2' },
    lg: { triangle: 48, text: 'text-xl', gap: 'gap-3' },
    xl: { triangle: 64, text: 'text-2xl', gap: 'gap-4' },
  };
  const s = sizes[size] || sizes.md;
  const color = light ? '#ffffff' : '#990000';
  const textColor = light ? 'text-white' : 'text-[#990000]';

  return (
    <div className={`flex items-center ${s.gap}`}>
      <svg width={s.triangle} height={s.triangle} viewBox="0 0 40 40">
        <polygon points="20,2 38,38 2,38" fill={color} />
        <text x="20" y="32" textAnchor="middle" fill={light ? '#990000' : '#ffffff'} fontSize="16" fontFamily="Raleway, sans-serif" fontWeight="700">A</text>
      </svg>
      <div className={`${s.text} font-semibold ${textColor} leading-tight`} style={{ fontFamily: 'Raleway, sans-serif' }}>
        <div>A.P. Construction</div>
        <div className="font-normal opacity-80" style={{ fontSize: '0.7em' }}>Company</div>
      </div>
    </div>
  );
}
