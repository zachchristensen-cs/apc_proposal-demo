import APCLogo from '../shared/APCLogo';

export default function BackCover() {
  return (
    <div
      className="page-portrait"
      style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: '9pt',
        color: '#666666',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.8in',
      }}
    >
      {/* APC Logo large */}
      <div style={{ marginBottom: 20 }}>
        <APCLogo size="xl" />
      </div>

      {/* Tagline */}
      <div
        contentEditable
        suppressContentEditableWarning
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: '11pt',
          fontWeight: 600,
          color: '#919191',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 40,
        }}
      >
        Integrity | Quality | Efficiency | Savings
      </div>

      {/* Maroon divider */}
      <div style={{ width: 60, height: 3, backgroundColor: '#990000', marginBottom: 40 }} />

      {/* 2x2 photo grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
          width: '80%',
          maxWidth: 480,
          marginBottom: 40,
        }}
      >
        {['Project Photo 1', 'Project Photo 2', 'Project Photo 3', 'Project Photo 4'].map(
          (label, i) => (
            <div
              key={i}
              style={{
                aspectRatio: '4 / 3',
                backgroundColor: '#e8e8e8',
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span style={{ fontSize: '7.5pt', marginTop: 4 }}>{label}</span>
            </div>
          )
        )}
      </div>

      {/* Contact info */}
      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '11pt',
            fontWeight: 700,
            color: '#333',
            marginBottom: 4,
          }}
        >
          Jim Cecil
        </div>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ fontSize: '9pt', color: '#336699', marginBottom: 2 }}
        >
          jcecil@apconst.com
        </div>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ fontSize: '9pt', color: '#666', marginBottom: 12 }}
        >
          (203) 388-1110
        </div>
      </div>

      {/* Address line */}
      <div
        style={{
          width: 40,
          height: 1,
          backgroundColor: '#ddd',
          marginBottom: 12,
        }}
      />
      <div
        contentEditable
        suppressContentEditableWarning
        style={{
          fontSize: '8pt',
          color: '#919191',
          textAlign: 'center',
          lineHeight: 1.6,
        }}
      >
        707 Summer Street, Stamford, CT 06901 | apconst.com
      </div>
    </div>
  );
}
