import React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type TravelCardProps = {
  departureTime: Date;
  arrivalTime: Date;
  transfers: number;
  legs?: { type: "bus" | "train"; number: string }[];
};

export const TravelCard: React.FC<TravelCardProps> = ({
  departureTime,
  arrivalTime,
  transfers,
}) => {
  const renderTime = (time: Date) => {
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const renderDuration = (departureTime: Date, arrivalTime: Date) => {
    const duration = arrivalTime.getTime() - departureTime.getTime();
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-lg font-semibold">
            {renderTime(departureTime)} <ArrowRight className="inline mx-2" />{" "}
            {renderTime(arrivalTime)}
          </div>
          <div className="text-sm text-muted-foreground">
            {renderDuration(departureTime, arrivalTime)}
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
          <span>
            {transfers} byte{transfers !== 1 ? "n" : ""}
          </span>
        </div>
        {/* <div className="flex space-x-2">
          {result.legs.map((leg, index) => (
            <div
              key={index}
              className="flex items-center bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs"
            >
              {leg.type === "bus" ? (
                <Bus className="w-3 h-3 mr-1" />
              ) : (
                <Train className="w-3 h-3 mr-1" />
              )}
              {leg.number}
            </div>
          ))}
        </div> */}
      </CardContent>
    </Card>
  );
};
