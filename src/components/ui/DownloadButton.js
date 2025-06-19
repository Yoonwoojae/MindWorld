// src/components/ui/DownloadButton.js
import React from 'react';

const DownloadButton = () => {
    return (
        <div className="space-y-6">
            {/* 메인 다운로드 버튼 */}
            <button className="group bg-gradient-to-r from-sage-400 to-sage-500 text-white font-bold text-lg px-8 py-4 rounded-full flex items-center space-x-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                <span>DOWNLOAD APP</span>
            </button>

            {/* Google Play 스토어 버튼 */}
            <div className="flex space-x-4">
                <a href="#" className="block hover:scale-105 transition-transform">
                    <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 min-w-[180px]">
                        {/* 기존 SVG 코드를 이미지로 교체 */}
                        <img
                            src="/google-play-icon.svg"
                            alt="Google Play"
                            className="w-6 h-6"
                        />
                        <div>
                            <div className="text-xs opacity-80">다운로드</div>
                            <div className="text-sm font-semibold">Google Play</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default DownloadButton;
