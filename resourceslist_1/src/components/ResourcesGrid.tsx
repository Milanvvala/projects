import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface ResourcesGridProps {
    selectedLocation: string;
    selectedExperience: string;
    isRemote: boolean;
    searchQuery: string;
    salaryRange: number[];
    jobType: string;
}

const resourcesGrid = [
    {
        id: 1,
        title: "Software Engineer",
        logo: "/logo-icon.svg",
        description: "Join our engineering team to build scalable solutions. Work with modern technologies and contribute to innovative projects.",
    },
    {
        id: 2,
        title: "Product Manager",
        logo: "/logo-icon.svg",
        description: "Lead product strategy and development. Work closely with design and engineering teams to deliver exceptional products.",
    },
    {
        id: 3,
        title: "Data Scientist",
        logo: "/logo-icon.svg",
        description: "Apply machine learning and statistical analysis to solve complex business problems. Work with big data technologies.",
    },
    {
        id: 4,
        title: "UX Researcher",
        logo: "/logo-icon.svg",
        description: "Conduct user research and usability studies. Help shape product decisions with data-driven insights.",
    },
    {
        id: 5,
        title: "Technical Writer",
        logo: "/logo-icon.svg",
        description: "Create clear and comprehensive technical documentation. Work with engineering teams to document APIs and features.",
    },
    {
        id: 6,
        title: "Solutions Architect",
        logo: "/logo-icon.svg",
        description: "Design and implement technical solutions. Guide teams in building scalable and maintainable systems.",
    },
    {
        id: 7,
        title: "Quality Assurance Engineer",
        logo: "/logo-icon.svg",
        description: "Ensure product quality through automated and manual testing. Develop and maintain test frameworks.",
    },
    {
        id: 8,
        title: "DevOps Engineer",
        logo: "/logo-icon.svg",
        description: "Build and maintain CI/CD pipelines. Manage cloud infrastructure and improve deployment processes.",
    },
    {
        id: 9,
        title: "Mobile Developer",
        logo: "/logo-icon.svg",
        description: "Create native mobile applications. Work with latest mobile technologies and frameworks.",
    },
];

const ResourceCard = ({ id, title, logo, description }: {
    id: number;
    title: string;
    logo: string;
    description: string;
}) => {
    return (
        <Link href={`/jobs/${id}`}>
            <Card className="p-4 hover:bg-gray-100 transition-colors h-full">
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <Image
                            src={logo}
                            alt={`${title} logo`}
                            width={52}
                            height={52}
                            className="rounded-full bg-gray-100"
                        />
                    </div>
                    <div className="flex-grow min-w-0">
                        <h3 className="text-lg font-semibold truncate">{title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default function ResourcesGrid(props: ResourcesGridProps) {
    return (
        <div className="container mx-auto py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resourcesGrid.map((resource) => (
                    <ResourceCard
                        key={resource.id}
                        id={resource.id}
                        title={resource.title}
                        logo={resource.logo}
                        description={resource.description}
                    />
                ))}
            </div>
        </div>
    );
}
