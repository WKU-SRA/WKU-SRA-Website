import { GalleryProps } from "@/utils/type";

export default function Gallery({params}: {params: GalleryProps}) {

    if (params.action?.type === "bigGrid") {
        return <BigGrid {...params} />;
    } else if (params.action?.type === "badgeList"){
        return <BadgeList {...params} />;
    }
    else {
        throw new Error("Invalid Gallery Type");
    }
};

function BadgeList(params: GalleryProps) {
    const widthClass = params.action?.width ? `w-${params.action.width}` : "w-24";
    const heightClass = params.action?.height ? `h-${params.action.height}` : "h-24";

    return (
        <div className="flex flex-row justify-around w-64 h-full">
            {
                params.url.map((url, index) => (
                    <a key={index} href={params?.href?.[index] ?? '#'}>
                    <img src={url} alt={params.imageTitles?.[index]} className={`${heightClass} ${widthClass} sm:h-12 sm:w-12`} />
               </a> ))
            }
        </div>
    );
}

function BigGrid(params: GalleryProps) {
    return (
        <div className="flex flex-col items-center justify-center h-full">

        </div>
    );

}
