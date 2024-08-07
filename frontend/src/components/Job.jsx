import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "faegtrh23445";
  return (
    <div className=" p-5 rounded-md shadow-xl border border-gray-200 bg-white">
      <div className="flex justify-between">
        <p className="text-sm text-gray-600">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Adobe</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quam
          temporibus assumenda doloribus, corrupti ipsam unde placeat accusamus
          dolores vitae?
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          10 Openings
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          Full Time
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          CTC
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/jobs/description/${jobId}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
