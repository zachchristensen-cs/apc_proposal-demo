import APCLogo from '../shared/APCLogo';

export default function LogisticsPage({ data, phaseName }) {
  const projectName = data?.projectName || 'Project Name';
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="page-landscape" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '9pt', color: '#666666' }}>
      {/* Header bar */}
      <div
        style={{
          backgroundColor: '#990000',
          padding: '10px 0.5in',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <APCLogo size="sm" light />
          <div
            style={{
              width: 1,
              height: 24,
              backgroundColor: 'rgba(255,255,255,0.3)',
            }}
          />
          <span
            contentEditable
            suppressContentEditableWarning
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '10pt',
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            {projectName}
          </span>
        </div>
        <span
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '9pt',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.05em',
          }}
        >
          LOGISTICS PLAN
        </span>
      </div>

      {/* Main content area */}
      <div style={{ display: 'flex', height: 'calc(8.5in - 48px)', padding: '0.4in 0.5in 0.4in 0.5in', gap: 24 }}>
        {/* Central upload area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h1
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
            {projectName} Construction Logistics Plan
          </h1>
          <div
            style={{
              width: 40,
              height: 3,
              backgroundColor: '#990000',
              marginBottom: 16,
            }}
          />

          {/* Drop zone */}
          <div
            style={{
              flex: 1,
              border: '2px dashed #ccc',
              borderRadius: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fafafa',
              cursor: 'pointer',
              transition: 'border-color 0.2s',
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#bbb"
              strokeWidth="1"
              style={{ marginBottom: 12 }}
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <span
              style={{
                fontSize: '11pt',
                color: '#aaa',
                fontWeight: 600,
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Drop logistics rendering here
            </span>
            <span style={{ fontSize: '8pt', color: '#ccc', marginTop: 4 }}>
              PNG, JPG, or PDF &mdash; site plan, phasing diagram, or aerial rendering
            </span>
          </div>
        </div>

        {/* Right sidebar panel */}
        <div
          style={{
            width: 200,
            flexShrink: 0,
            backgroundColor: '#f5f5f5',
            borderRadius: 6,
            padding: '20px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            border: '1px solid #e8e8e8',
          }}
        >
          {/* Phase */}
          <div>
            <div
              style={{
                fontSize: '7pt',
                fontWeight: 600,
                color: '#919191',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 4,
              }}
            >
              Phase
            </div>
            <div
              contentEditable
              suppressContentEditableWarning
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '11pt',
                fontWeight: 700,
                color: '#990000',
                padding: '6px 8px',
                backgroundColor: '#ffffff',
                borderRadius: 4,
                border: '1px solid #e0e0e0',
              }}
            >
              {phaseName || 'Phase 1'}
            </div>
          </div>

          {/* Date */}
          <div>
            <div
              style={{
                fontSize: '7pt',
                fontWeight: 600,
                color: '#919191',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 4,
              }}
            >
              Date
            </div>
            <div
              contentEditable
              suppressContentEditableWarning
              style={{
                fontSize: '9pt',
                color: '#666',
                padding: '6px 8px',
                backgroundColor: '#ffffff',
                borderRadius: 4,
                border: '1px solid #e0e0e0',
              }}
            >
              {currentDate}
            </div>
          </div>

          {/* Legend */}
          <div>
            <div
              style={{
                fontSize: '7pt',
                fontWeight: 600,
                color: '#919191',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 6,
              }}
            >
              Legend
            </div>
            {[
              { color: '#990000', label: 'Construction Zone' },
              { color: '#336699', label: 'Staging Area' },
              { color: '#e8a030', label: 'Pedestrian Route' },
              { color: '#4a9e4a', label: 'Vehicle Access' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: item.color,
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: '7.5pt', color: '#666' }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: '7pt',
                fontWeight: 600,
                color: '#919191',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 4,
              }}
            >
              Notes
            </div>
            <div
              contentEditable
              suppressContentEditableWarning
              style={{
                flex: 1,
                fontSize: '8pt',
                color: '#666',
                padding: '8px',
                backgroundColor: '#ffffff',
                borderRadius: 4,
                border: '1px solid #e0e0e0',
                lineHeight: 1.5,
                minHeight: 80,
              }}
            >
              Site access from main entrance. Temporary fencing along south boundary. Construction traffic routed via service road. Pedestrian safety barriers maintained at all times.
            </div>
          </div>

          {/* APC footer */}
          <div
            style={{
              borderTop: '1px solid #ddd',
              paddingTop: 10,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '6.5pt', color: '#919191' }}>A.P. Construction Company</div>
            <div style={{ fontSize: '6pt', color: '#bbb' }}>707 Summer Street, Stamford, CT</div>
          </div>
        </div>
      </div>
    </div>
  );
}
