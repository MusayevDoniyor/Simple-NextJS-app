"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TimerMsg({ sec }: { sec: number }) {
  const [timeRemaining, setTimeRemaining] = useState(sec);
  const router = useRouter();

  useEffect(() => {
    if (timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          router.push("/"); // Navigate after countdown finishes
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [timeRemaining, router]);

  return timeRemaining > 0 ? (
    <div className="fixed bottom-4 right-4 p-4 bg-gray-800 text-white rounded-md shadow-lg">
      <p>{timeRemaining} soniyada ortga qaytadi</p>
    </div>
  ) : null;
}
