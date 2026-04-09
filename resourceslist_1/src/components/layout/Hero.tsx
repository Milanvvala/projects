"use client"

import { Star } from "lucide-react";
import React from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeroProps {
    heading?: string;
    description?: string;
    button?: {
        text: string;
        url: string;
    };
    reviews?: {
        count: number;
        avatars: {
            src: string;
            alt: string;
        }[];
    };
}
const hero = {
    heading: "A Collection of Components Built With Shadcn & Tailwind",
    description: "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
    button: {
        text: "Discover all components",
        url: "https://www.shadcnblocks.com",
    },
    reviews: {
        count: 200,
        avatars: [
            {
                src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
                alt: "Avatar 1",
            },
            {
                src: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
                alt: "Avatar 2",
            },
            {
                src: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
                alt: "Avatar 3",
            },
            {
                src: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
                alt: "Avatar 4",
            },
            {
                src: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
                alt: "Avatar 5",
            },
        ],
    },
}
export default function Hero(_props: HeroProps) {
    return (
        <section className="pt-16 pb-8">
            <div className="container px-4 mx-auto flex flex-col items-center justify-center">
                <div className="mx-auto flex max-w-screen-lg flex-col gap-6 items-center">
                    <h1 className="text-3xl font-extrabold lg:text-6xl text-center">{hero.heading}</h1>
                    <p className="text-balance text-muted-foreground lg:text-lg text-center">
                        {hero.description}
                    </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex w-full max-w-sm gap-2">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1"
                        required
                    />
                    <Button type="submit">
                        Subscribe
                    </Button>
                </form>

                {/* <div className="mt-6 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <span className="mx-4 inline-flex items-center -space-x-4">
            {reviews.avatars.map((avatar, index) => (
              <Avatar key={index} className="size-14 border">
                <AvatarImage src={avatar.src} alt={avatar.alt} />
              </Avatar>
            ))}
          </span>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="size-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-left font-medium text-muted-foreground">
              from {reviews.count}+ reviews
            </p>
          </div>
        </div> */}
            </div>
        </section>
    );
};
