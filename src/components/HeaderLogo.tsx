import Link from 'next/link';

export default function HeaderLogo() {
    return (
        <div className="flex flex-col sm:flex-row m-4 items-center justify-center">
            <div className="flex mb-4 sm:mb-0 ">
                <img src="/logo.jpg" alt="WKU SRA Logo" className="h-12 w-12" />
                <img src="/wku-favicon.png" alt="WKU Logo" className="h-12 w-12" />
            </div>
            <Link href="/" passHref>
                <h1 className="cursor-pointer m-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                    温州肯恩大学科技科研协会
                </h1>
            </Link>
        </div>
    );
}
