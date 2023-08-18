import { ReactNode } from 'react'

interface SkeletonProps {
    children?: ReactNode
}

export function Skeleton({ children }: SkeletonProps) {
    return (
        <div className="skeleton animate-pulse" aria-busy="true">
            {children}
        </div>
    )
}

interface CircleProps {
    size: string
}

function Circle({ size }: CircleProps) {
    return (
        <div
            style={{
                backgroundColor: '#919EAB',
                borderRadius: '100%',
                width: size,
                height: size,
            }}
        />
    )
}

interface RectangleProps {
    width: string
    height: string
    borderRadius?: string
}

function Rectangle({ width, height, borderRadius }: RectangleProps) {
    return (
        <div
            style={{
                backgroundColor: '#919EAB',
                width,
                height,
                borderRadius,
            }}
        />
    )
}

Skeleton.Circle = Circle
Skeleton.Rectangle = Rectangle
