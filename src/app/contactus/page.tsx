// ContactUs.tsx
import Head from 'next/head';

export default function ContactUs() {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className='text-center min-w-96 min-h-96'> {/* Increased min-w and min-h */}
                    <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                    <div className="bg-white shadow-md rounded-lg p-10"> {/* Increased padding */}
                        <p className="mb-4">联系科协</p>
                        <a href="mailto:sra@wku.edu.cn" className="text-blue-500 hover:text-blue-700">sra@wku.edu.cn</a>
                        <p className="mt-6 mb-4">网站技术问题 请联系</p>
                        <a href="mailto:zhaoq@kean.edu" className="text-blue-500 hover:text-blue-700">zhaoq@kean.edu (Albert)</a>
                    </div>
                </div>
            </main>
        </>
    );
}