"use client"

import { useState } from "react"
import FilterSheet from "@/components/Filtersheet"
import ResourcesGrid from "@/components/ResourcesGrid"
// import JobFilters from "@/components/JobFilters"
export const runtime = 'edge';

export default function ExplorePage() {
    // State for tags (keeping it for JobFilters if needed later)
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    // New states for Filter component
    const [selectedLocation, setSelectedLocation] = useState("All Locations")
    const [selectedExperience, setSelectedExperience] = useState("All Levels")
    const [isRemote, setIsRemote] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [salaryRange, setSalaryRange] = useState([50])
    const [jobType, setJobType] = useState("full-time")

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        )
    }

    return (
        <div>
            <main className="container mx-auto px-4 py-8">
                <div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h1 className="text-4xl font-bold">Explore Jobs</h1>
                            <p className="text-gray-600 max-w-2xl mt-2">
                                Discover opportunities that match your skills and interests.
                            </p>
                        </div>
                        <div className="flex justify-start">
                            <FilterSheet
                                selectedLocation={selectedLocation}
                                selectedExperience={selectedExperience}
                                isRemote={isRemote}
                                searchQuery={searchQuery}
                                salaryRange={salaryRange}
                                jobType={jobType}
                                onLocationChange={setSelectedLocation}
                                onExperienceChange={setSelectedExperience}
                                onRemoteChange={setIsRemote}
                                onSearchChange={setSearchQuery}
                                onSalaryRangeChange={setSalaryRange}
                                onJobTypeChange={setJobType}
                            />
                        </div>
                    </div>

                    {/* Commented out JobFilters but keeping it for reference */}
                    {/* <JobFilters 
            selectedTags={selectedTags} 
            onTagToggle={toggleTag} 
          /> */}

                    <ResourcesGrid
                        selectedLocation={selectedLocation}
                        selectedExperience={selectedExperience}
                        isRemote={isRemote}
                        searchQuery={searchQuery}
                        salaryRange={salaryRange}
                        jobType={jobType}
                    />
                </div>
            </main>
        </div>
    )
}