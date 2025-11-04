"use client";

import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
    useEffect(() => {
        console.error("Global Error:", error);
    }, [error]);

    return (
        <div className="flex items-center justify-center h-screen">
            <NextError statusCode={0} />
        </div>
    );
}
