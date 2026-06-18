"use client";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogBySlug, formatBlogDate } from "@/lib/blogs";
import type { BlogPost } from "@/lib/blogs";

export default function BlogDetailPage() {
  const params = useParams();

  const slug = String(params?.slug || "");

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        if (!slug) return;

        const data = await getBlogBySlug(slug);

        setBlog(data);
      } catch (error) {
        console.error("Blog detail error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [slug]);

  return (
    <main className="min-h-screen bg-ink text-cream">
      <Navbar />

      {loading ? (
        <section className="px-4 pb-16 pt-36 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm text-muted">Loading article...</p>
          </div>
        </section>
      ) : !blog ? (
        <section className="px-4 pb-16 pt-36 lg:px-8">
          <div className="mx-auto max-w-4xl border border-line bg-card p-8">
            <h1 className="font-display text-4xl uppercase text-cream">
              Article Not Found
            </h1>

            <p className="mt-3 text-sm text-muted">
              This blog post does not exist or is not published.
            </p>

            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-2 border border-gold px-5 py-3 text-xs uppercase tracking-wideish text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
            >
              <ArrowLeft size={14} /> Back To Blog
            </Link>
          </div>
        </section>
      ) : (
        <>
          <section className="border-b border-line px-4 pb-12 pt-36 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wideish text-gold transition-all duration-300 hover:gap-3"
              >
                <ArrowLeft size={14} /> Back To Blog
              </Link>

              <p className="mt-8 text-xs uppercase tracking-wideish text-gold">
                {formatBlogDate(blog.createdAt) || "CGT Article"}
              </p>

              <h1 className="mt-4 font-display text-5xl uppercase leading-none tracking-wide text-cream md:text-7xl">
                {blog.title}
              </h1>

              {blog.excerpt && (
                <p className="mt-6 text-base leading-8 text-muted">
                  {blog.excerpt}
                </p>
              )}

              <p className="mt-6 text-xs uppercase tracking-wideish text-muted">
                By {blog.author || "Creative Genius Trading"}
              </p>
            </div>
          </section>

          {blog.coverImage && (
            <section className="px-4 py-10 lg:px-8">
              <div className="mx-auto max-w-5xl overflow-hidden border border-line">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </section>
          )}

          <article className="px-4 pb-20 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="border border-line bg-card p-6 md:p-10">
                <div className="whitespace-pre-line text-sm leading-8 text-cream/85 md:text-base md:leading-9">
                  {blog.content}
                </div>
              </div>
            </div>
          </article>
        </>
      )}

      <Footer />
    </main>
  );
}