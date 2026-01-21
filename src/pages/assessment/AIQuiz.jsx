import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAssessment, ASSESSMENT_STEPS } from '../../context/AssessmentContext';
import { getAIQuizByTrack } from '../../data/mockAIQuiz';
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

const BrainIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3V9a3 3 0 0 0-3-3V5a3 3 0 0 0-3-3z" strokeLinecap="round" strokeLinejoin="round"/>
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

// Question Navigation Sidebar
const QuestionNavigation = ({ questions, currentIndex, answers, onNavigate }) => {
  return (
    <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-6 backdrop-blur-sm">
      <h3 className="text-lg font-semibold font-['Space_Grotesk'] text-[#EAEDFA] mb-4">
        Questions
      </h3>
      <div className="grid grid-cols-5 gap-2">
        {questions.map((_, index) => {
          const isAnswered = answers[questions[index].id] !== undefined;
          const isCurrent = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                isCurrent
                  ? 'bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-white shadow-[0_0_10px_rgba(112,51,255,0.3)]'
                  : isAnswered
                  ? 'bg-[#7033FF]/30 text-[#EAEDFA] border border-[#7033FF]/50'
                  : 'bg-white/5 text-[#EAEDFA]/50 border border-[#EAEDFA]/20 hover:border-[#B899FF]/50'
              }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="mt-4 pt-4 border-t border-[#EAEDFA]/10">
        <div className="text-sm text-[#EAEDFA]/60 flex items-center justify-between">
          <span>Answered:</span>
          <span className="font-medium text-[#EAEDFA]">
            {Object.keys(answers).length} / {questions.length}
          </span>
        </div>
      </div>
    </div>
  );
};

// Question Card Component
const QuestionCard = ({ question, selectedAnswer, onSelectAnswer, questionNumber, totalQuestions }) => {
  return (
    <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-8 backdrop-blur-sm">
      {/* Question Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#7033FF]/20 to-[#B899FF]/20 border border-[#7033FF]/30">
          <span className="text-sm font-medium text-[#EAEDFA]">
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>
        <div className="px-4 py-2 rounded-full bg-white/5 border border-[#EAEDFA]/10">
          <span className="text-sm font-medium text-[#EAEDFA]/70">
            {question.topic}
          </span>
        </div>
      </div>

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

// Main AI Quiz Component
export default function AIQuiz() {
  const navigate = useNavigate();
  const { selectedTrack, aiQuizAnswers, setAiQuizAnswers, completeStep } = useAssessment();
  
  // TODO: In the future, get the track from AssessmentContext
  const [track] = useState(selectedTrack || 'frontend');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(aiQuizAnswers || {});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: In the future, this will be an API call to fetch AI-generated questions
    // based on the user's track, skill level, and topics analysis
    const loadQuestions = async () => {
      setIsLoading(true);
      // Simulate API delay
      setTimeout(() => {
        const aiQuestions = getAIQuizByTrack(track);
        setQuestions(aiQuestions);
        setIsLoading(false);
      }, 500);
    };

    loadQuestions();
  }, [track]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const hasSelectedAnswer = answers[currentQuestion?.id] !== undefined;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const allQuestionsAnswered = questions.length > 0 && Object.keys(answers).length === questions.length;

  const handleSelectAnswer = (answerId) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: answerId
    };
    setAnswers(newAnswers);
    setAiQuizAnswers(newAnswers);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      if (allQuestionsAnswered) {
        // Complete step 3 (AI Quiz)
        completeStep(ASSESSMENT_STEPS.AI_QUIZ);
        
        // TODO: In the future, send answers to backend for AI analysis
        navigate('/assessment/ai-quiz-review');
      }
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNavigateToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#0A0F2B]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] flex items-center justify-center animate-pulse shadow-[0_4px_30px_rgba(112,51,255,0.4)]">
            <BrainIcon />
          </div>
          <div className="text-[#EAEDFA] text-xl font-['Space_Grotesk']">AI is preparing your personalized quiz...</div>
          <div className="text-[#EAEDFA]/60 text-sm">Based on your track and previous assessments</div>
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

        {/* Quiz Container */}
        <div className="max-w-[1200px] w-full mx-auto mt-24">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] flex items-center justify-center shadow-[0_4px_30px_rgba(112,51,255,0.4)]">
                <BrainIcon />
              </div>
            </div>
            <h1 className="text-[48px] font-bold font-['Space_Grotesk'] text-[#EAEDFA] mb-4 leading-tight">
              AI-Personalized Assessment
            </h1>
            <p className="text-xl text-[#EAEDFA]/70 max-w-[600px] mx-auto">
              Answer these questions tailored specifically for your learning path.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-[#EAEDFA]/60 font-medium">
                Overall Progress
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

          {/* Main Quiz Area */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-6">
            {/* Question Card */}
            <div>
              {currentQuestion && (
                <QuestionCard
                  question={currentQuestion}
                  selectedAnswer={answers[currentQuestion.id]}
                  onSelectAnswer={handleSelectAnswer}
                  questionNumber={currentQuestionIndex + 1}
                  totalQuestions={questions.length}
                />
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="px-8 h-[56px] rounded-full border border-gray-600 text-white text-lg font-medium font-['Space_Grotesk'] hover:border-white hover:bg-white/5 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={!hasSelectedAnswer || (isLastQuestion && !allQuestionsAnswered)}
                  className="flex-1 h-[56px] rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)] flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isLastQuestion ? 'Complete & Review' : 'Next Question'}
                  <ArrowRight />
                </button>
              </div>
            </div>

            {/* Question Navigation Sidebar */}
            <div className="lg:sticky lg:top-6 h-fit">
              <QuestionNavigation
                questions={questions}
                currentIndex={currentQuestionIndex}
                answers={answers}
                onNavigate={handleNavigateToQuestion}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
