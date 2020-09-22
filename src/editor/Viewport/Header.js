import React from 'react';
import { useEditor } from '@craftjs/core';
import styled from 'styled-components';
import {Checkmark} from "../../icons";
import {Customize} from "../../icons";
import cx from 'classnames';
import lz from 'lzutf8'

const HeaderDiv = styled.div`
  width: ${(props) => (props.enabled ? '100%' : '800px')};
  z-index: 999;
  position: fixed;
  transform: translateX(-50%);
  left: 50%;

  ${(props) =>
    !props.enabled
      ? `
    backdrop-filter: blur(12px);
    background: #ccccccc2;
    color:#2d2d2d;
  `
      : ''}
`;

const Link = styled.a`
  padding: 20px 0px;
  margin-right: 35px;
  font-size: 13px;
  position: relative;
  opacity: ${(props) => (props.selected ? 1 : 0.8)};
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:after {
    content: ' ';
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
    bottom: ${(props) => (props.selected ? 0 : '-2')}px;
    opacity: ${(props) => (props.selected ? 1 : 0)};
    left: 0;
    position: absolute;
  }
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  svg {
    margin-right: 6px;
    width: 12px;
    height: 12px;
    fill: #fff;
    opacity: 0.9;
  }
`;

export const Header = () => {
  const {
    enabled,
    actions: { setOptions },
    query
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <HeaderDiv
      enabled={enabled}
      className="header bg-light-gray-1 text-white transition w-full"
    >
      <div className="items-center flex w-full px-4 ">
        <div className={cx(["flex-1", "my-1"])}>
          <h2 className="mr-5 text-xl">bret.js</h2>
        </div>
        {/*<div className="flex items-end justify-end">*/}
        {/*  <Link href="https://github.com/prevwong/craft.js">Github</Link>*/}
        {/*</div>*/}
        <div className="flex">
          <Btn
            className={cx([
              'transition cursor-pointer',
              {
                'bg-green-400': enabled,
                'bg-primary': !enabled,
              },
            ])}
            onClick={() => {
              setOptions((options) => (options.enabled = !enabled));
          }}
          >
            {enabled ? <Checkmark /> : <Customize />}
            {enabled ? 'Finish Editing' : 'Edit'}
          </Btn>
          <div className="flex">
          <Btn
              className={cx([
                'transition cursor-pointer',
                  'bg-white',
                  'text-black'
              ])}
              onClick={() => {
                console.log("Storing state")
                localStorage.clear()
                localStorage.setItem("appState", query.serialize())
              }}
          >
              Save
          </Btn>
          </div>
        </div>
      </div>
    </HeaderDiv>
  );
};
