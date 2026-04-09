"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    CalendarDays,
    MapPin,
    Building2,
    Timer,
    ArrowLeft,
    Linkedin,
    Globe,
    Mail,
    Smartphone
} from "lucide-react"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const runtime = 'edge';

const sponsoredJobs = [
    {
        id: 101,
        title: "Senior Backend Developer",
        logo: "/logo-icon.svg",
        company: "Tech Solutions Inc",
        description: "Join our backend team to build scalable microservices and APIs.",
    },
    {
        id: 102,
        title: "Frontend Engineer",
        logo: "/logo-icon.svg",
        company: "Digital Innovations",
        description: "Create beautiful and responsive user interfaces using React.",
    },
]

export default function ProductPage() {
    const jobDetails = {
        title: "Senior Full Stack Developer",
        company: "TechCorp Solutions",
        logo: "/logo-icon.svg",
        shortDescription: "Join our dynamic team to build innovative solutions that shape the future of technology. We're looking for a passionate developer who thrives in a collaborative environment.",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$120,000 - $150,000",
        posted: "2 days ago",
        tags: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
        description: `
      We are looking for a Senior Full Stack Developer to join our growing team. 
      The ideal candidate will have extensive experience with modern web technologies 
      and a passion for building scalable applications.
    `,
        requirements: [
            "7+ years of experience in web development",
            "Strong proficiency in React, Node.js, and TypeScript",
            "Experience with cloud platforms (AWS/GCP)",
            "Understanding of CI/CD pipelines",
            "Excellent problem-solving skills"
        ],
        benefits: [
            "Competitive salary and equity",
            "Health, dental, and vision insurance",
            "Flexible work hours and remote options",
            "Professional development budget",
            "Regular team events and activities"
        ],
        availableOn: [
            { icon: Globe, label: "Website" },
            { icon: Linkedin, label: "LinkedIn" },
            { icon: Mail, label: "Email" },
            { icon: Smartphone, label: "Mobile App" },
        ]
    }

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1">
                <div className="container mx-auto px-4 py-4">
                    <Link
                        href="/explore"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Jobs
                    </Link>
                </div>

                <div className="container mx-auto px-4 pb-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content - 70% */}
                        <div className="lg:w-[70%] space-y-8">
                            {/* Header Section */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-6">
                                    <Image
                                        src={jobDetails.logo}
                                        alt={`${jobDetails.company} logo`}
                                        width={64}
                                        height={64}
                                        className="rounded-lg bg-gray-100"
                                    />
                                    <div className="space-y-2">
                                        <h1 className="text-4xl font-bold">{jobDetails.title}</h1>
                                        <p className="text-muted-foreground">{jobDetails.shortDescription}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-4 items-center text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Building2 className="h-4 w-4" />
                                            <span>{jobDetails.company}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4" />
                                            <span>{jobDetails.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Timer className="h-4 w-4" />
                                            <span>{jobDetails.type}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="h-4 w-4" />
                                            <span>{jobDetails.posted}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <Badge variant="secondary">{jobDetails.salary}</Badge>
                                        <Badge variant="outline">Remote Friendly</Badge>
                                    </div>

                                    {/* Tags Section */}
                                    <div className="flex flex-wrap gap-2">
                                        {jobDetails.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="bg-primary/10 text-primary hover:bg-primary/20"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Available On Section */}
                                    <div className="flex items-center gap-4 text-muted-foreground">
                                        <span className="text-sm font-medium">Available on:</span>
                                        <div className="flex gap-3">
                                            {jobDetails.availableOn.map((platform, index) => {
                                                const Icon = platform.icon
                                                return (
                                                    <div
                                                        key={platform.label}
                                                        className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                                                        title={platform.label}
                                                    >
                                                        <Icon className="h-5 w-5" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <Button size="lg">Apply Now</Button>
                                <Button size="lg" variant="outline">Save Job</Button>
                            </div>

                            {/* Job Details Accordion */}
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="job-details">
                                    <AccordionTrigger className="text-xl font-semibold">
                                        Job Details
                                    </AccordionTrigger>
                                    <AccordionContent className="space-y-6 pt-4">
                                        <div className="space-y-4">
                                            <h3 className="font-semibold">Job Description</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {jobDetails.description}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="font-semibold">Requirements</h3>
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                {jobDetails.requirements.map((req, index) => (
                                                    <li key={index}>{req}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="font-semibold">Benefits</h3>
                                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                                {jobDetails.benefits.map((benefit, index) => (
                                                    <li key={index}>{benefit}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Sponsored Jobs Sidebar - 30% */}
                        <div className="lg:w-[30%] space-y-4">
                            <h2 className="text-xl font-semibold">Sponsored Jobs</h2>
                            <div className="space-y-4">
                                {sponsoredJobs.map((job) => (
                                    <Link href={`/jobs/${job.id}`} key={job.id}>
                                        <Card className="p-4 hover:bg-gray-100 transition-colors">
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0">
                                                    <Image
                                                        src={job.logo}
                                                        alt={`${job.company} logo`}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full bg-gray-100"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">{job.title}</h3>
                                                    <p className="text-sm text-muted-foreground">{job.company}</p>
                                                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                                        {job.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}