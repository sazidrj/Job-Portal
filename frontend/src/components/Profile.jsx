import { Contact, Mail, Pen } from "lucide-react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Skills = [
  "C++",
  "Java",
  "Python",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Spring Boot",
];
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Sazid Ali</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos iure nesciunt vitae, ratione molestias libero rem
                culpa sit at asperiores officiis nostrum incidunt alias nemo
                tenetur quibusdam fugiat saepe error.
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>sazid.ali52@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>8902546555</span>
          </div>
        </div>
        <div>
          <h1>Skills</h1>
          {Skills.map((skill, index) => {
            return <Badge key={index}>{skill}</Badge>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
