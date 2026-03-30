import { useState } from 'react';
import { teamMembers } from '../data/team';
import { projects } from '../data/projects';
import { corporateSummary, qualifications, coverLetterText, preconApproach, constructionApproach } from '../data/boilerplate';
import InitialsAvatar from '../components/shared/InitialsAvatar';

function TeamTab() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const filtered = teamMembers.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.title.toLowerCase().includes(search.toLowerCase()) ||
    m.teamRole.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search team members..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-[#e1e1e1] rounded-lg px-4 py-2 text-sm flex-1 max-w-md focus:outline-none focus:border-[#990000]"
        />
        <button className="bg-[#e1e1e1] text-[#999] px-4 py-2 rounded-lg text-sm cursor-not-allowed" disabled>
          + Add Team Member <span className="text-[10px] ml-1">(Coming Soon)</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map(member => (
          <div
            key={member.id}
            onClick={() => setSelected(selected?.id === member.id ? null : member)}
            className={`bg-white rounded-lg border p-4 cursor-pointer transition-all hover:shadow-md ${
              selected?.id === member.id ? 'border-[#990000] shadow-md' : 'border-[#e1e1e1]'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <InitialsAvatar initials={member.initials} size={44} phase={member.phase} />
              <div>
                <div className="font-semibold text-sm text-[#333]">{member.name}</div>
                <div className="text-xs text-[#919191]">{member.title}</div>
              </div>
            </div>
            <div className="text-xs text-[#666] mb-2">{member.teamRole}</div>
            <span className="inline-block bg-[#f3f3f3] text-[#666] text-[10px] px-2 py-0.5 rounded-full">
              {member.yearsExperience} years experience
            </span>
          </div>
        ))}
      </div>

      {/* Detail Panel */}
      {selected && (
        <div className="fixed inset-0 z-50 flex" onClick={() => setSelected(null)}>
          <div className="flex-1 bg-black/30" />
          <div
            className="w-[500px] bg-white shadow-2xl overflow-y-auto p-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <InitialsAvatar initials={selected.initials} size={56} phase={selected.phase} />
                <div>
                  <h3 className="text-lg font-bold text-[#333]">{selected.name}</h3>
                  <div className="text-sm text-[#919191]">{selected.title}</div>
                  <div className="text-sm text-[#990000] font-semibold">{selected.teamRole}</div>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="text-[#999] hover:text-[#333] text-xl">✕</button>
            </div>

            <div className="mb-4">
              <h4 className="text-xs font-bold text-[#990000] uppercase tracking-wide mb-1">Responsibilities</h4>
              <p className="text-xs text-[#666] leading-relaxed">{selected.responsibilities}</p>
            </div>

            {selected.relevantExperience.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-bold text-[#990000] uppercase tracking-wide mb-2">Relevant Experience</h4>
                {selected.relevantExperience.map((exp, i) => (
                  <div key={i} className="mb-3 pl-3 border-l-2 border-[#e1e1e1]">
                    <div className="font-semibold text-xs text-[#333]">{exp.project}</div>
                    <div className="text-[10px] text-[#919191]">{exp.location} — {exp.value}</div>
                    {exp.bullets?.map((b, j) => (
                      <div key={j} className="text-[10px] text-[#666] mt-0.5">• {b}</div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {selected.education.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-bold text-[#990000] uppercase tracking-wide mb-1">Education</h4>
                {selected.education.map((e, i) => (
                  <div key={i} className="text-xs text-[#666]">• {e}</div>
                ))}
              </div>
            )}

            {selected.certifications.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-bold text-[#990000] uppercase tracking-wide mb-1">Certifications</h4>
                <div className="flex flex-wrap gap-1">
                  {selected.certifications.map((c, i) => (
                    <span key={i} className="bg-[#f3f3f3] text-[10px] px-2 py-0.5 rounded-full text-[#666]">{c}</span>
                  ))}
                </div>
              </div>
            )}

            {selected.affiliations.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-bold text-[#990000] uppercase tracking-wide mb-1">Affiliations</h4>
                {selected.affiliations.map((a, i) => (
                  <div key={i} className="text-xs text-[#666]">• {a}</div>
                ))}
              </div>
            )}

            <div className="flex gap-4 text-xs text-[#666]">
              <div><span className="font-semibold">{selected.yearsExperience}</span> years experience</div>
              <div><span className="font-semibold">{selected.yearsAtAPC}</span> years at APC</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectsTab() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const types = ['All', 'Education', 'Nonprofit', 'Commercial'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter);

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex gap-2">
          {types.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                filter === t ? 'bg-[#990000] text-white' : 'bg-[#f3f3f3] text-[#666] hover:bg-[#e1e1e1]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <button className="ml-auto bg-[#e1e1e1] text-[#999] px-4 py-2 rounded-lg text-sm cursor-not-allowed" disabled>
          + Add Project <span className="text-[10px] ml-1">(Coming Soon)</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map(proj => (
          <div
            key={proj.id}
            onClick={() => setSelected(selected?.id === proj.id ? null : proj)}
            className={`bg-white rounded-lg border overflow-hidden cursor-pointer transition-all hover:shadow-md ${
              selected?.id === proj.id ? 'border-[#990000] shadow-md' : 'border-[#e1e1e1]'
            }`}
          >
            <div className="h-32 bg-gradient-to-br from-[#e8e8e8] to-[#d0d0d0] relative">
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#990000]" />
            </div>
            <div className="p-4">
              <div className="font-semibold text-sm text-[#333] mb-1">{proj.name}</div>
              <div className="text-xs text-[#919191] mb-2">{proj.location}</div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#990000]">{proj.contractValue}</span>
                <span className="bg-[#f3f3f3] text-[10px] px-2 py-0.5 rounded-full text-[#666]">{proj.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Panel */}
      {selected && (
        <div className="fixed inset-0 z-50 flex" onClick={() => setSelected(null)}>
          <div className="flex-1 bg-black/30" />
          <div className="w-[560px] bg-white shadow-2xl overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#333]">{selected.name}</h3>
                <div className="text-sm text-[#919191]">{selected.location} — {selected.timeline}</div>
              </div>
              <button onClick={() => setSelected(null)} className="text-[#999] hover:text-[#333] text-xl">✕</button>
            </div>
            <div className="flex gap-4 mb-4 text-xs">
              <div><span className="font-semibold text-[#990000]">{selected.contractValue}</span></div>
              <div>{selected.size}</div>
              <div className="bg-[#f3f3f3] px-2 py-0.5 rounded-full">{selected.type}</div>
            </div>
            <p className="text-xs text-[#666] mb-4 leading-relaxed">{selected.description}</p>

            {selected.subProjects.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-bold text-[#990000] uppercase tracking-wide mb-2">Sub-Projects</h4>
                {selected.subProjects.map((sp, i) => (
                  <div key={i} className="mb-3 pl-3 border-l-2 border-[#e1e1e1]">
                    <div className="font-semibold text-xs text-[#333]">{sp.name} <span className="font-normal text-[#919191]">{sp.size} — {sp.value}</span></div>
                    <div className="text-[10px] text-[#666] mt-0.5">{sp.description}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="mb-4">
              <h4 className="text-xs font-bold text-[#990000] uppercase tracking-wide mb-1">Client Reference</h4>
              <div className="text-xs text-[#666]">{selected.clientRef}</div>
              <div className="text-xs text-[#919191]">{selected.clientPhone} — {selected.clientEmail}</div>
            </div>

            {selected.testimonial && (
              <div className="bg-[#f3f3f3] p-3 rounded-lg">
                <p className="text-xs italic text-[#666] mb-1">"{selected.testimonial.quote}"</p>
                <p className="text-[10px] text-[#990000] font-semibold">— {selected.testimonial.attribution}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function CompanyInfoTab() {
  const sections = [
    { title: 'Corporate Summary', content: corporateSummary, lastEdited: 'Mar 15, 2026' },
    { title: 'Cover Letter Template', content: coverLetterText, lastEdited: 'Mar 20, 2026' },
  ];

  const qualSections = [
    { title: 'Experience', content: qualifications.experience },
    { title: 'Local Presence', content: qualifications.localPresence },
    { title: 'Financial Health', content: qualifications.financialHealth },
    { title: 'Bonding', content: qualifications.bonding },
    { title: 'Insurance', content: qualifications.insurance },
    { title: 'Technology', content: qualifications.technology },
    { title: 'Safety', content: qualifications.safety },
    { title: "Owner's Perspective / Open Shop", content: qualifications.openShop },
  ];

  const [expandedQuals, setExpandedQuals] = useState({});

  return (
    <div className="max-w-4xl">
      {sections.map((s, i) => (
        <div key={i} className="bg-white rounded-lg border border-[#e1e1e1] p-5 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-[#333]">{s.title}</h3>
            <div className="flex items-center gap-2 text-[10px] text-[#919191]">
              <span>Last edited {s.lastEdited}</span>
              <span className="cursor-pointer">✏️</span>
            </div>
          </div>
          <div
            className="text-xs text-[#666] leading-relaxed whitespace-pre-line"
            contentEditable
            suppressContentEditableWarning
          >
            {s.content}
          </div>
        </div>
      ))}

      <div className="bg-white rounded-lg border border-[#e1e1e1] p-5 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-[#333]">Qualifications</h3>
          <div className="text-[10px] text-[#919191]">Last edited Mar 18, 2026</div>
        </div>
        {qualSections.map((q, i) => (
          <div key={i} className="border-b border-[#f3f3f3] last:border-0">
            <button
              onClick={() => setExpandedQuals(prev => ({ ...prev, [i]: !prev[i] }))}
              className="w-full flex items-center justify-between py-2 text-left"
            >
              <span className="text-xs font-semibold text-[#990000]">{q.title}</span>
              <span className="text-[#919191] text-sm">{expandedQuals[i] ? '−' : '+'}</span>
            </button>
            {expandedQuals[i] && (
              <div
                className="text-xs text-[#666] leading-relaxed pb-3 whitespace-pre-line"
                contentEditable
                suppressContentEditableWarning
              >
                {q.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-[#e1e1e1] p-5 mb-4">
        <h3 className="text-sm font-bold text-[#333] mb-3">Project Approach — Preconstruction</h3>
        <div className="text-xs text-[#666] leading-relaxed" contentEditable suppressContentEditableWarning>
          {Object.entries(preconApproach).map(([key, val]) => (
            <div key={key} className="mb-2">
              <strong className="text-[#990000] capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: </strong>
              {val}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#e1e1e1] p-5 mb-4">
        <h3 className="text-sm font-bold text-[#333] mb-3">Project Approach — Construction</h3>
        <div className="text-xs text-[#666] leading-relaxed" contentEditable suppressContentEditableWarning>
          {Object.entries(constructionApproach).map(([key, val]) => (
            <div key={key} className="mb-2">
              <strong className="text-[#990000] capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: </strong>
              {val}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CMSView() {
  const [tab, setTab] = useState('team');
  const tabs = [
    { id: 'team', label: 'Team Members' },
    { id: 'projects', label: 'Projects' },
    { id: 'company', label: 'Company Info' },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#333] mb-1">Content Library</h1>
        <p className="text-sm text-[#919191]">Manage team members, projects, and company content that flows into proposals.</p>
      </div>

      <div className="flex gap-1 mb-6 border-b border-[#e1e1e1]">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 text-sm font-semibold border-b-2 -mb-px transition-colors ${
              tab === t.id
                ? 'border-[#990000] text-[#990000]'
                : 'border-transparent text-[#666] hover:text-[#333]'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'team' && <TeamTab />}
      {tab === 'projects' && <ProjectsTab />}
      {tab === 'company' && <CompanyInfoTab />}
    </div>
  );
}
