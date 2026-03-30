import InitialsAvatar from '../shared/InitialsAvatar';

function ChartNode({ label, sublabel, initials, phase, color, style: extraStyle }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        ...extraStyle,
      }}
    >
      {initials ? (
        <InitialsAvatar initials={initials} size={38} phase={phase} />
      ) : (
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            backgroundColor: color || '#e1e1e1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10pt',
            color: '#fff',
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 700,
            border: `2px solid ${color || '#ccc'}`,
          }}
        >
          {label ? label.charAt(0) : '?'}
        </div>
      )}
      <div
        contentEditable
        suppressContentEditableWarning
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: '7.5pt',
          fontWeight: 700,
          color: '#333',
          textAlign: 'center',
          lineHeight: 1.2,
          maxWidth: 100,
        }}
      >
        {label}
      </div>
      {sublabel && (
        <div
          contentEditable
          suppressContentEditableWarning
          style={{
            fontSize: '6.5pt',
            color: '#919191',
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: 100,
            marginTop: -2,
          }}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
}

function ConnectorLine({ vertical = true, width = 1, height = 24, color = '#ccc' }) {
  if (vertical) {
    return (
      <div style={{ width, height, backgroundColor: color, margin: '0 auto', flexShrink: 0 }} />
    );
  }
  return (
    <div style={{ width: '100%', height: width, backgroundColor: color, flexShrink: 0 }} />
  );
}

export default function OrgChart({ data, selectedTeam }) {
  const team = selectedTeam || [];
  const find = (role) => team.find(m => m.teamRole?.toLowerCase().includes(role.toLowerCase()));

  const principal = find('Principal') || { name: 'Thomas J. Walsh, III', initials: 'TW', teamRole: 'Principal in Charge', phase: 'both' };
  const projExec = find('Project Executive') || find('Executive') || { name: 'Mark Kammerer', initials: 'MK', teamRole: 'Project Executive', phase: 'construction' };
  const preconMgr = find('Preconstruction') || { name: 'Dimitri Seferidis', initials: 'DS', teamRole: 'Preconstruction Manager', phase: 'preconstruction' };
  const estimator = find('Estimator') || { name: 'Paul Shamas', initials: 'PS', teamRole: 'Lead Estimator', phase: 'preconstruction' };
  const projMgr = find('Daily Construction') || find('Project Manager') || { name: 'Matt Ross', initials: 'MR', teamRole: 'Project Manager', phase: 'construction' };
  const leadSuper = find('Lead Superintendent') || { name: 'Gene Marini', initials: 'GM', teamRole: 'Lead Superintendent', phase: 'construction' };
  const genSuper = find('General Superintendent') || find('Safety') || { name: 'Scott F. Marlow', initials: 'SM', teamRole: 'General Superintendent', phase: 'both' };

  const homeOffice = [
    'Accounting', 'Human Resources', 'IT Support', 'Legal', 'Insurance',
  ];

  return (
    <div
      className="page-landscape"
      style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: '9pt',
        color: '#666666',
        padding: '0.5in 0.6in',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <div style={{ width: 30, height: 3, backgroundColor: '#990000', marginBottom: 6 }} />
          <h2
            contentEditable
            suppressContentEditableWarning
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '16pt',
              fontWeight: 800,
              color: '#333',
              margin: 0,
            }}
          >
            Organizational Chart
          </h2>
        </div>
        <div style={{ display: 'flex', gap: 14, fontSize: '7pt' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#990000' }} />
            <span>Preconstruction</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#336699', border: '2px solid #336699' }} />
            <span>Construction</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#990000' }} />
            <span>Both Phases</span>
          </div>
        </div>
      </div>

      {/* Chart body */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', gap: 0 }}>

        {/* Top row: Client + Architect */}
        <div style={{ display: 'flex', gap: 80, marginBottom: 4 }}>
          <ChartNode label={data.clientName || 'Client'} sublabel="Owner" color="#336699" />
          <ChartNode label={data.architect || 'Architect'} sublabel="Design Team" color="#555" />
        </div>
        <ConnectorLine height={18} />

        {/* Principal in Charge */}
        <ChartNode label={principal.name} sublabel={principal.teamRole} initials={principal.initials} phase={principal.phase} />
        <ConnectorLine height={18} />

        {/* Horizontal connector */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, position: 'relative' }}>
          {/* Left branch - Precon */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 160 }}>
            <ChartNode label={preconMgr.name} sublabel={preconMgr.teamRole} initials={preconMgr.initials} phase={preconMgr.phase} />
            <ConnectorLine height={14} />
            <ChartNode label={estimator.name} sublabel={estimator.teamRole} initials={estimator.initials} phase={estimator.phase} />
          </div>

          {/* Horizontal connector bar between left and right */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 19 }}>
            <div style={{ width: 200, height: 1, backgroundColor: '#ccc' }} />
          </div>

          {/* Center branch - Project Executive */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 160 }}>
            <ChartNode label={projExec.name} sublabel={projExec.teamRole} initials={projExec.initials} phase={projExec.phase} />
          </div>

          {/* Horizontal connector bar between center and right */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 19 }}>
            <div style={{ width: 200, height: 1, backgroundColor: '#ccc' }} />
          </div>

          {/* Right branch - Construction */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 160 }}>
            <ChartNode label={projMgr.name} sublabel={projMgr.teamRole} initials={projMgr.initials} phase={projMgr.phase} />
            <ConnectorLine height={14} />
            <div style={{ display: 'flex', gap: 24 }}>
              <ChartNode label={leadSuper.name} sublabel={leadSuper.teamRole} initials={leadSuper.initials} phase={leadSuper.phase} />
              <ChartNode label={genSuper.name} sublabel={genSuper.teamRole} initials={genSuper.initials} phase={genSuper.phase} />
            </div>
          </div>
        </div>

        {/* Home Office Support */}
        <div style={{ marginTop: 'auto', paddingTop: 14, width: '100%' }}>
          <div style={{ height: 1, backgroundColor: '#e1e1e1', marginBottom: 10 }} />
          <div
            contentEditable
            suppressContentEditableWarning
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: '7.5pt',
              fontWeight: 700,
              color: '#919191',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 8,
              textAlign: 'center',
            }}
          >
            Home Office Support
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
            {homeOffice.map((dept, i) => (
              <div
                key={i}
                style={{
                  padding: '5px 14px',
                  backgroundColor: '#f3f3f3',
                  borderRadius: 3,
                  fontSize: '7.5pt',
                  color: '#666666',
                  fontWeight: 500,
                }}
              >
                {dept}
              </div>
            ))}
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
