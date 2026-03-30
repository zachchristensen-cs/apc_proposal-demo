import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { teamMembers } from '../data/team';
import { projects } from '../data/projects';
import InitialsAvatar from '../components/shared/InitialsAvatar';

export default function ProposalSetup({ onGenerate }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    projectName: 'Sacred Heart Greenwich — New STEM Building',
    projectLocation: '1177 King Street, Greenwich, CT',
    projectType: 'Education',
    clientName: 'Sacred Heart Greenwich',
    clientContact: 'Jim Giuliano',
    clientTitle: 'Chief Financial Officer / Chief Operating Officer',
    architect: 'Perkins Eastman',
    description: 'Construction Management services for the new STEM Building and renovations to the Gillespie Wing at Sacred Heart Greenwich, a K-12 all-girls school serving approximately 700 students.',
    selectedTeam: teamMembers.map(m => m.id),
    selectedProjects: projects.slice(0, 6).map(p => p.id),
  });

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const toggleTeam = (id) => {
    setForm(prev => ({
      ...prev,
      selectedTeam: prev.selectedTeam.includes(id)
        ? prev.selectedTeam.filter(x => x !== id)
        : [...prev.selectedTeam, id]
    }));
  };

  const toggleProject = (id) => {
    setForm(prev => ({
      ...prev,
      selectedProjects: prev.selectedProjects.includes(id)
        ? prev.selectedProjects.filter(x => x !== id)
        : [...prev.selectedProjects, id]
    }));
  };

  const handleGenerate = () => {
    onGenerate(form);
    navigate('/editor');
  };

  const projectTypes = ['Education', 'Commercial', 'Healthcare', 'Municipal', 'Multifamily', 'Private Club', 'Senior Living'];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#333] mb-1">Proposal Setup</h1>
        <p className="text-sm text-[#919191]">Configure your proposal, then generate the document.</p>
      </div>

      <div className="bg-white rounded-lg border border-[#e1e1e1] p-6 mb-6">
        <h2 className="text-base font-bold text-[#333] mb-4">Project Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#666] mb-1">Project Name</label>
            <input
              type="text"
              value={form.projectName}
              onChange={e => handleChange('projectName', e.target.value)}
              className="w-full border border-[#e1e1e1] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#990000]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#666] mb-1">Project Location</label>
            <input
              type="text"
              value={form.projectLocation}
              onChange={e => handleChange('projectLocation', e.target.value)}
              className="w-full border border-[#e1e1e1] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#990000]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#666] mb-1">Project Type</label>
            <select
              value={form.projectType}
              onChange={e => handleChange('projectType', e.target.value)}
              className="w-full border border-[#e1e1e1] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#990000]"
            >
              {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#666] mb-1">Architect</label>
            <input
              type="text"
              value={form.architect}
              onChange={e => handleChange('architect', e.target.value)}
              className="w-full border border-[#e1e1e1] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#990000]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#666] mb-1">Client Name</label>
            <input
              type="text"
              value={form.clientName}
              onChange={e => handleChange('clientName', e.target.value)}
              className="w-full border border-[#e1e1e1] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#990000]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#666] mb-1">Client Contact Name</label>
            <input
              type="text"
              value={form.clientContact}
              onChange={e => handleChange('clientContact', e.target.value)}
              className="w-full border border-[#e1e1e1] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#990000]"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-semibold text-[#666] mb-1">Client Contact Title</label>
            <input
              type="text"
              value={form.clientTitle}
              onChange={e => handleChange('clientTitle', e.target.value)}
              className="w-full border border-[#e1e1e1] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#990000]"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-semibold text-[#666] mb-1">Project Description</label>
            <textarea
              value={form.description}
              onChange={e => handleChange('description', e.target.value)}
              rows={3}
              className="w-full border border-[#e1e1e1] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#990000]"
            />
          </div>
        </div>
      </div>

      {/* Team Selection */}
      <div className="bg-white rounded-lg border border-[#e1e1e1] p-6 mb-6">
        <h2 className="text-base font-bold text-[#333] mb-1">Select Team Members</h2>
        <p className="text-xs text-[#919191] mb-4">{form.selectedTeam.length} of {teamMembers.length} selected</p>
        <div className="grid grid-cols-2 gap-2">
          {teamMembers.map(m => (
            <label
              key={m.id}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                form.selectedTeam.includes(m.id)
                  ? 'border-[#990000] bg-[#990000]/5'
                  : 'border-[#e1e1e1] hover:bg-[#f3f3f3]'
              }`}
            >
              <input
                type="checkbox"
                checked={form.selectedTeam.includes(m.id)}
                onChange={() => toggleTeam(m.id)}
                className="accent-[#990000]"
              />
              <InitialsAvatar initials={m.initials} size={32} phase={m.phase} />
              <div>
                <div className="text-sm font-semibold text-[#333]">{m.name}</div>
                <div className="text-[10px] text-[#919191]">{m.teamRole}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Project Selection */}
      <div className="bg-white rounded-lg border border-[#e1e1e1] p-6 mb-6">
        <h2 className="text-base font-bold text-[#333] mb-1">Select Project References</h2>
        <p className="text-xs text-[#919191] mb-4">{form.selectedProjects.length} of {projects.length} selected</p>
        <div className="grid grid-cols-2 gap-2">
          {projects.map(p => (
            <label
              key={p.id}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                form.selectedProjects.includes(p.id)
                  ? 'border-[#990000] bg-[#990000]/5'
                  : 'border-[#e1e1e1] hover:bg-[#f3f3f3]'
              }`}
            >
              <input
                type="checkbox"
                checked={form.selectedProjects.includes(p.id)}
                onChange={() => toggleProject(p.id)}
                className="accent-[#990000]"
              />
              <div>
                <div className="text-sm font-semibold text-[#333]">{p.name}</div>
                <div className="text-[10px] text-[#919191]">{p.location} — {p.contractValue}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handleGenerate}
        className="w-full bg-[#990000] text-white text-lg font-bold py-4 rounded-lg hover:bg-[#770000] transition-colors shadow-lg"
      >
        Generate Proposal →
      </button>
    </div>
  );
}
