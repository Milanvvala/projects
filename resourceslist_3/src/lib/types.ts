import type { ReactNode } from "react";

export interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: ReactNode;
    items?: MenuItem[];
}

export interface NavProps {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    menu?: MenuItem[];
    mobileExtraLinks?: {
        name: string;
        url: string;
    }[];
    auth?: {
        login: {
            text: string;
            url: string;
        };
        signup: {
            text: string;
            url: string;
        };
    };
}

export interface ResourcesGridProps {
    selectedLocation: string;
    selectedExperience: string;
    isRemote: boolean;
    searchQuery: string;
    salaryRange: number[];
    jobType: string;
}

