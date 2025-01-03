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
    title: "Choosing the Right Printer for Your Business",
    excerpt: "A comprehensive guide to selecting the perfect printer for your business needs.",
    content: "When it comes to choosing a printer for your business, there are several factors to consider. First, assess your printing volume and speed requirements. For high-volume offices, a laser printer might be more cost-effective in the long run. Consider features like duplex printing, wireless connectivity, and mobile printing capabilities. Also, factor in the total cost of ownership, including maintenance and supplies. Remember to choose a printer that's compatible with your existing technology infrastructure and can grow with your business needs.",
    date: "2024-01-15",
    author: "Tech Expert",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=500",
    category: "Business Solutions"
  },
  {
    id: 2,
    title: "Maximizing Printer Efficiency",
    excerpt: "Learn how to optimize your printer settings for better performance and cost savings.",
    content: "Optimizing your printer settings can significantly impact both print quality and operating costs. Start by setting appropriate default print qualities - draft mode for internal documents and high quality for client-facing materials. Implement duplex printing by default to save paper. Regular maintenance, including cleaning and alignment, ensures consistent quality and prevents costly repairs. Consider using high-yield cartridges for better value, and always keep spare supplies on hand to prevent workflow interruptions.",
    date: "2024-01-20",
    author: "Print Specialist",
    image: "https://images.unsplash.com/photo-1563199284-752b7b17578a?auto=format&fit=crop&q=80&w=500",
    category: "Maintenance"
  },
  {
    id: 3,
    title: "Sustainable Printing Practices",
    excerpt: "Discover eco-friendly printing solutions that help reduce environmental impact.",
    content: "Implementing sustainable printing practices is not only good for the environment but can also reduce costs. Start by using recycled paper and encouraging double-sided printing. Enable power-saving modes when printers are idle, and properly recycle used cartridges. Consider implementing print management software to track usage and identify areas for reduction. Modern printers often come with eco-friendly features that can help minimize both energy consumption and waste while maintaining high-quality output.",
    date: "2024-01-25",
    author: "Environmental Expert",
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=500",
    category: "Sustainability"
  }
];