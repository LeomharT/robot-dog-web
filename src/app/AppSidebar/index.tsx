import { Button } from '@/components/ui/button';
import { useAppStore } from '@/hooks/useAppStore';
import { useMediaQuery } from '@mantine/hooks';
import clsx from 'clsx';
import { useRef } from 'react';
import classes from './style.module.css';

export default function AppSidebar() {
  const ref = useRef<HTMLDivElement>(null);

  const matches = useMediaQuery('(max-width: 48rem)');

  const expanded = useAppStore((state) => state.expanded);

  const className = clsx([classes.sidebar], {
    [classes.transition]: matches,
  });

  return (
    <aside ref={ref} data-expanded={expanded} aria-expanded={expanded} className={className}>
      <div className={classes.menus}>
        <Button variant='outline'>123123</Button>
        <Button variant='outline'>123123</Button>
        <Button variant='outline'>123123</Button>
        <Button variant='outline'>123123</Button>
        <Button variant='outline'>123123</Button>
        <Button variant='outline'>123123</Button>
      </div>
    </aside>
  );
}
