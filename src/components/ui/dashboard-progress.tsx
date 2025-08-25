'use client';
import { cn } from '@/lib/utils';

interface DashboardProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  showValue?: boolean;
  label?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  showIndicator?: boolean;
}

const colorVariants = {
  primary: 'stroke-primary',
  secondary: 'stroke-secondary',
  success: 'stroke-green-500',
  warning: 'stroke-yellow-500',
  danger: 'stroke-red-500'
};

export function DashboardProgress({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  className,
  showValue = true,
  label,
  color = 'primary',
  showIndicator = true,
  ...props
}: DashboardProgressProps) {
  const normalizedValue = Math.min(Math.max(value, 0), max);
  const percentage = (normalizedValue / max) * 100;

  const radius = (size - strokeWidth) / 2;

  const angle = Math.PI * (1 - percentage / 100); // 从π到0的角度
  const indicatorX = size / 2 + radius * Math.cos(angle);
  const indicatorY = size / 2 - radius * Math.sin(angle);

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)} {...props}>
      <svg
        width={size}
        height={size / 2 + strokeWidth / 2}
        className="transform"
        viewBox={`0 0 ${size} ${size / 2 + strokeWidth / 2}`}
      >
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          className={cn(colorVariants[color])}
        />

        {showIndicator && (
          <circle
            cx={indicatorX}
            cy={indicatorY}
            r={strokeWidth / 2 + 2}
            fill="currentColor"
            className="text-foreground transition-all duration-500 ease-in-out"
          />
        )}
      </svg>

      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 transform flex-col items-center">
        {showValue && (
          <span className="text-foreground text-sm font-bold">{Math.round(percentage)}</span>
        )}
        {label && <span className="text-muted-foreground mt-1 text-sm">{label}</span>}
      </div>
    </div>
  );
}
