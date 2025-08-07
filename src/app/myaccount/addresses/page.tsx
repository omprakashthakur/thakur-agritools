

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit, Trash2 } from "lucide-react";

const addresses = [
    {
        id: '1',
        type: 'Shipping',
        isDefault: true,
        address: '123 Main St, Dhangadhi, Kailali, 10001, Nepal',
    },
    {
        id: '2',
        type: 'Billing',
        isDefault: false,
        address: '456 Side St, Biratnagar, Morang, 56613, Nepal',
    }
];

export default function AddressesPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
            <CardTitle>My Addresses</CardTitle>
            <CardDescription>Manage your saved shipping and billing addresses.</CardDescription>
        </div>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Address
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
            {addresses.map((addr) => (
                <Card key={addr.id}>
                    <CardHeader className="flex flex-row items-start justify-between">
                        <div>
                            <CardTitle className="text-xl">{addr.type} Address</CardTitle>
                            {addr.isDefault && <p className="text-sm text-primary font-medium">Default</p>}
                        </div>
                         <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Delete</span>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{addr.address}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
