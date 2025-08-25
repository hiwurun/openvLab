'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export interface MenuItem {
  title: string;
  href?: string;
  children?: MenuItem[];
  isActive?: boolean;
}

interface SidebarProps {
  menuItems: MenuItem[];
  onMenuItemClick?: (item: MenuItem) => void;
}

export function Sidebar({ menuItems, onMenuItemClick }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleItemClick = (item: MenuItem) => {
    onMenuItemClick?.(item);
  };

  const renderMenuItem = (item: MenuItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.title}>
        <div
          className={cn(
            'hover:bg-accent hover:text-accent-foreground flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
            level > 0 && 'ml-4',
            item.isActive && 'bg-accent text-accent-foreground'
          )}
          onClick={() => handleItemClick(item)}
        >
          {level > 0 && <div className="w-4" />}
          <span className={cn(isCollapsed && level === 0 && 'sr-only')}>{item.title}</span>
        </div>

        {hasChildren && !isCollapsed && (
          <div className="mt-1">
            {item.children?.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={cn(
        'bg-sidebar border-sidebar-border border-r transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="border-sidebar-border flex items-center justify-between border-b p-4">
        {!isCollapsed && (
          <h2 className="text-sidebar-foreground text-lg font-semibold">OpenVlab 文档</h2>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="space-y-2 p-4">{menuItems.map((item) => renderMenuItem(item))}</nav>
    </div>
  );
}
