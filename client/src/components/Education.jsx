import React, { useState } from "react";
import { Button, Divider } from "@mui/material";
import Data from "../assets/ProfileData";
import { NavLink } from "react-router-dom";

const Education = () => {
  const [image, setImage] = useState(false);

  return (
    <div className=" lg:ml-52 mt-4 lg:mt-4 lg:mr-0 lg:mb-0 sm:mr-2 sm:ml-2 md:mt-4 sm:mt-4 ml-2 mr-2 z-0 bg-white lg:w-[100%] rounded-3xl lg:max-w-[72rem] sm:max-w-screen-sm">
      {Data.map((edu) => (
        <div key={edu.id} className="mt-5">
          <div className="lg:ml-8 ml-5 pt-6 text-3xl">Education</div>
          <div className="lg:ml-[60rem] lg:mt-[-2.3rem] ml-52 mt-[-2.3rem] pb-10 ">
            <Button
              variant="outlined"
              sx={{
                borderTopRightRadius: "1rem",
                borderTopLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
                borderBottomLeftRadius: "1rem",
              }}
            >
              Add Education
            </Button>
          </div>
          <div className="lg:ml-8 w-[94%] ml-4 flex flex-row pb-6">
            {image ? (
              <img
                src={edu.utu}
                alt="logo"
                className="w-14 h-14 rounded-full"
              ></img>
            ) : (
              <img
                src={edu.sampleEImg}
                alt="logo"
                className="w-14 h-14 rounded-full"
              ></img>
            )}

            <div className="ml-3">
              <div className="text-lg">{edu.education1}</div>
              <div className="text-sm">
                {edu.degree1} - {edu.degreein1}
              </div>
              <div className="text-sm text-gray-400">
                {edu.started1} - {edu.Endedin1}
              </div>
            </div>
          </div>
          <Divider
            sx={{
              width: "94%",
              marginLeft: "2rem",
            }}
          />
          <div className="lg:ml-8 ml-4 w-[94%] flex flex-row pb-6 mt-6">
            <img
              src={edu.sampleEImg}
              alt="logo"
              className="w-14 h-14 rounded-full"
            ></img>
            <div className="ml-3">
              <div className="text-lg">{edu.education2}</div>
              <div className="text-sm">
                {edu.degree2} - {edu.degreein2}
              </div>
              <div className="text-sm text-gray-400">
                {edu.started2} - {edu.Endedin2}
              </div>
            </div>
          </div>
          <NavLink to="/profile/education">
            <div className="border-t-2 mt-2 flex flex-row-reverse items-center justify-center">
              <Button
                variant="plain"
                sx={{
                  width: "71.3rem",
                  borderBottomRightRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                }}
              >
                See all Educations...
              </Button>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Education;
