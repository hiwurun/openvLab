import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import { EXCHANGE_TYPE, EXPORT_TYPE, PRODUCT_TYPE } from '@/constans/Market';
import { ChevronDown, FileDown } from 'lucide-react';
import { useState } from 'react';
export default function Condition() {
  const [currentProduct, setCurrentProduct] = useState('all');
  const [currentExchange, setCurrentExchange] = useState('all');
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div className="flex flex-wrap gap-2">
            {PRODUCT_TYPE.map((item) => (
              <Button
                size="sm"
                variant={currentProduct === item.value ? 'default' : 'outline'}
                key={item.value}
                onClick={() => setCurrentProduct(item.value)}
              >
                {item.title}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {EXCHANGE_TYPE.map((item) => (
              <Button
                size="sm"
                variant={currentExchange === item.value ? 'default' : 'outline'}
                key={item.value}
                onClick={() => setCurrentExchange(item.value)}
              >
                {item.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">仅夜盘</Label>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button size="sm" variant="outline">
                <FileDown className="h-4 w-4" aria-label="导出" />
                导出
                <ChevronDown />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex w-auto flex-col gap-2 p-0">
              {EXPORT_TYPE.map((item) => (
                <Button variant="ghost" key={item.value}>
                  {item.title}
                </Button>
              ))}
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
}
