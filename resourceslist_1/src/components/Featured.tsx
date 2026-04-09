import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const featuredJobs = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        logo: "/logo-icon.svg",
        description: "Join our team to build modern web applications using cutting-edge technologies. Work with a talented team in a fast-paced environment.",
        category: "Engineering",
        type: "Full-time",
        tags: ["React", "TypeScript", "Next.js"],
    },
    {
        id: 2,
        title: "Product Designer",
        logo: "/logo-icon.svg",
        description: "Create beautiful and intuitive user experiences for our clients. Shape the future of digital products with innovative design solutions.",
        category: "Design",
        type: "Contract",
        tags: ["Figma", "UI/UX", "Design Systems"],
    },
    {
        id: 3,
        title: "Backend Engineer",
        logo: "/logo-icon.svg",
        description: "Build scalable backend services and APIs. Work with modern cloud infrastructure and distributed systems.",
        category: "Engineering",
        type: "Full-time",
        tags: ["Node.js", "Python", "AWS"],
    },
    {
        id: 4,
        title: "DevOps Engineer",
        logo: "/logo-icon.svg",
        description: "Manage and optimize our cloud infrastructure. Implement CI/CD pipelines and maintain system reliability.",
        category: "DevOps",
        type: "Full-time",
        tags: ["Docker", "Kubernetes", "CI/CD"],
    },
    {
        id: 5,
        title: "UI/UX Designer",
        logo: "/logo-icon.svg",
        description: "Design user-centered digital experiences. Create intuitive interfaces and engaging user journeys.",
        category: "Design",
        type: "Full-time",
        tags: ["Adobe XD", "Sketch", "Prototyping"],
    },
    {
        id: 6,
        title: "Full Stack Developer",
        logo: "/logo-icon.svg",
        description: "Develop end-to-end web applications. Work across the full technology stack.",
        category: "Engineering",
        type: "Full-time",
        tags: ["JavaScript", "React", "Node.js"],
    },
];

export default function Featured() {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {featuredJobs.map((job) => (
                        <Link href={`/jobs/${job.id}`} key={job.id}>
                            <Card className="p-4 hover:bg-gray-50 transition-colors h-full">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={job.logo}
                                            alt={`${job.title} logo`}
                                            width={48}
                                            height={48}
                                            className="rounded-full bg-gray-100"
                                        />
                                    </div>
                                    <div className="flex-grow min-w-0 space-y-3">
                                        <div className="space-y-1.5">
                                            <h3 className="text-lg font-semibold truncate">{job.title}</h3>
                                            <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>
                                        </div>

                                        <div className="flex gap-2">
                                            <Badge
                                                variant="secondary"
                                                className="bg-primary/10 text-primary hover:bg-primary/20"
                                            >
                                                {job.category}
                                            </Badge>
                                            <Badge
                                                variant="secondary"
                                                className="bg-gray-900 text-white hover:bg-gray-800"
                                            >
                                                {job.type}
                                            </Badge>
                                        </div>

                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {job.tags.map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="outline"
                                                    className="text-gray-600"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
