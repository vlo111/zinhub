import TextContent from '@/app/posts/components/text_content';
import { IJobContent } from '../../../types';
import TextContentByHtml from '@/app/posts/components/text_content_by_html';

const JobContent: React.FC<IJobContent> = ({ formData }) => {
  return (
    <div className="flex flex-col gap-14 w-[60%]">
      <TextContent title="Աշխատանքի նկարագրություն" description={formData?.description} />
      <TextContentByHtml title="Պարտականություններ" description={formData?.responsibilities} />
      <TextContentByHtml title="Անհրաժեշտ հմտություններ" description={formData?.skills} />
      <TextContent title="Հավելյալ նշումներ" description={formData?.additionalNotes} />
      <TextContent title="Ինչ ենք մենք առաջարկում (Ընկերության մասին)" description={formData?.whatWeOffer} />
    </div>
  );
};

export default JobContent;
