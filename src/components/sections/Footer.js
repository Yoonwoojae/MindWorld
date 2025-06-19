// src/components/sections/Footer.js
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            {/* 메인 푸터 콘텐츠 */}
            <div className="container mx-auto px-6 lg:px-20 py-16">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* 회사 정보 */}
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-sage-400 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-lg">M</span>
                            </div>
                            <span className="text-2xl font-bold">Mind Wellness</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                            건강한 마음을 위한 첫 걸음. Mind Wellness와 함께
                            감정을 기록하고, 패턴을 분석하며, AI 친구와 대화하세요.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <span className="text-sage-400 mr-2">📧</span>
                                <span className="text-gray-300">mind-wellness@naver.com</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-sage-400 mr-2">🏢</span>
                                <span className="text-gray-300">경기도 양주시 덕계로 137</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 하단 법적 정보 */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 lg:px-20 py-6">
                    <div className="md:flex justify-between items-center">
                        <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                이용약관
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">
                                개인정보처리방침
                            </a>
                        </div>
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Mind Wellness. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>

            {/* 회사 정보 */}
            <div className="bg-gray-950 border-t border-gray-800">
                <div className="container mx-auto px-6 lg:px-20 py-4">
                    <div className="text-center md:text-left">
                        <p className="text-gray-500 text-xs leading-relaxed">
                            (주)마인드웰니스 | 대표이사: 윤우재 | 사업자등록번호: 123-45-67890
                            <br />
                            주소: 경기도 양주시 덕계로 137 | 개인정보보호책임자: 윤우재
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
