import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { NAV_LIST } from "@/constans";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  return (
    <div className='sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/40 h-14 flex items-center justify-between px-5'>
      <div className='flex items-center gap-3 '>
        <img className='w-7 h-7' src='https://www.openvlab.cn/logo.svg' alt='Logo' />
        <span className='text-lg font-bold hidden sm:inline-block text-primary'>OpenVlab</span>
        <nav className='ml-4 flex items-center gap-5'>
          <ul className='flex items-center gap-5'>
            {NAV_LIST.map(item => (
              <li key={item.path}>
                {item.children ? (
                  <Popover
                    open={openPopover === item.path}
                    onOpenChange={open => setOpenPopover(open ? item.path : null)}>
                    <PopoverTrigger asChild>
                      <button
                        className='relative text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 flex items-center gap-1 px-3 py-2 rounded-md transition-colors group'
                        onMouseEnter={() => setOpenPopover(item.path)}
                        onMouseLeave={() => setOpenPopover(null)}>
                        {item.label}
                        <ChevronDown size={14} />
                        <span className='absolute -bottom-1 left-1/2 h-0.5 bg-foreground transform -translate-x-1/2 w-0 group-hover:w-3/4 transition-all duration-300'></span>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent
                      className='w-64 p-2'
                      onMouseEnter={() => setOpenPopover(item.path)}
                      onMouseLeave={() => setOpenPopover(null)}>
                      <div className='space-y-2'>
                        {item.children.map((child, index) => (
                          <a
                            key={index}
                            href={child.path}
                            className='flex items-center gap-3 p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors'>
                            {child.icon && (
                              <span className='text-muted-foreground'>{child.icon}</span>
                            )}
                            <div>
                              <div className='font-medium'>{child.label}</div>
                              {child.description && (
                                <div className='text-xs text-muted-foreground'>
                                  {child.description}
                                </div>
                              )}
                            </div>
                          </a>
                        ))}
                        {item.link && (
                          <div className='border-t pt-2 mt-2'>
                            {item.link.map((link, index) => (
                              <a
                                key={index}
                                href={`${item.path}${link.params || ""}`}
                                className='flex items-center gap-3 p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors'>
                                {link.icon && (
                                  <span className='text-muted-foreground'>{link.icon}</span>
                                )}
                                <span className='font-medium'>{link.label}</span>
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
                    className='text-sm font-medium text-muted-foreground hover:text-foreground/80'>
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
