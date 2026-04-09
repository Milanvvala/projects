import { Album, Briefcase, PencilRuler, Tags } from "lucide-react";

const nav = {
    // logo : {
    //     url: "https://www.shadcnblocks.com",
    //     src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    //     alt: "logo",
    //     title: "Shadcnblocks.com",
    // },
    logo: {
        url: "/",
        src: "/logo-text.svg",
        alt: "Brand Logo",
        title: "Brand",
    },
    menu: [
        { title: "Featured", url: "/product" },
        {
            title: "Explore",
            url: "#",
            items: [
                {
                    title: "Tools",
                    description: "The latest industry news, updates, and info",
                    icon: <PencilRuler className="size-5 shrink-0" />,
                    url: "/tools",
                },
                {
                    title: "Resources",
                    description: "Our mission is to innovate and empower the world",
                    icon: <Album className="size-5 shrink-0" />,
                    url: "/resources",
                },
                {
                    title: "Deals",
                    description: "Browse job listing and discover our workspace",
                    icon: <Tags className="size-5 shrink-0" />,
                    url: "/deals",
                },
                {
                    title: "Jobs",
                    description:
                        "Get in touch with our support team or visit our community forums",
                    icon: <Briefcase className="size-5 shrink-0" />,
                    url: "/jobs",
                },
            ],
        },
        {
            title: "Explore",
            url: "/explore",
        },
        {
            title: "Blog",
            url: "#",
        },
    ],
    mobileExtraLinks: [
        { name: "Contact", url: "#" },
        { name: "Privacy Policy", url: "#" },
        { name: "Terms & Condition", url: "#" },
    ],
    auth: {
        login: { text: "Log in", url: "/login" },
        signup: { text: "Submit", url: "/submit" },
    },
}

export { nav };
