"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Job = {
  id: number;
  title: string;
  role_purpose?: string;
  responsibilities?: string[];
  success_metrics?: string[];
  requirements?: string[];
  plus_points?: string[];
};

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  // Parse ID from URL safely
  const jobIdStr = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const jobId = jobIdStr ? parseInt(jobIdStr, 10) : null;

  useEffect(() => {
    if (!jobId) {
      setLoading(false);
      return;
    }

    fetch("/career.json")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.hiring) {
          const foundJob = data.hiring.find((j: Job) => j.id === jobId);
          if (foundJob) {
            setJob(foundJob);
          } else {
            console.error("Job not found");
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching job details:", err);
        setLoading(false);
      });
  }, [jobId]);

  if (loading) {
    return (
      <div className="bg-[var(--color-cream)] min-h-screen flex items-center justify-center">
        <div className="text-[var(--color-ink-soft)] text-lg animate-pulse">
          Loading job details...
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="bg-[var(--color-cream)] min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-[var(--color-ink-soft)] text-xl mb-4">
          Job opening not found.
        </div>
        <Link
          href="/careers"
          className="text-[var(--color-leaf)] hover:text-[var(--color-leaf-deep)] underline"
        >
          Return to careers page
        </Link>
      </div>
    );
  }

  // Determine mailto link with CC and Subject
  const subject = encodeURIComponent(`Application for ${job.title}`);
  const mailtoLink = `mailto:career@farmio.id?cc=dhkprmn@gmail.com&subject=${subject}`;

  return (
    <div className="bg-[var(--color-cream)]">
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
        {/* Background elements */}
        <div className="section-wash section-wash-right opacity-60"></div>
        <div className="section-wash section-wash-left opacity-60"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Back button */}
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink-soft)] hover:text-[var(--color-leaf)] transition-colors mb-8 group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Careers
          </Link>

          {/* Job Header */}
          <div className="mb-12 border-b border-[rgba(63,165,53,0.15)] pb-10">
            <h1 className="text-4xl md:text-5xl font-semibold font-[var(--font-display)] text-[var(--color-ink)] mb-6 text-balance">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(63,165,53,0.2)] bg-white/60 px-4 py-1.5 text-sm font-semibold text-[var(--color-ink)]">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                On-site Office Jakarta
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(63,165,53,0.2)] bg-white/60 px-4 py-1.5 text-sm font-semibold text-[var(--color-ink)]">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Full-time
              </div>
            </div>

            <a
              href={mailtoLink}
              className="cta-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg w-full sm:w-auto text-center"
            >
              Apply Now
            </a>
            <p className="text-xs text-[var(--color-ink-soft)] mt-3 sm:ml-2">
              (This will open your email client. If not, please email{" "}
              <strong>career@farmio.id</strong> and CC{" "}
              <strong>dhkprmn@gmail.com</strong>)
            </p>
          </div>

          {/* Job Details Content */}
          <div className="space-y-12">
            {/* Role Purpose */}
            {job.role_purpose && (
              <section>
                <h2 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
                  Role Purpose
                </h2>
                <div className="rounded-2xl border border-white/70 bg-white/50 p-6 md:p-8 shadow-[0_16px_40px_rgba(44,67,30,0.06)] backdrop-blur-md">
                  <p className="text-lg leading-relaxed text-[var(--color-ink-soft)]">
                    {job.role_purpose}
                  </p>
                </div>
              </section>
            )}

            {/* Key Responsibilities */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
                  Key Responsibilities
                </h2>
                <div className="rounded-2xl border border-white/70 bg-white/50 p-6 md:p-8 shadow-[0_16px_40px_rgba(44,67,30,0.06)] backdrop-blur-md">
                  <ul className="space-y-4">
                    {job.responsibilities.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-leaf)]/10 text-[var(--color-leaf)] flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span className="text-base text-[var(--color-ink-soft)] leading-relaxed">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Requirements */}
            {job.requirements && job.requirements.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
                  Requirements
                </h2>
                <div className="rounded-2xl border border-white/70 bg-white/50 p-6 md:p-8 shadow-[0_16px_40px_rgba(44,67,30,0.06)] backdrop-blur-md">
                  <ul className="space-y-4">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-sun)]/15 text-[var(--color-sun-deep)] flex items-center justify-center mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                        </span>
                        <span className="text-base text-[var(--color-ink-soft)] leading-relaxed">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Success Metrics */}
            {job.success_metrics && job.success_metrics.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
                  Success Metrics
                </h2>
                <div className="rounded-2xl border border-[var(--color-leaf)]/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(248,252,242,0.6))] p-6 md:p-8 shadow-[0_16px_40px_rgba(44,67,30,0.06)] backdrop-blur-md">
                  <ul className="space-y-4">
                    {job.success_metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-leaf)] text-white flex items-center justify-center mt-0.5 shadow-sm">
                          <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span className="text-base text-[var(--color-ink)] font-medium leading-relaxed">
                          {metric}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Plus Points */}
            {job.plus_points && job.plus_points.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-[var(--color-ink)] mb-4">
                  Plus Points
                </h2>
                <div className="rounded-2xl border border-white/70 bg-white/50 p-6 md:p-8 shadow-[0_16px_40px_rgba(44,67,30,0.06)] backdrop-blur-md">
                  <ul className="space-y-4">
                    {job.plus_points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-xl text-[var(--color-orange)] font-bold mt-0.5 leading-none">
                          +
                        </span>
                        <span className="text-base text-[var(--color-ink-soft)] leading-relaxed">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </div>

          {/* Bottom Apply Section */}
          <div className="mt-16 pt-10 border-t border-[rgba(63,165,53,0.15)] text-center">
            <h3 className="text-2xl font-semibold mb-6">
              Ready to be part of our mission?
            </h3>
            <a
              href={mailtoLink}
              className="cta-primary inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-semibold text-white shadow-xl"
            >
              Apply Now
            </a>
            <p className="text-sm text-[var(--color-ink-soft)] mt-4 max-w-md mx-auto">
              Send us your application at{" "}
              <a href={mailtoLink} className="font-semibold text-[var(--color-ink)] hover:text-[var(--color-leaf)] transition-colors">
                career@farmio.id
              </a>{" "}
              <br />
              <span className="text-xs">
                (Please remember to CC <strong>dhkprmn@gmail.com</strong>)
              </span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
