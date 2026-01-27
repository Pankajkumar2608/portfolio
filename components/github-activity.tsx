"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface ApiResponse {
    total: {
        lastYear: number;
    };
    contributions: ContributionDay[];
}

export function GitHubContributionGraph({ username }: { username: string }) {
    const [data, setData] = useState<ContributionDay[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
                if (!response.ok) throw new Error('Failed to fetch');

                const json: ApiResponse = await response.json();
                setData(json.contributions);
                setTotal(json.total.lastYear);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching GitHub contributions:", err);
                setError(true);
                setLoading(false);
            }
        };

        fetchData();
    }, [username]);

    // Color mappings
    const getLevelColor = (level: number) => {
        // Using simple classes for Tailwind to handle dark/light
        switch (level) {
            case 1: return "bg-[#9be9a8] dark:bg-[#0e4429]";
            case 2: return "bg-[#40c463] dark:bg-[#006d32]";
            case 3: return "bg-[#30a14e] dark:bg-[#26a641]";
            case 4: return "bg-[#216e39] dark:bg-[#39d353]";
            default: return "bg-[#ebedf0] dark:bg-[#161b22]";
        }
    };

    if (loading) {
        return (
            <div className="animate-pulse space-y-4">
                <div className="h-4 w-32 bg-muted rounded" />
                <div className="h-[128px] w-full bg-muted rounded-xl" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                    Failed to load contributions. <a href={`https://github.com/${username}`} target="_blank" className="underline hover:text-foreground">View on GitHub</a>
                </div>
            </div>
        );
    }

    // Group by weeks for the grid
    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    // The API returns a flat list of days. We need to group them into columns (weeks).
    // GitHub's calendar usually starts on Sunday.

    // Find the day of the week for the first day
    if (data.length > 0) {
        const firstDate = new Date(data[0].date);
        const firstDayOfWeek = firstDate.getDay(); // 0 = Sun

        // Pad the beginning if necessary, although usually we want to just fill columns.
        // If we want to align to weekdays rows (Sun-Sat), we need to ensure the first column falls correctly.
        // The standard GitHub graph has rows 0-6 (Sun-Sat or Mon-Sun).
        // Let's assume Mon-Sun rows like the previous mock.
        // Actually, GitHub standard is Sunday start. Let's check the API data.
        // The API returns last 365 days or so.

        // Let's arrange so that we fill columns. 
        // We add empty slots to the first week if the first day is not Sunday (or Monday).
        // Let's stick to Sun-Sat (0-6)

        for (let i = 0; i < firstDayOfWeek; i++) {
            currentWeek.push({ date: "", count: 0, level: 0 }); // Placeholder
        }
    }

    data.forEach((day) => {
        currentWeek.push(day);
        if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
    });
    if (currentWeek.length > 0) weeks.push(currentWeek);

    return (
        <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{total.toLocaleString()}</span> contributions in the last year
            </div>

            <div className="border border-border/50 rounded-xl p-4 bg-card/50 overflow-x-auto scrollbar-hide">
                <div className="flex gap-1 min-w-max">
                    {weeks.map((week, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-1">
                            {week.map((day, dayIndex) => {
                                if (!day.date && day.level === 0) {
                                    return <div key={dayIndex} className="w-2.5 h-2.5" />; // Invisible placeholder
                                }
                                return (
                                    <div
                                        key={dayIndex}
                                        className={`w-2.5 h-2.5 rounded-[2px] transition-colors duration-300 ${getLevelColor(day.level)}`}
                                        title={day.date ? `${day.count} contributions on ${day.date}` : ""}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 rounded-[2px] bg-[#ebedf0] dark:bg-[#161b22]" />
                        <div className="w-2.5 h-2.5 rounded-[2px] bg-[#9be9a8] dark:bg-[#0e4429]" />
                        <div className="w-2.5 h-2.5 rounded-[2px] bg-[#40c463] dark:bg-[#006d32]" />
                        <div className="w-2.5 h-2.5 rounded-[2px] bg-[#30a14e] dark:bg-[#26a641]" />
                        <div className="w-2.5 h-2.5 rounded-[2px] bg-[#216e39] dark:bg-[#39d353]" />
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>
    );
}
