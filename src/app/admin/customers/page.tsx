
'use client';

import Image from 'next/image';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { customers } from '@/lib/data';

export default function AdminCustomersPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
            <CardTitle>Customers</CardTitle>
            <CardDescription>Manage your customers and view their details.</CardDescription>
        </div>
        <div className="flex items-center gap-2">
            <Button size="sm" variant="outline">Export</Button>
            <Button size="sm" asChild>
                <div className="cursor-pointer">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Customer
                </div>
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Avatar</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden md:table-cell">Phone</TableHead>
              <TableHead className="hidden md:table-cell">Total Orders</TableHead>
               <TableHead className="hidden md:table-cell">Total Spent</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
                <TableRow key={customer.id}>
                    <TableCell className="hidden sm:table-cell">
                        <Image
                        alt={`${customer.name}'s avatar`}
                        className="aspect-square rounded-full object-cover"
                        height="40"
                        src={customer.avatar}
                        width="40"
                        data-ai-hint="person face"
                        />
                    </TableCell>
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell className="hidden md:table-cell">{customer.phone}</TableCell>
                    <TableCell className="hidden md:table-cell text-center">{customer.totalOrders}</TableCell>
                    <TableCell className="hidden md:table-cell text-right">${customer.totalSpent.toFixed(2)}</TableCell>
                    <TableCell>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
