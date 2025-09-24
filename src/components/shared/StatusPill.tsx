import type { ReactNode } from 'react';
import type { Status } from '@/types';

interface StatusPillProps {
  status: Status;
  children: ReactNode;
}

function StatusPill({ status = 'unknown', children }: StatusPillProps) {
  const statusClasses: Record<Status, string> = {
    species: 'bg-blue-100 text-blue-900',
    alive: 'bg-green-100 text-green-900',
    dead: 'bg-red-100 text-red-900',
    unknown: 'bg-yellow-200 text-yellow-700',
  };

  const className = `rounded-full px-3 py-1 ${statusClasses[status]}`;

  return <span className={className}>{children}</span>;
}

export default StatusPill;
