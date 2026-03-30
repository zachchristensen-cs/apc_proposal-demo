import { preconApproach } from '../../data/boilerplate';
import APCLogo from '../shared/APCLogo';

const sections = [
  { key: 'budgeting', title: 'Budgeting' },
  { key: 'costControl', title: 'Cost Control' },
  { key: 'valueManagement', title: 'Value Management' },
  { key: 'constructability', title: 'Constructability Reviews' },
  { key: 'siteLogistics', title: 'Site Logistics' },
  { key: 'longLeadItems', title: 'Long Lead Items' },
  { key: 'subcontractorQuals', title: 'Subcontractor Quals' },
  { key: 'bidPackaging', title: 'Bid Packaging' },
  { key: 'bidAndAward', title: 'Bid & Award' },
  { key: 'permits', title: 'Permits' },
  { key: 'mobilization', title: 'Mobilization' },
];

export default function PreconApproach({ data }) {
  const midpoint = Math.ceil(sections.length / 2);
  const leftSections = sections.slice(0, midpoint);
  const rightSections = sections.slice(midpoint);

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
          Preconstruction Approach
        </h2>
        <APCLogo size="sm" light />
      </div>

      {/* Two-column content */}
      <div style={{ padding: '0.35in 0.6in 0.3in 0.6in', display: 'flex', gap: 24 }}>
        {/* Left column */}
        <div style={{ flex: 1 }}>
          {leftSections.map((section) => (
            <div key={section.key} style={{ marginBottom: 10 }}>
              <h3
                contentEditable
                suppressContentEditableWarning
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '9pt',
                  fontWeight: 700,
                  color: '#990000',
                  marginBottom: 3,
                }}
              >
                {section.title}
              </h3>
              <div
                contentEditable
                suppressContentEditableWarning
                style={{ fontSize: '8pt', lineHeight: 1.5, textAlign: 'justify' }}
              >
                {preconApproach[section.key]}
              </div>
            </div>
          ))}

          {/* Procore graphic placeholder */}
          <div
            style={{
              marginTop: 12,
              width: '100%',
              height: 100,
              backgroundColor: '#e8e8e8',
              borderRadius: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span style={{ fontSize: '8pt', marginTop: 4 }}>Procore Platform Overview</span>
          </div>
        </div>

        {/* Right column */}
        <div style={{ flex: 1 }}>
          {rightSections.map((section) => (
            <div key={section.key} style={{ marginBottom: 10 }}>
              <h3
                contentEditable
                suppressContentEditableWarning
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '9pt',
                  fontWeight: 700,
                  color: '#990000',
                  marginBottom: 3,
                }}
              >
                {section.title}
              </h3>
              <div
                contentEditable
                suppressContentEditableWarning
                style={{ fontSize: '8pt', lineHeight: 1.5, textAlign: 'justify' }}
              >
                {preconApproach[section.key]}
              </div>
            </div>
          ))}

          {/* Bid Process graphic placeholder */}
          <div
            style={{
              marginTop: 12,
              width: '100%',
              height: 100,
              backgroundColor: '#e8e8e8',
              borderRadius: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span style={{ fontSize: '8pt', marginTop: 4 }}>Bid Process Flow</span>
          </div>
        </div>
      </div>
    </div>
  );
}
