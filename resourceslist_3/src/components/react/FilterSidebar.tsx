import { categories, pricings } from "@/content/config";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
// type Resource = CollectionEntry<"resources">;
// interface FilterProps {
//     resources: Resource[];
//     categories: string[];
//     pricings: string[];
// }

// export interface FilterProps {
//     searchQuery: string;
//     setSearchQuery: (value: string) => void;
//     selectedCategorie: string;
//     setSelectedCategorie: (value: string) => void;
//     selectedPricing: string;
//     setSelectedPricing: (value: string) => void;
//     // onDealsChange: (checked: boolean) => void;
//     // isDeals: boolean;
// }

const applyFilters = () => {
    console.log("filters applyed")
}

const FilterSidebar: React.FC<FilterProps> = (props: FilterProps) => {

    const { searchQuery, selectedCategorie, selectedPricing, setSearchQuery, setSelectedCategorie, setSelectedPricing } = props

    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                        <SlidersHorizontal className="h-4 w-4" />
                        Filters
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Filter Resources</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4 space-y-4">
                        <div className="relative">{/* Search Bar */}
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search resources..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-8 w-full border p-2 rounded"
                            />
                        </div>

                        <div className="space-y-2">
                            {/* Category Filter */}
                            <label className="text-sm font-medium">Category</label>
                            <Select value={selectedCategorie} onValueChange={setSelectedCategorie} >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent
                                >
                                    <SelectItem value="">All Categories </SelectItem>
                                    {categories.map((cat) => (
                                        <SelectItem key={cat} value={cat}>
                                            {cat}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            {/* Pricing Filter */}
                            <label className="text-sm font-medium">Pricing</label>
                            <Select value={selectedPricing} onValueChange={setSelectedPricing} >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Pricing" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="">All Pricings </SelectItem>
                                    {pricings.map((pricing) => (
                                        <SelectItem key={pricing} value={pricing}>
                                            {pricing}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button onClick={applyFilters} className="w-full">Apply Filters</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default FilterSidebar;