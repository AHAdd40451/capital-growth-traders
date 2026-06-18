"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPublishedBlogs, formatBlogDate } from "@/lib/blogs";
import type { BlogPost } from "@/lib/blogs";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await getPublishedBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Blogs page error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return (
    <main className="min-h-screen bg-ink text-cream">
      <Navbar />

      <section className="border-b border-line px-4 pb-16 pt-36 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs uppercase tracking-wideish text-gold">
            CGT Insights
          </p>

          <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-none tracking-wide text-cream md:text-7xl">
            Trading Education For Your Second Income
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted md:text-base">
            Practical trading education, mindset lessons, and second income
            strategies for everyday Australians who want more options.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          {loading ? (
            <p className="text-sm text-muted">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <div className="border border-line bg-card p-8">
              <h2 className="font-display text-2xl uppercase text-cream">
                No blogs found
              </h2>

              <p className="mt-3 text-sm text-muted">
                Add published blog posts in Firebase Firestore to show them
                here.
              </p>
            </div>
          ) : (
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="group overflow-hidden border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/70"
                >
                  <div className="h-64 overflow-hidden bg-panel">
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

                    <h2 className="mt-3 font-display text-3xl uppercase leading-tight text-cream">
                      {blog.title}
                    </h2>

                    {blog.excerpt && (
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
                        {blog.excerpt}
                      </p>
                    )}

                    <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-wideish text-gold">
                      Read Article <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}