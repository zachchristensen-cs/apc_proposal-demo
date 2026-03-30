import { teamMembers } from './team';
import { projects } from './projects';

export function generateDefaultPages(formData) {
  const selectedTeam = teamMembers.filter(m => formData.selectedTeam.includes(m.id));
  const selectedProjects = projects.filter(p => formData.selectedProjects.includes(p.id));

  // Generate team resume card pages (2 per page)
  const resumePages = [];
  for (let i = 0; i < selectedTeam.length; i += 2) {
    const pair = selectedTeam.slice(i, i + 2);
    resumePages.push({
      id: `resume-${i}`,
      type: 'team-resume',
      name: `Team Resume: ${pair.map(m => m.name.split(' ').pop()).join(' & ')}`,
      orientation: 'portrait',
      visible: true,
      members: pair,
      category: 'Team',
    });
  }

  // Generate case study pages for first 3 selected projects
  const caseStudyProjects = selectedProjects.slice(0, 3);
  const caseStudyPages = caseStudyProjects.map(p => ({
    id: `case-${p.id}`,
    type: 'case-study',
    name: `Case Study: ${p.name}`,
    orientation: 'portrait',
    visible: true,
    project: p,
    category: 'Projects',
  }));

  return [
    { id: 'cover', type: 'cover', name: 'Cover Page', orientation: 'portrait', visible: true, category: 'Cover & Intro' },
    { id: 'cover-letter', type: 'cover-letter', name: 'Cover Letter', orientation: 'portrait', visible: true, category: 'Cover & Intro' },
    { id: 'toc', type: 'toc', name: 'Table of Contents', orientation: 'portrait', visible: true, category: 'Cover & Intro' },
    { id: 'div-company', type: 'section-divider', name: 'Section: Company Profile', orientation: 'portrait', visible: true, sectionNumber: 1, sectionTitle: 'Company Profile', category: 'Structure' },
    { id: 'company-1', type: 'company-overview', name: 'Company Overview', orientation: 'portrait', visible: true, category: 'Company' },
    { id: 'company-2', type: 'company-overview-p2', name: 'Company Overview (cont.)', orientation: 'portrait', visible: true, category: 'Company' },
    { id: 'div-team', type: 'section-divider', name: 'Section: Proposed Project Team', orientation: 'portrait', visible: true, sectionNumber: 2, sectionTitle: 'Proposed Project Team', category: 'Structure' },
    { id: 'team-overview', type: 'team-overview', name: 'Team Overview', orientation: 'portrait', visible: true, category: 'Team' },
    { id: 'org-chart', type: 'org-chart', name: 'Organizational Chart', orientation: 'landscape', visible: true, category: 'Team' },
    ...resumePages,
    { id: 'div-projects', type: 'section-divider', name: 'Section: Representative Projects', orientation: 'portrait', visible: true, sectionNumber: 3, sectionTitle: 'Representative Projects & References', category: 'Structure' },
    { id: 'project-refs', type: 'project-refs', name: 'Project References', orientation: 'portrait', visible: true, category: 'Projects' },
    ...caseStudyPages,
    { id: 'div-approach', type: 'section-divider', name: 'Section: Experience & Approach', orientation: 'portrait', visible: true, sectionNumber: 4, sectionTitle: 'Experience & Project Approach', category: 'Structure' },
    { id: 'precon-approach', type: 'precon-approach', name: 'Preconstruction Approach', orientation: 'portrait', visible: true, category: 'Approach' },
    { id: 'construction-approach', type: 'construction-approach', name: 'Construction Approach', orientation: 'portrait', visible: true, category: 'Approach' },
    { id: 'logistics', type: 'logistics', name: 'Logistics Plan — Demolition', orientation: 'landscape', visible: true, phaseName: 'Demolition Phase', category: 'Approach' },
    { id: 'div-qaqc', type: 'section-divider', name: 'Section: Quality Assurance', orientation: 'portrait', visible: true, sectionNumber: 5, sectionTitle: 'Quality Assurance & Control', category: 'Structure' },
    { id: 'qaqc', type: 'qaqc', name: 'QA/QC', orientation: 'portrait', visible: true, category: 'Forms & Data' },
    { id: 'div-forms', type: 'section-divider', name: 'Section: Proposal Forms', orientation: 'portrait', visible: true, sectionNumber: 6, sectionTitle: 'Proposal Forms', category: 'Structure' },
    { id: 'cost-proposal', type: 'cost-proposal', name: 'Cost Proposal', orientation: 'portrait', visible: true, category: 'Forms & Data' },
    { id: 'staffing-precon', type: 'staffing-matrix', name: 'Staffing Matrix — Precon', orientation: 'landscape', visible: true, phase: 'preconstruction', category: 'Forms & Data' },
    { id: 'staffing-construction', type: 'staffing-matrix', name: 'Staffing Matrix — Construction', orientation: 'landscape', visible: true, phase: 'construction', category: 'Forms & Data' },
    { id: 'back-cover', type: 'back-cover', name: 'Back Cover', orientation: 'portrait', visible: true, category: 'Cover & Intro' },
  ];
}

