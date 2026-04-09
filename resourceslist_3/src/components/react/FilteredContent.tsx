import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
// import ResourcesGrid from "../astro/ResourcesGrid.astro";
// import type { Resource } from "@/lib/types";
interface FilterProps { resources: Resource[]; }
export interface Resource {
    data: {
      title: string;
      category: string;
      pricing: string;
      description?: string;
    };
    slug: string;
  }
const FilterdContent: React.FC<FilterProps> = ({ resources }) => {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategorie, setSelectedCategorie] = useState("All Categories")
    const [selectedPricing, setSelectedPricing] = useState("All Pricings")
    // Filter logic
    const filteredResources = resources.filter(
        (resource) =>
            resource.data.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedCategorie ? resource.data.category === selectedCategorie : true) &&
            (selectedPricing ? resource.data.pricing === selectedPricing : true)
    );

    return (
        <div className="space-y-4">
            <FilterSidebar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategorie={selectedCategorie}
                setSelectedCategorie={setSelectedCategorie}
                selectedPricing={selectedPricing}
                setSelectedPricing={setSelectedPricing}

            />
            {/* <ResourcesGrid /> */}
        </div>
    );
};

export default FilterdContent;

// const [query, setQuery] = useState("");
// const [category, setCategory] = useState("All Categories");
// const [pricing, setPricing] = useState("All Pricings");
// const [isDeals, setIsDeals] = useState(false)