import React from 'react';
import PropTypes from 'prop-types';
import { Name } from './Section.styled';

const Section = ({ title, children }) => (
  <section>
    {title && <Name>{title}</Name>}
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
};
export default Section;
