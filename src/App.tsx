<<<<<<< HEAD
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
=======
import { useState } from 'react';
import { useSudoku } from './hooks/useSudoku';
import { SudokuGrid } from './components/SudokuGrid';
import { SudokuControls } from './components/SudokuControls';
import { NumberPad } from './components/NumberPad';
import { SudokuStats } from './components/SudokuStats';
import { SudokuComplete } from './components/SudokuComplete';

function App() {
  const {
    gameState,
    elapsedTime,
    selectCell,
    inputNumber,
    getHint,
    checkSolution,
    resetGame,
    newGame,
  } = useSudoku();

  const [showGame, setShowGame] = useState(true);

  const completedCells = gameState.board.reduce((count, row, rowIdx) => {
    return (
      count +
      row.reduce((rowCount, cell, colIdx) => {
        if (cell !== null && gameState.initialBoard[rowIdx][colIdx] === null) {
          return rowCount + 1;
        }
        return rowCount;
      }, 0)
    );
  }, 0);

  const cellsToFill = Array.from({ length: 9 }, (_, i) =>
    Array.from({ length: 9 }, (_, j) => gameState.initialBoard[i][j])
  ).reduce((count, row) => count + row.filter(cell => cell === null).length, 0);

  if (!showGame) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center p-8">
        <div className="text-center">
          <button
            onClick={() => setShowGame(true)}
            className="text-white text-2xl font-bold hover:text-blue-400 transition-colors"
          >
            ← Back to Game
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Sudoku
        </h1>

        <div className="flex flex-wrap gap-6 justify-center items-start">
          <div>
            <SudokuGrid
              board={gameState.board}
              initialBoard={gameState.initialBoard}
              selectedCell={gameState.selectedCell}
              errors={gameState.errors}
              completedCells={gameState.completedCells}
              onCellClick={selectCell}
              onNumberInput={inputNumber}
            />
          </div>

          <div className="flex flex-col gap-6">
            <SudokuStats
              completedCells={completedCells}
              totalCells={cellsToFill}
              elapsedTime={elapsedTime}
              errors={gameState.errors.size}
            />

            <NumberPad onNumberClick={inputNumber} />

            <SudokuControls
              difficulty={gameState.difficulty}
              onReset={resetGame}
              onHint={getHint}
              onCheck={checkSolution}
              onDifficultyChange={newGame}
            />
          </div>
        </div>
      </div>

      {gameState.isComplete && (
        <SudokuComplete
          time={elapsedTime}
          difficulty={gameState.difficulty}
          onNewGame={() => newGame('easy')}
        />
      )}
    </div>
>>>>>>> b5351fd600bfec00c87b9341f96383d5cc4e3a64
  );
}

export default App;
