// src/components/ui/StatsGrid.js
import React from 'react';

const StatsGrid = () => {
    const stats = [
        { number: '4.8', label: '플레이스토어 평점' },
        { number: '100%', label: '개인정보 보호' },
        { number: '무료', label: '핵심 기능' }
    ];

    return (
        <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
                <div key={index} className="text-center">
                    <div className="text-2xl font-black text-amber-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

export default StatsGrid;
