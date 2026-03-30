import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { teamMembers } from '../data/team';
import { projects } from '../data/projects';
import { generateDefaultPages, templateLibrary } from '../data/defaultPages';

// Page components
import CoverPage from '../components/pages/CoverPage';
import CoverLetter from '../components/pages/CoverLetter';
import TableOfContents from '../components/pages/TableOfContents';
import SectionDivider from '../components/pages/SectionDivider';
import CompanyOverview from '../components/pages/CompanyOverview';
import CompanyOverviewP2 from '../components/pages/CompanyOverviewP2';
import TeamOverview from '../components/pages/TeamOverview';
import OrgChart from '../components/pages/OrgChart';
import TeamResumeCards from '../components/pages/TeamResumeCards';
import ProjectRefsGrid from '../components/pages/ProjectRefsGrid';
import CaseStudy from '../components/pages/CaseStudy';
import CostProposal from '../components/pages/CostProposal';
import PreconApproach from '../components/pages/PreconApproach';
import ConstructionApproach from '../components/pages/ConstructionApproach';
import LogisticsPage from '../components/pages/LogisticsPage';
import QAQC from '../components/pages/QAQC';
import StaffingMatrix from '../components/pages/StaffingMatrix';
import BackCover from '../components/pages/BackCover';

const defaultFormData = {
  projectName: 'Sacred Heart Greenwich — New STEM Building',
  projectLocation: '1177 King Street, Greenwich, CT',
  projectType: 'Education',
  clientName: 'Sacred Heart Greenwich',
  clientContact: 'Jim Giuliano',
  clientTitle: 'Chief Financial Officer / Chief Operating Officer',
  architect: 'Perkins Eastman',
  description: 'Construction Management services for the new STEM Building and renovations to the Gillespie Wing at Sacred Heart Greenwich.',
  selectedTeam: teamMembers.map(m => m.id),
  selectedProjects: projects.slice(0, 6).map(p => p.id),
};

