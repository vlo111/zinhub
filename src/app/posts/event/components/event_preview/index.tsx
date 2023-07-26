'use client';

import GradientLine from '@/app/posts/components/gradientLines';
import InfoItem from '@/app/posts/components/items';
import TextContent from '@/app/posts/components/text_content';

const EventPreview = () => {
  return (
    <div className='w-full'>
      <div className="flex-col w-full grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 col-span-2 ">
          <div className="flex flex-row gap-4">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              className="w-52 h-52 rounded-md"
            />
            <div className="flex flex-col gap-4">
              <p className="text-xl font-medium">Հոգեբանական, հոգեբուժական աջակցություն</p>
              <p className="text-xs font-normal first-letter text-primary-blue">
                Հոգեսոցիալական կարգավորման կենտրոն Psychosocial Recovery Center
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full p-8 bg-light-blue gap-4 rounded-md">
          <p className="text-lg font-bold">Դասընթացի մանրամասները</p>
          <div className="flex flex-col gap-2">
            <InfoItem label={'Գտնվելու վայրը'} value={'Երևան'} />
            <InfoItem label={'Հասցե'} value={'Արմենակ Արմենակյան 1'} />
            <InfoItem label={'Հեռախոս'} value={'011 20 20 20'} />
            <GradientLine />
            <InfoItem label={'Դիմելու վերջնաժամկետ'} value={'26․02․2023'} />
            <InfoItem label={'Անցկացման օր'} value={'30․06․2023'} />
          </div>
        </div>
      </div>
      <div className=" flex flex-col w-[60%] gap-14">
        <TextContent
          title="Ծրագիր"
          description="1) անհայտ կորած անձանց կամ ռազմագերիների ծնողները, ընտանիքի անդամները.2) գերության մեջ գտնված անձինք, նրանց ընտանիքի անդամները.3) ռազմական գործողությունների ընթացքում վիրավորում կամ հաշմանդամությունստացած անձինք, նրանց ընտանիքի անդամները.4) զոհված զինծառայողների կամ քաղաքացիական անձանց ընտանիքի անդամները.5) ռազմական գործողություններին մասնակցած անձինք, այդ թվում՝ զորահավաքային զորակոչով ներգրավվածները և կամավորականները.Խորհրդատվությունն իրականացնելու է ԵՊԲՀ հոգեբուժության ամբիոնի վարիչ Կարինե Կարլենի Թաթարյանը"
        />
        <TextContent
          title="Ի՞նչ ենք մենք առաջարկում (Ընկերության մասին)"
          description="Հունիսի 30-ին հոգեսոցիալական կարգավորման կենտրոնի Ջերմուկի և Գորիսի մասնաճյուղերում անվճար հոգեբուժական և հոգեբանական խորհրդատվություն իրականացվեց բոլոր ցանկացողներրի համար։ Խորհրդատվությունը իրականացրեցին Մոսկվայից ժամանած մեր հայրենակից, գործընկեր բ.գ.դ., պրոֆեսոր Ստեփան Նարբեյի Մաթևոսյանը, Հոգեսոցիալական կարգավորման կենտրոնի գիտական ղեկավար, հոգեբույժ բ․գ․դ․, պրոֆեսոր Սամվել Հրանտի Սուքիասյանը, հոգեբանական ծառայությունները համակարգող հոգեբան հ.գ.թ., դոցենտ Լիլիթ Բաղդասարյանը։
Այսպիսի այցերը կրում են պարբերական բնույթ և նախատեսված են ՀՀ քաղաքացիներին հոգեկան առողջության ոլորտի որակյալ ծառայությունը հասանելի դարձնելու համար։"
        />
      </div>
    </div>
  );
};

export default EventPreview;