export const templateLibrary = [
  { category: 'Cover & Intro', templates: [
    { type: 'cover', name: 'Cover Page', description: 'Project cover with hero image and contact info', icon: '📄' },
    { type: 'cover-letter', name: 'Cover Letter', description: 'Formal letter with dual signatures', icon: '✉️' },
    { type: 'toc', name: 'Table of Contents', description: 'Auto-generated from page stack', icon: '📑' },
    { type: 'back-cover', name: 'Back Cover', description: 'APC branding and contact', icon: '📕' },
  ]},
  { category: 'Company', templates: [
    { type: 'company-overview', name: 'Company Overview', description: 'Infographic + qualifications', icon: '🏢' },
    { type: 'company-overview-p2', name: 'Company Overview p2', description: 'Open shop, contact, license', icon: '🏢' },
  ]},
  { category: 'Team', templates: [
    { type: 'team-overview', name: 'Team Overview', description: '"Why This Team" with bios', icon: '👥' },
    { type: 'org-chart', name: 'Org Chart', description: 'Hierarchical team layout (landscape)', icon: '🔗' },
    { type: 'team-resume', name: 'Team Resume Cards', description: '2-up resume cards per page', icon: '📋', needsConfig: 'team' },
  ]},
  { category: 'Projects', templates: [
    { type: 'project-refs', name: 'Project References Grid', description: 'Reference cards with contacts', icon: '📊' },
    { type: 'case-study', name: 'Case Study', description: 'Detailed project sheet', icon: '📐', needsConfig: 'project' },
  ]},
  { category: 'Approach', templates: [
    { type: 'precon-approach', name: 'Preconstruction Approach', description: 'Budgeting, VE, logistics', icon: '📝' },
    { type: 'construction-approach', name: 'Construction Approach', description: 'Field ops, safety, QC', icon: '🔨' },
    { type: 'logistics', name: 'Logistics Plan', description: 'Phase logistics rendering (landscape)', icon: '🗺️', needsConfig: 'phase' },
  ]},
  { category: 'Forms & Data', templates: [
    { type: 'cost-proposal', name: 'Cost Proposal', description: 'Fee structure and pricing form', icon: '💰' },
    { type: 'staffing-matrix', name: 'Staffing Matrix', description: 'Team allocation by month (landscape)', icon: '📅', needsConfig: 'staffingPhase' },
    { type: 'qaqc', name: 'QA/QC', description: 'Quality assurance program', icon: '✅' },
  ]},
  { category: 'Structure', templates: [
    { type: 'section-divider', name: 'Section Divider', description: 'Full-bleed section break', icon: '➖', needsConfig: 'section' },
  ]},
];
