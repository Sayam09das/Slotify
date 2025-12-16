import React from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import { AnimatedGradientText } from "../ui/animated-gradient-text"
import { WordRotate } from "../ui/word-rotate"
import { TypingAnimation } from "../ui/typing-animation"
const HeaderSection = () => {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 animate-fade-in">
                            <div className="w-2 h-2 bg-[#4f39f6] rounded-full animate-pulse"></div>

                            <AnimatedGradientText glow={false} speed={0.8}>
                                Simple scheduling for teams
                            </AnimatedGradientText>


                        </div>


                        {/* Headline */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight animate-slide-up">
                            Smart Appointment Scheduling for{" "}
                            <span className="text-[#4f39f6]">
                                <WordRotate
                                    words={["Clinics", "Salons", "Service Centers"]}
                                />
                            </span>
                        </h1>


                        {/* Subheading */}
                        <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl animate-slide-up-delay">
                            <TypingAnimation
                                words={[
                                    "Easy scheduling for service businesses.",
                                    "Eliminate double bookings and reduce no-shows.",
                                    "Keep your schedule organized—all in one platform.",
                                ]}
                                duration={45}
                                pauseDelay={1200}
                                loop={true}
                                showCursor={true}
                                cursorStyle="line"
                                className="font-normal"
                            />
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-2">
                            <a
                                href="#get-started"
                                className="inline-flex items-center justify-center bg-[#4f39f6] text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-[#4230d4] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group"
                            >
                                Get Started Free
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#learn-more"
                                className="inline-flex items-center justify-center text-gray-700 px-8 py-4 rounded-lg text-base font-medium hover:text-[#4f39f6] hover:bg-gray-50 transition-all duration-200"
                            >
                                Learn More
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-500 animate-fade-in-delay">
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>14-day free trial</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative lg:block hidden animate-float">
                        <div className="relative">
                            {/* Main Card */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                                <div className="space-y-6">
                                    {/* Calendar Header */}
                                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                                        <div className="flex items-center space-x-3">
                                            <div className="bg-[#4f39f6] bg-opacity-10 p-2 rounded-lg">
                                                <Calendar className="w-6 h-6 text-[#4f39f6]" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-black">Today's Schedule</h3>
                                                <p className="text-sm text-gray-500">December 16, 2025</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Appointments */}
                                    <div className="space-y-4">
                                        {[
                                            { time: '09:00 AM', name: 'Sarah Johnson', service: 'Haircut & Style', status: 'confirmed' },
                                            { time: '11:30 AM', name: 'Michael Chen', service: 'Consultation', status: 'confirmed' },
                                            { time: '02:00 PM', name: 'Emma Davis', service: 'Color Treatment', status: 'pending' }
                                        ].map((apt, idx) => (
                                            <div key={idx} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm">
                                                    <Clock className="w-5 h-5 text-[#4f39f6]" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-semibold text-black">{apt.time}</p>
                                                    <p className="text-sm text-gray-600 truncate">{apt.name}</p>
                                                    <p className="text-xs text-gray-500">{apt.service}</p>
                                                </div>
                                                <div className={`px-3 py-1 rounded-full text-xs font-medium ${apt.status === 'confirmed'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                                    }`}>
                                                    {apt.status}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-[#4f39f6]">24</div>
                                            <div className="text-xs text-gray-500 mt-1">Bookings</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-green-600">98%</div>
                                            <div className="text-xs text-gray-500 mt-1">Attendance</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-black">0</div>
                                            <div className="text-xs text-gray-500 mt-1">Conflicts</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-6 -right-6 bg-[#4f39f6] rounded-full p-4 shadow-lg animate-bounce-slow">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 border border-gray-200 animate-pulse-slow">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-xs font-medium text-gray-700">Live Updates</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.3s both; }
        .animate-slide-up { animation: slide-up 0.6s ease-out; }
        .animate-slide-up-delay { animation: slide-up 0.6s ease-out 0.2s both; }
        .animate-slide-up-delay-2 { animation: slide-up 0.6s ease-out 0.4s both; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
      `}</style>
        </section>
    );
};

export default HeaderSection;