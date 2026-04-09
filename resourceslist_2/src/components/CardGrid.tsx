import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface CardItem {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    link: string;
    tags: string[];
    featured?: boolean;
}

const cardItems: CardItem[] = [
    {
        id: '1',
        title: 'Demo_1',
        description: 'Offers guided meditations, sleep stories, and calming music to help users relax and improve sleep.',
        link: '/calm',
        tags: ['breathing', 'sleep', 'meditation'],
        featured: true
    },
    {
        id: '3',
        title: 'Demo_2',
        description: 'Science-backed breathing exercises to reduce stress and improve energy.',
        imageUrl: '/next.svg',
        link: '/breathwrk',
        tags: ['breathing', 'stress-relief']
    },
];

const randomArray = Array(10).fill(4).map(() =>
    cardItems[Math.floor(Math.random() * cardItems.length)]
);

export const ProductCard = ({ item }: { item: CardItem }) => {
    return (
        <div
            className="listing relative"
            data-tags={item.tags.join(',')}
        >
            <Link
                href={item.link}
                className="group relative flex items-start bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2 rounded-lg hover:border-primary transition-all duration-200 h-full hover:bg-white"
            >
                <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-blue-500 -z-10 transition-all duration-200" />
                {/* Featured Badge */}
                {item.featured && (
                    <span className="absolute text-xs font-medium py-0.5 -top-3 right-2 border border-gray-300 rounded-full bg-white px-3.5 text-gray-600 dark:bg-gray-800 dark:border-gray-500 dark:text-white group-hover:border-primary-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        Featured ✨
                    </span>
                )}

                {/* Image */}
                <div className="flex-none mr-4 w-16 h-16 overflow-hidden rounded-lg bg-white dark:bg-gray-700">
                    <Image
                        src={item.imageUrl ?? "/logo-icon.svg"}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain p-1"
                    />
                </div>

                {/* Content */}
                <div className="flex-grow">
                    <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-gray-900 dark:text-white line-clamp-1 overflow-hidden group-hover:text-primary">
                            {item.title}
                        </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {item.description}
                    </p>
                    {/* <div className="mt-2 flex flex-wrap gap-1">
            {item.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div> */}
                </div>
            </Link>
        </div>
    );
};

export default function CardGrid() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Resources List</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {randomArray.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}