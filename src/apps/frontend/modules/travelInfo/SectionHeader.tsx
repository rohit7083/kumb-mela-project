import { Link } from 'react-router-dom';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  linkTo?: string;
  linkLabel?: string;
  emoji?: string;
};

const SectionHeader = ({
  title,
  subtitle,
  linkTo,
  linkLabel = 'View All',
  emoji,
}: SectionHeaderProps) => (
  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
    <div>
      {emoji && <div className="text-4xl mb-2">{emoji}</div>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
    {linkTo && (
      <Link
        to={linkTo}
        className="text-green-700 dark:text-green-400 font-semibold hover:underline flex items-center gap-1 text-sm whitespace-nowrap"
      >
        {linkLabel} →
      </Link>
    )}
  </div>
);

export default SectionHeader;