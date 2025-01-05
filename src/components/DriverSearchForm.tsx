import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

interface DriverSearchFormProps {
  modelNumber: string;
  setModelNumber: (value: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

const DriverSearchForm = ({ modelNumber, setModelNumber, handleSearch }: DriverSearchFormProps) => {
  return (
    <form onSubmit={handleSearch} className="max-w-md mx-auto space-y-6">
      <div className="space-y-2">
        <Label htmlFor="model" className="text-lg">Enter Printer Model Number</Label>
        <div className="flex gap-3">
          <Input
            id="model"
            value={modelNumber}
            onChange={(e) => setModelNumber(e.target.value)}
            placeholder="e.g., LaserJet Pro M404n"
            className="text-lg"
          />
          <Button type="submit" size="lg">
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        The model number can be found on the front or back of your printer
      </p>
    </form>
  );
};

export default DriverSearchForm;