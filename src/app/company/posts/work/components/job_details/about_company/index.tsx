import GradientLine from '@/app/company/posts/components/gradientLines';
import InfoItem from '../../../../components/items';
import { IAboutCompany } from '../../../types';

const AboutCompany: React.FC<IAboutCompany> = ({ formData, company }) => {
  return (
    <div className="flex-col w-full grid grid-cols-3 gap-4">
      <div className="flex flex-col gap-4 col-span-2 ">
        <div className="flex flex-row gap-4">
          <img src={company?.photo} className="w-60 h-52 rounded-md border border-gray" />
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium">
              {formData?.companyName !== undefined ? formData?.companyName : formData?.title}
            </p>
            <p className="text-xs font-normal first-letter text-primary-blue">{company?.name}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-8 bg-light-blue gap-4 rounded-md ">
        <p className="text-lg font-bold">Դասընթացի մանրամասները</p>
        <div className="flex flex-col gap-2 ">
          <InfoItem
            label={'Գտնվելու վայրը (Մարզ)'}
            value={formData?.regionId !== undefined ? formData?.regionId?.label : formData?.region?.title ?? ''}
          />
          <InfoItem label={'Հասցե'} value={formData?.location ?? ''} />
            <InfoItem label={'Աշխատավարձ'} value={formData?.salary ?? ''} />
          <InfoItem label={'Հեռախոս'} value={formData?.phone ?? ''} />
          <GradientLine />
          <InfoItem
            label={'Դիմելու վերջնաժամկետ'}
            value={new Date(formData?.applicationDeadline ?? '').toLocaleDateString() ?? ''}
          />
          <InfoItem label={'Աշխ․ պայման'} value={'Մշտական'} />
          <InfoItem label={'Զբաղվածություն'} value={formData?.duration ?? ''} />
          <InfoItem
            label={'Մակարդակ'}
            value={formData?.levelId !== undefined ? formData?.levelId?.label : formData?.level?.title ?? ''}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
