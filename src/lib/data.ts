

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

export const allProducts = [
    { 
        id: '1', 
        name: 'Heavy Duty Power Drill', 
        price: 129.99, 
        originalPrice: 159.99, 
        image: 'https://placehold.co/600x600.png',
        images: [
            'https://placehold.co/600x600.png',
            'https://placehold.co/600x600.png',
            'https://placehold.co/600x600.png',
            'https://placehold.co/600x600.png',
        ],
        slug: 'power-drill', 
        category: 'power-tools', 
        rating: 4.5,
        description: 'A powerful and durable drill for heavy-duty tasks. Comes with a brushless motor for longer life and better performance. Ideal for both professional and home use.',
        specifications: {
            'Voltage': '20V',
            'Battery': '2.0Ah Lithium-Ion',
            'Chuck Size': '1/2 Inch',
            'No-load speed': '0-2,000 RPM'
        },
        reviews: [
            { rating: 5, comment: "This drill is an absolute beast! Powers through everything I throw at it." },
            { rating: 5, comment: "Long battery life and very comfortable to hold. Highly recommend." },
            { rating: 4, comment: "Great drill, very powerful. A bit on the heavy side, but that's expected for its class." },
            { rating: 3, comment: "The chuck sometimes loosens up on its own, which is annoying." },
            { rating: 5, comment: "Excellent value for the price. Performs just as well as more expensive brands." }
        ]
    },
    { 
        id: '2', 
        name: 'Professional Garden Shovel', 
        price: 49.99, 
        image: 'https://placehold.co/600x600.png', 
        images: ['https://placehold.co/600x600.png'],
        slug: 'shovel', 
        category: 'hand-tools', 
        rating: 5,
        description: 'Ergonomically designed garden shovel with a hardened steel blade and a comfortable D-handle. Perfect for digging, scooping, and moving soil.',
         specifications: {
            'Blade Material': 'Hardened Steel',
            'Handle': 'Fiberglass with D-Grip',
            'Length': '40 Inches',
            'Weight': '4 lbs'
        },
        reviews: []
    },
    { 
        id: '3', 
        name: 'Electric Tiller and Cultivator', 
        price: 249.99, 
        image: 'https://placehold.co/600x600.png', 
        images: ['https://placehold.co/600x600.png'],
        slug: 'electric-tiller', 
        category: 'gardening', 
        rating: 4,
        description: 'This 16-inch electric tiller and cultivator is perfect for preparing your garden for planting. Its powerful motor easily breaks up tough soil.',
         specifications: {
            'Motor': '13.5-Amp',
            'Tilling Width': '16 Inches',
            'Tilling Depth': '8 Inches',
            'Power Source': 'Corded Electric'
        },
        reviews: []
    },
    { 
        id: '4', 
        name: 'Advanced Protective Goggles', 
        price: 24.99, 
        image: 'https://placehold.co/600x600.png', 
        images: ['https://placehold.co/600x600.png'],
        slug: 'safety-goggles', 
        category: 'safety-gear', 
        rating: 4.8,
        description: 'Anti-fog, scratch-resistant safety goggles that provide full protection against dust and debris. Comfortable to wear for extended periods.',
         specifications: {
            'Material': 'Polycarbonate',
            'UV Protection': '99.9%',
            'Standard': 'ANSI Z87.1',
            'Features': 'Anti-fog, Anti-scratch'
        },
        reviews: []
    },
    { 
        id: '5', 
        name: 'Industrial Grade Welder', 
        price: 499.99, 
        image: 'https://placehold.co/600x600.png', 
        images: ['https://placehold.co/600x600.png'],
        slug: 'welder', 
        category: 'power-tools', 
        rating: 4.7,
        description: 'A versatile multi-process welder that supports MIG, TIG, and Stick welding. Perfect for professionals who need a reliable and powerful machine.',
        specifications: {
            'Input Voltage': '240V',
            'Output Current': '40-200A',
            'Duty Cycle': '60% @ 200A',
            'Weight': '50 lbs'
        },
        reviews: []
    },
    { 
        id: '6', 
        name: 'Combine Harvester', 
        price: 150000, 
        image: 'https://placehold.co/600x600.png',
        images: ['https://placehold.co/600x600.png'],
        slug: 'harvester', 
        category: 'farming-equipment', 
        rating: 5,
        description: 'High-efficiency combine harvester for large-scale farming. Features advanced threshing technology to maximize grain yield and minimize loss.',
        specifications: {
            'Engine Power': '350 HP',
            'Grain Tank Capacity': '12,500 L',
            'Cutting Width': '9 meters',
            'Transmission': 'Hydrostatic'
        },
        reviews: []
    },
    { 
        id: '7', 
        name: 'Hand Pruner', 
        price: 19.99, 
        image: 'https://placehold.co/600x600.png',
        images: ['https://placehold.co/600x600.png'],
        slug: 'pruner', 
        category: 'hand-tools', 
        rating: 4.2,
        description: 'Precision bypass pruners for clean cuts on stems and branches up to 3/4 inch in diameter. Made with high-carbon steel blades.',
        specifications: {
            'Blade': 'High-carbon steel',
            'Handle': 'Aluminum, non-slip grip',
            'Cutting Capacity': '3/4 inch',
            'Lock': 'Safety lock'
        },
        reviews: []
    },
    { 
        id: '8', 
        name: 'Heavy Duty Work Gloves', 
        price: 15.99, 
        image: 'https://placehold.co/600x600.png',
        images: ['https://placehold.co/600x600.png'],
        slug: 'gloves', 
        category: 'safety-gear', 
        rating: 4.9,
        description: 'Durable leather work gloves with reinforced palms for extra protection and grip. Ideal for construction, farming, and general handling.',
        specifications: {
            'Material': 'Genuine Leather',
            'Reinforcement': 'Palm and fingertips',
            'Cuff': 'Safety cuff',
            'Size': 'Large'
        },
        reviews: []
    },
    { 
        id: '9', 
        name: 'Automatic Seed Planter', 
        price: 1250.00, 
        image: 'https://placehold.co/600x600.png',
        images: ['https://placehold.co/600x600.png'],
        slug: 'seed-planter', 
        category: 'farming-equipment', 
        rating: 4.6,
        description: 'Walk-behind automatic seed planter for precise and efficient planting of corn, beans, and other vegetables. Adjustable seed spacing and depth.',
        specifications: {
            'Hopper Capacity': '5.5L',
            'Planting Depth': 'Adjustable, up to 3 inches',
            'Row Spacing': 'Adjustable',
            'Frame': 'Steel'
        },
        reviews: []
    },
    { 
        id: '10', 
        name: 'Garden Hose with Nozzle', 
        price: 35.00, 
        image: 'https://placehold.co/600x600.png',
        images: ['https://placehold.co/600x600.png'],
        slug: 'garden-hose', 
        category: 'gardening', 
        rating: 4.1,
        description: '50-foot flexible garden hose that is kink-resistant and lightweight. Comes with a multi-pattern spray nozzle for all your watering needs.',
        specifications: {
            'Length': '50 feet',
            'Diameter': '5/8 inch',
            'Material': 'Hybrid Polymer',
            'Nozzle Patterns': '8'
        },
        reviews: []
    },
    { 
        id: '11', 
        name: 'Cordless Leaf Blower', 
        price: 179.00, 
        image: 'https://placehold.co/600x600.png',
        images: ['https://placehold.co/600x600.png'],
        slug: 'leaf-blower', 
        category: 'power-tools', 
        rating: 4.5,
        description: 'Lightweight and powerful cordless leaf blower. Features variable speed control and a high-efficiency brushless motor for longer run time.',
        specifications: {
            'Air Volume': '450 CFM',
            'Air Speed': '120 MPH',
            'Battery': '40V Lithium-Ion',
            'Weight': '7 lbs'
        },
        reviews: []
    },
    { 
        id: '12', 
        name: 'Steel Wheelbarrow', 
        price: 89.99, 
        image: 'https://placehold.co/600x600.png',
        images: ['https://placehold.co/600x600.png'],
        slug: 'wheelbarrow', 
        category: 'gardening', 
        rating: 4.3,
        description: '6 cubic foot steel wheelbarrow with a heavy-duty frame and a pneumatic tire for easy maneuvering over rough terrain. Perfect for landscaping and construction.',
        specifications: {
            'Capacity': '6 Cubic Feet',
            'Tray Material': 'Steel',
            'Tire': '16-inch Pneumatic',
            'Frame': 'Steel'
        },
        reviews: []
    },
];

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
