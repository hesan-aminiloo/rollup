import React, { FC } from "react";

export interface TitleProps {
  type: string;
}

const types = ({ children, props }) => {
  h1: (<h1 {...props}>{children}</h1>)
}

const Title = (props: TitleProps) => {
  return (
    types[props.type]()
  )
};

export default Title;