import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FEATURES } from '@/constans';
import { BarChart3, CircleHelp, Play } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="flex items-center justify-center px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400">
              <img src="https://www.openvlab.cn/logo.svg" alt="Logo" className="h-20 w-20" />
            </div>
            <Badge
              variant="secondary"
              className="absolute -top-1 -right-1 bg-gray-800 px-1.5 py-0.5 text-xs text-white"
            >
              Beta
            </Badge>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center px-6 py-8 text-center">
        <div className="mx-auto mb-12 max-w-4xl">
          <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
            我们为期权交易者提供最好的图表工具
          </h1>
          <p className="mb-8 text-lg text-gray-600">专业、极简、跨平台的期权行情与策略分析平台</p>
          <div className="mb-8 flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-black px-8 text-white hover:bg-gray-800"
              onClick={() => navigate('/market')}
            >
              <Play />
              开始使用
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent px-8"
              onClick={() => navigate('/teaching')}
            >
              <CircleHelp />
              了解更多
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <BarChart3 className="h-4 w-4" />
            <span>兼容手机、平板与桌面浏览器</span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-4xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <Card
                key={feature.title}
                className="border-0 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <CardContent className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
