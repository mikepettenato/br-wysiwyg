import React from "react";
import {Box, Typography, Grid, Button as MaterialButton, IconButton, Tooltip} from "@material-ui/core";
import {Element, useEditor} from "@craftjs/core";
import {Container} from "./Container";
import {Card} from "./Card";
import{Button} from "./Button";
import {Text} from "./Text";
import {GridItem, GridItemContainer} from "./layout/Grid";
import TextFieldIcon from "@material-ui/icons/TextFields"

export const Toolbox = () => {

    const { connectors, query } = useEditor();

    return (
        <Box px={2} py={2}>
            <Grid container direction="column"  alignItems="center" justify="center" spacing={1}>
                <Box pb={2}>
                    <Typography>Drag to add</Typography>
                </Box>
                <Grid container direction="column" item>
                    <Tooltip title={"Container"} placement={"right-start"}>
                        <div draggable="true" ref={ref=> connectors.create(ref, <GridItemContainer />)} style={{width:22, height:22}}>
                            <svg width="22" height="22">
                                <rect width="22" height="22"
                                      style={{fill:"rgb(220,220,220)", strokeWidth:5, stroke:"rgb(0,0,0)"}} />
                                Sorry, your browser does not support inline SVG.
                            </svg>
                        </div>
                    </Tooltip>
                    <Tooltip title={"Text Field"} placement={"right-start"}>
                        <div draggable="true" ref={ref=> connectors.create(ref, <GridItem />)} style={{width:22, height:22}}>
                            <TextFieldIcon/>
                        </div>
                    </Tooltip>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref=> connectors.create(ref, <Button text="Click me" size="small" />)} variant="contained">Button</MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref=> connectors.create(ref, <Text text="Hi world" />)} variant="contained">Text</MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref=> connectors.create(ref, <Element is={Container} padding={20} canvas />)} variant="contained">Container</MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref=> connectors.create(ref, <Card />)} variant="contained">Card</MaterialButton>
                </Grid>
            </Grid>
        </Box>
    )
}
