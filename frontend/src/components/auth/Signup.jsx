import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { useState } from "react";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-300 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div>
            <Label>Full Name</Label>
            <Input
              type="text"
              value={input.fullName}
              name="fullName"
              onChange={changeEventHandler}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter valid email" />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input type="text" placeholder="XXXXX89014" />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter new password" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input accept="image/*" type="file" className="cursor-pointer" />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full my-4 bg-[#6A3bc2] hover:bg-[#3f2079]"
          >
            Sign Up
          </Button>
          <span>
            Already have an account?{" "}
            <Link to="/login" className="text-sm text-blue-600 font-bold">
              Login here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;