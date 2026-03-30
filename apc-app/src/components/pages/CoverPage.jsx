import APCLogo from '../shared/APCLogo';
import PhotoPlaceholder from '../shared/PhotoPlaceholder';

export default function CoverPage({ data }) {
  const { projectName, projectLocation, clientName, clientContact, clientTitle, architect } = data;

  return (
    <div className="page-portrait" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '9pt', color: '#666666' }}>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4in 0.6in 0.2in 0.6in' }}>
        <span
          contentEditable
          suppressContentEditableWarning
          style={{ fontFamily: "'Raleway', sans-serif", fontSize: '10pt', color: '#919191', fontWeight: 600 }}
        >
          {clientName || 'Client Name'}
        </span>
        <APCLogo size="sm" />
      </div>

      {/* Proposal intro line */}
      <div style={{ padding: '0 0.6in' }}>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ fontFamily: "'Raleway', sans-serif", fontSize: '11pt', color: '#336699', fontStyle: 'italic', marginBottom: 4 }}
        >
          Construction Management Qualification and Proposal for:
        </div>

        {/* Project name */}
        <h1
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '26pt',
            fontWeight: 800,
            color: '#336699',
            lineHeight: 1.1,
            margin: '4px 0 6px 0',
          }}
        >
          {projectName || 'Project Name'}
        </h1>

        {/* Project address */}
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ fontSize: '10pt', color: '#919191', marginBottom: 12 }}
        >
          {projectLocation || 'Project Address'}
        </div>
      </div>

      {/* Hero image placeholder */}
      <div style={{ padding: '0 0.6in' }}>
        <PhotoPlaceholder
          width="100%"
          height="calc(11in * 0.52)"
          label="Project Hero Image"
          className=""
        />
      </div>

      {/* Bottom section */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '0.35in 0.6in 0.45in 0.6in',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        {/* APC Contact */}
        <div style={{ lineHeight: 1.5 }}>
          <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '9pt', color: '#990000' }}>
            A.P. Construction Company
          </div>
          <div contentEditable suppressContentEditableWarning style={{ fontSize: '8pt', color: '#666666' }}>
            Thomas J. Walsh, III
          </div>
          <div contentEditable suppressContentEditableWarning style={{ fontSize: '8pt', color: '#666666' }}>
            Executive Vice President
          </div>
          <div contentEditable suppressContentEditableWarning style={{ fontSize: '8pt', color: '#919191' }}>
            (203) 388-1110
          </div>
          <div contentEditable suppressContentEditableWarning style={{ fontSize: '8pt', color: '#919191' }}>
            apconst.com
          </div>
        </div>

        {/* Center date */}
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ fontSize: '8pt', color: '#919191', textAlign: 'center' }}
        >
          March 2026
        </div>

        {/* Prepared For */}
        <div style={{ textAlign: 'right', lineHeight: 1.5 }}>
          <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: '7pt', color: '#919191', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>
            Prepared For
          </div>
          <div contentEditable suppressContentEditableWarning style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '9pt', color: '#333' }}>
            {clientContact || 'Client Contact'}
          </div>
          <div contentEditable suppressContentEditableWarning style={{ fontSize: '8pt', color: '#666666' }}>
            {clientTitle || 'Title'}
          </div>
          <div contentEditable suppressContentEditableWarning style={{ fontSize: '8pt', color: '#666666' }}>
            {clientName || 'Client Name'}
          </div>
          {architect && (
            <div contentEditable suppressContentEditableWarning style={{ fontSize: '8pt', color: '#919191', marginTop: 4 }}>
              Architect: {architect}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
