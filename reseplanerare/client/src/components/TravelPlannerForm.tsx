import React, { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Autocomplete from "./Autocomplete";

type TravelPlannerFormProps = {
  onSearch: (fromGid: string, toGid: string) => Promise<void>;
};

export const TravelPlannerForm: React.FC<TravelPlannerFormProps> = ({
  onSearch,
}) => {
  const [fromGid, setFromGid] = useState("");
  const [toGid, setToGid] = useState("");

  return (
    <>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="from">Från</Label>
          <div className="relative">
            <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Autocomplete
              placeholder="Start"
              onLocationSelect={(location) => setFromGid(location.gid)}
              testId="from-autocomplete"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="to">Till</Label>
          <div className="relative">
            <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Autocomplete
              placeholder="Destination"
              onLocationSelect={(location) => setToGid(location.gid)}
              testId="to-autocomplete"
            />
          </div>
        </div>
        {/* <div className="flex space-x-4">
          <div className="flex-1 space-y-2">
            <Label>Datum</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Välj datum</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="time">Tid</Label>
            <div className="relative">
              <Clock className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
        </div> */}
      </div>
      <Button
        data-testId="searchButton"
        className="w-full bg-blue-500"
        onClick={() => onSearch(fromGid, toGid)}
      >
        <Search className="mr-2 h-4 w-4" /> Sök resa
      </Button>
    </>
  );
};
