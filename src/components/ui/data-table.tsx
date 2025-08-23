'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowDown, ArrowUp, ArrowUpDown, HelpCircle } from 'lucide-react';

type SortDirection = 'asc' | 'desc' | null;

export interface ColumnDef<T = any> {
  key: string;
  title: string;
  tooltip?: string;
  sortable?: boolean;
  sticky?: boolean;
  minWidth?: string;
  render?: (value: any, row: T) => React.ReactNode;
}

interface DataTableProps<T = any> {
  data: T[];
  columns: ColumnDef<T>[];
  sortColumn?: string | null;
  sortDirection?: SortDirection;
  onSort?: (column: string, direction: SortDirection) => void;
}

export function DataTable<T = any>({
  data,
  columns,
  sortColumn,
  sortDirection,
  onSort
}: DataTableProps<T>) {
  const handleSort = (column: string) => {
    if (!onSort) return;

    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        onSort(column, 'desc');
      } else if (sortDirection === 'desc') {
        onSort(column, null);
      } else {
        onSort(column, 'asc');
      }
    } else {
      onSort(column, 'asc');
    }
  };

  const getSortIcon = (column: string, isActive: boolean, isSorted: boolean) => {
    const baseClasses = 'ml-2 h-4 w-4 transition-all duration-200';

    if (!isActive && !isSorted) {
      return <ArrowUpDown className={`${baseClasses} opacity-0 group-hover:opacity-60`} />;
    }

    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        return <ArrowUp className={`${baseClasses} text-primary opacity-100`} />;
      }
      if (sortDirection === 'desc') {
        return <ArrowDown className={`${baseClasses} text-primary opacity-100`} />;
      }
    }

    return <ArrowUpDown className={`${baseClasses} opacity-60`} />;
  };

  return (
    <TooltipProvider>
      <div className="rounded-md border">
        <div className="relative overflow-auto">
          <Table className="border-collapse">
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead
                    key={column.key}
                    className={` ${column.sticky ? 'bg-background sticky left-0 z-10 border-r' : ''} ${column.minWidth ? column.minWidth : 'min-w-[120px]'} border text-center`}
                  >
                    <div className="flex items-center">
                      {column.sortable !== false ? (
                        <Button
                          variant="ghost"
                          onClick={() => handleSort(column.key)}
                          className="group h-auto p-0! font-semibold transition-colors duration-200 hover:bg-transparent"
                        >
                          {column.title}
                          {getSortIcon(column.key, false, sortColumn === column.key)}
                        </Button>
                      ) : (
                        <span className="font-semibold">{column.title}</span>
                      )}
                      {column.tooltip && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-muted-foreground hover:text-foreground ml-2 h-4 w-4 cursor-help transition-colors duration-200" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{column.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.key}
                      className={` ${column.sticky ? 'bg-background sticky left-0 z-10 border-r' : ''} ${column.sticky ? 'font-medium' : ''} border`}
                    >
                      {column.render
                        ? column.render(row[column.key as keyof T], row)
                        : String(row[column.key as keyof T] || '')}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </TooltipProvider>
  );
}