export default function ProposalEditor({ proposalData }) {
  const navigate = useNavigate();
  const formData = proposalData || defaultFormData;
  const [pages, setPages] = useState(() => generateDefaultPages(formData));
  const [previewMode, setPreviewMode] = useState(false);
  const [showTemplatePicker, setShowTemplatePicker] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(null);
  const [selectedPageId, setSelectedPageId] = useState(null);

  const selectedTeam = teamMembers.filter(m => formData.selectedTeam.includes(m.id));
  const selectedProjects = projects.filter(p => formData.selectedProjects.includes(p.id));

  const visiblePages = pages.filter(p => p.visible);

  const togglePageVisibility = (id) => {
    setPages(prev => prev.map(p => p.id === id ? { ...p, visible: !p.visible } : p));
  };

  const removePage = (id) => {
    setPages(prev => prev.filter(p => p.id !== id));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(pages);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);
    setPages(items);
  };

  const addPageFromTemplate = (template) => {
    if (template.needsConfig) {
      setShowConfigModal(template);
      setShowTemplatePicker(false);
      return;
    }
    const newPage = createPageFromTemplate(template);
    if (newPage) {
      setPages(prev => [...prev, newPage]);
    }
    setShowTemplatePicker(false);
  };

  const createPageFromTemplate = (template, config) => {
    const id = `${template.type}-${Date.now()}`;
    const base = { id, type: template.type, name: template.name, visible: true, category: template.category || 'Custom' };

    switch (template.type) {
      case 'cover': return { ...base, orientation: 'portrait' };
      case 'cover-letter': return { ...base, orientation: 'portrait' };
      case 'toc': return { ...base, orientation: 'portrait' };
      case 'back-cover': return { ...base, orientation: 'portrait' };
      case 'company-overview': return { ...base, orientation: 'portrait' };
      case 'company-overview-p2': return { ...base, orientation: 'portrait' };
      case 'team-overview': return { ...base, orientation: 'portrait' };
      case 'org-chart': return { ...base, orientation: 'landscape' };
      case 'project-refs': return { ...base, orientation: 'portrait' };
      case 'precon-approach': return { ...base, orientation: 'portrait' };
      case 'construction-approach': return { ...base, orientation: 'portrait' };
      case 'qaqc': return { ...base, orientation: 'portrait' };
      case 'cost-proposal': return { ...base, orientation: 'portrait' };
      case 'section-divider':
        return { ...base, orientation: 'portrait', sectionNumber: config?.number || 7, sectionTitle: config?.title || 'New Section', name: `Section: ${config?.title || 'New Section'}` };
      case 'case-study':
        const proj = config?.project || selectedProjects[0];
        return { ...base, orientation: 'portrait', project: proj, name: `Case Study: ${proj?.name || 'Project'}` };
      case 'team-resume':
        const members = config?.members || selectedTeam.slice(0, 2);
        return { ...base, orientation: 'portrait', members, name: `Resume: ${members.map(m => m.name.split(' ').pop()).join(' & ')}` };
      case 'logistics':
        return { ...base, orientation: 'landscape', phaseName: config?.phase || 'New Phase' };
      case 'staffing-matrix':
        return { ...base, orientation: 'landscape', phase: config?.phase || 'preconstruction', name: `Staffing — ${config?.phase || 'Preconstruction'}` };
      default: return { ...base, orientation: 'portrait' };
    }
  };

  const handleConfigSubmit = (config) => {
    if (showConfigModal) {
      const newPage = createPageFromTemplate(showConfigModal, config);
      if (newPage) {
        setPages(prev => [...prev, newPage]);
      }
    }
    setShowConfigModal(null);
  };

  const renderPage = (page) => {
    const data = formData;
    switch (page.type) {
      case 'cover': return <CoverPage data={data} />;
      case 'cover-letter': return <CoverLetter data={data} />;
      case 'toc': return <TableOfContents pages={visiblePages} />;
      case 'section-divider': return <SectionDivider sectionNumber={page.sectionNumber} sectionTitle={page.sectionTitle} />;
      case 'company-overview': return <CompanyOverview data={data} />;
      case 'company-overview-p2': return <CompanyOverviewP2 data={data} />;
      case 'team-overview': return <TeamOverview data={data} selectedTeam={selectedTeam} />;
      case 'org-chart': return <OrgChart data={data} selectedTeam={selectedTeam} />;
      case 'team-resume': return <TeamResumeCards members={page.members} />;
      case 'project-refs': return <ProjectRefsGrid data={data} selectedProjects={selectedProjects} />;
      case 'case-study': return <CaseStudy project={page.project} />;
      case 'cost-proposal': return <CostProposal data={data} />;
      case 'precon-approach': return <PreconApproach data={data} />;
      case 'construction-approach': return <ConstructionApproach data={data} />;
      case 'logistics': return <LogisticsPage data={data} phaseName={page.phaseName} />;
      case 'qaqc': return <QAQC data={data} />;
      case 'staffing-matrix': return <StaffingMatrix data={data} selectedTeam={selectedTeam} phase={page.phase} />;
      case 'back-cover': return <BackCover />;
      default: return <div className="p-8 text-center text-gray-400">Unknown page type: {page.type}</div>;
    }
  };

  const handleExportPDF = () => window.print();

  const pageTypeIcons = {
    'cover': '📄', 'cover-letter': '✉️', 'toc': '📑', 'section-divider': '➖',
    'company-overview': '🏢', 'company-overview-p2': '🏢', 'team-overview': '👥',
    'org-chart': '🔗', 'team-resume': '📋', 'project-refs': '📊',
    'case-study': '📐', 'cost-proposal': '💰', 'precon-approach': '📝',
    'construction-approach': '🔨', 'logistics': '🗺️', 'qaqc': '✅',
    'staffing-matrix': '📅', 'back-cover': '📕',
  };

  return (
    <div className={`editor-wrapper flex h-[calc(100vh-49px)] ${previewMode ? 'preview-mode' : ''}`}>
      {/* Sidebar */}
      <div className="editor-sidebar no-print w-[280px] bg-[#1a1a1a] flex flex-col shrink-0">
        <div className="p-3 border-b border-white/10">
          <h3 className="text-white/90 text-xs font-bold uppercase tracking-wider">Page Stack</h3>
          <span className="text-white/40 text-[10px]">{visiblePages.length} pages visible</span>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="pages">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex-1 overflow-y-auto sidebar-scroll p-2"
              >
                {pages.map((page, index) => (
                  <Draggable key={page.id} draggableId={page.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className={`flex items-center gap-2 p-2 rounded mb-1 text-[11px] group transition-colors ${
                          snapshot.isDragging ? 'bg-white/20' :
                          selectedPageId === page.id ? 'bg-white/15' :
                          page.visible ? 'bg-white/5 hover:bg-white/10' : 'bg-white/[0.02] opacity-50'
                        }`}
                        onClick={() => {
                          setSelectedPageId(page.id);
                          const el = document.getElementById(`page-${page.id}`);
                          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                      >
                        <span {...provided.dragHandleProps} className="text-white/30 cursor-grab hover:text-white/60 shrink-0">⠿</span>
                        <span className="shrink-0">{pageTypeIcons[page.type] || '📄'}</span>
                        <span className={`flex-1 truncate ${page.visible ? 'text-white/80' : 'text-white/30 line-through'}`}>
                          {page.name}
                        </span>
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={(e) => { e.stopPropagation(); togglePageVisibility(page.id); }}
                            className={`text-[10px] px-1 rounded ${page.visible ? 'text-white/60 hover:text-white' : 'text-white/30 hover:text-white/60'}`}
                            title={page.visible ? 'Hide page' : 'Show page'}
                          >
                            {page.visible ? '👁' : '👁‍🗨'}
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); removePage(page.id); }}
                            className="text-[10px] px-1 text-white/30 hover:text-red-400 rounded"
                            title="Remove page"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div className="p-3 border-t border-white/10">
          <button
            onClick={() => setShowTemplatePicker(true)}
            className="w-full bg-white/10 text-white/80 text-xs font-semibold py-2 rounded hover:bg-white/20 transition-colors mb-2"
          >
            + Add Page
          </button>
          <button
            onClick={handleExportPDF}
            className="w-full bg-[#990000] text-white text-xs font-semibold py-2 rounded hover:bg-[#770000] transition-colors mb-2"
          >
            Export PDF
          </button>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-[10px] text-white/60 cursor-pointer">
              <input
                type="checkbox"
                checked={previewMode}
                onChange={e => setPreviewMode(e.target.checked)}
                className="accent-[#990000]"
              />
              Preview Mode
            </label>
            <button
              onClick={() => navigate('/setup')}
              className="text-[10px] text-white/40 hover:text-white/70 underline"
            >
              Back to Setup
            </button>
          </div>
        </div>
      </div>

      {/* Main Document Preview */}
      <div className="editor-main flex-1 overflow-y-auto bg-[#e8e8e8] p-8">
        {visiblePages.map(page => (
          <div key={page.id} id={`page-${page.id}`}>
            {renderPage(page)}
          </div>
        ))}
      </div>

      {/* Template Picker Modal */}
      {showTemplatePicker && (
        <div className="template-modal fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowTemplatePicker(false)}>
          <div className="bg-white rounded-xl shadow-2xl w-[700px] max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-5 border-b border-[#e1e1e1] flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#333]">Add Page Template</h2>
                <p className="text-xs text-[#919191]">Choose a template to add to your proposal</p>
              </div>
              <button onClick={() => setShowTemplatePicker(false)} className="text-[#999] hover:text-[#333] text-xl">✕</button>
            </div>
            <div className="overflow-y-auto max-h-[60vh] p-5">
              {templateLibrary.map(cat => (
                <div key={cat.category} className="mb-6">
                  <h3 className="text-xs font-bold text-[#990000] uppercase tracking-wider mb-3">{cat.category}</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {cat.templates.map(t => (
                      <button
                        key={t.type}
                        onClick={() => addPageFromTemplate(t)}
                        className="text-left p-3 border border-[#e1e1e1] rounded-lg hover:border-[#990000] hover:shadow-md transition-all group"
                      >
                        <div className="text-2xl mb-2">{t.icon}</div>
                        <div className="text-sm font-semibold text-[#333] group-hover:text-[#990000]">{t.name}</div>
                        <div className="text-[10px] text-[#919191] mt-0.5">{t.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Config Modal for templates that need configuration */}
      {showConfigModal && (
        <ConfigModal
          template={showConfigModal}
          selectedTeam={selectedTeam}
          selectedProjects={selectedProjects}
          onSubmit={handleConfigSubmit}
          onCancel={() => setShowConfigModal(null)}
        />
      )}
    </div>
  );
}

function ConfigModal({ template, selectedTeam, selectedProjects, onSubmit, onCancel }) {
  const [sectionNumber, setSectionNumber] = useState(7);
  const [sectionTitle, setSectionTitle] = useState('');
  const [selectedProject, setSelectedProject] = useState(selectedProjects[0]?.id || '');
  const [selectedMembers, setSelectedMembers] = useState(selectedTeam.slice(0, 2).map(m => m.id));
  const [phaseName, setPhaseName] = useState('');
  const [staffingPhase, setStaffingPhase] = useState('preconstruction');

  const handleSubmit = () => {
    switch (template.needsConfig) {
      case 'section':
        onSubmit({ number: sectionNumber, title: sectionTitle || 'New Section' });
        break;
      case 'project':
        const proj = selectedProjects.find(p => p.id === selectedProject) || selectedProjects[0];
        onSubmit({ project: proj });
        break;
      case 'team':
        const members = selectedTeam.filter(m => selectedMembers.includes(m.id)).slice(0, 2);
        onSubmit({ members });
        break;
      case 'phase':
        onSubmit({ phase: phaseName || 'New Phase' });
        break;
      case 'staffingPhase':
        onSubmit({ phase: staffingPhase });
        break;
      default:
        onSubmit({});
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onCancel}>
      <div className="bg-white rounded-xl shadow-2xl w-[400px] p-6" onClick={e => e.stopPropagation()}>
        <h3 className="text-lg font-bold text-[#333] mb-4">Configure: {template.name}</h3>

        {template.needsConfig === 'section' && (
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-[#666] mb-1">Section Number</label>
              <input type="number" value={sectionNumber} onChange={e => setSectionNumber(+e.target.value)}
                className="w-full border border-[#e1e1e1] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#990000]" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#666] mb-1">Section Title</label>
              <input type="text" value={sectionTitle} onChange={e => setSectionTitle(e.target.value)}
                placeholder="e.g. Appendix"
                className="w-full border border-[#e1e1e1] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#990000]" />
            </div>
          </div>
        )}

        {template.needsConfig === 'project' && (
          <div>
            <label className="block text-xs font-semibold text-[#666] mb-1">Select Project</label>
            <select value={selectedProject} onChange={e => setSelectedProject(e.target.value)}
              className="w-full border border-[#e1e1e1] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#990000]">
              {selectedProjects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
        )}

        {template.needsConfig === 'team' && (
          <div>
            <label className="block text-xs font-semibold text-[#666] mb-2">Select 2 Team Members</label>
            <div className="space-y-1 max-h-48 overflow-y-auto">
              {selectedTeam.map(m => (
                <label key={m.id} className="flex items-center gap-2 p-2 rounded hover:bg-[#f3f3f3] cursor-pointer">
                  <input type="checkbox" checked={selectedMembers.includes(m.id)}
                    onChange={() => {
                      setSelectedMembers(prev =>
                        prev.includes(m.id) ? prev.filter(x => x !== m.id) : [...prev, m.id].slice(-2)
                      );
                    }}
                    className="accent-[#990000]" />
                  <span className="text-sm">{m.name}</span>
                  <span className="text-[10px] text-[#919191]">{m.teamRole}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {template.needsConfig === 'phase' && (
          <div>
            <label className="block text-xs font-semibold text-[#666] mb-1">Phase Name</label>
            <input type="text" value={phaseName} onChange={e => setPhaseName(e.target.value)}
              placeholder="e.g. Foundation Phase"
              className="w-full border border-[#e1e1e1] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#990000]" />
          </div>
        )}

        {template.needsConfig === 'staffingPhase' && (
          <div>
            <label className="block text-xs font-semibold text-[#666] mb-1">Staffing Phase</label>
            <select value={staffingPhase} onChange={e => setStaffingPhase(e.target.value)}
              className="w-full border border-[#e1e1e1] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#990000]">
              <option value="preconstruction">Preconstruction</option>
              <option value="construction">Construction</option>
            </select>
          </div>
        )}

        <div className="flex gap-3 mt-6">
          <button onClick={handleSubmit}
            className="flex-1 bg-[#990000] text-white py-2 rounded text-sm font-semibold hover:bg-[#770000]">
            Add Page
          </button>
          <button onClick={onCancel}
            className="flex-1 border border-[#e1e1e1] text-[#666] py-2 rounded text-sm hover:bg-[#f3f3f3]">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
