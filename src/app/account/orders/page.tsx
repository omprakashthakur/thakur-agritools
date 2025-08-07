

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const orders = [
    {
        id: 'ORD001',
        date: '2023-10-26',
        status: 'Delivered',
        total: 179.98,
    },
    {
        id: 'ORD002',
        date: '2023-10-20',
        status: 'Delivered',
        total: 49.99,
    },
     {
        id: 'ORD003',
        date: '2023-09-15',
        status: 'Cancelled',
        total: 249.99,
    },
];

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

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order History</CardTitle>
        <CardDescription>View your past orders and their status.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.map((order) => (
                    <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                            <Badge variant={getStatusVariant(order.status) as any}>{order.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                        <TableCell className="text-right">
                           <Button variant="outline" size="sm">View Details</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
