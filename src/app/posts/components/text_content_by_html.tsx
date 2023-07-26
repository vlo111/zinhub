interface ITextContent {
  title: string;
  description: string | undefined;
}

const TextContentByHtml: React.FC<ITextContent> = ({ title, description }) => {
  return (
    <div className="flex flex-col w-full gap-6">
      <p className="text-lg font-bold text-davy-gray">{title}</p>
      <p className="text-sm font-medium text-davy-gray" dangerouslySetInnerHTML={{__html: description ?? ''}}></p>
    </div>
  );
};

export default TextContentByHtml;
