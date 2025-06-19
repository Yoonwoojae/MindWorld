// src/components/sections/CTASection.js
import React from 'react';

const CTASection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-center">
            <div className="container mx-auto px-6 lg:px-20 max-w-2xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    지금 시작해보세요
                </h2>
                <p className="text-xl text-gray-300 mb-10">
                    당신의 마음 건강 여정을 오늘부터
                </p>
                <button className="bg-gradient-to-r from-sage-400 to-sage-500 text-white font-bold text-lg px-10 py-4 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    📱 무료 다운로드
                </button>
            </div>
        </section>
    );
};

export default CTASection;
