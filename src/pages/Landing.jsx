import React from 'react';
import { Link } from "react-router-dom";

// Import Images
import Img1 from '../assets/images/mypic.jpg';

// Import Icon SVGs
import AnalysisIcon from '../assets/icons/AnalysisIcon.svg';
import areeb from '../assets/icons/areeb-logo.svg';
import CallIcon from '../assets/icons/CallIcon.svg';
import ArrowRightIcon from '../assets/icons/circle-arrow-right.svg';
import FacebookIcon from '../assets/icons/FacebookIcon.svg';
import GithubIcon from '../assets/icons/GithubIcon.svg';
import InstagramIcon from '../assets/icons/InstagramIcon.svg';
import MailIcon from '../assets/icons/MailIcon.svg';
import RouteIcon from '../assets/icons/RouteIcon.svg';
import SetupIcon from '../assets/icons/SetupIcon.svg';

// Icon Components
function Github({ className }) {
  return <img src={GithubIcon} alt="Github" className={className} />;
}

function Facebook({ className }) {
  return <img src={FacebookIcon} alt="Facebook" className={className} />;
}

function Instagram({ className }) {
  return <img src={InstagramIcon} alt="Instagram" className={className} />;
}

function Mail({ className }) {
  return <img src={MailIcon} alt="Mail" className={className} />;
}

function Call({ className }) {
  return <img src={CallIcon} alt="Call" className={className} />;
}

function Route({ className }) {
  return <img src={RouteIcon} alt="Route" className={className} />;
}

function Setup({ className }) {
  return <img src={SetupIcon} alt="Setup" className={className} />;
}

function AnalysisTextLink({ className }) {
  return <img src={AnalysisIcon} alt="Analysis" className={className} />;
}

function ArrowRight({ className }) {
  return <img src={ArrowRightIcon} alt="Arrow Right" className={className} />;
}

function Logo({ className }) {
  return <img src={areeb} alt="Areeb Logo" className={className} />;
}

// Neon Effect Background Component
const NeonEffect = ({ className, variant = "default" }) => {
  const colors = {
    // default: "bg-purple-600/30",
    // variant2: "bg-blue-600/30",
    // variant3: "bg-indigo-600/30",
    // variant4: "bg-violet-600/30"
    default: "bg-violet-600/30",
    variant2: "bg-cyan-600/30",
    variant3: "bg-indigo-600/30",
    variant4: "bg-fuchsia-400/30"
  };
  
  return (
    <div className={`absolute blur-[100px] rounded-full pointer-events-none -z-10 ${colors[variant]} ${className}`} />
  );
};

// Navigation Bar Component
function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-20 py-4 h-[70px] bg-transparent backdrop-blur-sm">

      <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
        <Logo className="w-8 h-8" />
        <span className="text-2xl font-semibold text-[#EAEDFA] font-['Space_Grotesk'] tracking-wide">
          AREEB
        </span>
      </a>
      
      <div className="hidden md:flex items-center gap-8 text-[#EAEDFA] font-['Plus_Jakarta_Sans'] text-lg font-medium">
        <a href="#home" className="hover:text-[#B899FF] transition-colors">Home</a>
        <a href="#about" className="hover:text-[#B899FF] transition-colors">About</a>
        <a href="#features" className="hover:text-[#B899FF] transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-[#B899FF] transition-colors">How it Works</a>
        <a href="#who-is-it-for" className="hover:text-[#B899FF] transition-colors">Who Is It For</a> 
        <a href="#contact" className="hover:text-[#B899FF] transition-colors">Contact</a>
      </div>
      
      {/* <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] font-medium font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20">
        Join us
      </button> */}
      <Link to="/login" className="px-6 py-2 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] font-medium font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20">
        Join us
      </Link>

    </nav>
  );
}

