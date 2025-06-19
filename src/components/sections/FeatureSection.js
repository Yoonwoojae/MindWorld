// src/components/sections/FeatureSection.js
import React from 'react';

const FeatureSection = () => {
    const features = [
        {
            title: '24시간 AI 친구',
            description: '언제든 따뜻하게 들어주는 AI 친구와 대화하며 감정을 나누고 위로받으세요',
            image: '/images/ai-chat-feature.png'
        },
        {
            title: '과학적 CBT 도구',
            description: '인지행동치료 기반의 검증된 도구로 부정적 사고 패턴을 개선해보세요',
            image: '/images/cbt-tools-feature.png'
        },
        {
            title: '감정 패턴 분석',
            description: '일상 속 감정 변화를 시각화하고 나만의 감정 패턴을 발견하세요',
            image: '/images/insights-feature.png'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
                    마음의 변화를 경험해보세요
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            {/* 이미지 크기 대폭 증가 */}
                            <div className="mb-8 flex justify-center">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="max-w-full h-auto max-h-96 md:max-h-[450px] lg:max-h-[500px] rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
