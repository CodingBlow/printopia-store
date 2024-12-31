import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "How to Fix Common Printer Errors",
    excerpt: "Learn about the most common printer issues and how to resolve them quickly.",
    date: "2024-02-20"
  },
  {
    id: 2,
    title: "Top Printer Maintenance Tips",
    excerpt: "Keep your printer running smoothly with these essential maintenance tips.",
    date: "2024-02-18"
  },
  {
    id: 3,
    title: "Choosing the Right Printer for Your Business",
    excerpt: "A comprehensive guide to selecting the perfect printer for your needs.",
    date: "2024-02-15"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <p className="text-sm text-gray-500">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;