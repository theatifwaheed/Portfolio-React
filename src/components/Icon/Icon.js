import { classes } from 'utils/style';
import styles from './Icon.module.css';
import ArrowLeft from './svg/arrow-left.svg';
import ArrowRight from './svg/arrow-right.svg';
import Behance from './svg/Behance.svg';
import Check from './svg/check.svg';
import ChevronRight from './svg/chevron-right.svg';
import Close from './svg/close.svg';
import Copy from './svg/copy.svg';
import Error from './svg/error.svg';
import Github from './svg/github.svg';
import Link from './svg/link.svg';
import Menu from './svg/menu.svg';
import Pause from './svg/pause.svg';
import Play from './svg/play.svg';
import Send from './svg/send.svg';
import Linkedin from './svg/linkedin.svg';

export const icons = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  behance: Behance,
  check: Check,
  chevronRight: ChevronRight,
  close: Close,
  copy: Copy,
  error: Error,
  github: Github,
  link: Link,
  menu: Menu,
  pause: Pause,
  play: Play,
  send: Send,
  linkedin: Linkedin,
};

export const Icon = ({ icon, className, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent aria-hidden className={classes(styles.icon, className)} {...rest} />
  );
};
