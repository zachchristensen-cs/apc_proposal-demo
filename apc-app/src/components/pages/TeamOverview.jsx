import InitialsAvatar from '../shared/InitialsAvatar';

export default function TeamOverview({ data, selectedTeam }) {
  const team = selectedTeam || [];

  const whyBlocks = [
    {
      title: 'Continuity from Preconstruction through Closeout',
      text: 'The team we propose is the team that will build your project. Our preconstruction managers, estimators, project managers, and superintendents work together from day one, ensuring that institutional knowledge is never lost in transition.',
    },
    {
      title: 'Local Expertise and Relationships',
      text: 'Every member of this team lives and works in the region. They know the local subcontractor market, building departments, inspectors, and code requirements. This translates directly into better pricing, faster approvals, and fewer surprises.',
    },
    {
      title: 'Depth of School and Campus Experience',
      text: 'Our team has collectively delivered over $300 million in K-12 and campus construction — all on active, occupied campuses where student safety and academic continuity are non-negotiable.',
    },
  ];

  return (
    <div className="page-portrait" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '9pt', color: '#666666', padding: '0.6in', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ width: 30, height: 3, backgroundColor: '#990000', marginBottom: 8 }} />
        <h2
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '16pt',
            fontWeight: 800,
            color: '#333',
            marginBottom: 8,
          }}
        >
          Your Project Team
        </h2>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ fontSize: '9pt', lineHeight: 1.65, textAlign: 'justify', marginBottom: 14 }}
        >
          A.P. Construction assigns its most experienced professionals to every project. The team members identified below will be directly responsible for the success of your project from preconstruction through final closeout. Our commitment is simple: the team we propose is the team that will build your project.
        </div>
      </div>

      {/* Why This Team blocks */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
        {whyBlocks.map((block, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              padding: '12px 14px',
              backgroundColor: '#f8f8f8',
              borderRadius: 4,
              borderTop: '3px solid #990000',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  backgroundColor: '#990000',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '10pt',
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>
              <div
                contentEditable
                suppressContentEditableWarning
                style={{ fontFamily: "'Raleway', sans-serif", fontSize: '8pt', fontWeight: 700, color: '#333', lineHeight: 1.2 }}
              >
                {block.title}
              </div>
            </div>
            <div
              contentEditable
              suppressContentEditableWarning
              style={{ fontSize: '7.5pt', lineHeight: 1.5, color: '#666666' }}
            >
              {block.text}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: '#e1e1e1', marginBottom: 14 }} />

      {/* Team Member Bios - two column layout */}
      <h3
        contentEditable
        suppressContentEditableWarning
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: '10pt',
          fontWeight: 700,
          color: '#990000',
          marginBottom: 10,
        }}
      >
        Team Bios
      </h3>
      <div style={{ display: 'flex', gap: 18, flex: 1 }}>
        {/* Split team into two columns */}
        {[0, 1].map((col) => (
          <div key={col} style={{ flex: 1 }}>
            {team
              .filter((_, i) => i % 2 === col)
              .map((member, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <InitialsAvatar initials={member.initials} size={28} phase={member.phase} />
                    <div>
                      <div
                        contentEditable
                        suppressContentEditableWarning
                        style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '9pt', color: '#333', lineHeight: 1.2 }}
                      >
                        {member.name}
                      </div>
                      <div
                        contentEditable
                        suppressContentEditableWarning
                        style={{ fontSize: '7.5pt', color: '#990000', fontWeight: 600 }}
                      >
                        {member.teamRole}
                      </div>
                    </div>
                  </div>
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    style={{ fontSize: '7.5pt', lineHeight: 1.5, textAlign: 'justify', paddingLeft: 36 }}
                  >
                    {member.responsibilities}
                  </div>
                </div>
              ))}
          </div>
        ))}
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
