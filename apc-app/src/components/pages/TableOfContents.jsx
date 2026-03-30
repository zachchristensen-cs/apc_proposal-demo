import PhotoPlaceholder from '../shared/PhotoPlaceholder';

export default function TableOfContents({ pages }) {
  const visiblePages = (pages || []).filter(p => p.visible !== false);

  // Build sections: section dividers become headers, pages beneath become sub-items
  const sections = [];
  let currentSection = null;
  let pageCounter = 1;

  visiblePages.forEach((page) => {
    if (page.type === 'section-divider') {
      currentSection = { title: page.name, items: [] };
      sections.push(currentSection);
    } else if (page.type !== 'cover' && page.type !== 'cover-letter' && page.type !== 'toc') {
      const entry = { name: page.name, number: pageCounter };
      pageCounter++;
      if (currentSection) {
        currentSection.items.push(entry);
      } else {
        sections.push({ title: null, items: [entry] });
      }
    }
  });

  return (
    <div className="page-portrait" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '9pt', color: '#666666', padding: '0.6in', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ marginBottom: 6 }}>
        <div style={{ width: 40, height: 3, backgroundColor: '#990000', marginBottom: 10 }} />
        <h1
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '24pt',
            fontWeight: 800,
            color: '#333',
            letterSpacing: '0.08em',
            margin: 0,
          }}
        >
          CONTENTS
        </h1>
      </div>

      {/* Divider line */}
      <div style={{ height: 1, backgroundColor: '#e1e1e1', margin: '12px 0 16px 0' }} />

      {/* Section listings */}
      <div style={{ flex: 1 }}>
        {sections.map((section, si) => (
          <div key={si} style={{ marginBottom: 18 }}>
            {section.title && (
              <div
                contentEditable
                suppressContentEditableWarning
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '10pt',
                  fontWeight: 700,
                  color: '#990000',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: 8,
                  paddingBottom: 4,
                  borderBottom: '1px solid #e1e1e1',
                }}
              >
                {section.title}
              </div>
            )}
            {section.items.map((item, ii) => (
              <div
                key={ii}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  padding: '3px 0',
                  fontSize: '9pt',
                }}
              >
                <span
                  contentEditable
                  suppressContentEditableWarning
                  style={{ whiteSpace: 'nowrap', color: '#333', fontWeight: 500 }}
                >
                  {item.name}
                </span>
                <span
                  style={{
                    flex: 1,
                    borderBottom: '1.5px dotted #ccc',
                    margin: '0 8px',
                    minWidth: 20,
                    position: 'relative',
                    top: -2,
                  }}
                />
                <span style={{ color: '#990000', fontWeight: 600, fontSize: '9pt', whiteSpace: 'nowrap' }}>
                  {String(item.number).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Three photo placeholders at bottom */}
      <div style={{ display: 'flex', gap: 10, marginTop: 16, marginBottom: 14 }}>
        <PhotoPlaceholder width="33%" height={100} label="Photo 1" />
        <PhotoPlaceholder width="33%" height={100} label="Photo 2" />
        <PhotoPlaceholder width="34%" height={100} label="Photo 3" />
      </div>

      {/* Tagline */}
      <div
        contentEditable
        suppressContentEditableWarning
        style={{
          textAlign: 'center',
          fontFamily: "'Raleway', sans-serif",
          fontSize: '8pt',
          color: '#919191',
          fontStyle: 'italic',
          letterSpacing: '0.04em',
        }}
      >
        Building Relationships. Delivering Results.
      </div>
    </div>
  );
}
