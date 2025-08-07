
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
      <CardContent className="space-y-4">
        {addresses.map((addr) => (
            <Card key={addr.id} className="p-4 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold">{addr.type} Address</p>
                        {addr.isDefault && <span className="text-xs text-muted-foreground">(Default)</span>}
                    </div>
                    <p className="text-muted-foreground">{addr.address}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            </Card>
        ))}
      </CardContent>
    </Card>
  );
}
