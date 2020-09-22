import React from 'react';
import { Element, useEditor } from '@craftjs/core';
import { Container } from '../../selectors/Container';
import { Text } from '../../selectors/Text';
import { Video } from '../../selectors/Video';
import { Button} from "../../selectors/Button/Button";
import {Chip} from "@material-ui/core";
import {Paper} from "@material-ui/core";

import {AddItemPanel} from "./AddItemsPanel";
import {Add} from '../../icons'
import {Square} from '../../icons';
import {Text as TypeCsv} from '../../icons';
import {Youtube as YoutubeSvg} from '../../icons';
import {Button as ButtonSvg} from '../../icons';

import styled from 'styled-components';
import {ToolboxItem} from "./ToolboxItem";
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles( theme => ({
  svg: {
    width: "22px",
    height: "22px",
    fill: "#707070",
    zIndex: 999,
    background: "#000000",
    borderRadius: "50%",
  },
  item: {
    width: "62px",
    height: "28px",
    borderRadius: "50px",
    background: "#FFFFFF",
    opacity: 0.3,
    "&:hover": {
      cursor: 'pointer',
      opacity: 1
    }
  },
}))

const ToolboxDiv = styled.div`
  transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : '')}
  ${(props) => (!props.enabled ? `opacity: 0;` : '')}
  position: fixed;
  top: 8vh;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
`;


// const ToolChip = styled(Chip)`
//   {
//     opacity: .3;
//   }
//
//   :hover {
//     cursor: 'pointer';
//     opacity: 1;
//   }
// `;

// const Item = styled.div`
//   div {
//     width: 62px;
//     height: 22px;
//     border-radius: 50px;
//     background: #FFFFFF;
//   }
//   svg {
//     width: 22px;
//     height: 22px;
//     fill: #707070;
//     z-index: 999;
//     background: #000000;
//     border-radius: 50%
//   }
// `;

const AddItemPaper = styled(Paper)`
        position: fixed;
        height: 250px;
        width: 150px;
        top: 8vh;
        left: 62px;
        display: flex;
        flex-direction: column;
        font-size: 8px;
        border-radius: 10px;
`

export const ToolboxV2 = () => {

  const classes = useStyle()

  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({ enabled: state.options.enabled }));

  const openAddPaper = (event) => {
    console.log(event)
  }

  return (
    <ToolboxDiv
      enabled={enabled && enabled}
      // className="toolbox transition w-12 border-r h-screen bg-white"
    >

      <ToolboxItem
          icon={<Add className={classes.svg}/>}
          label="Add"
          onClick={openAddPaper}
          className={classes.item}
      >
          <AddItemPaper
              elevation={1} height="250px" width="150px"
              // style={{
              //     position: 'fixed',
              //     height: '250px',
              //     width: '150px',
              //     top: '8vh',
              //     left: '62px',
              //     //borderRadius: '0%',
              //     display: "flex",
              //     flexDirection: "column",
              //     fontSize: "8px",
              //     borderRadius: "10px",
              // }}
          >
              <AddItemPanel height={'250px'} width={'150px'}/>
          </AddItemPaper>
      </ToolboxItem>
    </ToolboxDiv>

  );
};
