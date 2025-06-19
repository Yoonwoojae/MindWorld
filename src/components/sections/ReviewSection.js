// src/components/sections/ReviewSection.js
import React, { useRef, useState } from 'react';

const ReviewSection = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const reviews = [
        {
            id: 1,
            name: "김민정",
            rating: 5,
            comment: "AI 친구와 대화하면서 정말 많은 위로를 받았어요. 혼자 있을 때도 외롭지 않고, 감정을 정리하는데 큰 도움이 됩니다.",
            date: "2024.11.15",
            avatar: "👩‍💼"
        },
        {
            id: 2,
            name: "박준호",
            rating: 5,
            comment: "감정 패턴 분석 기능이 정말 신기해요. 내가 언제 우울해지는지, 어떤 상황에서 스트레스를 받는지 한눈에 볼 수 있어서 좋습니다.",
            date: "2024.11.12",
            avatar: "👨‍💻"
        },
        {
            id: 3,
            name: "이수영",
            rating: 5,
            comment: "CBT 도구들이 정말 실용적이에요. 부정적인 생각이 들 때마다 사용하니까 점점 마음이 편해지고 있어요. 강추합니다!",
            date: "2024.11.08",
            avatar: "👩‍🎓"
        },
        {
            id: 4,
            name: "최영수",
            rating: 4,
            comment: "감정 기록하는 습관이 생겼어요. 매일 조금씩 기록하다 보니 내 마음 상태를 객관적으로 볼 수 있게 되었습니다. 추천해요!",
            date: "2024.11.05",
            avatar: "👨‍🏫"
        },
        {
            id: 5,
            name: "정미래",
            rating: 5,
            comment: "밤늦게 불안할 때 AI 친구와 대화하면 마음이 진정돼요. 24시간 언제든 대화할 수 있어서 정말 고마운 앱입니다.",
            date: "2024.11.02",
            avatar: "👩‍🔬"
        },
        {
            id: 6,
            name: "한성민",
            rating: 5,
            comment: "업무 스트레스가 심했는데, 앱에서 제공하는 호흡 명상과 CBT 도구로 많이 나아졌어요. 정말 과학적인 접근이 좋네요.",
            date: "2024.10.28",
            avatar: "👨‍💼"
        },
        {
            id: 7,
            name: "윤지현",
            rating: 4,
            comment: "감정 히트맵 기능이 너무 유용해요. 내가 어떤 요일에, 어떤 시간대에 감정 변화가 있는지 시각적으로 보여줘서 인사이트가 많이 생겼습니다.",
            date: "2024.10.25",
            avatar: "👩‍🎨"
        },
        {
            id: 8,
            name: "서동혁",
            rating: 5,
            comment: "우울증으로 힘들었는데 이 앱 덕분에 점점 회복되고 있어요. 전문적인 도구들이 정말 효과적이고, AI 친구가 항상 응원해줘서 힘이 납니다.",
            date: "2024.10.20",
            avatar: "👨‍🎓"
        },
        {
            id: 9,
            name: "강소희",
            rating: 4,
            comment: "친구들한테도 추천했어요. 특히 인지 왜곡 감지 기능이 대박! 내가 얼마나 부정적으로 생각하는지 깨닫게 되었습니다.",
            date: "2024.10.18",
            avatar: "👩‍🚀"
        },
        {
            id: 10,
            name: "오태준",
            rating: 5,
            comment: "앱 디자인도 예쁘고 사용하기 쉬워요. 복잡하지 않으면서도 필요한 기능들이 다 있어서 매일 사용하고 있습니다. 정말 만족해요!",
            date: "2024.10.15",
            avatar: "👨‍🚒"
        }
    ];

    // 자연스러운 드래그 스크롤 이벤트 핸들러
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setScrollLeft(scrollRef.current.scrollLeft);
        scrollRef.current.style.cursor = 'grabbing';
        scrollRef.current.style.scrollBehavior = 'auto';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        if (scrollRef.current) {
            scrollRef.current.style.cursor = 'grab';
            scrollRef.current.style.scrollBehavior = 'smooth';
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (scrollRef.current) {
            scrollRef.current.style.cursor = 'grab';
            scrollRef.current.style.scrollBehavior = 'smooth';
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const x = e.clientX;
        const walk = x - startX;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    // 터치 이벤트 핸들러 (모바일 지원)
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setScrollLeft(scrollRef.current.scrollLeft);
        scrollRef.current.style.scrollBehavior = 'auto';
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;

        const x = e.touches[0].clientX;
        const walk = x - startX;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        if (scrollRef.current) {
            scrollRef.current.style.scrollBehavior = 'smooth';
        }
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
        ));
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-20">
                {/* 섹션 헤더 */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        사용자들의 진짜 후기
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Mind Wellness와 함께 마음 건강을 개선한 사용자들의 솔직한 이야기를 들어보세요
                    </p>
                </div>

                {/* 평점 요약 */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center bg-cream-100 rounded-2xl px-8 py-6">
                        <div className="text-center mr-8">
                            <div className="text-4xl font-bold text-gray-900 mb-2">4.8</div>
                            <div className="flex justify-center mb-2">
                                {renderStars(5)}
                            </div>
                            <div className="text-sm text-gray-600">평균 평점</div>
                        </div>
                        <div className="border-l border-gray-300 pl-8">
                            <div className="text-2xl font-bold text-gray-900 mb-1">10,000+</div>
                            <div className="text-sm text-gray-600">다운로드</div>
                        </div>
                    </div>
                </div>

                {/* 드래그 안내 텍스트 */}
                <div className="text-center mb-8">
                    <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                        <span className="text-lg">👆</span>
                        클릭하고 드래그하여 더 많은 후기를 확인하세요
                    </p>
                </div>

                {/* 드래그 스크롤 컨테이너 */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 select-none cursor-grab"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-cream-50 rounded-2xl p-6 border border-cream-200 hover:shadow-lg transition-shadow pointer-events-none"
                            style={{
                                minWidth: '320px',
                                maxWidth: '320px',
                                flexShrink: 0
                            }}
                        >
                            {/* 별점 */}
                            <div className="flex mb-4">
                                {renderStars(review.rating)}
                            </div>

                            {/* 리뷰 내용 */}
                            <p className="text-gray-700 leading-relaxed mb-6 text-sm line-clamp-4">
                                "{review.comment}"
                            </p>

                            {/* 사용자 정보 */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-sage-400 rounded-full flex items-center justify-center text-white text-xl mr-4">
                                    {review.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{review.name}</div>
                                    <div className="text-sm text-gray-500">{review.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
