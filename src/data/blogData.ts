export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Printing Technology",
    excerpt: "Discover the latest innovations in printing technology and how they're shaping the future of business.",
    content: "The printing industry continues to evolve with groundbreaking technologies that are revolutionizing how businesses operate. From 3D printing to smart connectivity features, modern printers are becoming increasingly sophisticated and efficient. This article explores the latest innovations in printing technology and their impact on business operations. We'll discuss how AI-powered printing solutions are streamlining workflows, reducing waste, and improving productivity across various industries. Additionally, we'll look at upcoming trends and what they mean for both small businesses and large enterprises.",
    author: "John Smith",
    date: "2024-03-15",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6"
  },
  {
    id: 2,
    title: "Sustainable Printing Practices",
    excerpt: "Learn how to implement eco-friendly printing practices in your business.",
    content: "Sustainability in printing has become more important than ever. This comprehensive guide explores various ways to make your printing practices more environmentally friendly without compromising on quality. From choosing eco-friendly materials to implementing smart printing policies, we cover everything you need to know about sustainable printing. Learn about recycled paper options, energy-efficient printer models, and how to reduce waste in your printing processes. We'll also discuss the long-term benefits of sustainable printing, including cost savings and environmental impact.",
    author: "Sarah Johnson",
    date: "2024-03-10",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: 3,
    title: "Maximizing Printer Efficiency",
    excerpt: "Tips and tricks to get the most out of your printing equipment.",
    content: "Optimizing your printer's efficiency can lead to significant cost savings and improved productivity. This article provides practical tips and strategies to maximize your printer's performance. Learn about proper maintenance schedules, optimal settings for different print jobs, and how to troubleshoot common issues. We'll also discuss how to choose the right supplies and when to upgrade your equipment for better efficiency. Whether you're managing a small office or a large print facility, these insights will help you optimize your printing operations.",
    author: "Mike Wilson",
    date: "2024-03-05",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
  }
];