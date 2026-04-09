import { Menu } from "lucide-react";
import { nav } from "@/lib/nav";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import type { NavProps } from "@/lib/types";

export default function MobileMenu(_props: NavProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto px-6">
                <SheetHeader className="border-b">
                    <SheetTitle>
                        <a href={nav.logo.url} className="flex items-center gap-2">
                            <img
                                src={nav.logo.src}
                                width={160}

                                className="object-contain"
                                alt={nav.logo.alt}
                            />
                            {/* <span className="text-lg font-semibold">
                                {nav.logo.title} 
                            </span> */}
                        </a>
                    </SheetTitle>
                </SheetHeader>

                <div className=" flex flex-col gap-6 ">
                    <div className="flex w-full flex-col gap-4">
                        {nav.menu.map((item) =>
                            <a
                                key={item.title}
                                className="w-max text-md font-semibold"
                                href={item.url}
                            >
                                {item.title}
                            </a>
                        )}
                    </div>

                    <div className="border-t py-4">
                        <div className="grid grid-cols-2 justify-start">
                            {nav.mobileExtraLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                                    href={link.url}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3">
                        <Button asChild variant="outline">
                            <a href={nav.auth.login.url}>{nav.auth.login.text}</a>
                        </Button>
                        <Button asChild>
                            <a href={nav.auth.signup.url}>{nav.auth.signup.text}</a>
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet >
    );
};
