import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Good } from './types/Good';
import './App.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ListGroup className="list-of-goods">
    {goods.map(good => (
      <ListGroup.Item
        key={good.id}
        data-cy="good"
        style={{
          color: good.color,
        }}
        className="list-of-goods__item"
      >
        {good.name}
      </ListGroup.Item>
    ))}
  </ListGroup>
));
