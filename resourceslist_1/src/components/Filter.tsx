import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface FilterProps {
    onCategorieChange: (value: string) => void;
    onPricingChange: (value: string) => void;
    onDealsChange: (checked: boolean) => void;
    onSearchChange: (value: string) => void;
    selectedCategorie: string;
    selectedPricing: string;
    isDeals: boolean;
    searchQuery: string;
}

export default function Filter(props: FilterProps) {
    const categories = ["All", "Design", "Develepment", "Filming", "Photography", "Productivity", "Marketing", "Business", "Finance", "Personal"]
    const pricings = ["Free", "Free + Paid", "Freemium", "Paid"]

    return (
        <div className="flex flex-col space-y-4 p-4">
            <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search jobs..."
                    value={props.searchQuery}
                    onChange={(e) => props.onSearchChange(e.target.value)}
                    className="pl-8"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Categorie</label>
                <Select value={props.selectedCategorie} onValueChange={props.onCategorieChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Categorie" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                                {cat}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Pricing</label>
                <Select value={props.selectedPricing} onValueChange={props.onPricingChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Pricing" />
                    </SelectTrigger>
                    <SelectContent>
                        {pricings.map((pricing) => (
                            <SelectItem key={pricing} value={pricing}>
                                {pricing}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div
                className={`flex items-center justify-between p-2 rounded-md cursor-pointer border ${props.isDeals ? "bg-primary text-primary-foreground" : "bg-background"
                    }`}
                onClick={() => props.onDealsChange(!props.isDeals)}
            >
                <span className="text-sm font-medium">Deals</span>
                <div className={`w-4 h-4 rounded-sm border ${props.isDeals ? "bg-primary-foreground border-primary-foreground" : "border-input"
                    }`}>
                    {props.isDeals && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3 m-0.5"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    )}
                </div>
            </div>
        </div>
    )
}