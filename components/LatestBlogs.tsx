"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getLatestBlogs, formatBlogDate } from "@/lib/blogs";
import type { BlogPost } from "@/lib/blogs";

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await getLatestBlogs(3);
        setBlogs(data);
      } catch (error) {
        console.error("Latest blogs error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <section className="bg-ink px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-center text-sm uppercase tracking-wideish text-gold">
            Loading CGT insights...
          </p>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-line bg-ink px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-wideish text-gold">
              CGT Insights
            </p>

            <h2 className="mt-3 font-display text-3xl uppercase tracking-wide text-cream md:text-5xl">
              Latest Trading Articles
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              Trading education, mindset, and second income strategies for
              everyday Australians.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-gold px-5 py-3 text-xs uppercase tracking-wideish text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
          >
            View All Articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group overflow-hidden border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/70"
            >
              <div className="h-56 overflow-hidden bg-panel">
                {blog.coverImage ? (
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-panel text-gold">
                    CGT
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-[10px] uppercase tracking-wideish text-gold">
                  {formatBlogDate(blog.createdAt) || "CGT Article"}
                </p>

                <h3 className="mt-3 font-display text-2xl uppercase leading-tight text-cream">
                  {blog.title}
                </h3>

                {blog.excerpt && (
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
                    {blog.excerpt}
                  </p>
                )}

                <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-wideish text-gold">
                  Read More <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}