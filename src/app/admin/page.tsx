
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';

const StatCard = ({ title, value, change, changeType, from }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <span className={changeType === 'increase' ? 'text-green-500' : 'text-red-500'}>
            {change}
          </span>
          {from}
        </p>
      </CardContent>
    </Card>
);


export default function AdminDashboardPage() {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6">CRM Dashboard</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Sales" value="354" change="25.67%" changeType="increase" from="From last week" />
                <StatCard title="Revenue" value="$86,954" change="8.67%" changeType="increase" from="From last week" />
                <StatCard title="Conversion" value="15%" change="1.67%" changeType="decrease" from="From last week" />
                <StatCard title="Leads" value="654" change="11.67%" changeType="increase" from="From last week" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Deal Distribution By Stage</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Bar Chart will go here */}
                        <div className="h-80 w-full bg-muted rounded-md flex items-center justify-center">
                            <p className="text-muted-foreground">Bar Chart Placeholder</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                     <CardHeader>
                        <CardTitle>Campaigns</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Campaigns Table will go here */}
                         <div className="h-80 w-full bg-muted rounded-md flex items-center justify-center">
                            <p className="text-muted-foreground">Campaigns Placeholder</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
             <div className="grid grid-cols-1 gap-6 mt-6">
                 <Card>
                     <CardHeader>
                        <CardTitle>Trends Calculation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Donut Chart will go here */}
                         <div className="h-64 w-full bg-muted rounded-md flex items-center justify-center">
                            <p className="text-muted-foreground">Donut Chart Placeholder</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

