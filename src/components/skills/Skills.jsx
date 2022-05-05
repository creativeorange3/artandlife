import React from "react";

const skillsContent = [
  {
    name: "Visokoobrazovani edukatori",
    skillPercent: "95",
  },
  {
    name: "Individualan pristup",
    skillPercent: "80",
  },
  {
    name: "Dogadjaji zabavno-edukativnog karaktero",
    skillPercent: "90",
  },
  {
    name: "Savremeni tokovi",
    skillPercent: "95",
  },
  {
    name: "Otvorenost ka novim idejama",
    skillPercent: "80",
  },
  {
    name: "Program za vrtice i osnovne skole",
    skillPercent: "90",
  },
  {
    name: "Posebno kreiran teambuilding koncept",
    skillPercent: "90",
  },
  {
    name: "Dnevne radionice",
    skillPercent: "90",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          {/* <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div> */}
        </div>
      ))}
    </>
  );
};

export default Skills;
