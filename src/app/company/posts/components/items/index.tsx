import './index.css';

interface IInfoItem {
  label: string;
  value: string;
}

const InfoItem: React.FC<IInfoItem> = ({ label, value }) => {
  return (
    <div className="textLine">
      <p className="infoText">{`${label}՝`}</p>
      <p>{value} {label=== 'Աշխատավարձ' ? 'ՀՀ դրամ' : '' }</p>
    </div>
  );
};

export default InfoItem;
