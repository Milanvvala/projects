import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import CardGrid, { CardItem, ProductCard } from '@/components/CardGrid'
import { demoRecsource } from '@/lib/schema'


const recommended: CardItem[] = [
    {
        id: '1',
        title: 'Calm',
        description: 'Offers guided meditations, sleep stories, and calming music to help users relax and improve sleep.',
        link: '/calm',
        tags: ['breathing', 'sleep', 'meditation'],
        featured: true
    },
    {
        id: '2',
        title: 'Headspace',
        description: 'Mindfulness and meditation app with courses for stress, anxiety, and sleep.',
        link: '/headspace',
        tags: ['meditation', 'mindfulness'],
        featured: true
    },
]

export default function ProductPage() {
    const tool = demoRecsource

    return (
        <>
            <div className="container max-w-7xl mx-auto my-4 px-4">
                <Link
                    href="/explore"
                    className={buttonVariants({
                        size: 'sm',
                        variant: 'link',
                        className: 'mb-2',
                    })}
                >
                    <ArrowLeft size={16} />
                    Back to All Tools
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                    {/* Main Tool Content */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg border-2 p-6">
                            <div className="flex items-start gap-4">
                                {tool.logoImage && (
                                    <Image
                                        src={tool.logoImage}
                                        width={80}
                                        height={80}
                                        alt={`${tool.title} logo`}
                                        className="rounded-md"
                                    />
                                )}
                                <div>
                                    <h1 className="text-2xl font-bold">{tool.title}</h1>
                                    <p className="text-gray-600 dark:text-gray-300">{tool.companyName}</p>

                                    {/* Category and Pricing Badges */}
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                                            {tool.category}
                                        </Badge>
                                        <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                                            {tool.pricing}
                                        </Badge>
                                    </div>

                                    {/* Tags Section */}
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {tool.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="outline"
                                                className="text-xs"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Available On Section */}
                                    <div className="flex items-center gap-3 mt-4 text-sm text-gray-500 dark:text-gray-400">
                                        <span>Available on:</span>
                                        <div className="flex gap-2">
                                            {tool.availableOn.map((platform, index) => {
                                                const Icon = platform.icon
                                                return (
                                                    <div
                                                        key={platform.label}
                                                        className="flex items-center gap-1 hover:text-primary transition-colors"
                                                        title={platform.label}
                                                    >
                                                        <Icon className="h-4 w-4" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Button asChild>
                                    <Link href={tool.url} target="_blank">
                                        Visit Website
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Tool Details Accordion */}
                        <div className="group bg-gray-50 hover:bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors duration-200">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="tool-details" className="border-0">
                                    <AccordionTrigger className="p-6 hover:no-underline ">
                                        <div className="flex items-center justify-between w-full">
                                            <h2 className="text-xl font-semibold text-left group-hover:text-primary transition-colors">
                                                Tool Details
                                            </h2>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 pt-0">
                                        <div className="space-y-6">
                                            <div className="space-y-4">
                                                <h3 className="font-semibold text-gray-900 dark:text-white">Description</h3>
                                                <p className="text-gray-700 dark:text-gray-300">
                                                    {tool.details}
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-semibold text-gray-900 dark:text-white">Key Features</h3>
                                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                                    {tool.features.map((feature, index) => (
                                                        <li key={index} className="hover:text-primary transition-colors">
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-semibold text-gray-900 dark:text-white">Popular Integrations</h3>
                                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                                    {tool.integrations.map((integration, index) => (
                                                        <li key={index} className="hover:text-primary transition-colors">
                                                            {integration}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-semibold text-gray-900 dark:text-white">Alternatives</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {tool.alternatives.map((alt, index) => (
                                                        <Badge
                                                            key={index}
                                                            variant="outline"
                                                            className="hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors"
                                                        >
                                                            {alt}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* <div className="bg-white dark:bg-gray-800 rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">About {tool.companyName}</h2>
            <p className="text-gray-700 dark:text-gray-300">{tool.companyBio}</p>
          </div> */}
                    </div>

                    {/* Recommended Tools Sidebar */}
                    <div className="lg:col-span-2">
                        <div className="sticky top-16 space-y-6">
                            <h2 className="text-lg font-semibold">Recommended Tools</h2>
                            {recommended.map((item) => (<ProductCard key={item.id} item={item} />))}
                        </div>
                    </div>
                </div>

            </div>
            <CardGrid />
        </>
    )
}