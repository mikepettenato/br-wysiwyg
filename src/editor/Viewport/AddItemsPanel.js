import React, {useState} from "react";

import styled from "styled-components"
import {Grid, Chip} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ButtonSettings} from "../../selectors/Button/ButtonSettings";


const GridContainer = styled(Grid)`
    {
        margin: 5px;
        ${props => (props.width ? `width: ${props.width};` : 'width: auto;')}
        ${props => (props.height ? `height: ${props.height};` : 'height: auto;')}
    }
`

const ComponentChip = styled(Chip)`
  :hover {
    background-color: #FFFFFF;
  }
`

export const AddItemPanel = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(8),
            fontWeight: theme.typography.fontWeightRegular,
        },
        componentPanel: {
            width: "auto",
            height: "auto",
            backgroundColor: "#FFFFFF",
            fontSize: theme.typography.pxToRem(10),
            borderBottom: "0.5px solid blue",
            borderRight: "0.5px solid blue",
            borderBottomRightRadius: "5px"

        },
        componentDetails: {
            width: "auto",
            height: "auto",
            color: "black",
            backgroundColor: "#FFFFFF",
            fontSize: theme.typography.pxToRem(10),
            borderRadius: "3px",
            marginBottom: "2px"
        },
        componentHover: {
            color: "#FFFFFF",
            "&:hover": {
                backgroundColor: "#EFEFEF",
                color: "gray"
            }
        },
        componentClicked: {
            backgroundColor: "#FFFFFF",
            color: "gray"
        },
    }));

    const classes = useStyles()

    const [compClicked, setCompClicked] = useState("button")


    const handleComponentClick = (compName) => {
        setCompClicked(compName)
    }

    return (
        <GridContainer container height={props.height} width={props.width} style={{margin: '0px', width: 'auto', height: 'auto'}}>
            <Grid item sm={4} className={classes.componentPanel}>
                <GridContainer container height={props.height} width={props.width} style={{margin: '0px', width: 'auto', height: 'auto'}}>
                    <Grid item sm={12} className={classes.componentPanel}>
                        <ComponentChip
                            label="Button"
                            clickable
                            onClick={() => handleComponentClick('button')}
                            style={{fontSize: "8px", color: compClicked === 'button' ? "gray": "#FFFFFF", backgroundColor: compClicked === 'button' ? "#FFFFFF" : "blue", height: "auto", width: "auto"}}
                        />
                        <ComponentChip
                            label="Grid"
                            clickable
                            onClick={() => handleComponentClick('grid')}
                            style={{fontSize: "8px", color: compClicked === 'grid' ? "gray": "#FFFFFF", backgroundColor: compClicked === 'grid' ? "#FFFFFF" : "blue", height: "auto", width: "auto"}}
                        />
                        <ComponentChip
                            label="Text"
                            clickable
                            onClick={() => handleComponentClick('text')}
                            style={{fontSize: "8px", color: compClicked === 'text' ? "gray": "#FFFFFF", backgroundColor: compClicked === 'text' ? "#FFFFFF" : "blue", height: "auto", width: "auto", marginBottom: "2px"}}
                        />
                    </Grid>
                </GridContainer>
            </Grid>
            <Grid item sm={8} className={classes.componentDetails}>
                <GridContainer container height={props.height} width={props.width} style={{width: 'auto', height: 'auto'}}>
                    <Grid item sm={12} className={classes.componentDetails}>
                        {compClicked == 'button' ? <div>Button</div> : null}
                        {compClicked == 'grid' ? <div>Grid</div> : null}
                        {compClicked == 'text' ? <div>Text</div> : null}
                    </Grid>
                </GridContainer>
            </Grid>

        </GridContainer>
    )
}
