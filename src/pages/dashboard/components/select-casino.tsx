import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import type { Casino } from '..';

interface Props {
  casinos: Casino[];
}

const SelectCasino: FC<Props> = function SelectCasino({ casinos }) {
  return (
    <Form.Select>
      {casinos.map((casino) => (
        <option value={casino.id}>{casino.name}</option>
      ))}
    </Form.Select>
  );
};

export default SelectCasino;
