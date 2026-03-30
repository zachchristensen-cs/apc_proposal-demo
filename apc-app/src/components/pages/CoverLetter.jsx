import { coverLetterText } from '../../data/boilerplate';
import APCLogo from '../shared/APCLogo';

export default function CoverLetter({ data }) {
  const { clientName, clientContact, clientTitle, projectLocation } = data;
  const paragraphs = coverLetterText.replace(/\[Client Name\]/g, clientName || '[Client Name]').split('\n\n');

  return (
    <div className="page-portrait" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '9pt', color: '#666666', padding: '0.6in' }}>
      {/* Letterhead */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <APCLogo size="md" />
        <div style={{ textAlign: 'right', fontSize: '7.5pt', color: '#919191', lineHeight: 1.6 }}>
          <div>One Landmark Square, Suite 410</div>
          <div>Stamford, CT 06901</div>
          <div>(203) 323-1515</div>
          <div>apconst.com</div>
        </div>
      </div>

      {/* Date */}
      <div
        contentEditable
        suppressContentEditableWarning
        style={{ textAlign: 'right', fontSize: '9pt', color: '#666666', marginBottom: 20 }}
      >
        March 30, 2026
      </div>

      {/* Recipient */}
      <div style={{ marginBottom: 16, lineHeight: 1.7 }}>
        <div contentEditable suppressContentEditableWarning style={{ fontWeight: 600 }}>
          {clientContact || 'Client Contact'}
        </div>
        <div contentEditable suppressContentEditableWarning>
          {clientTitle || 'Title'}
        </div>
        <div contentEditable suppressContentEditableWarning>
          {clientName || 'Client Organization'}
        </div>
        <div contentEditable suppressContentEditableWarning>
          {projectLocation || 'Address'}
        </div>
      </div>

      {/* RE line */}
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontWeight: 700, color: '#990000' }}>RE: </span>
        <span
          contentEditable
          suppressContentEditableWarning
          style={{ fontWeight: 700, color: '#990000' }}
        >
          Construction Management Qualification and Proposal
        </span>
      </div>

      {/* Salutation */}
      <div
        contentEditable
        suppressContentEditableWarning
        style={{ marginBottom: 12 }}
      >
        Dear {clientContact ? clientContact.split(' ')[0] : 'Selection Committee'},
      </div>

      {/* Body paragraphs */}
      {paragraphs.map((p, i) => (
        <div
          key={i}
          contentEditable
          suppressContentEditableWarning
          style={{ marginBottom: 10, lineHeight: 1.65, textAlign: 'justify' }}
        >
          {p}
        </div>
      ))}

      {/* Closing */}
      <div
        contentEditable
        suppressContentEditableWarning
        style={{ marginTop: 14, marginBottom: 28 }}
      >
        Sincerely,
      </div>

      {/* Dual signatures */}
      <div style={{ display: 'flex', gap: 48 }}>
        <div style={{ lineHeight: 1.7 }}>
          <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '9pt', color: '#333' }}>
            Thomas J. Walsh, III
          </div>
          <div contentEditable suppressContentEditableWarning style={{ fontSize: '8pt', color: '#666666' }}>
            Executive Vice President
          </div>
          <div contentEditable suppressContentEditableWarning style={{ fontSize: '8pt', color: '#919191' }}>
            A.P. Construction Company
          </div>
        </div>
        <div style={{ lineHeight: 1.7 }}>
          <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '9pt', color: '#333' }}>
            Andrew B. Ashforth
          </div>
          <div contentEditable suppressContentEditableWarning style={{ fontSize: '8pt', color: '#666666' }}>
            President &amp; CEO
          </div>
          <div contentEditable suppressContentEditableWarning style={{ fontSize: '8pt', color: '#919191' }}>
            The Ashforth Company
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
