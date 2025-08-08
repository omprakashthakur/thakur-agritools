
'use client';

import { useState } from 'react';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { categories } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AdminCategoriesPage() {
  // Use a state to trigger re-renders when the underlying data changes.
  const [_, setForceUpdate] = useState({});
  const [editingCategory, setEditingCategory] = useState<{ id: string; label: string } | null>(null);
  const [newCategoryLabel, setNewCategoryLabel] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleDeleteCategory = (categoryId: string) => {
    const categoryIndex = categories.findIndex(c => c.id === categoryId);
    if (categoryIndex > -1) {
        categories.splice(categoryIndex, 1);
    }
    setForceUpdate({}); // Trigger re-render
    toast({
      title: 'Category Deleted',
      description: 'The category has been successfully removed.',
    });
  };

  const handleOpenEditDialog = (category: { id: string; label: string }) => {
    setEditingCategory({ ...category });
  };
  
  const handleSaveChanges = () => {
    if (!editingCategory || !editingCategory.label.trim()) {
        toast({ variant: 'destructive', title: 'Error', description: 'Category label cannot be empty.' });
        return;
    }
    const categoryIndex = categories.findIndex(c => c.id === editingCategory.id);
    if (categoryIndex > -1) {
        categories[categoryIndex] = editingCategory;
    }
    setForceUpdate({}); // Trigger re-render
    toast({ title: 'Category Updated', description: 'Changes have been saved.' });
    setEditingCategory(null);
  };
  
  const handleAddNewCategory = () => {
    if (!newCategoryLabel.trim()) {
        toast({ variant: 'destructive', title: 'Error', description: 'Category label cannot be empty.' });
        return;
    }
    const newCategory = {
      id: newCategoryLabel.toLowerCase().replace(/\s+/g, '-'),
      label: newCategoryLabel,
    };
    categories.push(newCategory);
    setForceUpdate({}); // Trigger re-render
    toast({ title: 'Category Added', description: `"${newCategory.label}" has been added.` });
    setNewCategoryLabel('');
    setIsAddDialogOpen(false);
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
              <CardTitle>Product Categories</CardTitle>
              <CardDescription>Manage your product categories.</CardDescription>
          </div>
           <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                    <Button size="sm">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Category
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add New Category</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="new-category-label" className="text-right">Label</Label>
                            <Input
                                id="new-category-label"
                                value={newCategoryLabel}
                                onChange={(e) => setNewCategoryLabel(e.target.value)}
                                className="col-span-3"
                                placeholder="e.g. Power Saws"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" onClick={handleAddNewCategory}>Add Category</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Label</TableHead>
                <TableHead>ID</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                  <TableRow key={category.id}>
                      <TableCell className="font-medium">{category.label}</TableCell>
                      <TableCell>{category.id}</TableCell>
                      <TableCell className="text-right">
                          <AlertDialog>
                            <Dialog open={!!editingCategory && editingCategory.id === category.id} onOpenChange={(isOpen) => !isOpen && setEditingCategory(null)}>
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button aria-haspopup="true" size="icon" variant="ghost">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DialogTrigger asChild>
                                        <DropdownMenuItem onSelect={() => handleOpenEditDialog(category)}>Edit</DropdownMenuItem>
                                    </DialogTrigger>
                                    <AlertDialogTrigger asChild>
                                        <DropdownMenuItem className="text-destructive focus:text-destructive">Delete</DropdownMenuItem>
                                    </AlertDialogTrigger>
                                </DropdownMenuContent>
                                </DropdownMenu>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Edit Category</DialogTitle>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="category-label" className="text-right">Label</Label>
                                            <Input
                                                id="category-label"
                                                value={editingCategory?.label || ''}
                                                onChange={(e) => setEditingCategory(cat => cat ? { ...cat, label: e.target.value } : null)}
                                                className="col-span-3"
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
                                        <Button type="button" onClick={handleSaveChanges}>Save changes</Button>
                                    </DialogFooter>
                                </DialogContent>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. Deleting a category might affect products associated with it.
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleDeleteCategory(category.id)}>Delete</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </Dialog>
                          </AlertDialog>
                      </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
