'use client';

import { cn } from '@/lib/utils';

import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="text-muted-foreground flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="mx-2 h-4 w-4" />}
          {item.onClick ? (
            <button
              onClick={item.onClick}
              className={cn(
                'hover:text-foreground transition-colors',
                index === items.length - 1 ? 'text-primary font-medium' : 'text-muted-foreground'
              )}
            >
              {item.label}
            </button>
          ) : item.href ? (
            <a
              href={item.href}
              className={
                index === items.length - 1
                  ? 'text-primary font-medium'
                  : 'hover:text-foreground transition-colors'
              }
            >
              {item.label}
            </a>
          ) : (
            <span
              className={
                index === items.length - 1 ? 'text-primary font-medium' : 'text-muted-foreground'
              }
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
