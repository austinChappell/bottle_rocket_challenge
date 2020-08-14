/* eslint-disable react/destructuring-assignment */
import React, { CSSProperties } from 'react';

// Local Typings
interface Props {
  children: React.ReactElement;
  clone?: boolean;
  m?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mx?: number;
  my?: number;
  p?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  px?: number;
  py?: number;
}

// Local Variables
const getStyle = (props: Props): CSSProperties => ({
  marginBottom: props.mb ?? props.my ?? props.m ?? 0,
  marginLeft: props.ml ?? props.mx ?? props.m ?? 0,
  marginRight: props.mr ?? props.mx ?? props.m ?? 0,
  marginTop: props.mt ?? props.my ?? props.m ?? 0,
  paddingBottom: props.pb ?? props.py ?? props.p ?? 0,
  paddingLeft: props.pl ?? props.px ?? props.p ?? 0,
  paddingRight: props.pr ?? props.px ?? props.p ?? 0,
  paddingTop: props.pt ?? props.py ?? props.p ?? 0,
});

// Component Definition
const Space: React.FC<Props> = (props) => {
  const style = getStyle(props);

  return props.clone
    ? React.cloneElement(props.children, { style })
    : (
      <div style={style}>
        {props.children}
      </div>
    );
};

export default Space;
