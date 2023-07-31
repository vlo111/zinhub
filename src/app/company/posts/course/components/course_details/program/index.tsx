
import TextContent from "@/app/company/posts/components/text_content";
import { IProgram } from "../../../types";

const Program: React.FC<IProgram> = ({ formData }) => {
  return (
    <div className="flex flex-col gap-6 w-[60%]">
       <TextContent
          title="Ծրագիր"
          description={formData?.program}
        />
    </div>
  );
};

export default Program;
