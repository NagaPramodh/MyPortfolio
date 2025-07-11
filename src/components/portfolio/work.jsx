import React, { useState } from "react";
// import "./work.css";
import { portFolioData } from "./portfolioData";
const MyWork = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleSeeMore = () => {
    setVisibleProjects(portFolioData.length);
  };
  const handleSeeLess = () => {
    setVisibleProjects(6);
  };
  return (
    <section id="works">
      <h2 className="worksTitle">My PortFolio</h2>
      <span className="workDesc">
        Portfolio showcasing personal projects, thoughtfully crafted with HTML,
        CSS, and React JS, reflecting a blend of creative design and interactive
        functionality.
      </span>

      <div className="workImgs">
        {portFolioData &&
          portFolioData.map((item, id) => {
            console.log(item.img);
            return (
              id < visibleProjects && (
                <div key={id} className="workItem">
                  <img src={item.img} alt="" className="worksImg" />

                  <div className="workItemDesc">
                    <p className="projectName">{item.projectName}</p>
                    <p className="projectDesc">{item.desc}</p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                        marginTop: "20px",
                      }}
                    >
                      {item?.projectLink && (
                        <a
                          href={item.projectLink}
                          target="_blank"
                          className="projectLink"
                          onClick={() => console.log(item.projectLink)}
                        >
                          Demo
                        </a>
                      )}
                      {item?.sourceCode && (
                        <a
                          href={item.sourceCode}
                          className="projectLink"
                          target="_blank"
                        >
                          Souce Code
                        </a>
                      )}
                    </div>
                    {/* 
                {item?.status && (
                  <p className="projectStatus">{item.status}</p>
                )} */}
                  </div>
                </div>
              )
            );
          })}
      </div>
      {portFolioData.length > 6 && (
        <>
          {visibleProjects < portFolioData.length ? (
            <button className="workBtn" onClick={handleSeeMore}>
              See More
            </button>
          ) : (
            <button className="workBtn" onClick={handleSeeLess}>
              See Less
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default MyWork;
