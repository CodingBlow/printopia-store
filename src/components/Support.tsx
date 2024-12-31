import { Button } from "@/components/ui/button";

const Support = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Our expert technicians are ready to assist you with setup, troubleshooting, and maintenance.
          Get professional support for all your printing needs.
        </p>
        <Button className="bg-primary hover:bg-primary/90">
          Visit Support Center
        </Button>
      </div>
    </section>
  );
};

export default Support;