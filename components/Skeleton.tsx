
import React from 'react';

interface SkeletonProps {
  type: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ type }) => {
  const Shimmer = () => (
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_1.2s_infinite] dark:via-gray-600/10" />
  );

  const CardSkeleton = () => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden">
      <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-6" />
      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4 mb-4" />
      <div className="space-y-2">
        <div className="h-3 bg-gray-100 dark:bg-gray-700/50 rounded-full w-full" />
        <div className="h-3 bg-gray-100 dark:bg-gray-700/50 rounded-full w-5/6" />
      </div>
      <Shimmer />
    </div>
  );

  const renderContent = () => {
    switch (type) {
      case 'noticias':
        return (
          <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(i => <CardSkeleton key={i} />)}
          </div>
        );
      case 'home':
        return (
          <div className="space-y-12">
            <div className="h-[450px] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
              <Shimmer />
            </div>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20">
              {[1, 2, 3].map(i => <CardSkeleton key={i} />)}
            </div>
          </div>
        );
      default:
        return (
          <div className="max-w-7xl mx-auto px-4 py-24 space-y-8">
            <div className="h-10 bg-gray-200 dark:bg-gray-800 w-1/4 rounded-full relative overflow-hidden"><Shimmer /></div>
            <div className="space-y-4">
               <div className="h-4 bg-gray-100 dark:bg-gray-700 w-full rounded-full relative overflow-hidden"><Shimmer /></div>
               <div className="h-4 bg-gray-100 dark:bg-gray-700 w-5/6 rounded-full relative overflow-hidden"><Shimmer /></div>
            </div>
            <div className="h-64 bg-gray-200 dark:bg-gray-800 w-full rounded-3xl relative overflow-hidden"><Shimmer /></div>
          </div>
        );
    }
  };

  return (
    <div className="animate-pulse">
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
      {renderContent()}
    </div>
  );
};

export default Skeleton;
