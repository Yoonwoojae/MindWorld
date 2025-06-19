// src/components/ui/PhoneMockup.js
import React from 'react';

const PhoneMockup = () => {
    return (
        <div className="relative w-full flex justify-center lg:justify-end">
            {/* 메인 폰 목업 - 원본 비율 유지 */}
            <img
                src="/images/hero-phone-mockup.png"
                alt="Mind Wellness 앱 스크린샷"
                className="max-w-full h-auto max-h-[600px] lg:max-h-[700px] shadow-2xl"
            />
        </div>
    );
};

export default PhoneMockup;
