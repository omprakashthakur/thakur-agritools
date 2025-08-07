
'use client';

import Link from 'next/link';
import { MoreHorizontal, ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { orders } from '@/lib/data';

const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
        case 'delivered':
            return 'default';
        case 'shipped':
            return 'secondary';
        case 'processing':
            return 'outline';
        case 'cancelled':
            return 'destructive';
        default:
            return 'default';
    }
}

const customerNames = ["Liam Johnson", "Olivia Smith", "Noah Williams", "Emma Brown", "Oliver Jones"];

export default function AdminOrdersPage() {
  return (
    <div className="flex flex-col gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Orders</CardTitle>
                <CardDescription>
                A list of all the recent orders from your store.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order, index) => (
                    <TableRow key={order.id}>
                        <TableCell>
                            <div className="font-medium">{customerNames[index % customerNames.length]}</div>
                            <div className="text-sm text-muted-foreground">
                                customer{index+1}@example.com
                            </div>
                        </TableCell>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>
                            <Badge variant={getStatusVariant(order.status) as any}>
                                {order.status}
                            </Badge>
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                        <TableCell className="text-right">
                             <Button asChild size="sm" variant="outline">
                                <Link href={`/admin/orders/${order.id}`}>View Details <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                             </Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}
