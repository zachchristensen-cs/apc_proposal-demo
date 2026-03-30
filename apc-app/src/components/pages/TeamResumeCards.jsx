import InitialsAvatar from '../shared/InitialsAvatar';

function ResumeCard({ member }) {
  if (!member) return null;

  const experience = member.relevantExperience || [];

  return (
    <div
      style={{
        flex: 1,
        border: '1px solid #e1e1e1',
        borderRadius: 4,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '8pt',
      }}
    >
      {/* APC Logo bar */}
      <div
        style={{
          backgroundColor: '#990000',
          padding: '6px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 40 40">
          <polygon points="20,2 38,38 2,38" fill="#ffffff" />
          <text x="20" y="32" textAnchor="middle" fill="#990000" fontSize="16" fontFamily="Raleway, sans-serif" fontWeight="700">A</text>
        </svg>
        <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: '7pt', color: '#ffffff', fontWeight: 600, letterSpacing: '0.05em' }}>
          A.P. CONSTRUCTION
        </span>
      </div>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Main content */}
        <div style={{ flex: 1, padding: '10px 12px', display: 'flex', flexDirection: 'column' }}>
          {/* Name + Title with dotted leader */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <InitialsAvatar initials={member.initials} size={32} phase={member.phase} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '10pt', color: '#333', whiteSpace: 'nowrap' }}
                >
                  {member.name}
                </span>
                <span style={{ flex: 1, borderBottom: '1.5px dotted #ccc', margin: '0 6px', position: 'relative', top: -2 }} />
                <span
                  contentEditable
                  suppressContentEditableWarning
                  style={{ fontSize: '7.5pt', color: '#990000', fontWeight: 600, whiteSpace: 'nowrap' }}
                >
                  {member.teamRole}
                </span>
              </div>
              <div
                contentEditable
                suppressContentEditableWarning
                style={{ fontSize: '7pt', color: '#919191' }}
              >
                {member.title}
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '7pt', fontWeight: 700, color: '#990000', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>
              Project Responsibilities
            </div>
            <div
              contentEditable
              suppressContentEditableWarning
              style={{ fontSize: '7.5pt', lineHeight: 1.5, color: '#666666' }}
            >
              {member.responsibilities}
            </div>
          </div>

          {/* Relevant Experience */}
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '7pt', fontWeight: 700, color: '#990000', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
              Relevant Experience
            </div>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: 5, paddingBottom: 4, borderBottom: i < experience.length - 1 ? '1px solid #f0f0f0' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    style={{ fontWeight: 600, fontSize: '7.5pt', color: '#333' }}
                  >
                    {exp.project}
                  </span>
                  {exp.value && (
                    <span style={{ fontSize: '7pt', color: '#919191', whiteSpace: 'nowrap', marginLeft: 6 }}>
                      {exp.value}
                    </span>
                  )}
                </div>
                <div
                  contentEditable
                  suppressContentEditableWarning
                  style={{ fontSize: '7pt', color: '#919191' }}
                >
                  {exp.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div
          style={{
            width: 90,
            backgroundColor: '#f8f8f8',
            padding: '10px 8px',
            borderLeft: '1px solid #e1e1e1',
            fontSize: '7pt',
          }}
        >
          {/* Education */}
          {member.education && member.education.length > 0 && (
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '6.5pt', color: '#990000', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>
                Education
              </div>
              {member.education.map((ed, i) => (
                <div
                  key={i}
                  contentEditable
                  suppressContentEditableWarning
                  style={{ fontSize: '6.5pt', color: '#666666', lineHeight: 1.4, marginBottom: 2 }}
                >
                  {ed}
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {member.certifications && member.certifications.length > 0 && (
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '6.5pt', color: '#990000', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>
                Certifications
              </div>
              {member.certifications.map((cert, i) => (
                <div
                  key={i}
                  contentEditable
                  suppressContentEditableWarning
                  style={{ fontSize: '6.5pt', color: '#666666', lineHeight: 1.4, marginBottom: 1 }}
                >
                  {cert}
                </div>
              ))}
            </div>
          )}

          {/* Years of experience */}
          {member.yearsExperience && (
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '6.5pt', color: '#990000', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>
                Qualifications
              </div>
              <div style={{ fontSize: '6.5pt', color: '#666666', lineHeight: 1.4 }}>
                {member.yearsExperience} years experience
              </div>
              {member.yearsAtAPC && (
                <div style={{ fontSize: '6.5pt', color: '#666666', lineHeight: 1.4 }}>
                  {member.yearsAtAPC} years at APC
                </div>
              )}
            </div>
          )}

          {/* Affiliations */}
          {member.affiliations && member.affiliations.length > 0 && (
            <div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '6.5pt', color: '#990000', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>
                Affiliations
              </div>
              {member.affiliations.map((aff, i) => (
                <div
                  key={i}
                  contentEditable
                  suppressContentEditableWarning
                  style={{ fontSize: '6.5pt', color: '#666666', lineHeight: 1.4, marginBottom: 1 }}
                >
                  {aff}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TeamResumeCards({ members }) {
  const pair = members || [];

  return (
    <div className="page-portrait" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '9pt', color: '#666666', padding: '0.6in', display: 'flex', gap: 14 }}>
      <ResumeCard member={pair[0]} />
      <ResumeCard member={pair[1]} />
    </div>
  );
}
