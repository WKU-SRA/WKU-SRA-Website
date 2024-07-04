/**
 * Type Definitions for the Application
 *
 * This file contains all the custom type definitions and interfaces used throughout the application.
 */

/**
 * RootLayoutProps Interface
 *
 * root layouts in layout.ts.
 */
export interface RootLayoutProps {
    children: React.ReactNode;
}

// bad structure, change it latter
export type GalleryProps = {
    imageTitles?: string[];
    url: string[];
    action:{
        width?: string;
        height?: string;
        type: GalleryType;
    }
    href?: string[];
}

type GalleryType = "bigGrid"| "badgeList";