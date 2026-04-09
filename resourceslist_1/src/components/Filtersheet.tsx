"use client"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import Filter from "@/components/Filter"

interface FilterSheetProps {
    onCategorieChange: (value: string) => void;
    onPricingChange: (value: string) => void;
    onDealsChange: (checked: boolean) => void;
    onSearchChange: (value: string) => void;
    selectedCategorie: string;
    selectedPricing: string;
    isDeals: boolean;
    searchQuery: string;
}

export default function FilterSheet(props: FilterSheetProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>Filter Jobs</SheetTitle>
                </SheetHeader>
                <div className="mt-4">
                    <Filter {...props} />
                </div>
            </SheetContent>
        </Sheet>
    )
}