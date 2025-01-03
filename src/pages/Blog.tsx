import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import { Calendar, User, Tag } from "lucide-react";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Latest Articles</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary">
                  <Tag className="w-4 h-4" />
                  {post.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
          {selectedPost && (
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedPost.title}</DialogTitle>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {selectedPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {selectedPost.category}
                  </span>
                </div>
              </DialogHeader>
              <div className="mt-4">
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selectedPost.content}
                </p>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;