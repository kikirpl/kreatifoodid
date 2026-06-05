"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mapping titles to logical categories
const getCategory = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (
    lowerTitle.includes("credit") ||
    lowerTitle.includes("finance") ||
    lowerTitle.includes("accounting") ||
    lowerTitle.includes("collection")
  ) {
    return "Finance";
  }
  if (
    lowerTitle.includes("inventory") ||
    lowerTitle.includes("warehouse") ||
    lowerTitle.includes("program") ||
    lowerTitle.includes("admin")
  ) {
    return "Operations";
  }
  if (lowerTitle.includes("growth") || lowerTitle.includes("marketing")) {
    return "Marketing";
  }
  if (lowerTitle.includes("customer") || lowerTitle.includes("chat")) {
    return "Customer Service";
  }
  if (lowerTitle.includes("it")) {
    return "IT";
  }
  return "Other";
};

const CATEGORIES = [
  "View all",
  "Finance",
  "Operations",
  "Marketing",
  "Customer Service",
  "IT",
];

type Job = {
  id: number;
  title: string;
  role_purpose: string;
};

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filter, setFilter] = useState("View all");

  useEffect(() => {
    fetch("/career.json")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.hiring) {
          setJobs(data.hiring);
        }
      })
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const filteredJobs = jobs.filter((job: Job) => {
    if (filter === "View all") return true;
    return getCategory(job.title) === filter;
  });

  return (
    <div className="bg-[var(--color-cream)]">
      <Navbar />
      <main className="relative min-h-screen pt-24 pb-20 overflow-hidden">
        {/* Background washing/orbs */}
        <div className="section-wash section-wash-right"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mb-12">
            {/* Header pill */}
            <div className="inline-flex items-center rounded-full border border-[rgba(63,165,53,0.2)] bg-white/60 px-4 py-1.5 text-sm font-semibold text-[var(--color-ink)] shadow-sm backdrop-blur-md mb-6 hover:shadow-md transition-shadow">
              We're hiring!
            </div>

            <h1 className="section-title text-[var(--color-ink)] mb-6">
              Be part of our mission
            </h1>
            <p className="text-[var(--color-ink-soft)] text-lg md:text-xl max-w-3xl leading-relaxed mb-10 text-balance">
              We're looking for passionate people to join us on our mission. We value
              flat hierarchies, clear communication, and full ownership and
              responsibility.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-3 mb-16">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${filter === cat
                    ? "bg-[var(--color-ink)] text-white shadow-md transform -translate-y-0.5"
                    : "border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)]/5"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Job List */}
          <div className="flex flex-col">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job: Job) => (
                <div
                  key={job.id}
                  className="group relative border-t border-[rgba(63,165,53,0.15)] py-8 transition-colors hover:bg-white/40 -mx-6 px-6 sm:mx-0 sm:px-4 sm:rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold font-[var(--font-display)] text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-leaf-deep)] transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-[var(--color-ink-soft)] text-base leading-relaxed mb-5 max-w-2xl">
                        {job.role_purpose}
                      </p>

                      {/* Meta info pills (hardcoded remote/full-time as per reference design) */}
                      <div className="flex flex-wrap gap-3">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(63,165,53,0.2)] bg-white/50 px-3 py-1 text-xs font-semibold text-[var(--color-ink-soft)]">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          On-site Office Jakarta
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(63,165,53,0.2)] bg-white/50 px-3 py-1 text-xs font-semibold text-[var(--color-ink-soft)]">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          Full-time
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0 flex items-center justify-start md:justify-end">
                      <Link
                        href={`/careers/${job.id}`}
                        className="inline-flex items-center gap-2 text-[var(--color-ink)] font-bold text-lg hover:text-[var(--color-leaf)] transition-colors"
                      >
                        Apply
                        <svg
                          className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center text-[var(--color-ink-soft)]">
                No job openings found for this category.
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
