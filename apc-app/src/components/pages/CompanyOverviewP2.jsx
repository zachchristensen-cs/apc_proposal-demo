import { qualifications } from '../../data/boilerplate';
import InitialsAvatar from '../shared/InitialsAvatar';
import PhotoPlaceholder from '../shared/PhotoPlaceholder';

export default function CompanyOverviewP2({ data }) {
  return (
    <div className="page-portrait" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '9pt', color: '#666666', padding: '0.6in', display: 'flex', flexDirection: 'column' }}>
      {/* Open Shop Section */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ width: 30, height: 3, backgroundColor: '#990000', marginBottom: 8 }} />
        <h2
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '14pt',
            fontWeight: 800,
            color: '#333',
            marginBottom: 10,
          }}
        >
          Open Shop Contractor
        </h2>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ fontSize: '9pt', lineHeight: 1.65, textAlign: 'justify', marginBottom: 6 }}
        >
          {qualifications.openShop}
        </div>
      </div>

      {/* Self-Performed Trade Work Section */}
      <div style={{ marginBottom: 24 }}>
        <h3
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '11pt',
            fontWeight: 700,
            color: '#990000',
            marginBottom: 8,
          }}
        >
          Self-Performed Trade Work
        </h3>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ fontSize: '9pt', lineHeight: 1.65, textAlign: 'justify', marginBottom: 12 }}
        >
          {qualifications.selfPerformed}
        </div>

        {/* Self-performed trades grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 8 }}>
          {['Selective Demolition', 'Rough & Finish Carpentry', 'Doors / Frames / Hardware', 'General Labor & Cleanup'].map((trade, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 12px',
                backgroundColor: '#f8f8f8',
                borderRadius: 4,
                borderLeft: '3px solid #990000',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#990000" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{ fontSize: '8.5pt', fontWeight: 600, color: '#333' }}>{trade}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: '#e1e1e1', margin: '0 0 24px 0' }} />

      {/* Primary Contact Card */}
      <div style={{ marginBottom: 24 }}>
        <h3
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '11pt',
            fontWeight: 700,
            color: '#333',
            marginBottom: 14,
          }}
        >
          Primary Contact
        </h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '16px 20px',
            border: '1px solid #e1e1e1',
            borderRadius: 6,
            backgroundColor: '#fafafa',
          }}
        >
          <InitialsAvatar initials="TW" size={56} phase="both" />
          <div style={{ flex: 1 }}>
            <div
              contentEditable
              suppressContentEditableWarning
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '11pt', color: '#333' }}
            >
              Thomas J. Walsh, III
            </div>
            <div
              contentEditable
              suppressContentEditableWarning
              style={{ fontSize: '8.5pt', color: '#990000', fontWeight: 600, marginBottom: 4 }}
            >
              Executive Vice President
            </div>
            <div style={{ display: 'flex', gap: 20, fontSize: '8pt', color: '#919191' }}>
              <span contentEditable suppressContentEditableWarning>
                (203) 388-1110
              </span>
              <span contentEditable suppressContentEditableWarning>
                twalsh@apconst.com
              </span>
            </div>
          </div>
          <div style={{ textAlign: 'right', fontSize: '7.5pt', color: '#919191', lineHeight: 1.6 }}>
            <div>A.P. Construction Company</div>
            <div>One Landmark Square, Suite 410</div>
            <div>Stamford, CT 06901</div>
          </div>
        </div>
      </div>

      {/* Contractor License Placeholder */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '11pt',
            fontWeight: 700,
            color: '#333',
            marginBottom: 10,
          }}
        >
          Contractor License &amp; Bonding
        </h3>
        <PhotoPlaceholder
          width="100%"
          height={160}
          label="Contractor License / Travelers Letter"
        />
        <div style={{ marginTop: 10, display: 'flex', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '7.5pt', color: '#919191', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>
              Bonding Company
            </div>
            <div
              contentEditable
              suppressContentEditableWarning
              style={{ fontSize: '8.5pt', fontWeight: 600, color: '#333' }}
            >
              Travelers Casualty and Surety Company of America
            </div>
          </div>
          <div>
            <div style={{ fontSize: '7.5pt', color: '#919191', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>
              Aggregate Capacity
            </div>
            <div
              contentEditable
              suppressContentEditableWarning
              style={{ fontSize: '8.5pt', fontWeight: 600, color: '#333' }}
            >
              $300,000,000
            </div>
          </div>
          <div>
            <div style={{ fontSize: '7.5pt', color: '#919191', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>
              Single Project
            </div>
            <div
              contentEditable
              suppressContentEditableWarning
              style={{ fontSize: '8.5pt', fontWeight: 600, color: '#333' }}
            >
              $150,000,000
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, #990000 0%, #336699 100%)',
        }}
      />
    </div>
  );
}
