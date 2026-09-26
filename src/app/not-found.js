import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center p-2">
            <div className="container mx-auto rounded-2xl border border-white/10 bg-[#111317]/50 py-40 text-center">
                <h1 className="text-7xl font-bold text-custom-primary">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-bold text-white">
                    PAGE NOT FOUND
                </h2>

                <p className="mt-2 text-sm text-[#A1A1AA]">
                    The page you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="btn mt-5 rounded-full border-none bg-custom-primary text-black"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;