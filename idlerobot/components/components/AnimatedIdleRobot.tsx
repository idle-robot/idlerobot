
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AnimatedIdleRobot() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="logo-wrap" aria-label="Idle Robot animated logo">
      <Image src="/idle-robot-logo.png" alt="Idle Robot" className="logo-base" width={560} height={560} priority />
      <div className="brain-glow" aria-hidden="true" />
      <div className="eyelid left" aria-hidden="true" />
      <div className="eyelid right" aria-hidden="true" />
    </div>
  );
}
