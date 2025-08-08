
'use server';
import { db } from '@/lib/firebase';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';

export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    images: string[];
    slug: string;
    category: string;
    brand: string;
    subCategory: string;
    rating: number;
    description: string;
    specifications: Record<string, string>;
    reviews: { rating: number; comment: string }[];
    tag?: string;
}

const productsCollection = collection(db, 'products');

// Fetch all products
export async function getProducts(): Promise<Product[]> {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
}

// Fetch a single product by its ID
export async function getProduct(id: string): Promise<Product | null> {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as Product;
    }
    return null;
}

// Fetch a single product by its slug
export async function getProductBySlug(slug: string): Promise<Product | null> {
    const q = query(productsCollection, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return { id: doc.id, ...doc.data() } as Product;
    }
    return null;
}


// Create a new product
export async function addProduct(product: Omit<Product, 'id'>): Promise<string> {
    const docRef = await addDoc(productsCollection, product);
    return docRef.id;
}

// Update an existing product
export async function updateProduct(id: string, productData: Partial<Product>): Promise<void> {
    const docRef = doc(db, 'products', id);
    await updateDoc(docRef, productData);
}

// Delete a product
export async function deleteProduct(id: string): Promise<void> {
    const docRef = doc(db, 'products', id);
    await deleteDoc(docRef);
}
