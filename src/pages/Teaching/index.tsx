import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { ReactSVG } from 'react-svg';
import { Layout } from './components/Layout';

export default function Teaching() {
  const videoList = [
    {
      url: 'https://www.openvlab.cn/images/teaching/video9.webp',
      description: '期权T型报价的极致体验',
      iframe:
        'https://www.xiaohongshu.com/discovery/item/687795e4000000002203d908?source=webshare&xhsshare=pc_web&xsec_token=ABz0DcdsL9ZSLpBKlYY0kxjexFE2DgrGM9Mf9lcRy5xDs=&xsec_source=pc_share'
    },
    {
      url: 'https://www.openvlab.cn/images/teaching/video8.webp',
      description: '全网最直观波动率曲面',
      iframe:
        'https://www.xiaohongshu.com/discovery/item/68289068000000002100f357?source=webshare&xhsshare=pc_web&xsec_token=ABG9ellVEc-4v6hKm0CwnGj5Mi7s-AbKcE2XLyz_QULVg=&xsec_source=pc_share'
    },
    {
      url: 'https://www.openvlab.cn/images/teaching/video7.webp',
      description: 'TradingView高级图表(一)',
      iframe:
        'https://www.xiaohongshu.com/discovery/item/68077e4d000000001d01d3c9?source=webshare&xhsshare=pc_web&xsec_token=ABM3QgGPryHioSYYTGuRU-qMubdnBb0ksE2aYbBeOspQ4=&xsec_source=pc_share'
    },
    {
      url: 'https://www.openvlab.cn/images/teaching/video6.webp',
      description: '期权策略构建器，从入门到精通！',
      iframe:
        'https://www.xiaohongshu.com/discovery/item/67ee8164000000001c00e5be?source=webshare&xhsshare=pc_web&xsec_token=ABEIWrZ-qG-Y4WAxxDS4L3MCalhdVdMCVnD3_h6RANbT4=&xsec_source=pc_share'
    },
    {
      url: 'https://www.openvlab.cn/images/teaching/video5.jpeg',
      description: '一文带你快速了解波动率曲面',
      iframe:
        'https://www.xiaohongshu.com/discovery/item/67dc086a000000001201da64?source=webshare&xhsshare=pc_web&xsec_token=ABrJ8WwqCPIfV3koUVBNNTKKhsRjomT0fzN2mRjR4h4Ig=&xsec_source=pc_share'
    },
    {
      url: 'https://www.openvlab.cn/images/teaching/video4.webp',
      description: '论隐含波动率的影响',
      iframe:
        'https://www.xiaohongshu.com/discovery/item/67d58e7a000000001b039356?source=webshare&xhsshare=pc_web&xsec_token=ABxaTnn0GB55ifYyIzGoWYAE-oHlFpXC3PrZnAa3Tj6Y4=&xsec_source=pc_share'
    },
    {
      url: 'https://www.openvlab.cn/images/teaching/video3.webp',
      description: '论期权的时间损耗',
      iframe:
        'https://www.xiaohongshu.com/discovery/item/67cc4eea000000001203ec89?source=webshare&xhsshare=pc_web&xsec_token=ABRQuodNrm8GiwsyRVdFi0A-5jZWUcmOyGpYpSVfhQAv8=&xsec_source=pc_share'
    },
    {
      url: 'https://www.openvlab.cn/images/teaching/video2.webp',
      description: '策略盈亏图表模式',
      iframe:
        'https://www.xiaohongshu.com/discovery/item/67c7df3e000000001203ef2e?source=webshare&xhsshare=pc_web&xsec_token=ABzYb9S8K3S0dMXcRRxk3Q0lkCuzi1Rm8p_NqJ6q8etfk=&xsec_source=pc_share'
    },
    {
      url: 'https://www.openvlab.cn/images/teaching/video1.webp',
      description: '实时隐含波动率',
      iframe:
        'https://www.xiaohongshu.com/discovery/item/67c1229c0000000003028fed?source=webshare&xhsshare=pc_web&xsec_token=ABHC-pPiklP_jT_L1TiUM0tQEwh1xH59pa9DuVqo3uVKg=&xsec_source=pc_share'
    }
  ];

  const tutorials = [
    { title: '行情轻量版', description: '轻量级行情数据展示' },
    { title: '行情高级版', description: '高级行情分析工具' },
    { title: '波动率曲面', description: '波动率曲面分析' },
    { title: '策略构建器', description: '量化策略构建工具' },
    { title: '如何计算隐含波动率', description: '隐含波动率计算方法' }
  ];

  const menuItems = [
    {
      title: '视频教程',
      href: '/videos',
      content: (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videoList.map((v, index) => {
            return (
              <Dialog key={index}>
                <DialogTrigger>
                  <Card>
                    <CardContent className="flex w-full items-center justify-center bg-black p-2">
                      <img src={v.url} className="h-60 w-60 object-cover" />
                      <div className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-white/90 transition-all duration-300 group-hover:scale-110">
                        <ReactSVG src="src/assets/player.svg"></ReactSVG>
                      </div>
                    </CardContent>
                    <CardFooter>{v.description}</CardFooter>
                  </Card>
                </DialogTrigger>
                <DialogContent className="px-0">
                  <DialogHeader>
                    <DialogTitle className="px-4">{v.description}</DialogTitle>
                  </DialogHeader>
                  <div className="h-152">
                    <iframe src={v.iframe} className="h-full w-full"></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      )
    },
    {
      title: '文档教程',
      content: (
        <div>
          <div className="mb-8">
            <h1 className="text-foreground mb-2 text-3xl font-bold">文档教程</h1>
            <p className="text-muted-foreground">阅读详细文档教程，深入了解OpenVlab</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="cursor-pointer transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{tutorial.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ),
      children: [
        {
          title: '行情轻量版',
          href: '/docs/basic-quotes',
          content: (
            <div>
              <div className="mb-8">
                <h1 className="text-foreground mb-2 text-3xl font-bold">行情轻量版</h1>
                <p className="text-muted-foreground">轻量级行情数据展示功能详解</p>
              </div>
              <div className="prose max-w-none">
                <p>这里是行情轻量版的详细文档内容...</p>
              </div>
            </div>
          )
        },
        {
          title: '行情高级版',
          href: '/docs/advanced-quotes',
          content: (
            <div>
              <div className="mb-8">
                <h1 className="text-foreground mb-2 text-3xl font-bold">行情高级版</h1>
                <p className="text-muted-foreground">高级行情分析工具使用指南</p>
              </div>
              <div className="prose max-w-none">
                <p>这里是行情高级版的详细文档内容...</p>
              </div>
            </div>
          )
        },
        {
          title: '波动率曲面',
          href: '/docs/volatility-surface',
          content: (
            <div>
              <div className="mb-8">
                <h1 className="text-foreground mb-2 text-3xl font-bold">波动率曲面</h1>
                <p className="text-muted-foreground">波动率曲面分析功能说明</p>
              </div>
              <div className="prose max-w-none">
                <p>这里是波动率曲面的详细文档内容...</p>
              </div>
            </div>
          )
        },
        {
          title: '策略构建器',
          href: '/docs/strategy-builder',
          content: (
            <div>
              <div className="mb-8">
                <h1 className="text-foreground mb-2 text-3xl font-bold">策略构建器</h1>
                <p className="text-muted-foreground">量化策略构建工具教程</p>
              </div>
              <div className="prose max-w-none">
                <p>这里是策略构建器的详细文档内容...</p>
              </div>
            </div>
          )
        },
        {
          title: '如何计算隐含波动率',
          href: '/docs/implied-volatility',
          content: (
            <div>
              <div className="mb-8">
                <h1 className="text-foreground mb-2 text-3xl font-bold">如何计算隐含波动率</h1>
                <p className="text-muted-foreground">隐含波动率计算方法详解</p>
              </div>
              <div className="prose max-w-none">
                <p>这里是隐含波动率计算的详细文档内容...</p>
              </div>
            </div>
          )
        }
      ]
    }
  ];

  const handleMenuItemClick = (item: any, breadcrumbs: any[]) => {
    console.log('Menu item clicked:', item.title);
    console.log('Breadcrumbs:', breadcrumbs);
  };

  return <Layout menuItems={menuItems} onMenuItemClick={handleMenuItemClick} />;
}
