import { BlogCard } from "@/components/sections/BlogCard";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import type { Blog } from "@/components/types/blog";
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";

function Artikel() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const getBlogs = async () => {
    try {
      const response = await axiosInstance.get<Blog[]>("/data/Blogs");
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getBlogs();
  }, []);

  return (
    <article>
      <Navbar />
      <section className="container mx-auto py-10">
        {isPending && (
        <div className="flex justify-center">
          <p className="py-12 flex items-center gap-2">
            <Loader className="animate-spin" />
            Loading...
          </p>
        </div>
      )}
        <h1 className="mb-8 text-3xl font-bold">Artikel</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.objectId} blog={blog} />
          ))}
        </div>
      </section>
      <Footer />
    </article>
  );
}

export default Artikel;
