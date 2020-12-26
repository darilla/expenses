import React, { useState, useCallback } from 'react';
import { Typography } from 'antd';

import { NO_VALUE } from '../../common/constants';

import { Container, List, Item } from './Navigation.styles';

const { Text } = Typography;

const NAV_LINK = {
  HOME: 'Home',
  SAVINGS: 'Savings',
  STATISTICS: 'Statistics',
};

const { HOME, SAVINGS, STATISTICS } = NAV_LINK;

function Navigation() {
  const [activeLink, setActiveLink] = useState(HOME);

  const handleClick = useCallback(e => {
    const name = e.currentTarget.getAttribute('name');

    switch (name) {
      case HOME:
        return setActiveLink(HOME);
      case SAVINGS:
        return setActiveLink(SAVINGS);
      case STATISTICS:
        return setActiveLink(STATISTICS);
      default:
        return NO_VALUE;
    }
  }, []);

  return (
    <Container>
      <List>
        <Item onClick={handleClick} name={HOME} isActive={activeLink === HOME}>
          <Text>{HOME}</Text>
        </Item>
        <Item
          onClick={handleClick}
          name={SAVINGS}
          isActive={activeLink === SAVINGS}
        >
          <Text>Savings</Text>
        </Item>
        <Item
          onClick={handleClick}
          name={STATISTICS}
          isActive={activeLink === STATISTICS}
        >
          <Text>Statistics</Text>
        </Item>
      </List>
    </Container>
  );
}

export default Navigation;
