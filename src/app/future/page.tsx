'use client';
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Page() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <main className="flex flex=row justify-center max-w-7xl m-8 mx-auto px-4 sm:px-6 lg:px-8">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        </main>
      )
};