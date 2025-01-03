export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Latest Printer Technology Innovations",
    excerpt: "Discover the newest advancements in printing technology and how they can benefit your business.",
    content: "The printing industry continues to evolve with groundbreaking innovations that enhance productivity and quality. Modern printers now feature advanced connectivity options, improved energy efficiency, and superior print quality. These developments are transforming how businesses handle their printing needs, offering more efficient and cost-effective solutions. From wireless printing capabilities to eco-friendly features, these innovations are designed to streamline workflows and reduce operational costs.",
    date: "2024-02-15",
    author: "Tech Expert",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=500",
    category: "Technology"
  },
  {
    id: 2,
    title: "Choosing the Right Printer for Your Business",
    excerpt: "A comprehensive guide to selecting the perfect printer for your specific business needs.",
    content: "Selecting the right printer is crucial for business efficiency. Consider factors like print volume, quality requirements, and connectivity needs. Modern printers offer various features including duplex printing, wireless connectivity, and mobile printing capabilities. Understanding these features and matching them to your business requirements ensures optimal performance and cost-effectiveness. This guide helps you navigate through the selection process to find the perfect printer for your organization.",
    date: "2024-02-20",
    author: "Business Analyst",
    image: "https://images.unsplash.com/photo-1563199284-752b7b17578a?auto=format&fit=crop&q=80&w=500",
    category: "Business Solutions"
  },
  {
    id: 3,
    title: "Maximizing Printer Efficiency",
    excerpt: "Learn how to optimize your printer settings and maintenance for peak performance.",
    content: "Proper printer maintenance and optimization are key to ensuring longevity and consistent performance. Regular cleaning, correct settings configuration, and timely supplies replacement can significantly impact print quality and device lifespan. This guide covers essential maintenance tips, optimal settings for different print jobs, and best practices for supply management. By following these guidelines, you can maintain peak printer performance while minimizing operational costs.",
    date: "2024-02-25",
    author: "Print Specialist",
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=500",
    category: "Maintenance"
  }
];