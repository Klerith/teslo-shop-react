import { Link } from 'react-router';

interface Props {
  subtitle?: string;
}

export const CustomLogo = ({ subtitle = 'Shop' }: Props) => {
  return (
    <Link to="/" className="flex items-center whitespace-nowrap">
      <span className="font-montserrat font-bold text-xl m-0 whitespace-nowrap">
        Teslo |
      </span>
      <p className="text-muted-foreground m-0 px-2 whitespace-nowrap">
        {subtitle}
      </p>
    </Link>
  );
};
