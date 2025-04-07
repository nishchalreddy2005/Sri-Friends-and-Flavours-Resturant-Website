import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export function Logo({ width = 120, height = 120, className = "" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo-transparent.png"
        alt="Sri Friends and Flavours"
        width={width}
        height={height}
        className={`h-auto object-contain ${className}`}
        priority
      />
    </Link>
  )
}

