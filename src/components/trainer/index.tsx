const TrainerCard = () => {
  return (
    <div className="border-[0.5px] border-[#DDEAEB] grid grid-cols-3 gap-8 rounded-[10px]">
      <div className="py-4 pl-4">
        <div>
            <p className="text-primary-blue font-bold text-xsl">Աննա Ավագյան</p>
            <p className="text-davy-gray text-sm">UX/UI Designer</p>
        </div>
        <div></div>
      </div>
      <div className="py-4 flex flex-col gap-2">
        <p className="font-bold text-davy-gray">ԱՇԽԱՏԱՆՔԱՅԻՆ ՓՈՐՁ</p>
        <p className="text-davy-gray">
          6+ տարվա աշխատանքային փորձ Codemotion, 2022 - այժմUser Experience Designer Gazprom, 2021 - 2022UX/UI Design
          Teacher SoftConstruct, 2021 - 2022UX/UI Designer Digitain Holding Limited, 2017 - 2021UX/UI Designer Basic IT
          Center, սեպ. 2020 - դեկ. 2020UX/UI Designer Sevan Start-Up Foundation, 2016 - 2018Graphic and Web Designer
          Alvarium, 2016 - 2017Graphic Designer
        </p>
      </div>
      <div className="bg-[url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')] bg-cover rounded-[10px] h-full" />
    </div>
  );
};

export default TrainerCard;
