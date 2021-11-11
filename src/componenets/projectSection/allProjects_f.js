import { React } from "react";
import Projects from "./Projects";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00303F",
    },
    secondary: {
      main: "#2D2424",
    },
  },
});

export default function AllProjects(projectsData) {
  const dataArray = projectsData.projectsData;
  return (
    <div>
      <ul className="all-projects">
        <li className="project__item">
          <Projects
            path={"half-built"}
            id="projects1"
            title={"مدارس نیمه تمام"}
            projects={dataArray[0]}
            theme={theme}
          />
        </li>
        <li className="project__item">
          <Projects
            path={"overhauled"}
            id="projects2"
            title={"مدارس بازسازی تخریبی"}
            projects={dataArray[1]}
            theme={theme}
          />
        </li>
        <li className="project__item">
          <Projects
            path={"completed"}
            id="projects3"
            title={"مدارس ساخته شده"}
            projects={dataArray[2]}
            theme={theme}
          />
        </li>
        <li className="project__item">
          <Projects
            path={"under-construction"}
            id="projects4"
            title={"مدارس در حال ساخت"}
            projects={dataArray[3]}
            theme={theme}
          />
        </li>
      </ul>
    </div>
  );
}
