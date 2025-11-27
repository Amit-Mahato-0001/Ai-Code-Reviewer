function Loading() {
  return (
    <div className="w-full h-[15vh] flex items-center justify-center">
      <div className="flex items-center space-x-4">
        
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-6 bg-white rounded-full animate-wave"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>

        <span className="text-1xl md:text-2xl text-center tracking-tight leading-tight">
          Loading
        </span>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.3); }
        }
        .animate-wave {
          animation: wave ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Loading;