// Main Landing Page Component
export default function Landing() {
  return (
    <div className="relative min-h-screen bg-[#0A0F2B] text-white overflow-x-hidden font-['Plus_Jakarta_Sans'] selection:bg-purple-500 selection:text-white">
      {/* Background Neon Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <NeonEffect className="w-[500px] h-[500px] -left-20 -top-20" variant="variant2" />
        <NeonEffect className="w-[600px] h-[600px] right-0 top-[20%]" variant="default" />
        <NeonEffect className="w-[400px] h-[300px] left-20 bottom-20" variant="variant4" />
      </div>

      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section id="home" className="scroll-mt-[100px] relative flex flex-col items-center justify-end gap-[72px] w-[1280px] mx-auto pt-[550px]">
        <div className="flex flex-col gap-6 items-start w-full ml-[-120px]">
          <h1 className="text-[49px] font-bold font-['Space_Grotesk'] w-full text-[#EAEDFA]">
            Your AI Career Coach{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7033FF] to-[#B899FF]"> Starts Here! </span>
          </h1>
          <p className="text-xl font-medium text-[#EAEDFA] font-['Plus_Jakarta_Sans'] w-[1016px]">
            Personalized career guidance, skill plans, and internship pathways — built for university students who want clarity and a confident future.
          </p>
        </div>
        
        <div className="flex gap-3 items-center w-[517px] ml-auto mr-[-90px]">
          <button className="flex-1 h-14 px-5 rounded-full border border-[#EAEDFA] text-[#EAEDFA] text-xl font-medium font-['Space_Grotesk'] hover:bg-white/10 transition-colors">
            Try Free Demo
          </button>
          <Link to="/login" className="flex-1 h-14 px-5 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-xl font-medium font-['Space_Grotesk'] hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/30 flex items-center justify-center">
            Get Started
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-[200px] relative flex flex-col gap-[72px] w-[641px] ml-[79px] mt-[537px]">
        <div className="flex flex-col gap-6">
          <h2 className="text-[39px] font-bold text-[#EAEDFA] font-['Space_Grotesk']">
            What is Areeb.ai?
          </h2>
          <p className="text-xl font-medium text-[#EAEDFA] font-['Plus_Jakarta_Sans']">
            Areeb.ai is your smart AI companion that helps you understand your strengths, explore career options, and build a practical roadmap that guides you from university to the job market — step by step.
          </p>
        </div>
        
        <div className="flex flex-col gap-6">
          <h2 className="text-[39px] font-bold text-[#EAEDFA] font-['Space_Grotesk']">
            Why students love it:
          </h2>
          <div className="flex flex-col gap-6">
            <div className="h-14 px-2 py-2 border border-[#EAEDFA]/20 rounded-lg flex items-center bg-white/5 backdrop-blur-sm hover:border-[#EAEDFA] transition-colors">
              <p className="text-white font-['Plus_Jakarta_Sans']">
                Clear direction: No more guessing your future.
              </p>
            </div>
            <div className="h-14 px-2 py-2 border border-[#EAEDFA]/20 rounded-lg flex items-center bg-white/5 backdrop-blur-sm hover:border-[#EAEDFA] transition-colors">
              <p className="text-white font-['Plus_Jakarta_Sans']">
                Friendly support: Always available, any time you need it.
              </p>
            </div>
            <div className="h-14 px-2 py-2 border border-[#EAEDFA]/20 rounded-lg flex items-center bg-white/5 backdrop-blur-sm hover:border-[#EAEDFA] transition-colors">
              <p className="text-white font-['Plus_Jakarta_Sans']">
                Trusted insights: Data-driven recommendations tailored to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="scroll-mt-[200px] relative flex flex-col gap-14 items-center w-[1062px] mx-auto mt-[419px]">
        <div className="flex flex-col gap-6 items-center text-center w-full">
          <h2 className="text-[39px] font-bold text-[#EAEDFA] font-['Space_Grotesk']">
            Features
          </h2>
          <p className="text-xl font-medium text-[#EAEDFA] font-['Plus_Jakarta_Sans']">
            Areeb.ai is your smart AI companion that helps you understand your strengths, explore career options, and build a practical roadmap that guides you from university to the job market — step by step.
          </p>
        </div>
        
        <div className="flex gap-4 w-full">
          <div className="flex-1 flex flex-col gap-6 p-8 rounded-2xl bg-gradient-to-r from-[#7033FF] to-[#B899FF] items-center text-center shadow-lg hover:scale-105 transition-transform duration-300">
            <Route className="w-8 h-8 text-[#EAEDFA]" />
            <h3 className="text-[25px] font-medium text-[#EAEDFA] font-['Space_Grotesk']">
              Career Roadmap Generator
            </h3>
            <p className="text-[#EAEDFA] font-['Plus_Jakarta_Sans']">
              Get a personalized career pathway based on your major, interests, and skills — with clear milestones and action steps.
            </p>
          </div>
          
          <div className="flex-1 flex flex-col gap-6 p-8 rounded-2xl bg-gradient-to-r from-[#7033FF] to-[#B899FF] items-center text-center shadow-lg hover:scale-105 transition-transform duration-300">
            <AnalysisTextLink className="w-8 h-8 text-[#EAEDFA]" />
            <h3 className="text-[25px] font-medium text-[#EAEDFA] font-['Space_Grotesk']">
              Skill Gap Analysis
            </h3>
            <p className="text-[#EAEDFA] font-['Plus_Jakarta_Sans']">
              Discover the exact skills you need for your target role and get a structured plan to learn them.
            </p>
          </div>
          
          <div className="flex-1 flex flex-col gap-6 p-8 rounded-2xl bg-gradient-to-r from-[#7033FF] to-[#B899FF] items-center text-center shadow-lg hover:scale-105 transition-transform duration-300">
            <Setup className="w-8 h-8 text-[#EAEDFA]" />
            <h3 className="text-[25px] font-medium text-[#EAEDFA] font-['Space_Grotesk']">
              Resume & Portfolio Assistant
            </h3>
            <p className="text-[#EAEDFA] font-['Plus_Jakarta_Sans']">
              Instant feedback and improvements for your CV, LinkedIn, Behance, or GitHub.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="scroll-mt-[200px] relative flex flex-col gap-14 items-center w-[1062px] mx-auto mt-[490px]">
        <h2 className="text-[39px] font-bold text-[#EAEDFA] font-['Space_Grotesk'] text-center">
          How does it work?
        </h2>
        
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-[19px]">
            <div className="flex flex-col justify-between items-center p-8 w-[341px] h-[393px] rounded-2xl bg-[rgba(89,109,217,0.2)] border border-[#596DD9]/20 hover:border-[#B899FF] transition-colors">
              <Route className="w-8 h-8 text-[#EAEDFA]" />
              <h3 className="text-[25px] font-medium text-[#EAEDFA] font-['Space_Grotesk'] text-center">
                Career Roadmap Generator
              </h3>
              <p className="text-[#EAEDFA] font-['Plus_Jakarta_Sans'] text-center">
                Get a personalized career pathway based on your major, interests, and skills — with clear milestones and action steps.
              </p>
            </div>
            
            <div className="flex flex-col justify-between items-center p-8 w-[342px] h-[393px] rounded-2xl bg-[rgba(89,109,217,0.2)] border border-[#596DD9]/20 hover:border-[#B899FF] transition-colors">
              <Route className="w-8 h-8 text-[#EAEDFA]" />
              <h3 className="text-[25px] font-medium text-[#EAEDFA] font-['Space_Grotesk'] text-center">
                Career Roadmap Generator
              </h3>
              <p className="text-[#EAEDFA] font-['Plus_Jakarta_Sans'] text-center">
                Get a personalized career pathway based on your major, interests, and skills — with clear milestones and action steps.
              </p>
            </div>
            
            <div className="flex flex-col justify-between items-center p-8 w-[341px] h-[393px] rounded-2xl bg-[rgba(89,109,217,0.2)] border border-[#596DD9]/20 hover:border-[#B899FF] transition-colors">
              <Route className="w-8 h-8 text-[#EAEDFA]" />
              <h3 className="text-[25px] font-medium text-[#EAEDFA] font-['Space_Grotesk'] text-center">
                Career Roadmap Generator
              </h3>
              <p className="text-[#EAEDFA] font-['Plus_Jakarta_Sans'] text-center">
                Get a personalized career pathway based on your major, interests, and skills — with clear milestones and action steps.
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-8 rounded-2xl bg-[rgba(89,109,217,0.2)] overflow-hidden border border-[#596DD9]/20">
            <div className="flex items-center gap-2">
              {/* <div className="relative w-[108px] h-[52px]">
                <div className="absolute left-0 top-0 w-[52px] h-[52px] rounded-full bg-purple-500" />
                <div className="absolute left-[28px] top-0 w-[52px] h-[52px] rounded-full bg-purple-600" />
                <div className="absolute left-[56px] top-0 w-[52px] h-[52px] rounded-full bg-purple-700" />
              </div> */}
              <div className="relative w-[108px] h-[52px]">
                <img
                  src={Img1}
                  alt="Image 1"
                  className="absolute left-0 top-0 w-[52px] h-[52px] rounded-full object-cover"
                />
                <img
                  src={Img1}
                  alt="Image 2"
                  className="absolute left-[28px] top-0 w-[52px] h-[52px] rounded-full object-cover"
                />
                <img
                  src={Img1}
                  alt="Image 3"
                  className="absolute left-[56px] top-0 w-[52px] h-[52px] rounded-full object-cover"
                />
              </div>
              <p className="text-xl text-white font-['Plus_Jakarta_Sans']">
                Align with Business that <span className="font-medium">Choose Quality</span>
              </p>
            </div>
            <button className="flex items-center gap-2 px-5 h-10 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] font-medium font-['Space_Grotesk'] hover:opacity-90 transition-opacity group">
              <span>Start Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section id="who-is-it-for" className="scroll-mt-[150px] relative flex flex-col gap-14 items-center w-[1062px] mx-auto mt-[390px]">
        <h2 className="text-[39px] font-bold text-[#EAEDFA] font-['Space_Grotesk'] text-center">
          Who is it for?
        </h2>
        
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            'University students',
            'Internship seeker',
            'Students confused about their career direction',
            'Fresh graduates',
            'Anyone who wants a structured future plan'
          ].map((text, index) => (
            <div key={index} className="h-14 px-4 py-2 border-2 border-[#EAEDFA]/30 rounded-lg flex items-center justify-center hover:border-[#B899FF] hover:bg-[#B899FF]/10 transition cursor-default">
              <p className="text-white font-['Plus_Jakarta_Sans']">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative flex flex-col gap-14 items-center w-[1280px] mx-auto mt-[190px]">
        <div className="flex flex-col gap-14 items-center w-[1062px]">
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-[39px] font-bold text-[#EAEDFA] font-['Space_Grotesk']">
              Build Your Future with Confidence
            </h2>
            <p className="text-xl font-medium text-[#EAEDFA] font-['Plus_Jakarta_Sans']">
              Areeb.ai gives you the clarity and direction you've been looking for.
            </p>
          </div>

          <div className="flex gap-3 items-center">
            {/* Input بدل Your track */}
            <input 
              type="text"
              placeholder="Your track"
              className="border-b border-[#EAEDFA] bg-transparent p-2 w-[252px] min-h-14 text-white font-['Plus_Jakarta_Sans'] outline-none"
            />
            <button className="w-[253px] h-14 px-5 rounded-full bg-gradient-to-r from-[#7033FF] to-[#B899FF] text-[#EAEDFA] text-xl font-medium font-['Space_Grotesk'] hover:opacity-80 transition-opacity shadow-lg shadow-purple-600/30">
              Try Free Demo
            </button>
          </div>
        </div>
        
        {/* Career Tracks Animation */}
        <div className="relative h-[450px] w-full max-w-5xl mr-auto mt-5">
          {[
            { text: 'Artificial Intelligence', top: '5px', left: '0px', rotate: '16.6deg' },
            { text: 'Data Analysis', top: '69px', left: '193px', rotate: '-14.4deg' },
            { text: 'Cloud Computing', top: '145px', left: '0px', rotate: '-3.6deg' },
            { text: 'Data Analysis', top: '210px', left: '168px', rotate: '-4.8deg' },
            { text: 'UI/UX Design', top: '154px', left: '307px', rotate: '3.3deg' },
            { text: 'Full Stack', top: '13px', left: '413px', rotate: '9.1deg' },
            { text: 'Back End', top: '85px', left: '515px', rotate: '-28.9deg' },
            { text: 'Artificial Intelligence', top: '222px', left: '552px', rotate: '-3.4deg' },
            { text: 'Dev Ops', top: '154px', left: '649px', rotate: '0deg' },
            { text: 'Front End', top: '38px', left: '679px', rotate: '9.1deg' },
            { text: 'Back End', top: '133px', left: '832px', rotate: '-28.9deg' },
            { text: 'Cloud Computing', top: '0px', left: '859px', rotate: '20.6deg' },
            { text: 'Data Analysis', top: '34px', left: '1045px', rotate: '-14.4deg' },
            { text: 'Dev Ops', top: '154px', left: '1079px', rotate: '22.6deg' }
          ].map((item, index) => (
            <div
              key={index}
              className="absolute border border-[#7033FF] rounded-lg px-9 py-3 bg-[#0A0F2B]/90 backdrop-blur-md hover:scale-110 hover:border-[#B899FF] hover:bg-[#7033FF]/10 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-default whitespace-nowrap"
              style={{ top: item.top, left: item.left, transform: `rotate(${item.rotate})` }}
            >
              <p className="bg-gradient-to-r from-[#7033FF] to-[#B899FF] bg-clip-text text-transparent font-['Plus_Jakarta_Sans'] font-semibold">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10 bg-black/20">
        <div className="w-full max-w-[1045px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="relative right-40 ">
            <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-4">GET IN TOUCH.</h2>
            <p className="text-gray-400">We are here to answer your questions and guide you.</p>
          </div>
          
          <div className="flex flex-col gap-8 w-full md:w-auto">
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-full bg-white/5 border border-white/10 group hover:border-[#B899FF] transition-colors">
                <Call className="w-[60px] h-[60px] text-[#EAEDFA] group-hover:text-[#B899FF] transition-colors" />
              </div>
              <div>
                <h3 className="text-[39px] font-medium font-['Space_Grotesk'] text-white">Phone</h3>
                <p className="text-xl font-['Plus_Jakarta_Sans'] text-white">+20 123 456 789</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-full bg-white/5 border border-white/10 group hover:border-[#B899FF] transition-colors">
                <Mail className="w-[60px] h-[60px] text-[#EAEDFA] group-hover:text-[#B899FF] transition-colors" />
              </div>
              <div>
                <h3 className="text-[39px] font-medium font-['Space_Grotesk'] text-white">Mail</h3>
                <p className="text-xl font-['Plus_Jakarta_Sans'] text-white">areebai@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="p-4 rounded-full bg-white/5 border border-white/10 group hover:border-[#B899FF] transition-colors">
                <Mail className="w-[60px] h-[60px] text-[#EAEDFA] group-hover:text-[#B899FF] transition-colors" />
              </div>
                <div>
                  <h3 className="text-[39px] font-medium font-['Space_Grotesk'] text-white">Follow us</h3>
                  <div className="flex gap-4 mt-4">
                  <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#7033FF] transition-colors">
                    <Instagram className="w-9 h-9 text-[#EAEDFA]" />
                  </a>
                  <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#7033FF] transition-colors">
                    <Facebook className="w-9 h-9 text-[#EAEDFA]" />
                  </a>
                  <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#7033FF] transition-colors">
                    <Github className="w-9 h-9 text-[#EAEDFA]" />
                  </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
