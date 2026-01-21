import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAssessment, ASSESSMENT_STEPS } from '../../context/AssessmentContext';
import { getQuestionsByTrack } from '../../data/mockQuiz';
import areeb from '../../assets/icons/areeb-logo.svg';

// Neon Effect Component
const NeonEffect = ({ className, variant = "default" }) => {
  const colors = {
    default: "bg-violet-600/30",
    variant2: "bg-cyan-400/30",
    variant3: "bg-indigo-600/30",
    variant4: "bg-fuchsia-400/30"
  };
  return <div className={`absolute blur-[100px] rounded-full pointer-events-none -z-10 ${colors[variant]} ${className}`} />;
};

function Logo({ className }) {
  return <img src={areeb} alt="Areeb Logo" className={className} />;
}

// Icons
const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckCircle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Answer Option Component
const AnswerOption = ({ answer, isSelected, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(answer.id)}
      className={`w-full p-5 rounded-xl border-2 transition-all text-left flex items-center gap-4 group ${
        isSelected
          ? 'bg-gradient-to-r from-[#7033FF]/20 to-[#B899FF]/20 border-[#7033FF] shadow-[0_0_15px_rgba(112,51,255,0.3)]'
          : 'bg-white/5 border-[#EAEDFA]/20 hover:border-[#B899FF]/50 hover:bg-white/10'
      }`}
    >
      {/* Radio Button */}
      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
        isSelected
          ? 'border-[#7033FF] bg-[#7033FF]'
          : 'border-[#EAEDFA]/40 group-hover:border-[#B899FF]'
      }`}>
        {isSelected && (
          <div className="w-3 h-3 rounded-full bg-white"></div>
        )}
      </div>
      
      {/* Answer Text */}
      <span className={`text-lg font-medium transition-colors ${
        isSelected ? 'text-[#EAEDFA]' : 'text-[#EAEDFA]/70 group-hover:text-[#EAEDFA]'
      }`}>
        {answer.text}
      </span>
    </button>
  );
};

// Question Card Component
const QuestionCard = ({ question, selectedAnswer, onSelectAnswer }) => {
  return (
    <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-8 backdrop-blur-sm">
      {/* Question Text */}
      <h3 className="text-2xl font-semibold font-['Space_Grotesk'] text-[#EAEDFA] mb-8">
        {question.question}
      </h3>

      {/* Answer Options */}
      <div className="space-y-4">
        {question.answers.map((answer) => (
          <AnswerOption
            key={answer.id}
            answer={answer}
            isSelected={selectedAnswer === answer.id}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
};

// Main Quick Skill Check Component
export default function QuickSkillCheck() {
  const navigate = useNavigate();
  const { selectedTrack, setQuickCheckResult, completeStep } = useAssessment();
  
  // TODO: In the future, get the track from AssessmentContext
  const [track] = useState(selectedTrack || 'frontend');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: In the future, this will be an API call to fetch quick check questions
    // based on the user's track
    const loadQuestions = async () => {
      setIsLoading(true);
      // Simulate API delay
      setTimeout(() => {
        const allQuestions = getQuestionsByTrack(track);
        // Take only first 3 questions for quick check
        const quickQuestions = allQuestions.slice(0, 3);
        setQuestions(quickQuestions);
        setIsLoading(false);
      }, 500);
    };

    loadQuestions();
  }, [track]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const hasSelectedAnswer = answers[currentQuestion?.id] !== undefined;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleSelectAnswer = (answerId) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: answerId
    });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Calculate score
      let score = 0;
      questions.forEach((question) => {
        const userAnswer = answers[question.id];
        const correctAnswer = question.answers.find(a => a.isCorrect);
        if (correctAnswer && userAnswer === correctAnswer.id) {
          score++;
        }
      });

      // Store results in context
      const result = {
        answers,
        score: Math.round((score / questions.length) * 100),
        completedAt: new Date().toISOString()
      };
      setQuickCheckResult(result);
      
      // Complete step 1 (Quick Skill Check)
      completeStep(ASSESSMENT_STEPS.QUICK_SKILL_CHECK);
      
      // TODO: In the future, send results to backend for AI analysis
      navigate('/assessment/topics-analysis');
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#0A0F2B]">
        <div className="text-[#EAEDFA] text-xl">Loading questions...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex bg-[#0A0F2B] font-['Plus_Jakarta_Sans']">
      
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#0A0F2B] opacity-20 z-10" />
        <NeonEffect className="w-[600px] h-[600px] -right-[200px] -top-[200px] opacity-90" variant="variant4" />
        <NeonEffect className="w-[500px] h-[500px] left-[-100px] top-[30%] opacity-80" variant="default" />
        <NeonEffect className="w-[400px] h-[400px] right-[5%] bottom-[-100px] opacity-60" variant="variant2" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col px-6 py-12">
        
        {/* Logo Header */}
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-3">
          <Logo className="w-8 h-8" />
          <span className="text-2xl font-semibold text-[#EAEDFA] font-['Space_Grotesk'] tracking-wide">
            AREEB
          </span>
        </Link>

        {/* Quiz Container */}
        <div className="max-w-[900px] w-full mx-auto mt-24">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] flex items-center justify-center shadow-[0_4px_30px_rgba(112,51,255,0.4)]">
                <CheckCircle />
              </div>
            </div>
            <h1 className="text-[48px] font-bold font-['Space_Grotesk'] text-[#EAEDFA] mb-4 leading-tight">
              Quick Skill Check
            </h1>
            <p className="text-xl text-[#EAEDFA]/70 max-w-[600px] mx-auto">
              Answer a few quick questions to help us understand your current proficiency level.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-[#EAEDFA]/60 font-medium">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <span className="text-sm text-[#EAEDFA]/60 font-medium">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          {currentQuestion && (
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={answers[currentQuestion.id]}
              onSelectAnswer={handleSelectAnswer}
            />
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="px-8 h-[56px] rounded-full border border-gray-600 text-white text-lg font-medium font-['Space_Grotesk'] hover:border-white hover:bg-white/5 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={!hasSelectedAnswer}
              className="flex-1 h-[56px] rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)] flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isLastQuestion ? 'Complete Quick Check' : 'Next Question'}
              <ArrowRight />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
