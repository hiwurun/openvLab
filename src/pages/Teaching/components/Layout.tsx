'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { Breadcrumb } from './Breadcrumb';
import { Sidebar } from './Sidebar';

export interface MenuItem {
  title: string;
  href?: string;
  children?: MenuItem[];
  isActive?: boolean;
  content?: ReactNode;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface LayoutProps {
  menuItems: MenuItem[];
  defaultTitle?: string;
  defaultDescription?: string;
  onMenuItemClick?: (item: MenuItem, breadcrumbs: BreadcrumbItem[]) => void;
}

export function Layout({
  menuItems,
  defaultTitle,
  defaultDescription,
  onMenuItemClick
}: LayoutProps) {
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem | null>(null);
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([]);

  const findFirstMenuItemWithContent = (items: MenuItem[]): MenuItem | null => {
    // 首先查找顶级菜单项中有content的
    for (const item of items) {
      if (item.content) {
        return item;
      }
    }
    // 如果顶级菜单项都没有content，再查找子菜单
    for (const item of items) {
      if (item.children) {
        const found = findFirstMenuItemWithContent(item.children);
        if (found) return found;
      }
    }
    return null;
  };

  useEffect(() => {
    if (menuItems.length > 0 && !activeMenuItem) {
      const firstItemWithContent = findFirstMenuItemWithContent(menuItems);
      if (firstItemWithContent) {
        setActiveMenuItem(firstItemWithContent);
        const breadcrumbs = generateBreadcrumbs(firstItemWithContent, menuItems) || [
          { label: 'Docs' },
          { label: firstItemWithContent.title }
        ];
        setBreadcrumbItems(breadcrumbs);
      }
    }
  }, [menuItems, activeMenuItem]);

  const generateBreadcrumbs = (
    targetItem: MenuItem,
    items: MenuItem[],
    parentPath: BreadcrumbItem[] = []
  ): BreadcrumbItem[] | null => {
    for (const item of items) {
      const currentPath = [
        ...parentPath,
        {
          label: item.title,
          href: item.href,
          onClick: item.content ? () => handleMenuItemClick(item) : undefined
        }
      ];

      if (item === targetItem) {
        return [{ label: 'Docs' }, ...currentPath];
      }

      if (item.children) {
        const result = generateBreadcrumbs(targetItem, item.children, currentPath);
        if (result) return result;
      }
    }
    return null;
  };

  const handleMenuItemClick = (item: MenuItem) => {
    if (item.content) {
      setActiveMenuItem(item);
      const breadcrumbs = generateBreadcrumbs(item, menuItems) || [
        { label: 'Docs' },
        { label: item.title }
      ];
      setBreadcrumbItems(breadcrumbs);
      onMenuItemClick?.(item, breadcrumbs);
    }
  };

  const updateMenuItemsWithActive = (items: MenuItem[]): MenuItem[] => {
    return items.map((item) => ({
      ...item,
      isActive: item === activeMenuItem,
      children: item.children ? updateMenuItemsWithActive(item.children) : undefined
    }));
  };

  return (
    <div className="bg-background flex h-screen">
      <Sidebar
        menuItems={updateMenuItemsWithActive(menuItems)}
        onMenuItemClick={handleMenuItemClick}
      />
      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="border-border border-b p-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-6xl">
            {activeMenuItem?.content || (
              <div>
                {(defaultTitle || defaultDescription) && (
                  <div className="mb-8">
                    {defaultTitle && (
                      <h1 className="text-foreground mb-2 text-3xl font-bold">{defaultTitle}</h1>
                    )}
                    {defaultDescription && (
                      <p className="text-muted-foreground">{defaultDescription}</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
