export default function CostProposal({ data }) {
  const preconItems = [
    { phase: 'Design Development', fee: '15,000' },
    { phase: 'Construction Documents', fee: '20,000' },
    { phase: 'Approvals & Permits', fee: '5,000' },
    { phase: 'Bidding & Procurement', fee: '10,000' },
    { phase: 'Constructability Reviews', fee: '5,000' },
  ];

  const preconTotal = preconItems.reduce((sum, item) => sum + parseInt(item.fee.replace(/,/g, ''), 10), 0);

  return (
    <div className="page-portrait" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '9pt', color: '#666666', padding: '0.6in', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ width: 30, height: 3, backgroundColor: '#990000', marginBottom: 8 }} />
        <h2
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
          Cost Proposal
        </h2>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ fontSize: '9pt', color: '#919191', fontStyle: 'italic' }}
        >
          {data.projectName || 'Project Name'} &mdash; {data.projectLocation || 'Location'}
        </div>
      </div>

      {/* Preconstruction Cost Table */}
      <div style={{ marginBottom: 18 }}>
        <h3
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '10pt',
            fontWeight: 700,
            color: '#990000',
            marginBottom: 8,
          }}
        >
          Preconstruction Services
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '8.5pt' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #990000' }}>
              <th style={{ textAlign: 'left', padding: '6px 8px', fontFamily: "'Raleway', sans-serif", fontWeight: 700, color: '#333', fontSize: '8pt' }}>
                Phase
              </th>
              <th style={{ textAlign: 'right', padding: '6px 8px', fontFamily: "'Raleway', sans-serif", fontWeight: 700, color: '#333', fontSize: '8pt', width: 120 }}>
                Fee
              </th>
            </tr>
          </thead>
          <tbody>
            {preconItems.map((item, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td
                  contentEditable
                  suppressContentEditableWarning
                  style={{ padding: '5px 8px', color: '#333' }}
                >
                  {item.phase}
                </td>
                <td style={{ padding: '5px 8px', textAlign: 'right' }}>
                  <span style={{ color: '#919191', marginRight: 2 }}>$</span>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    style={{ color: '#333', fontWeight: 500, display: 'inline-block', minWidth: 60, textAlign: 'right' }}
                  >
                    {item.fee}
                  </span>
                </td>
              </tr>
            ))}
            <tr style={{ borderTop: '2px solid #333' }}>
              <td style={{ padding: '6px 8px', fontWeight: 700, color: '#333', fontFamily: "'Raleway', sans-serif" }}>
                Total Preconstruction
              </td>
              <td style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700, color: '#990000', fontFamily: "'Raleway', sans-serif" }}>
                ${preconTotal.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Construction Fee Structure */}
      <div style={{ marginBottom: 18 }}>
        <h3
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '10pt',
            fontWeight: 700,
            color: '#990000',
            marginBottom: 8,
          }}
        >
          Construction Fee Structure
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { label: 'CM Fee', value: '3.75', unit: '%', description: 'Applied to total cost of work' },
            { label: 'Contingency', value: '5.00', unit: '%', description: 'Owner-controlled contingency' },
            { label: 'Builder\'s Risk Insurance', value: '0.35', unit: '%', description: 'Rate on total construction cost' },
            { label: 'Payment & Performance Bond', value: '0.85', unit: '%', description: 'If required by owner' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: '10px 14px',
                backgroundColor: '#f8f8f8',
                borderRadius: 4,
                borderLeft: '3px solid #990000',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: '8.5pt', color: '#333' }}
                >
                  {item.label}
                </span>
                <div>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 800, fontSize: '13pt', color: '#990000' }}
                  >
                    {item.value}
                  </span>
                  <span style={{ fontSize: '8pt', color: '#919191', marginLeft: 1 }}>{item.unit}</span>
                </div>
              </div>
              <div style={{ fontSize: '7pt', color: '#919191' }}>{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* General Conditions */}
      <div style={{ marginBottom: 18 }}>
        <h3
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '10pt',
            fontWeight: 700,
            color: '#990000',
            marginBottom: 8,
          }}
        >
          General Conditions
        </h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '10px 14px',
            backgroundColor: '#f8f8f8',
            borderRadius: 4,
            borderLeft: '3px solid #336699',
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: '8.5pt', color: '#333', marginBottom: 2 }}>
              Monthly General Conditions Cost
            </div>
            <div style={{ fontSize: '7pt', color: '#919191' }}>
              Includes project management, superintendent, temporary facilities, insurance, and site office
            </div>
          </div>
          <div>
            <span style={{ color: '#919191', fontSize: '8pt', marginRight: 2 }}>$</span>
            <span
              contentEditable
              suppressContentEditableWarning
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 800, fontSize: '14pt', color: '#336699' }}
            >
              45,000
            </span>
            <span style={{ fontSize: '8pt', color: '#919191', marginLeft: 2 }}>/mo</span>
          </div>
        </div>
      </div>

      {/* Addendum Acknowledgment */}
      <div style={{ marginBottom: 16 }}>
        <h3
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '10pt',
            fontWeight: 700,
            color: '#990000',
            marginBottom: 6,
          }}
        >
          Addendum Acknowledgment
        </h3>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{
            padding: '8px 12px',
            border: '1px solid #e1e1e1',
            borderRadius: 4,
            fontSize: '8.5pt',
            lineHeight: 1.6,
          }}
        >
          APC acknowledges receipt of all addenda issued through the date of this proposal. All pricing reflects the most current project documents provided by the design team. Any modifications to scope, schedule, or project requirements issued after this proposal may require adjustment to the fees presented herein.
        </div>
      </div>

      {/* A Note on Cost */}
      <div style={{ flex: 1 }}>
        <h3
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '10pt',
            fontWeight: 700,
            color: '#333',
            marginBottom: 6,
          }}
        >
          A Note on Cost
        </h3>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{
            fontSize: '8.5pt',
            lineHeight: 1.65,
            textAlign: 'justify',
            color: '#666666',
          }}
        >
          Our pricing philosophy is rooted in transparency and fairness. The fees presented above reflect the actual cost of delivering the leadership, oversight, and coordination that a project of this complexity demands. We do not pad contingencies, inflate general conditions, or embed hidden markups. Every dollar is accounted for and every line item is open to review. Our goal is to earn your confidence not through the lowest number, but through the best value — a team that protects your budget as aggressively as we protect your schedule and quality standards.
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
