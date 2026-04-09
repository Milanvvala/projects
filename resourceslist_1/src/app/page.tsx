import Hero from "@/components/layout/Hero"
import Featured from "@/components/Featured"
import ResourcesGrid from "@/components/ResourcesGrid"

export const runtime = 'edge';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Featured Jobs</h2>
      </div>
      <Featured />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold ">All Jobs</h2>
      </div>
      <div className="container mx-auto px-4">
        <ResourcesGrid 
          selectedLocation="All Locations"
          selectedExperience="All Levels"
          isRemote={false}
          searchQuery=""
          salaryRange={[50]}
          jobType="full-time"
        />
      </div>
    </>
  );
}
