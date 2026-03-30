import PhotoPlaceholder from '../shared/PhotoPlaceholder';

export default function CaseStudy({ project }) {
  if (!project) return null;

  const subProjects = project.subProjects || [];
  const testimonial = project.testimonial;

  return (
    <div className="page-portrait" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '9pt', color: '#666666', padding: '0.6in', display: 'flex', flexDirection: 'column' }}>
      {/* Project header */}
      <div style={{ marginBottom: 10 }}>
        <div style={{ width: 30, height: 3, backgroundColor: '#990000', marginBottom: 8 }} />
        <h2
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '18pt',
            fontWeight: 800,
            color: '#333',
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          {project.name}
        </h2>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ fontSize: '10pt', color: '#919191', marginTop: 2 }}
        >
          {project.location}
        </div>
      </div>

      {/* Hero photo */}
      <PhotoPlaceholder width="100%" height={160} label={`${project.name} — Project Photo`} />

      {/* Body: sidebar + content */}
      <div style={{ display: 'flex', gap: 16, marginTop: 12, flex: 1 }}>
        {/* Left sidebar - Project data */}
        <div style={{ width: 130, flexShrink: 0 }}>
          {[
            { label: 'Services', value: project.services },
            { label: 'Type', value: project.type },
            { label: 'Size', value: project.size },
            { label: 'Contract Value', value: project.contractValue },
            { label: 'Architect', value: project.architect },
            { label: 'Timeline', value: project.timeline },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '6.5pt', fontWeight: 700, color: '#990000', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 1 }}>
                {item.label}
              </div>
              <div
                contentEditable
                suppressContentEditableWarning
                style={{ fontSize: '8pt', color: '#333', fontWeight: 500, lineHeight: 1.3 }}
              >
                {item.value || '—'}
              </div>
            </div>
          ))}

          {/* Client reference */}
          {project.clientRef && (
            <div style={{ marginTop: 4, paddingTop: 8, borderTop: '1px solid #e1e1e1' }}>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '6.5pt', fontWeight: 700, color: '#990000', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>
                Client Reference
              </div>
              <div contentEditable suppressContentEditableWarning style={{ fontSize: '7.5pt', color: '#333', fontWeight: 600, lineHeight: 1.4 }}>
                {project.clientRef}
              </div>
              {project.clientPhone && (
                <div contentEditable suppressContentEditableWarning style={{ fontSize: '7pt', color: '#919191' }}>
                  {project.clientPhone}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Main content area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Project description */}
          <div
            contentEditable
            suppressContentEditableWarning
            style={{ fontSize: '8.5pt', lineHeight: 1.6, marginBottom: 12, textAlign: 'justify' }}
          >
            {project.description}
          </div>

          {/* Sub-project breakdowns */}
          {subProjects.length > 0 && (
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '8pt', fontWeight: 700, color: '#333', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Project Components
              </div>
              {subProjects.map((sub, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: 8,
                    paddingLeft: 10,
                    borderLeft: '2px solid #990000',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      style={{ fontWeight: 600, fontSize: '8pt', color: '#333' }}
                    >
                      {sub.name}
                    </span>
                    <div style={{ display: 'flex', gap: 10, fontSize: '7pt', color: '#919191' }}>
                      {sub.size && <span>{sub.size}</span>}
                      {sub.value && sub.value !== '—' && <span>{sub.value}</span>}
                    </div>
                  </div>
                  <div
                    contentEditable
                    suppressContentEditableWarning
                    style={{ fontSize: '7.5pt', lineHeight: 1.5, color: '#666666' }}
                  >
                    {sub.description}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Photo gallery placeholders */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <PhotoPlaceholder width="50%" height={80} label="Photo 1" />
            <PhotoPlaceholder width="50%" height={80} label="Photo 2" />
          </div>

          {/* Testimonial quote */}
          {testimonial && (
            <div
              style={{
                marginTop: 'auto',
                padding: '10px 14px',
                backgroundColor: '#f8f8f8',
                borderLeft: '3px solid #990000',
                borderRadius: '0 4px 4px 0',
              }}
            >
              <div
                contentEditable
                suppressContentEditableWarning
                style={{
                  fontSize: '8pt',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: '#555',
                  marginBottom: 4,
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </div>
              <div
                contentEditable
                suppressContentEditableWarning
                style={{ fontSize: '7pt', color: '#990000', fontWeight: 600 }}
              >
                &mdash; {testimonial.attribution}
              </div>
            </div>
          )}
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
