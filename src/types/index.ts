// User types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher';
  course?: string;
  year?: number;
  createdAt: Date;
  updatedAt: Date;
}

// Study Preferences
export interface StudyPreferences {
  id: string;
  userId: string;
  preferredStudyTime: 'morning' | 'afternoon' | 'evening' | 'night';
  preferredPlace: 'library' | 'dorm' | 'home' | 'cafe';
  preferredMethod: 'visual' | 'auditory' | 'kinesthetic' | 'reading';
  preferredSources: string[];
  personalityTraits: PersonalityTraits;
  learningStyle: LearningStyle;
  availability: AvailabilitySlot[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PersonalityTraits {
  mbti?: string;
  bigFive?: {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
  };
}

export interface LearningStyle {
  visualLearner: boolean;
  auditoryLearner: boolean;
  kinestheticLearner: boolean;
  readingLearner: boolean;
  groupPreference: 'individual' | 'pair' | 'small_group' | 'large_group';
  pace: 'slow' | 'moderate' | 'fast';
  structure: 'highly_structured' | 'semi_structured' | 'flexible';
}

export interface AvailabilitySlot {
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
}

// Group types
export interface StudyGroup {
  id: string;
  name: string;
  teacherId: string;
  description?: string;
  groupType: 'pair' | 'small_group' | 'large_group';
  maxMembers: number;
  creationAlgorithm: GroupingConfig;
  createdAt: Date;
  updatedAt: Date;
}

export interface GroupMember {
  id: string;
  groupId: string;
  studentId: string;
  compatibilityScore: number; // 0.00 to 1.00
  roleInGroup?: string;
  joinedAt: Date;
}

export interface GroupRequest {
  id: string;
  teacherId: string;
  requestType: 'pairs' | 'small_groups' | 'large_groups';
  criteria: GroupingCriteria;
  targetStudents?: string[];
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: Date;
  completedAt?: Date;
}

export interface GroupingCriteria {
  groupSize: number;
  diversityWeight: number;
  similarityWeight: number;
  teacherPriority: number;
  maxGroups?: number;
  specificConstraints?: {
    includeStudents?: string[];
    excludeStudents?: string[];
    requireDiversity?: boolean;
    balancePerformance?: boolean;
  };
}

export interface GroupingConfig {
  groupSize: number;
  diversityWeight: number;
  similarityWeight: number;
  teacherPriority: number;
  maxGroups: number;
  algorithm: 'similarity' | 'complementarity' | 'hybrid';
}

// UI State types
export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  theme: 'dark' | 'light';
  loading: boolean;
  error: string | null;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface AssessmentState {
  currentStep: number;
  isCompleted: boolean;
  responses: AssessmentResponse[];
}

export interface AssessmentResponse {
  questionId: string;
  answer: string | string[] | number | boolean;
  timestamp: Date;
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  role: 'student' | 'teacher';
  course?: string;
  year?: number;
}

export interface StudyPreferenceForm {
  preferredStudyTime: string;
  preferredPlace: string;
  preferredMethod: string;
  preferredSources: string[];
  personalityType: string;
  learningStyle: {
    visualLearner: boolean;
    auditoryLearner: boolean;
    kinestheticLearner: boolean;
    readingLearner: boolean;
  };
  groupPreference: string;
  pace: string;
  structure: string;
  availability: AvailabilitySlot[];
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Navigation types
export type NavigationItem = {
  name: string;
  href: string;
  icon: string;
  requireAuth?: boolean;
  roles?: ('student' | 'teacher')[];
};

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps extends BaseComponentProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  hoverable?: boolean;
}
