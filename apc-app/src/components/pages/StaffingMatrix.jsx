import { staffingDefaults } from '../../data/boilerplate';
import { teamMembers } from '../../data/team';
import APCLogo from '../shared/APCLogo';

export default function StaffingMatrix({ data, selectedTeam, phase = 'preconstruction' }) {
  const phaseConfig = staffingDefaults[phase];
  const months = phaseConfig.months;
  const phaseData = phaseConfig.data;

  const phaseLabel = phase === 'preconstruction' ? 'Preconstruction' : 'Construction';

  // Build a lookup from team member id to member object
  const memberLookup = {};
  teamMembers.forEach((m) => {
    memberLookup[m.id] = m;
  });

  // Determine which team members to display:
  // selectedTeam is an array of member objects; extract IDs and filter to those with data
  const teamIds = selectedTeam
    ? selectedTeam.map(m => typeof m === 'string' ? m : m.id).filter((id) => phaseData[id])
    : Object.keys(phaseData).filter((id) => memberLookup[id]);

  const hoursPerMonth = 173; // approximate business hours per month

  return (
    <div className="page-landscape" style={{ fontFamily: "'Open Sans', sans-serif", fontSize: '9pt', color: '#666666' }}>
      {/* Header bar */}
      <div
        style={{
          backgroundColor: '#990000',
          padding: '8px 0.5in',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2
          contentEditable
          suppressContentEditableWarning
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: '13pt',
            fontWeight: 700,
            color: '#ffffff',
            margin: 0,
            letterSpacing: '0.03em',
          }}
        >
          {phaseLabel} Staffing Plan
        </h2>
        <APCLogo size="sm" light />
      </div>

      {/* Project info row */}
      <div
        style={{
          padding: '8px 0.5in',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '7pt', color: '#919191', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Project:{' '}
            </span>
            <span
              contentEditable
              suppressContentEditableWarning
              style={{ fontSize: '9pt', fontWeight: 600, color: '#333' }}
            >
              {data?.projectName || 'Project Name'}
            </span>
          </div>
          <div>
            <span style={{ fontSize: '7pt', color: '#919191', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Phase:{' '}
            </span>
            <span
              contentEditable
              suppressContentEditableWarning
              style={{ fontSize: '9pt', fontWeight: 600, color: '#990000' }}
            >
              {phaseLabel}
            </span>
          </div>
        </div>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ fontSize: '8pt', color: '#919191' }}
        >
          % of Time Dedicated to Project
        </div>
      </div>

      {/* Table */}
      <div style={{ padding: '10px 0.5in 0.3in 0.5in', overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '7pt',
            tableLayout: 'fixed',
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  width: 130,
                  textAlign: 'left',
                  padding: '5px 6px',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  fontSize: '7pt',
                  color: '#333',
                  backgroundColor: '#f5f5f5',
                  borderBottom: '2px solid #990000',
                }}
              >
                Team Member
              </th>
              <th
                style={{
                  width: 80,
                  textAlign: 'left',
                  padding: '5px 4px',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  fontSize: '7pt',
                  color: '#333',
                  backgroundColor: '#f5f5f5',
                  borderBottom: '2px solid #990000',
                }}
              >
                Role
              </th>
              {Array.from({ length: months }, (_, i) => (
                <th
                  key={i}
                  style={{
                    textAlign: 'center',
                    padding: '5px 1px',
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    fontSize: '6.5pt',
                    color: '#ffffff',
                    backgroundColor: '#990000',
                    borderLeft: '1px solid rgba(255,255,255,0.2)',
                    minWidth: 28,
                  }}
                >
                  M{i + 1}
                </th>
              ))}
              <th
                style={{
                  textAlign: 'center',
                  padding: '5px 3px',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  fontSize: '6.5pt',
                  color: '#333',
                  backgroundColor: '#f0f0f0',
                  borderBottom: '2px solid #990000',
                  borderLeft: '2px solid #990000',
                  minWidth: 48,
                }}
              >
                Avg Hrs/Mo
              </th>
              <th
                style={{
                  textAlign: 'center',
                  padding: '5px 3px',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                  fontSize: '6.5pt',
                  color: '#333',
                  backgroundColor: '#f0f0f0',
                  borderBottom: '2px solid #990000',
                  minWidth: 48,
                }}
              >
                Total Hrs
              </th>
            </tr>
          </thead>
          <tbody>
            {teamIds.map((id, rowIdx) => {
              const member = memberLookup[id];
              const percentages = phaseData[id] || [];
              const avgPercent = percentages.length > 0
                ? percentages.reduce((a, b) => a + b, 0) / percentages.length
                : 0;
              const avgHrsPerMonth = Math.round((avgPercent / 100) * hoursPerMonth);
              const totalHrs = Math.round(
                percentages.reduce((sum, pct) => sum + (pct / 100) * hoursPerMonth, 0)
              );
              const rowBg = rowIdx % 2 === 0 ? '#ffffff' : '#fafafa';

              return (
                <tr key={id} style={{ backgroundColor: rowBg }}>
                  <td
                    style={{
                      padding: '4px 6px',
                      fontWeight: 600,
                      fontSize: '7pt',
                      color: '#333',
                      borderBottom: '1px solid #eee',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {member ? member.name : id}
                  </td>
                  <td
                    style={{
                      padding: '4px 4px',
                      fontSize: '6.5pt',
                      color: '#919191',
                      borderBottom: '1px solid #eee',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {member ? member.teamRole : ''}
                  </td>
                  {Array.from({ length: months }, (_, i) => {
                    const val = percentages[i] !== undefined ? percentages[i] : 0;
                    const intensity = Math.min(val / 100, 1);
                    const cellBg =
                      val === 0
                        ? 'transparent'
                        : val >= 80
                          ? `rgba(153, 0, 0, ${0.15 + intensity * 0.5})`
                          : `rgba(51, 102, 153, ${0.08 + intensity * 0.35})`;
                    const cellColor = val >= 80 ? '#990000' : val > 0 ? '#336699' : '#ccc';

                    return (
                      <td
                        key={i}
                        style={{
                          textAlign: 'center',
                          padding: '4px 1px',
                          borderBottom: '1px solid #eee',
                          borderLeft: '1px solid #f0f0f0',
                          backgroundColor: cellBg,
                          fontSize: '6.5pt',
                          fontWeight: val >= 50 ? 700 : 400,
                          color: cellColor,
                        }}
                      >
                        <input
                          type="text"
                          defaultValue={val > 0 ? `${val}%` : '\u2014'}
                          style={{
                            width: '100%',
                            border: 'none',
                            background: 'transparent',
                            textAlign: 'center',
                            fontSize: '6.5pt',
                            fontWeight: val >= 50 ? 700 : 400,
                            color: cellColor,
                            fontFamily: "'Open Sans', sans-serif",
                            padding: 0,
                            outline: 'none',
                          }}
                        />
                      </td>
                    );
                  })}
                  <td
                    style={{
                      textAlign: 'center',
                      padding: '4px 3px',
                      borderBottom: '1px solid #eee',
                      borderLeft: '2px solid #990000',
                      fontSize: '7pt',
                      fontWeight: 600,
                      color: '#333',
                      backgroundColor: '#f8f8f8',
                    }}
                  >
                    <input
                      type="text"
                      defaultValue={avgHrsPerMonth}
                      style={{
                        width: '100%',
                        border: 'none',
                        background: 'transparent',
                        textAlign: 'center',
                        fontSize: '7pt',
                        fontWeight: 600,
                        color: '#333',
                        fontFamily: "'Open Sans', sans-serif",
                        padding: 0,
                        outline: 'none',
                      }}
                    />
                  </td>
                  <td
                    style={{
                      textAlign: 'center',
                      padding: '4px 3px',
                      borderBottom: '1px solid #eee',
                      fontSize: '7pt',
                      fontWeight: 700,
                      color: '#990000',
                      backgroundColor: '#f8f8f8',
                    }}
                  >
                    <input
                      type="text"
                      defaultValue={totalHrs.toLocaleString()}
                      style={{
                        width: '100%',
                        border: 'none',
                        background: 'transparent',
                        textAlign: 'center',
                        fontSize: '7pt',
                        fontWeight: 700,
                        color: '#990000',
                        fontFamily: "'Open Sans', sans-serif",
                        padding: 0,
                        outline: 'none',
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Footer note */}
        <div
          style={{
            marginTop: 12,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            contentEditable
            suppressContentEditableWarning
            style={{ fontSize: '7pt', color: '#919191', fontStyle: 'italic' }}
          >
            Percentages reflect anticipated time dedicated to project. Staffing levels may be adjusted based on project needs.
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 10, height: 10, backgroundColor: 'rgba(51,102,153,0.2)', borderRadius: 2 }} />
              <span style={{ fontSize: '6.5pt', color: '#919191' }}>Partial</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 10, height: 10, backgroundColor: 'rgba(153,0,0,0.35)', borderRadius: 2 }} />
              <span style={{ fontSize: '6.5pt', color: '#919191' }}>Full-time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
