import React, {useState} from "react";
import styled from "styled-components"
import {makeStyles} from "@material-ui/styles";
import {Chip} from "@material-ui/core";
import {Add} from "../../icons";

const ToolChip = styled(Chip)`
  {
    ${props => (props.enabled ? 'opacity: 1;' : 'opacity: .3;')};
  }
  
  :hover {
    cursor: 'pointer';
    opacity: 1;
  }
`;

const Item = styled.div`
  // div {
  //   width: 62px;
  //   height: 22px;
  //   //border-radius: 50px;
  //   background: #FFFFFF;
  // }
  // svg {
  //   width: 22px;
  //   height: 22px;
  //   fill: #707070;
  //   z-index: 999;
  //   background: #000000;
  //   border-radius: 50%
  // }
`;

export const ToolboxItem = (props) => {

    const [enabled, setEnabled] = useState(false)

    const handleClick = (event) => {
        console.log(event)
    }

    return (
            <div
                className={props.className}
                // style={{opacity: 0.3}}
            >
                <ToolChip
                    icon={props.icon}
                    label={props.label}
                    size="small"
                    clickable
                    style={{
                        fontSize: '8px',
                        backgroundColor: '#FFFFFF'
                    }}
                    onClick={() => (setEnabled(!enabled))}
                    enabled={enabled ? 1 : undefined}
                />
                {enabled ? props.children: null}
            </div>
    )
}
