import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TravelPlannerForm } from "./TravelPlannerForm";
import { TravelPlannerResult } from "./TravelPlannerResult";
import { findJourney, Journey } from "@/api/findJourney";

export const TravelPlanner = () => {
  const [searchResults, setSearchResults] = useState<Journey[]>([]);

  const handleSearch = async (fromGid: string, toGid: string) => {
    // Simulate API call with mock data
    const journeys = await findJourney(fromGid, toGid);
    setSearchResults(journeys);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-red-400">
          Bästtrafik Stockholm
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <TravelPlannerForm onSearch={handleSearch} />
      </CardContent>
      <CardFooter className="flex-col">
        {searchResults.length > 0 && (
          <TravelPlannerResult journeys={searchResults} />
        )}
      </CardFooter>
    </Card>
  );
};
