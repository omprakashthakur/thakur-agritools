
'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowUp, ArrowDown, Users, DollarSign, Activity, Percent } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';


const StatCard = ({ title, value, change, changeType, icon: Icon }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <span className={`flex items-center font-semibold ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
             {changeType === 'increase' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
            {change}
          </span>
          from last month
        </p>
      </CardContent>
    </Card>
);

const dealStageData = [
  { name: 'Leads', value: 45 },
  { name: 'Contacted', value: 35 },
  { name: 'Demo', value: 25 },
  { name: 'Proposal', value: 18 },
  { name: 'Won', value: 12 },
];

const campaignData = [
  { name: 'Summer Sale', status: 'Active', channel: 'Email', spend: '$1,200', revenue: '$5,500' },
  { name: 'New Product Launch', status: 'Completed', channel: 'Social', spend: '$2,500', revenue: '$8,200' },
  { name: 'Holiday Promo', status: 'Active', channel: 'Ads', spend: '$3,000', revenue: '$4,100' },
  { name: 'Win-back Campaign', status: 'Paused', channel: 'Email', spend: '$500', revenue: '$950' },
];

const leadSourceData = [
  { name: 'Organic Search', value: 400, fill: 'hsl(var(--chart-1))' },
  { name: 'Direct', value: 300, fill: 'hsl(var(--chart-2))' },
  { name: 'Referral', value: 200, fill: 'hsl(var(--chart-3))' },
  { name: 'Social Media', value: 278, fill: 'hsl(var(--chart-4))' },
];


export default function AdminDashboardPage() {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6">CRM Dashboard</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Sales Revenue" value="$86,954" change="+8.7%" changeType="increase" icon={DollarSign} />
                <StatCard title="New Leads" value="654" change="+11.2%" changeType="increase" icon={Users} />
                <StatCard title="Conversion Rate" value="15.3%" change="-1.1%" changeType="decrease" icon={Percent} />
                <StatCard title="Avg. Deal Size" value="$1,230" change="+5.4%" changeType="increase" icon={Activity}/>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Deal Distribution By Stage</CardTitle>
                        <CardDescription>A snapshot of your current sales pipeline.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={dealStageData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="hsl(var(--primary))" name="Deals" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <Card>
                     <CardHeader>
                        <CardTitle>Lead Sources</CardTitle>
                        <CardDescription>Where your new leads are coming from.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={leadSourceData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    dataKey="value"
                                >
                                    {leadSourceData.map((entry, index) => (
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
             <div className="grid grid-cols-1 gap-6 mt-6">
                 <Card>
                     <CardHeader>
                        <CardTitle>Active Campaigns</CardTitle>
                        <CardDescription>A summary of your current marketing efforts.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Campaign</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Channel</TableHead>
                                    <TableHead>Spend</TableHead>
                                    <TableHead className="text-right">Revenue</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {campaignData.map(campaign => (
                                    <TableRow key={campaign.name}>
                                        <TableCell className="font-medium">{campaign.name}</TableCell>
                                        <TableCell>
                                            <Badge variant={campaign.status === 'Active' ? 'default' : 'outline'}>{campaign.status}</Badge>
                                        </TableCell>
                                        <TableCell>{campaign.channel}</TableCell>
                                        <TableCell>{campaign.spend}</TableCell>
                                        <TableCell className="text-right">{campaign.revenue}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

