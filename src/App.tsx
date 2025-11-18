import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useThemeStore } from './store/themeStore';
import './index.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AssessmentPage from './pages/AssessmentPage';
import GroupsPage from './pages/GroupsPage';
import NotFoundPage from './pages/NotFoundPage';

// Layout Components
import ProtectedRoute from './components/ProtectedRoute';
import StudentLayout from './components/StudentLayout';
import TeacherLayout from './components/TeacherLayout';

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    // Apply initial theme
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.body.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.body.classList.remove('light');
    }
  }, [theme]);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : 'light'}`}>
        {/* Starfield Background */}
        <div className="starfield" />
        
        {/* Header with Theme Toggle */}
        <Header>
          <ThemeToggle />
        </Header>

        {/* Main Content */}
        <main className="flex-grow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-full"
          >
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* Protected Student Routes */}
              <Route
                path="/student/*"
                element={
                  <ProtectedRoute requiredRole="student">
                    <StudentLayout>
                      <Routes>
                        <Route path="/dashboard" element={<StudentDashboard />} />
                        <Route path="/assessment" element={<AssessmentPage />} />
                        <Route path="/groups" element={<GroupsPage />} />
                        <Route path="/" element={<Navigate to="/student/dashboard" replace />} />
                      </Routes>
                    </StudentLayout>
                  </ProtectedRoute>
                }
              />

              {/* Protected Teacher Routes */}
              <Route
                path="/teacher/*"
                element={
                  <ProtectedRoute requiredRole="teacher">
                    <TeacherLayout>
                      <Routes>
                        <Route path="/dashboard" element={<TeacherDashboard />} />
                        <Route path="/groups" element={<GroupsPage />} />
                        <Route path="/" element={<Navigate to="/teacher/dashboard" replace />} />
                      </Routes>
                    </TeacherLayout>
                  </ProtectedRoute>
                }
              />

              {/* 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
