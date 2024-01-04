import type { ReactNode } from 'react';

interface SkeletonProps {
  children?: ReactNode;
}

export const Skeleton = ({ children }: SkeletonProps) => {
  return (
    <div className="skeleton animate-pulse" aria-busy="true">
      {children}
    </div>
  );
};

interface CircleProps {
  size: string;
}

const Circle = ({ size }: CircleProps) => {
  return (
    <div
      style={{
        backgroundColor: '#919EAB',
        borderRadius: '100%',
        width: size,
        height: size,
      }}
    />
  );
};

interface RectangleProps {
  width: string;
  height: string;
  borderRadius?: string;
}

const Rectangle = ({ width, height, borderRadius }: RectangleProps) => {
  return (
    <div
      style={{
        backgroundColor: '#919EAB',
        width,
        height,
        borderRadius,
      }}
    />
  );
};

Skeleton.Circle = Circle;
Skeleton.Rectangle = Rectangle;
