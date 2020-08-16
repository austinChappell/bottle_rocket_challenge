// External Dependencies
import React, { useEffect } from 'react';

import { useAppDispatch } from 'state/store';

// Local Typings
interface Props {
  children: React.ReactElement | React.ReactElement[];
  leftNavItem: React.ReactElement | null;
  rightNavItem: React.ReactElement | null;
  title: string;
}

// Component Definition
const Page: React.FC<Props> = ({
  children,
  leftNavItem,
  rightNavItem,
  title,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      payload: { navItem: leftNavItem },
      type: 'UI_SET_LEFT_NAV_ITEM',
    });
  }, [dispatch, leftNavItem]);

  useEffect(() => {
    dispatch({
      payload: { navItem: rightNavItem },
      type: 'UI_SET_RIGHT_NAV_ITEM',
    });
  }, [dispatch, rightNavItem]);

  useEffect(() => {
    document.title = title ? `Lunch Tyme | ${title}` : 'Lunch Tyme';
  }, [title]);

  return children as React.ReactElement;
};

export default Page;
