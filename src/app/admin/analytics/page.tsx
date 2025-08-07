
'use client';

import { BarChart, LineChart, PieChart, Bar, Line, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Users, ShoppingCart, ArrowUp, ArrowDown } from 'lucide-react';

const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];

const trafficData = [
  { name: 'Direct', value: 400, fill: '#8884d8' },
  { name: 'Organic Search', value: 300, fill: '#82ca9d' },
  { name: 'Referral', value: 200, fill: '#ffc658' },
  { name: 'Social Media', value: 100, fill: '#ff8042' },
];

const topProducts = [
    { name: 'Power Drill', sales: 120 },
    { name: 'Garden Shovel', sales: 90 },
    { name: 'Welder', sales: 80 },
    { name: 'Harvester', sales: 50 },
    { name: 'Pruner', sales: 150 },
]

const StatCard = ({ title, value, icon: Icon, change, changeType }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
         <p className="text-xs text-muted-foreground flex items-center">
             <span className={`flex items-center mr-1 ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
                {changeType === 'increase' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                {change}
             </span>
             from last month
        </p>
      </CardContent>
    </Card>
);

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
        <h1 className="text-3xl font-bold">Analytics Overview</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StatCard title="Total Revenue" value="$45,231.89" icon={DollarSign} change="20.1%" changeType="increase" />
            <StatCard title="New Customers" value="+2,350" icon={Users} change="12.5%" changeType="increase" />
            <StatCard title="Total Orders" value="+12,234" icon={ShoppingCart} change="5.2%" changeType="decrease" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Sales Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sales" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Top Selling Products</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={topProducts} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" width={100} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="sales" fill="hsl(var(--primary))" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>

        <div className="grid grid-cols-1">
             <Card>
                <CardHeader>
                    <CardTitle>Traffic Sources</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie data={trafficData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                                {trafficData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
