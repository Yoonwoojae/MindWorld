// src/components/sections/HeroSection.js
import React from 'react';
import PhoneMockup from '../ui/PhoneMockup';
import DownloadButton from '../ui/DownloadButton';
import StatsGrid from '../ui/StatsGrid';

const HeroSection = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 relative overflow-hidden">
            {/* 플로팅 이모지 */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[15%] left-[5%] text-4xl opacity-30 animate-float">💭</div>
                <div className="absolute top-[25%] right-[8%] text-4xl opacity-30 animate-float-delay">🌱</div>
                <div className="absolute bottom-[20%] left-[3%] text-4xl opacity-30 animate-float">✨</div>
                <div className="absolute bottom-[30%] right-[5%] text-4xl opacity-30 animate-float-delay">🎯</div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 h-screen grid lg:grid-cols-2 items-center gap-12">
                {/* 왼쪽 콘텐츠 */}
                <div className="flex flex-col justify-center space-y-8 lg:pr-8">
                    {/* 배지 */}
                    <div className="inline-flex items-center bg-white/90 backdrop-blur-sm border border-amber-200 rounded-full px-5 py-3 w-fit">
                        <span className="text-lg mr-2">🎉</span>
                        <span className="text-amber-800 font-semibold text-sm">
              10,000+ 사용자가 함께하는 마음 여행
            </span>
                    </div>

                    {/* 메인 타이틀 */}
                    <div className="space-y-4">
                        <h1 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                            내 마음을 돌보는
                            <br />
                            <span className="bg-gradient-to-r from-sage-400 to-sage-500 bg-clip-text text-transparent">
                NO.1 마음챙김 앱
              </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            건강한 멘탈케어 습관, Mind Wellness와 함께 시작하세요.
                        </p>
                    </div>

                    {/* 기능 리스트 */}
                    <div className="space-y-4">
                        {[
                            { icon: '🤖', text: '24시간 AI 친구와 대화' },
                            { icon: '📊', text: '감정 패턴 과학적 분석' },
                            { icon: '🧠', text: '검증된 CBT 도구 제공' }
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <div className="text-2xl w-10 text-center">{feature.icon}</div>
                                <span className="text-gray-800 font-medium text-lg">{feature.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* 다운로드 버튼 */}
                    <DownloadButton />

                    {/* 통계 */}
                    <StatsGrid />
                </div>

                {/* 오른쪽 폰 목업 */}
                <div className="flex justify-center lg:justify-end">
                    <PhoneMockup />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
