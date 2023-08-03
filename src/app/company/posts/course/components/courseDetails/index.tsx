import Details from "./details";
import Program from "./program";
import Skills from "./skills";

 const CourseDetails = () => {

  return (
    <div className="flex flex-col gap-14 w-full p-4">
        <Details/>
        <Program/>
        <Skills/>
    </div>
  );
};

export default CourseDetails;