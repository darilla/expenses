import React, { useCallback } from 'react';
import { string, func } from 'prop-types';
import { Typography } from 'antd';

import { NAVIGATION, NO_VALUE } from '../../common/constants';

import { Container, List, Item } from './Navigation.styles';

const { Text } = Typography;

const { HOME, PAYMENT, STATISTICS } = NAVIGATION;

function Navigation({ activeLink, setActiveLink }) {
  const handleClick = useCallback(
    e => {
      const name = e.currentTarget.getAttribute('name');

      switch (name) {
        case HOME:
          return setActiveLink(HOME);
        case PAYMENT:
          return setActiveLink(PAYMENT);
        case STATISTICS:
          return setActiveLink(STATISTICS);
        default:
          return NO_VALUE;
      }
    },
    [setActiveLink],
  );

  return (
    <Container>
      <List>
        <Item onClick={handleClick} name={HOME} isActive={activeLink === HOME}>
          <Text>{HOME}</Text>
        </Item>
        <Item
          onClick={handleClick}
          name={PAYMENT}
          isActive={activeLink === PAYMENT}
        >
          <Text>{PAYMENT}</Text>
        </Item>
        <Item
          onClick={handleClick}
          name={STATISTICS}
          isActive={activeLink === STATISTICS}
        >
          <Text>{STATISTICS}</Text>
        </Item>
      </List>
    </Container>
  );
}

Navigation.propTypes = {
  activeLink: string.isRequired,
  setActiveLink: func.isRequired,
};

export default Navigation;
