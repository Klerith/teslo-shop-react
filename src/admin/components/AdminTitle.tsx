interface Props {
  title: string;
  subtitle: string;
}

export const AdminTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};
