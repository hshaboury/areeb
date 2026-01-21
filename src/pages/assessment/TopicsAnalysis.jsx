import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAssessment, ASSESSMENT_STEPS } from '../../context/AssessmentContext';
import areeb from '../../assets/icons/areeb-logo.svg';
import TopicStatusRow from '../../components/ui/TopicStatusRow';
import { mockTopicsAnalysis } from '../../data/mockRoadmap';

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
const ChartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 17V9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 17V5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 17v-3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function TopicsAnalysis() {
  const navigate = useNavigate();
  const { quickCheckResult, setTopicsAnalysis, completeStep } = useAssessment();
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [topicsData, setTopicsData] = useState(null);

  useEffect(() => {
    // TODO: In the future, this will be an API call to analyze quick check results
    // and determine user's proficiency in different topics
    const analyzeQuickCheck = async () => {
      setIsAnalyzing(true);
      
      // Simulate AI analysis delay
      setTimeout(() => {
        // For now, use mock data
        const analysis = mockTopicsAnalysis;
        setTopicsData(analysis);
        setTopicsAnalysis(analysis);
        
        // Complete step 2 (Topics Analysis)
        completeStep(ASSESSMENT_STEPS.TOPICS_ANALYSIS);
        
        setIsAnalyzing(false);
      }, 1500);
    };

    analyzeQuickCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleContinue = () => {
    navigate('/assessment/ai-quiz');
  };

  if (isAnalyzing || !topicsData) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#0A0F2B]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border-4 border-[#7033FF] border-t-transparent animate-spin"></div>
          <div className="text-[#EAEDFA] text-xl font-['Space_Grotesk']">Analyzing your skills...</div>
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

        {/* Topics Analysis Container */}
        <div className="max-w-[900px] w-full mx-auto mt-24">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] flex items-center justify-center shadow-[0_4px_30px_rgba(112,51,255,0.4)]">
                <ChartIcon />
              </div>
            </div>
            
            <h1 className="text-[48px] font-bold font-['Space_Grotesk'] text-[#EAEDFA] mb-4 leading-tight">
              Your Knowledge Analysis
            </h1>
            
            <p className="text-xl text-[#EAEDFA]/70 max-w-[600px] mx-auto">
              Based on your assessment, here&apos;s a breakdown of your current knowledge across different topics.
            </p>
          </div>

          {/* Topics Sections */}
          <div className="space-y-8 mb-8">
            
            {/* Proficient Topics */}
            <div>
              <h2 className="text-2xl font-bold font-['Space_Grotesk'] text-[#EAEDFA] mb-4 flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Proficient
                <span className="text-[#EAEDFA]/50 text-base font-normal">({topicsData.proficient.length} topics)</span>
              </h2>
              <div className="space-y-3">
                {topicsData.proficient.map((topic, index) => (
                  <TopicStatusRow key={index} topic={topic} status="proficient" />
                ))}
              </div>
            </div>

            {/* Needs Review Topics */}
            <div>
              <h2 className="text-2xl font-bold font-['Space_Grotesk'] text-[#EAEDFA] mb-4 flex items-center gap-2">
                <span className="text-yellow-400">⚡</span>
                Needs Review
                <span className="text-[#EAEDFA]/50 text-base font-normal">({topicsData.needsReview.length} topics)</span>
              </h2>
              <div className="space-y-3">
                {topicsData.needsReview.map((topic, index) => (
                  <TopicStatusRow key={index} topic={topic} status="needsReview" />
                ))}
              </div>
            </div>

            {/* Needs Learning Topics */}
            <div>
              <h2 className="text-2xl font-bold font-['Space_Grotesk'] text-[#EAEDFA] mb-4 flex items-center gap-2">
                <span className="text-red-400">📚</span>
                Needs Learning
                <span className="text-[#EAEDFA]/50 text-base font-normal">({topicsData.needsLearning.length} topics)</span>
              </h2>
              <div className="space-y-3">
                {topicsData.needsLearning.map((topic, index) => (
                  <TopicStatusRow key={index} topic={topic} status="needsLearning" />
                ))}
              </div>
            </div>
          </div>

          {/* Next Step Info */}
          <div className="bg-white/5 border border-[#EAEDFA]/10 rounded-2xl p-6 backdrop-blur-sm mb-6">
            <h3 className="text-lg font-semibold font-['Space_Grotesk'] text-[#EAEDFA] mb-2">
              Next Step: AI-Personalized Quiz
            </h3>
            <p className="text-[#EAEDFA]/70">
              We&apos;ll now ask you targeted questions based on this analysis to better understand your skills.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <button 
              onClick={handleContinue}
              className="px-8 h-[56px] rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)] flex items-center justify-center gap-2"
            >
              Continue to AI Quiz
              <ArrowRight />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
