import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { useState } from 'react';
import APCLogo from './components/shared/APCLogo';
import CMSView from './views/CMSView';
import ProposalSetup from './views/ProposalSetup';
import ProposalEditor from './views/ProposalEditor';

function App() {
  const [proposalData, setProposalData] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Nav */}
      <nav className="no-print bg-white border-b border-[#e1e1e1] px-6 py-0 flex items-center gap-8 sticky top-0 z-50 shadow-sm">
        <div className="py-2">
          <APCLogo size="sm" />
        </div>
        <div className="flex items-center gap-1 ml-4">
          <NavLink
            to="/cms"
            className={({ isActive }) =>
              `px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                isActive
                  ? 'border-[#990000] text-[#990000]'
                  : 'border-transparent text-[#666] hover:text-[#333] hover:border-[#ccc]'
              }`
            }
          >
            Content Library
          </NavLink>
          <NavLink
            to="/setup"
            className={({ isActive }) =>
              `px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                isActive
                  ? 'border-[#990000] text-[#990000]'
                  : 'border-transparent text-[#666] hover:text-[#333] hover:border-[#ccc]'
              }`
            }
          >
            Proposal Setup
          </NavLink>
          <NavLink
            to="/editor"
            className={({ isActive }) =>
              `px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                isActive
                  ? 'border-[#990000] text-[#990000]'
                  : 'border-transparent text-[#666] hover:text-[#333] hover:border-[#ccc]'
              }`
            }
          >
            Proposal Editor
          </NavLink>
        </div>
        <div className="ml-auto text-[10px] text-[#919191] italic">
          Integrity | Quality | Efficiency | Savings
        </div>
      </nav>

      {/* Routes */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/cms" replace />} />
          <Route path="/cms" element={<CMSView />} />
          <Route path="/setup" element={<ProposalSetup onGenerate={setProposalData} />} />
          <Route path="/editor" element={<ProposalEditor proposalData={proposalData} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
