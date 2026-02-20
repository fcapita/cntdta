
import React from 'react';

interface SkeletonProps {
  type: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ type }) => {
  const Shimmer = () => (
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1.5s_infinite] dark:via-gray-700/20" />
  );

  const CardSkeleton = () => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden h-64">
      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-6" />
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4 mb-4" />
      <div className="h-4 bg-gray-100 dark:bg-gray-700/50 rounded-full w-full mb-2" />
      <div className="h-4 bg-gray-100 dark:bg-gray-700/50 rounded-full w-5/6" />
      <Shimmer />
    </div>
  );

  const renderContent = () => {
    switch (type) {
      case 'noticias':
        return (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-3xl mb-12 relative overflow-hidden">
               <Shimmer />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map(i => <CardSkeleton key={i} />)}
            </div>
          </div>
        );
      case 'home':
        return (
          <div className="space-y-12">
            <div className="h-[500px] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
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
            <div className="h-12 bg-gray-200 dark:bg-gray-800 w-1/3 rounded-full relative overflow-hidden"><Shimmer /></div>
            <div className="h-4 bg-gray-100 dark:bg-gray-700 w-full rounded-full relative overflow-hidden"><Shimmer /></div>
            <div className="h-4 bg-gray-100 dark:bg-gray-700 w-5/6 rounded-full relative overflow-hidden"><Shimmer /></div>
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
