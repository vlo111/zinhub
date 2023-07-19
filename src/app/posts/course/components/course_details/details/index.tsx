import GradientLine from '@/app/posts/gradientLines';
import './index.css';
import InfoItem from './item';

const Details = () => {
  return (
    <>
      <div className="flex-col w-full grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 col-span-2 ">
          <div className="flex flex-row gap-4">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              className="w-52 h-52 rounded-md"
            />
            <div className="flex flex-col gap-4">
              <p className="text-xl font-medium">UI/UX դիզայնի դասընթաց սկսնակների համար</p>
              <p className="text-xs font-normal first-letter text-primary-blue">Բիզնես Դեվելոփմենթ Գրուպ</p>
            </div>
          </div>
          <p className="text-sm font-medium text-davy-gray">
            UI/UX դիզայնի վերաբերյալ դասընթացների ընթացքում կծանոթանաք դիզայն համակարգերին (Design system) կծանոթանաք UI
            (User Interface) էլեմենտներին UX-ի (User Experience) հիմունքներին՝ ձեռք բերելով «դիզայն մտածելակերպ»
            Կկարողանաք կիրառել ձեռք բերված գիտելիքները պրակտիկ աշխատանքներում Դասընթացների ավարտին կունենաք նաև սեփական
            պորտֆոլիո
          </p>
        </div>
        <div className="flex flex-col w-full p-8 bg-light-blue rounded-md gap-4">
          <p className="text-lg font-bold">Դասընթացի մանրամասները</p>
          <div className="flex flex-col gap-2">
            <InfoItem label={'Տեսակը'} value={'լսարանային'} />
            <InfoItem label={'Գտնվելու վայրը'} value={'Երևան'} />
            <InfoItem label={'Հասցե'} value={'Արմենակ Արմենակյան 1'} />
            <InfoItem label={'Հեռախոս'} value={'011 20 20 20'} />
            <GradientLine />
            <InfoItem label={'Երբ'} value={'26․02․2023'} />
            <InfoItem label={'Տևողությունը'} value={'2 ամիս'} />
            <InfoItem label={'Դասաժամեր'} value={'6 ժամ / շաբաթ'} />
            <InfoItem label={'Դասընթացի Մակարդակ'} value={'Սկսնակ'} />
            <InfoItem label={'Դասընթացի Լեզու'} value={'Հայերեն'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
