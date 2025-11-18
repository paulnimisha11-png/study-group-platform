import React from 'react';
import { Outlet } from 'react-router-dom';
import { BaseComponentProps } from '../types';

interface TeacherLayoutProps extends BaseComponentProps {}

const TeacherLayout: React.FC<TeacherLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 glass-card border-r border-space-light/20 p-4">
        <h2 className="text-xl font-bold text-glow mb-6">Teacher Portal</h2>
        <nav className="space-y-2">
          <a href="/teacher/dashboard" className="block p-3 rounded-lg hover:bg-space-medium/50 transition-colors">
            Dashboard
          </a>
          <a href="/teacher/groups" className="block p-3 rounded-lg hover:bg-space-medium/50 transition-colors">
            Manage Groups
          </a>
          <a href="/teacher/analytics" className="block p-3 rounded-lg hover:bg-space-medium/50 transition-colors">
            Analytics
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default TeacherLayout;
