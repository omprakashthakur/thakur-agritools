

export const orders = [
    {
        id: 'ORD001',
        date: '2023-10-26',
        status: 'Delivered',
        total: 179.98,
        subtotal: 159.98,
        shipping: 10.00,
        taxes: 10.00,
        shippingAddress: '123 Main St, Dhangadhi, Kailali, 10001, Nepal',
        billingAddress: '123 Main St, Dhangadhi, Kailali, 10001, Nepal',
        items: [
            { productId: '1', quantity: 1 },
            { productId: '2', quantity: 1 }
        ]
    },
    {
        id: 'ORD002',
        date: '2023-10-20',
        status: 'Delivered',
        total: 49.99,
        subtotal: 39.99,
        shipping: 10.00,
        taxes: 0.00,
        shippingAddress: '456 Side St, Biratnagar, Morang, 56613, Nepal',
        billingAddress: '456 Side St, Biratnagar, Morang, 56613, Nepal',
        items: [
            { productId: '7', quantity: 2 },
        ]
    },
     {
        id: 'ORD003',
        date: '2023-09-15',
        status: 'Cancelled',
        total: 249.99,
        subtotal: 249.99,
        shipping: 0.00,
        taxes: 0.00,
        shippingAddress: '123 Main St, Dhangadhi, Kailali, 10001, Nepal',
        billingAddress: '123 Main St, Dhangadhi, Kailali, 10001, Nepal',
        items: [
            { productId: '3', quantity: 1 }
        ]
    },
];

export const allProducts: any[] = [];

export const categories = [
    { id: 'power-tools', label: 'Power Tools' },
    { id: 'hand-tools', label: 'Hand Tools' },
    { id: 'gardening', label: 'Gardening' },
    { id: 'farming-equipment', label: 'Farming Equipment' },
    { id: 'safety-gear', label: 'Safety Gear' },
];

export const customers = [
    {
        id: 'CUST001',
        name: 'Liam Johnson',
        email: 'liam@example.com',
        phone: '555-0100',
        registered: '2023-01-15',
        totalOrders: 5,
        totalSpent: 1250.75,
        avatar: 'https://placehold.co/40x40.png'
    },
    {
        id: 'CUST002',
        name: 'Olivia Smith',
        email: 'olivia@example.com',
        phone: '555-0101',
        registered: '2023-02-20',
        totalOrders: 2,
        totalSpent: 350.50,
        avatar: 'https://placehold.co/40x40.png'
    },
    {
        id: 'CUST003',
        name: 'Noah Williams',
        email: 'noah@example.com',
        phone: '555-0102',
        registered: '2023-03-10',
        totalOrders: 8,
        totalSpent: 2400.00,
        avatar: 'https://placehold.co/40x40.png'
    },
    {
        id: 'CUST004',
        name: 'Emma Brown',
        email: 'emma@example.com',
        phone: '555-0103',
        registered: '2023-04-05',
        totalOrders: 1,
        totalSpent: 75.20,
        avatar: 'https://placehold.co/40x40.png'
    },
    {
        id: 'CUST005',
        name: 'Oliver Jones',
        email: 'oliver@example.com',
        phone: '555-0104',
        registered: '2023-05-21',
        totalOrders: 3,
        totalSpent: 620.00,
        avatar: 'https://placehold.co/40x40.png'
    }
];
