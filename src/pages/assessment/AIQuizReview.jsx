import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAssessment } from '../../context/AssessmentContext';
import { getAIQuizByTrack, analyzeAIQuizResults } from '../../data/mockAIQuiz';
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

const XCircle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 9l-6 6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9l6 6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BookOpen = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Stats Card Component
const StatsCard = ({ label, value, icon, color }) => {
  return (
    <div className={`bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-6 backdrop-blur-sm ${color}`}>
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold font-['Space_Grotesk'] text-[#EAEDFA]">{value}</div>
          <div className="text-sm text-[#EAEDFA]/60">{label}</div>
        </div>
      </div>
    </div>
  );
};

// Question Review Item Component
const QuestionReviewItem = ({ question, userAnswer, isCorrect, questionNumber }) => {
  const correctAnswerObj = question.answers.find(a => a.id === question.correctAnswer);
  const userAnswerObj = question.answers.find(a => a.id === userAnswer);

  return (
    <div className={`bg-white/5 border rounded-2xl p-6 backdrop-blur-sm ${
      isCorrect 
        ? 'border-green-500/30 bg-green-500/5' 
        : userAnswer 
        ? 'border-red-500/30 bg-red-500/5'
        : 'border-yellow-500/30 bg-yellow-500/5'
    }`}>
      {/* Question Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-full bg-white/10 border border-[#EAEDFA]/10">
            <span className="text-sm font-medium text-[#EAEDFA]/70">
              Question {questionNumber}
            </span>
          </div>
          <div className="px-3 py-1 rounded-full bg-white/10 border border-[#EAEDFA]/10">
            <span className="text-sm font-medium text-[#EAEDFA]/70">
              {question.topic}
            </span>
          </div>
        </div>
        <div className={`flex items-center gap-2 ${
          isCorrect ? 'text-green-400' : userAnswer ? 'text-red-400' : 'text-yellow-400'
        }`}>
          {isCorrect ? <CheckCircle /> : userAnswer ? <XCircle /> : <BookOpen />}
        </div>
      </div>

      {/* Question Text */}
      <h4 className="text-lg font-semibold font-['Space_Grotesk'] text-[#EAEDFA] mb-4">
        {question.question}
      </h4>

      {/* Answers */}
      <div className="space-y-3 mb-4">
        {userAnswer && (
          <div>
            <div className="text-sm text-[#EAEDFA]/60 mb-1">Your Answer:</div>
            <div className={`p-3 rounded-lg border ${
              isCorrect 
                ? 'bg-green-500/10 border-green-500/30 text-green-300' 
                : 'bg-red-500/10 border-red-500/30 text-red-300'
            }`}>
              {userAnswerObj?.text || 'Not answered'}
            </div>
          </div>
        )}
        
        {!isCorrect && (
          <div>
            <div className="text-sm text-[#EAEDFA]/60 mb-1">Correct Answer:</div>
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300">
              {correctAnswerObj?.text}
            </div>
          </div>
        )}
      </div>

      {/* AI Explanation */}
      <div className="pt-4 border-t border-[#EAEDFA]/10">
        <div className="text-sm font-medium text-[#EAEDFA]/70 mb-2">
          💡 Why this question was asked:
        </div>
        <div className="text-sm text-[#EAEDFA]/60">
          {question.aiExplanation}
        </div>
      </div>
    </div>
  );
};

// Main AI Quiz Review Component
export default function AIQuizReview() {
  const navigate = useNavigate();
  const { selectedTrack, aiQuizAnswers, setAiQuizResults, completeStep } = useAssessment();
  
  const [track] = useState(selectedTrack || 'frontend');
  const [questions, setQuestions] = useState([]);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load questions and analyze results
    const loadAndAnalyze = async () => {
      setIsLoading(true);
      
      // Simulate API delay
      setTimeout(() => {
        const aiQuestions = getAIQuizByTrack(track);
        setQuestions(aiQuestions);
        
        // TODO: In the future, this will be an API call to get AI-analyzed results
        const analysisResults = analyzeAIQuizResults(aiQuestions, aiQuizAnswers);
        setResults(analysisResults);
        setAiQuizResults(analysisResults);
        
        // Complete step 4 (AI Quiz Review)
        completeStep(4);
        
        setIsLoading(false);
      }, 1000);
    };

    loadAndAnalyze();
  }, [track, aiQuizAnswers, setAiQuizResults, completeStep]);

  const handleContinue = () => {
    navigate('/results/choose-plan');
  };

  if (isLoading || !results) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#0A0F2B]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border-4 border-[#7033FF] border-t-transparent animate-spin"></div>
          <div className="text-[#EAEDFA] text-xl font-['Space_Grotesk']">Analyzing your responses...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex bg-[#0A0F2B] font-['Plus_Jakarta_Sans'] overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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

        {/* Review Container */}
        <div className="max-w-[1000px] w-full mx-auto mt-24">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] flex items-center justify-center shadow-[0_4px_30px_rgba(112,51,255,0.4)] text-white text-3xl font-bold">
                {results.score}%
              </div>
            </div>
            
            <h1 className="text-[48px] font-bold font-['Space_Grotesk'] text-[#EAEDFA] mb-4 leading-tight">
              Assessment Complete!
            </h1>
            
            <p className="text-xl text-[#EAEDFA]/70 max-w-[600px] mx-auto">
              Here&apos;s a detailed review of your performance with personalized insights.
            </p>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <StatsCard 
              label="Correct" 
              value={results.correct}
              icon={<CheckCircle />}
              color="bg-green-500/10"
            />
            <StatsCard 
              label="Wrong" 
              value={results.wrong}
              icon={<XCircle />}
              color="bg-red-500/10"
            />
            <StatsCard 
              label="Needs Learning" 
              value={results.needsLearning}
              icon={<BookOpen />}
              color="bg-yellow-500/10"
            />
          </div>

          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Strengths */}
            <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#EAEDFA] mb-4 flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Your Strengths
              </h3>
              {results.strengths.length > 0 ? (
                <div className="space-y-2">
                  {results.strengths.map((strength, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                      <span className="text-[#EAEDFA]">{strength.topic}</span>
                      <span className="text-green-400 font-medium">{strength.score}%</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#EAEDFA]/60">We&apos;ll identify your strengths as you progress.</p>
              )}
            </div>

            {/* Weaknesses */}
            <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#EAEDFA] mb-4 flex items-center gap-2">
                <span className="text-red-400">⚠</span>
                Areas for Improvement
              </h3>
              {results.weaknesses.length > 0 ? (
                <div className="space-y-2">
                  {results.weaknesses.map((weakness, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                      <span className="text-[#EAEDFA]">{weakness.topic}</span>
                      <span className="text-red-400 font-medium">{weakness.score}%</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#EAEDFA]/60">Great job! Keep up the momentum.</p>
              )}
            </div>
          </div>

          {/* Detailed Question Review */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-['Space_Grotesk'] text-[#EAEDFA] mb-6">
              Detailed Review
            </h2>
            <div className="space-y-4">
              {questions.map((question, index) => {
                const userAnswer = aiQuizAnswers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                return (
                  <QuestionReviewItem
                    key={question.id}
                    question={question}
                    userAnswer={userAnswer}
                    isCorrect={isCorrect}
                    questionNumber={index + 1}
                  />
                );
              })}
            </div>
          </div>

          {/* Next Step Info */}
          <div className="bg-gradient-to-r from-[#7033FF]/10 to-[#B899FF]/10 border border-[#7033FF]/30 rounded-2xl p-6 backdrop-blur-sm mb-6">
            <h3 className="text-lg font-semibold font-['Space_Grotesk'] text-[#EAEDFA] mb-2">
              🎯 Next Step: Choose Your Learning Plan
            </h3>
            <p className="text-[#EAEDFA]/70">
              Based on your assessment, we&apos;ll create a personalized learning roadmap tailored to your schedule and goals.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <button 
              onClick={handleContinue}
              className="px-8 h-[56px] rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)] flex items-center justify-center gap-2"
            >
              Continue to Plan Selection
              <ArrowRight />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
