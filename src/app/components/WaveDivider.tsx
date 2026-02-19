// Wave/Ripple divider component for section transitions
export function WaveDivider({ 
  color = 'gray-50', 
  flip = false 
}: { 
  color?: string; 
  flip?: boolean;
}) {
  return (
    <div className={`w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 lg:h-20"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 Q360,0 720,60 T1440,60 L1440,120 L0,120 Z"
          className={`fill-${color}`}
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
