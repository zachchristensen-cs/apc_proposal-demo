import PhotoPlaceholder from '../shared/PhotoPlaceholder';

function RefCard({ project }) {
  if (!project) return null;

  return (
    <div
      style={{
        border: '1px solid #e1e1e1',
        borderRadius: 4,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Photo placeholder */}
      <PhotoPlaceholder width="100%" height={80} label={project.name} />

      {/* Content */}
      <div style={{ padding: '8px 10px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 700,
            fontSize: '8.5pt',
            color: '#990000',
            lineHeight: 1.2,
            marginBottom: 2,
          }}
        >
          {project.name}
        </div>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ fontSize: '7pt', color: '#919191', marginBottom: 4 }}
        >
          {project.location}
        </div>

        {/* Client ref info */}
        <div style={{ fontSize: '7pt', lineHeight: 1.5, marginBottom: 4, flex: 1 }}>
          {project.clientRef && (
            <div contentEditable suppressContentEditableWarning style={{ color: '#333', fontWeight: 600 }}>
              {project.clientRef}
            </div>
          )}
          {project.clientPhone && (
            <div contentEditable suppressContentEditableWarning style={{ color: '#919191' }}>
              {project.clientPhone}
            </div>
          )}
          {project.clientEmail && (
            <div contentEditable suppressContentEditableWarning style={{ color: '#336699', fontSize: '6.5pt' }}>
              {project.clientEmail}
            </div>
          )}
        </div>

        {/* Value + type */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <span contentEditable suppressContentEditableWarning style={{ fontSize: '7pt', fontWeight: 600, color: '#333' }}>
            {project.contractValue}
          </span>
          <span style={{ fontSize: '6.5pt', color: '#919191' }}>
            {project.size}
          </span>
        </div>

        {/* Relevance tags */}
        {project.relevanceTags && project.relevanceTags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 2 }}>
            {project.relevanceTags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                contentEditable
                suppressContentEditableWarning
                style={{
                  fontSize: '6pt',
                  fontStyle: 'italic',
                  color: '#336699',
                  backgroundColor: '#f0f5fa',
                  padding: '1px 5px',
                  borderRadius: 2,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectRefsGrid({ data, selectedProjects }) {
  const projects = (selectedProjects || []).slice(0, 6);

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
            marginBottom: 6,
          }}
        >
          Relevant Project Experience
        </h2>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ fontSize: '9pt', lineHeight: 1.6, marginBottom: 12 }}
        >
          The following projects represent a cross-section of APC&#39;s most relevant experience. Each project was selected for its similarity in scope, complexity, client type, or campus environment to {data.projectName || 'your project'}. Client references are provided and we encourage you to contact them directly.
        </div>
      </div>

      {/* 3x2 Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: 12,
          flex: 1,
        }}
      >
        {projects.map((project, i) => (
          <RefCard key={i} project={project} />
        ))}
        {/* Fill empty slots */}
        {Array.from({ length: Math.max(0, 6 - projects.length) }).map((_, i) => (
          <div
            key={`empty-${i}`}
            style={{
              border: '1px dashed #e1e1e1',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ccc',
              fontSize: '8pt',
              fontStyle: 'italic',
            }}
          >
            Project Reference
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
