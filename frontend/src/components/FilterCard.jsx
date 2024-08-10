import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    arr: ["Delhi NCR", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    arr: ["Technology", "Healthcare", "Banking", "AI"],
  },
  {
    filterType: "Salary",
    arr: ["0-40k", "40k-1lac", "1lac-5lacs"],
  },
];
const FilterCard = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const dispatch = useDispatch();

  const filterChangeHandler = (value) => {
    setSelectedFilter(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedFilter));
  }, [dispatch, selectedFilter]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="text-lg font-bold">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedFilter} onValueChange={filterChangeHandler}>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.arr.map((item, idx) => {
              const itemId = `id${index - idx}`;
              return (
                <div key={idx} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
