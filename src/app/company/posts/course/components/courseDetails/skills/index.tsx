import { default as CheckedIcon } from '@/components/icons/checked-icon.svg';

const Skills = () => {
  const learn = [
    'UX|UI տարբերությունները',
    'UX|UI տարբերությունները2',
    'UX|UI տարբերությունները35',
    'UX|UI տարբերությունները4',
    'UX|UI տարբերությունները5',
    'UX|UI տարբերությունները6',
    'UX|UI տարբերությունները7',
    'UX|UI տարբերությունները8',
    'UX|UI տարբերությունները9',
    'UX|UI տարբերությունները10',
    'UX|UI տարբերությունները11',
    'UX|UI տարբերությունները12',
    'UX|UI տարբերությունները13',
    'UX|UI տարբերությունները14',
    'UX|UI տարբերությունները15',
  ];
  return (
    <div className="flex flex-col gap-6">
      <p className="text-[1.25rem] font-bold text-davy-gray">Ի՞նչ եք սովորելու</p>
      <div className='grid grid-cols-5 gap-2'>
        {learn.map((item) => (
          <div key={item} className="flex flex-row items-center gap-2 p-2 border border-secondary-orange rounded-md ">
            <CheckedIcon/>
            <p className="text-xs text-davy-gray">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
