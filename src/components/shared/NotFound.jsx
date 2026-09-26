import Link from "next/link";

const NotFound = () => {
    return (
        <div className="p-2">
            <div className="container mx-auto rounded-2xl border border-white/10 bg-[#111317]/50 py-40 text-center">
                <h2 className="text-xl font-bold text-white">
                    NOTHING HERE YET
                </h2>

                <p className="mt-2 text-xs text-[#A1A1AA]">
                    Browse the library and add a lift to get today moving.
                </p>

                <Link
                    href="/"
                    className="btn mt-5 rounded-full bg-custom-primary text-xs font-semibold text-black"
                >
                    Go to workouts
                </Link>
            </div>
        </div>
    );
};

export default NotFound;