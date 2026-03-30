export default function SectionDivider({ sectionNumber, sectionTitle }) {
  return (
    <div
      className="page-portrait"
      style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: '9pt',
        background: 'linear-gradient(160deg, #2a2a2a 0%, #3d3d3d 40%, #4a4a4a 70%, #555555 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle geometric overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Bottom band */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '25%',
          backgroundColor: 'rgba(255,255,255,0.08)',
          borderTop: '1px solid rgba(255,255,255,0.12)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 0.8in',
        }}
      >
        <div
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '12pt',
            fontWeight: 700,
            color: '#990000',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 6,
          }}
        >
          SECTION {sectionNumber || '01'}
        </div>
        <h2
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '28pt',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '0.02em',
            margin: 0,
          }}
        >
          {sectionTitle || 'Section Title'}
        </h2>
      </div>

      {/* Small APC branding top right */}
      <div
        style={{
          position: 'absolute',
          top: '0.5in',
          right: '0.6in',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 40 40">
          <polygon points="20,2 38,38 2,38" fill="rgba(255,255,255,0.15)" />
          <text x="20" y="32" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="16" fontFamily="Raleway, sans-serif" fontWeight="700">A</text>
        </svg>
      </div>
    </div>
  );
}
