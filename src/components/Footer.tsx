import { GalleryProps } from "@/utils/type";
import Gallery from "./ui/gallery";

const galleryData:GalleryProps = {
    url: [
        "/icone-github-jaune.png",
        "/hf-logo.png",
    ],
    imageTitles: [
        "GitHub",
        "Hugging Face",
    ],
    action: {
        type: "badgeList",
        width: "12",
        height: "12",
    },
    href: ["https://github.com/WKU-SRA","https://huggingface.co/WKU-SRA" ]
  
  }

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-4">
            
        <div className="container mx-auto">
        <div className="flex flex-row justify-around items-center">
                <Gallery params={galleryData} />
            <div>
                <p className="sm:text-sx:">© {new Date().getFullYear()} WKU-SRA All rights reserved</p>
             </div>
                </div>
            </div>
        </footer>   
        );
    
};
