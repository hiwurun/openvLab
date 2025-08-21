import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { NAV_LIST } from '@/constans';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  return (
    <div className="bg-background/95 border-border/40 sticky top-0 z-50 flex h-14 w-full items-center justify-between border-b px-5 py-4 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <img className="h-7 w-7" src="https://www.openvlab.cn/logo.svg" alt="Logo" />
        <span className="text-primary hidden text-lg font-bold sm:inline-block">OpenVlab</span>
        <nav className="ml-4 flex items-center gap-5">
          <ul className="flex items-center gap-5">
            {NAV_LIST.map((item) => (
              <li key={item.path}>
                {item.children ? (
                  <Popover
                    open={openPopover === item.path}
                    onOpenChange={(open) => setOpenPopover(open ? item.path : null)}
                  >
                    <PopoverTrigger asChild>
                      <button
                        className="text-foreground/80 hover:text-primary hover:bg-accent/50 group relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none"
                        onMouseEnter={() => setOpenPopover(item.path)}
                        onMouseLeave={() => setOpenPopover(null)}
                      >
                        {item.label}
                        <ChevronDown size={14} />
                        <span className="bg-foreground absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 transform transition-all duration-300 group-hover:w-3/4"></span>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-64 p-2"
                      onMouseEnter={() => setOpenPopover(item.path)}
                      onMouseLeave={() => setOpenPopover(null)}
                    >
                      <div className="space-y-2">
                        {item.children.map((child, index) => (
                          <a
                            key={index}
                            href={child.path}
                            className="hover:bg-accent hover:text-accent-foreground flex items-center gap-3 rounded-md p-2 transition-colors"
                          >
                            {child.icon && (
                              <span className="text-muted-foreground">{child.icon}</span>
                            )}
                            <div>
                              <div className="text-sm font-medium">{child.label}</div>
                              {child.description && (
                                <div className="text-muted-foreground text-xs">
                                  {child.description}
                                </div>
                              )}
                            </div>
                          </a>
                        ))}
                        {item.link && (
                          <div className="mt-2 flex border-t pt-2 text-xs">
                            {item.link.map((link, index) => (
                              <a
                                key={index}
                                href={`${item.path}${link.params || ''}`}
                                className="hover:bg-accent hover:text-accent-foreground flex items-center gap-3 rounded-md p-2 transition-colors"
                              >
                                {link.icon && (
                                  <span className="text-muted-foreground">{link.icon}</span>
                                )}
                                <span className="font-medium">{link.label}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <a
                    href={item.path}
                    className="text-muted-foreground hover:text-foreground/80 text-sm font-medium"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
