import { qaqcContent } from '../../data/boilerplate';
import APCLogo from '../shared/APCLogo';

const responsibilityBlocks = [
  {
    key: 'management',
    title: 'Management Oversight',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#990000" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    bgColor: '#fdf2f2',
    borderColor: '#990000',
  },
  {
    key: 'fieldEnforcement',
    title: 'Field Enforcement',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#336699" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    bgColor: '#f0f5fa',
    borderColor: '#336699',
  },
  {
    key: 'adminTracking',
    title: 'Admin Tracking',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    bgColor: '#f5f5f5',
    borderColor: '#666666',
  },
];

const phases = [
  { key: 'preconstruction', title: 'Preconstruction' },
  { key: 'construction', title: 'Construction' },
  { key: 'closeout', title: 'Closeout' },
];

export default function QAQC({ data }) {
  return (
    <div className="page-portrait" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '9pt', color: '#666666' }}>
      {/* Header bar */}
      <div
        style={{
          backgroundColor: '#990000',
          padding: '10px 0.6in',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '14pt',
            fontWeight: 700,
            color: '#ffffff',
            margin: 0,
            letterSpacing: '0.03em',
          }}
        >
          Quality Assurance / Quality Control
        </h2>
        <APCLogo size="sm" light />
      </div>

      <div style={{ padding: '0.3in 0.6in 0.3in 0.6in' }}>
        {/* Intro paragraph */}
        <div
          contentEditable
          suppressContentEditableWarning
          style={{
            fontSize: '8.5pt',
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: '#666',
            marginBottom: 16,
            textAlign: 'justify',
          }}
        >
          {qaqcContent.intro}
        </div>

        {/* Responsibility cards */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
          {responsibilityBlocks.map((block) => (
            <div
              key={block.key}
              style={{
                flex: 1,
                backgroundColor: block.bgColor,
                borderRadius: 6,
                padding: '12px 12px 10px 12px',
                borderLeft: `3px solid ${block.borderColor}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                {block.icon}
                <h3
                  contentEditable
                  suppressContentEditableWarning
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: '8.5pt',
                    fontWeight: 700,
                    color: '#333',
                    margin: 0,
                  }}
                >
                  {block.title}
                </h3>
              </div>
              <div
                contentEditable
                suppressContentEditableWarning
                style={{ fontSize: '7.5pt', lineHeight: 1.5, color: '#666' }}
              >
                {qaqcContent[block.key]}
              </div>
            </div>
          ))}
        </div>

        {/* Phase lists */}
        <div style={{ display: 'flex', gap: 20, marginBottom: 18 }}>
          {phases.map((phase) => (
            <div key={phase.key} style={{ flex: 1 }}>
              <h3
                contentEditable
                suppressContentEditableWarning
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '9pt',
                  fontWeight: 700,
                  color: '#990000',
                  marginBottom: 6,
                  paddingBottom: 4,
                  borderBottom: '2px solid #990000',
                }}
              >
                {phase.title}
              </h3>
              <div style={{ paddingLeft: 2 }}>
                {qaqcContent[phase.key].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: 6,
                      marginBottom: 5,
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '7.5pt',
                        fontWeight: 700,
                        color: '#990000',
                        minWidth: 14,
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      style={{ fontSize: '7.5pt', lineHeight: 1.5, color: '#666' }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Flowchart placeholder */}
        <div
          style={{
            width: '100%',
            height: 110,
            backgroundColor: '#e8e8e8',
            borderRadius: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span style={{ fontSize: '8pt', marginTop: 4 }}>Deficiency Resolution Process</span>
        </div>
      </div>
    </div>
  );
}
