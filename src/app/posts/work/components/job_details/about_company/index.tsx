import GradientLine from '@/app/posts/components/gradientLines';
import InfoItem from '../../../../components/items';

const AboutCompany = () => {
  return (
    <div className="flex-col w-full grid grid-cols-3 gap-4">
      <div className="flex flex-col gap-4 col-span-2 ">
        <div className="flex flex-row gap-4">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            className="w-52 h-52 rounded-md"
          />
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium">Հաշվապահ</p>
            <p className="text-xs font-normal first-letter text-primary-blue">ACBA բանկ</p>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col w-full p-8 bg-light-blue gap-4 rounded-md">
        <p className="text-lg font-bold">Դասընթացի մանրամասները</p>
        <div className="flex flex-col gap-2">
          <InfoItem label={'Գտնվելու վայրը'} value={'Երևան'} />
          <InfoItem label={'Հասցե'} value={'Արմենակ Արմենակյան 1'} />
          <InfoItem label={'Աշխատավարձ'} value={' 450 000 դրամ'} />
          <InfoItem label={'Հեռախոս'} value={'011 20 20 20'} />
          <GradientLine />
          <InfoItem label={'Դիմելու վերջնաժամկետ'} value={'26․02․2023'} />
          <InfoItem label={'Աշխ․ պայման՝'} value={'Մշտական'} />
          <InfoItem label={'Զբաղվածություն'} value={'Ամբողջ  դրույք'} />
          <InfoItem label={'Մակարդակ'} value={'Սկսնակ'} />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
