import { corporateSummary, qualifications } from '../../data/boilerplate';
import APCLogo from '../shared/APCLogo';

export default function CompanyOverview({ data }) {
  const { projectName, projectLocation } = data;
  const cityName = projectLocation ? projectLocation.split(',')[0].trim() : '[City/Town Name]';

  const replaceTokens = (text) =>
    text
      .replace(/\[City\/Town Name\]/g, cityName)
      .replace(/\[Client Project\]/g, projectName || '[Client Project]');

  const capabilities = [
    'New Construction', 'Renovations',
    'Interior Fit-Out', 'Site Work',
    'Historic Restoration', 'Net Zero',
    'STEM Facilities', 'Athletic Facilities',
    'Performing Arts', 'MEP Upgrades',
  ];

  const projectTypes = [
    { label: 'K-12 Schools', count: '30+' },
    { label: 'Higher Education', count: '10+' },
    { label: 'Nonprofit', count: '15+' },
    { label: 'Commercial', count: '50+' },
    { label: 'Healthcare', count: '20+' },
    { label: 'Municipal', count: '25+' },
  ];

  const qualSections = [
    { key: 'experience', title: 'Experience & Tenure' },
    { key: 'localPresence', title: 'Local Presence' },
    { key: 'financialHealth', title: 'Financial Stability' },
    { key: 'bonding', title: 'Bonding Capacity' },
    { key: 'insurance', title: 'Insurance' },
    { key: 'technology', title: 'Technology & Systems' },
    { key: 'safety', title: 'Safety Record' },
  ];

  return (
    <div className="page-portrait" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '9pt', color: '#666666', padding: '0.6in', display: 'flex', gap: 20 }}>
      {/* Left column - Infographic card */}
      <div style={{ width: '44%', flexShrink: 0 }}>
        <div
          style={{
            background: 'linear-gradient(170deg, #1a1a1a 0%, #2a2a2a 100%)',
            borderRadius: 6,
            padding: '20px 16px',
            color: '#ffffff',
          }}
        >
          {/* Logo */}
          <div style={{ marginBottom: 14, display: 'flex', justifyContent: 'center' }}>
            <APCLogo size="md" light />
          </div>

          {/* Founded */}
          <div
            style={{
              textAlign: 'center',
              fontFamily: "'Raleway', sans-serif",
              fontSize: '8pt',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            FOUNDED 1981
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 16, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            {[
              { label: 'Total Volume', value: '$140M+' },
              { label: 'Safety EMR', value: '0.66' },
              { label: 'Client Retention', value: '70%' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '13pt', fontWeight: 800, color: '#ffffff' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '6.5pt', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 2 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Capability grid */}
          <div style={{ fontSize: '7pt', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
            Capabilities
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 16 }}>
            {capabilities.map((cap, i) => (
              <div
                key={i}
                style={{
                  fontSize: '7pt',
                  padding: '4px 6px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  borderRadius: 3,
                  color: 'rgba(255,255,255,0.8)',
                  borderLeft: '2px solid #990000',
                }}
              >
                {cap}
              </div>
            ))}
          </div>

          {/* Project counts by type */}
          <div style={{ fontSize: '7pt', fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
            Projects by Sector
          </div>
          {projectTypes.map((pt, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize: '7.5pt', color: 'rgba(255,255,255,0.75)' }}>{pt.label}</span>
              <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: '8pt', fontWeight: 700, color: '#990000' }}>{pt.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right column - Qualifications text */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <div style={{ width: 30, height: 3, backgroundColor: '#990000', marginBottom: 8 }} />
        <h2
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '16pt',
            fontWeight: 800,
            color: '#333',
            marginBottom: 4,
          }}
        >
          Company Overview
        </h2>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ fontSize: '8.5pt', color: '#919191', fontStyle: 'italic', marginBottom: 14, lineHeight: 1.6 }}
        >
          {corporateSummary}
        </div>

        {qualSections.map((section, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
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
              style={{ fontSize: '8.5pt', lineHeight: 1.55, textAlign: 'justify' }}
            >
              {replaceTokens(qualifications[section.key])}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
