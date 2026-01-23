import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useOnboarding } from '../../context/OnboardingContext';
import { completeOnboarding } from '../../services/profileService';
// Import Images & Icons
import defaultAvatar from '../../assets/images/mypic.jpg'; 
import areeb from '../../assets/icons/areeb-logo.svg'; 

// --- Neon Component ---
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

// --- Icons ---
const PencilIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>
);

const LinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

export default function Profile() {
  const navigate = useNavigate();
  const { onboardingData, resetOnboardingData } = useOnboarding();
  
  const [image, setImage] = useState(defaultAvatar);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    linkedIn: '',
    github: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!onboardingData.selectedTrack || !onboardingData.skillLevel) {
      navigate('/track');
    }
  }, [onboardingData, navigate]);

  const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setImage(reader.result);
          };
          reader.readAsDataURL(file);
      }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      
      const onboardingPayload = {
        // learningGoals: onboardingData.learningGoals,
        learningGoals: Array.isArray(onboardingData.learningGoals) ? onboardingData.learningGoals.join(', ') : onboardingData.learningGoals,
        studyStyle: onboardingData.studyStyle,
        availableHours: onboardingData.availableHours,
        selectedTrack: onboardingData.selectedTrack,
        skillLevel: onboardingData.skillLevel,
        name: fullName,
        ...(formData.linkedIn && { linkedIn: formData.linkedIn }),
        ...(formData.github && { github: formData.github })
      };

      await completeOnboarding(onboardingPayload);
      
    //   resetOnboardingData();
      
      navigate('/assessment/quick-skill-check');
    } catch (err) {
      console.error('Onboarding error:', err);
      setError(err.response?.data?.message || 'Failed to complete onboarding. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/track');
  };

  return (
    <div className="min-h-screen w-full flex bg-[#0A0F2B] font-['Plus_Jakarta_Sans'] overflow-hidden">
      
      {/* ================= Left Section (Steps) ================= */}
      <div className="hidden lg:flex w-[55%] relative flex-col justify-between px-16 py-12 xl:px-24 xl:py-16">
        
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute inset-0 bg-[#0A0F2B] opacity-20 z-10" />
            <NeonEffect className="w-[600px] h-[600px] -right-[200px] -top-[200px] opacity-90" variant="variant4" />
            <NeonEffect className="w-[500px] h-[500px] left-[-100px] top-[30%] opacity-80" variant="default" />
            <NeonEffect className="w-[400px] h-[400px] right-[5%] bottom-[-100px] opacity-60" variant="variant2" />
        </div>

        {/* Logo & Header */}
        <div className="relative z-10 flex flex-col gap-10">
            <a href="/" className="flex items-center gap-3 w-fit">
                <Logo className="w-8 h-8" />
                <span className="text-2xl font-semibold text-[#EAEDFA] font-['Space_Grotesk'] tracking-wide">
                    AREEB
                </span>
            </a>

            <div className="flex flex-row items-end justify-between w-full gap-4 mt-100 mb-8">
              <h1 className="text-[56px] font-bold font-['Space_Grotesk'] leading-[1.1] text-[#EAEDFA]">
                  Get Started <br />
                  with us
              </h1>
              <p className="text-xl font-medium text-[#EAEDFA] max-w-[400px] text-left pb-6">
                   Complete These easy steps to <br/> register your account
              </p>
          </div>
        </div>

        {/* Steps Cards */}
        <div className="relative z-10 w-full mt-auto mb-10 pt-10">
            <div className="flex gap-3 w-full">
                
                {/* Step 1: Inactive */}
                <div className="flex-1 min-w-[215px] h-[154px] p-8 rounded-[24px] bg-gradient-to-r from-[#7033FF]/40 to-[#B899FF]/40 border border-[#7033FF]/20 flex flex-col items-start gap-4 text-[#EAEDFA]/70 hover:border-[#B899FF]/50 transition-all">
                    <div className="w-8 h-8 rounded-full border border-[#EAEDFA] flex items-center justify-center text-sm font-medium shrink-0">1</div>
                    <p className="text-xl font-medium leading-tight font-['Space_Grotesk']">
                        Sign up your <br/> account
                    </p>
                </div>

                {/* Step 2: Inactive */}
                <div className="flex-1 min-w-[215px] h-[154px] p-8 rounded-[24px] bg-gradient-to-r from-[#7033FF]/40 to-[#B899FF]/40 border border-[#7033FF]/20 flex flex-col items-start gap-4 text-[#EAEDFA]/70 hover:border-[#B899FF]/50 transition-all">
                    <div className="w-8 h-8 rounded-full border border-[#EAEDFA] flex items-center justify-center text-sm font-medium shrink-0">2</div>
                    <p className="text-xl font-medium leading-tight font-['Space_Grotesk']">
                        Goal & <br/> preferences
                    </p>
                </div>

                {/* Step 3: Inactive */}
                <div className="flex-1 min-w-[215px] h-[154px] p-8 rounded-[24px] bg-gradient-to-r from-[#7033FF]/40 to-[#B899FF]/40 border border-[#7033FF]/20 flex flex-col items-start gap-4 text-[#EAEDFA]/70 hover:border-[#B899FF]/50 transition-all">
                    <div className="w-8 h-8 rounded-full border border-[#EAEDFA] flex items-center justify-center text-sm font-medium shrink-0">3</div>
                    <p className="text-xl font-medium leading-tight font-['Space_Grotesk']">
                        Choose your <br/> Track
                    </p>
                </div>

                {/* Step 4: ACTIVE (Bright) */}
                <div className="flex-1 min-w-[215px] h-[154px] p-8 rounded-[24px] bg-gradient-to-r from-[#7033FF] to-[#B899FF] flex flex-col items-start gap-4 shadow-[0_4px_30px_rgba(112,51,255,0.4)] hover:scale-[1.02] transition-transform border border-[#B899FF]/50">
                    <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-sm font-bold text-white shrink-0">4</div>
                    <p className="text-xl font-bold leading-tight text-white font-['Space_Grotesk']">
                        Profile Setup
                    </p>
                </div>

            </div>
        </div>
      </div>

      {/* ================= Right Section (Profile Form) ================= */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-6 bg-[#0A0F2B] relative z-20 shadow-[-20px_0_40px_rgba(0,0,0,0.2)]">
        <div className="w-full max-w-[520px] flex flex-col h-full justify-center py-6">
            
            <h2 className="text-[42px] font-bold font-['Space_Grotesk'] text-white mb-6">Profile Setup</h2>

            {error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-400 text-sm mb-4">
                    {error}
                </div>
            )}

            {/* Profile Image Upload */}
            <div className="relative w-28 h-28 mb-8 group cursor-pointer">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#7033FF] p-1">
                    <img src={image} alt="Profile" className="w-full h-full rounded-full object-cover" />
                </div>
                {/* Edit Icon Overlay */}
                <label className="absolute bottom-0 right-0 w-8 h-8 bg-[#7033FF] rounded-full flex items-center justify-center text-white border-2 border-[#0A0F2B] cursor-pointer hover:bg-[#B899FF] transition-colors shadow-lg">
                    <PencilIcon />
                    <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                </label>
            </div>

            <form className="flex flex-col gap-5 overflow-y-auto no-scrollbar pr-2 max-h-[65vh]" onSubmit={handleSubmit}>
                
                {/* Row 1: Names */}
                <div className="flex gap-4">
                    <div className="flex-1 flex flex-col gap-2">
                        <label className="text-sm text-gray-400 font-medium">First name</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="First name" 
                                className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white placeholder-gray-600" 
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"><PencilIcon /></div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <label className="text-sm text-gray-400 font-medium">Last name</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Last name" 
                                className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white placeholder-gray-600" 
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"><PencilIcon /></div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Bio */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium">Bio</label>
                    <div className="relative">
                        <input 
                            type="text" 
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                            placeholder="Tell us about yourself" 
                            className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white placeholder-gray-600" 
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"><PencilIcon /></div>
                    </div>
                </div>

                {/* Row 3: Track & Skill Level */}
                <div className="flex gap-4">
                    <div className="flex-1 flex flex-col gap-2">
                        <label className="text-sm text-gray-400 font-medium">Track</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                value={onboardingData.selectedTrack} 
                                readOnly 
                                className="w-full h-[56px] px-4 bg-white/5 border border-[#EAEDFA]/20 rounded-xl outline-none text-white/70 cursor-not-allowed" 
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <label className="text-sm text-gray-400 font-medium">Skill level</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                value={onboardingData.skillLevel} 
                                readOnly 
                                className="w-full h-[56px] px-4 bg-white/5 border border-[#EAEDFA]/20 rounded-xl outline-none text-white/70 cursor-not-allowed" 
                            />
                        </div>
                    </div>
                </div>

                {/* Row 4: LinkedIn */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium">LinkedIn (optional)</label>
                    <div className="relative">
                        <input 
                            type="text" 
                            name="linkedIn"
                            value={formData.linkedIn}
                            onChange={handleInputChange}
                            placeholder="LinkedIn profile URL" 
                            className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white placeholder-gray-600" 
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"><LinkIcon /></div>
                    </div>
                </div>

                {/* Row 5: GitHub */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium">GitHub (optional)</label>
                    <div className="relative">
                        <input 
                            type="text" 
                            name="github"
                            value={formData.github}
                            onChange={handleInputChange}
                            placeholder="GitHub profile URL" 
                            className="w-full h-[56px] px-4 bg-transparent border border-[#EAEDFA]/20 rounded-xl outline-none focus:border-[#B899FF] focus:bg-white/5 transition-all text-white placeholder-gray-600" 
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"><LinkIcon /></div>
                    </div>
                </div>
                {/* Actions Buttons */}
                <div className="flex gap-4 mt-8 pt-4 border-t border-gray-800">
                    <button 
                        type="button"
                        onClick={handleCancel}
                        disabled={loading}
                        className="flex-1 h-[56px] rounded-full border border-gray-600 text-white text-lg font-medium font-['Space_Grotesk'] hover:border-white hover:bg-white/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Cancel
                    </button>
                    
                    <button 
                        type="submit"
                        disabled={loading}
                        className="flex-1 h-[56px] rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-lg font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(112,51,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Saving...' : 'Save Profile'}
                    </button>
                </div>                

            </form>


        </div>
      </div>
    </div>
  );
}