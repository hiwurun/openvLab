import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-background flex h-screen w-full flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-primary text-9xl font-bold">404</h1>
        <p className="text-muted-foreground mt-2 text-lg">抱歉，我还没有做这个功能~</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={() => navigate('/')} variant="default" size="lg">
            返回首页
          </Button>
          <Button onClick={() => navigate(-1)} variant="outline" size="lg">
            返回上一页
          </Button>
        </div>
      </div>
    </div>
  );
}
