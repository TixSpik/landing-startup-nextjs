/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path='/'
      sx={{
        variant: 'link.logo',
        display: 'flex',
        cursos: 'pointer',
        mr: 15
      }}
      {...rest}
    >
      <Image src={src} alt='NextJs Logo' />
    </Link>
  );
}
