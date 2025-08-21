import { useMediaQuery } from '@uidotdev/usehooks';
import { useLocation } from 'react-router';

export default function Footer() {
  // 是否是移动设备
  const isMobile = useMediaQuery('(max-width: 768px)');
  const location = useLocation();
  const hasLoadPage = location.pathname === '/';
  return (
    <>
      {!isMobile && hasLoadPage && (
        <footer className="text-muted-foreground fixed right-0 bottom-0 left-0 border-t bg-gray-50 py-4 text-sm">
          <div className="flex items-center justify-center space-x-2">
            <p>Copyright © 2025 Grace</p>
            <p></p>
            <p>沪ICP备19023528号-6</p>
          </div>
        </footer>
      )}
    </>
  );
}
