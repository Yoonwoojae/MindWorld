// src/components/sections/DetailSection.js
import React from 'react';

const DetailSection = () => {
    return (
        <section className="py-20 bg-cream-50">
            <div className="container mx-auto px-6 lg:px-20 space-y-20">
                {/* 첫 번째 디테일 */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            감정 기록이 이렇게 쉬웠나요?
                        </h3>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            텍스트, 음성, 빠른 선택으로 간편하게 감정을 기록하고
                            실시간으로 맞춤형 조언을 받아보세요
                        </p>
                        <ul className="space-y-4">
                            {['멀티모달 감정 입력', '실시간 인지 왜곡 감지', '상황별 맞춤 도구 추천'].map((item, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <span className="text-sage-500 text-xl">✓</span>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* 감정 기록 이미지 - 원본 비율 유지 */}
                    <div className="flex justify-center">
                        <img
                            src="/images/emotion-record-detail.png"
                            alt="감정 기록 화면"
                            className="max-w-full h-auto max-w-sm rounded-2xl shadow-lg"
                        />
                    </div>
                </div>

                {/* 두 번째 디테일 */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* AI 대화 이미지 - 원본 비율 유지 */}
                    <div className="lg:order-1 flex justify-center">
                        <img
                            src="/images/ai-chat-feature.png"
                            alt="AI 친구 대화 화면"
                            className="max-w-full h-auto max-w-sm rounded-2xl shadow-lg"
                        />
                    </div>
                    <div className="lg:order-2">
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            AI 친구와의 특별한 대화
                        </h3>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            부담 없는 일상 대화부터 깊은 감정 탐색까지
                            언제나 공감해주는 AI 친구가 함께합니다
                        </p>
                        <ul className="space-y-4">
                            {['24/7 정서적 지원', '자연스러운 CBT 통합 대화', '개인화된 응답 패턴'].map((item, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <span className="text-sage-500 text-xl">✓</span>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailSection;
