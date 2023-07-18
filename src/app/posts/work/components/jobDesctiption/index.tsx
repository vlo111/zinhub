import { Textarea } from '@/components/texarea';
import { ZUploadImage } from '@/components/upload-image';

const JobDescription = () => {
  return (
    <div className="grid grid-cols-3 gap-10 gap-x-10 mt-14">
      <div className="col-span-2 ">
        <Textarea name="description" label="Աշխատանքի նկարագրություն" />
      </div>
      <div className="col-span-2 ">
        <Textarea name="responsibilities" label="Պարտականություններ" />
      </div>
      <div className="col-span-2 ">
        <Textarea name="skills" label="Պահանջներ, հմտություներ" />
      </div>
      <div className="col-span-2 ">
        <Textarea name="notes" label="Հավելյալ նշումներ" />
      </div>
      <div className="col-span-2 ">
        <Textarea name="offer" label="Ինչ ենք մենք առաջարկում (Ընկերության մասին)" />
      </div>
      <div className="col-span-2 w-[45%]">
        <ZUploadImage name="postImage" label="Կցել նկար հայտարարության համար " />
      </div>
    </div>
  );
};

export default JobDescription;
