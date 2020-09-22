import React, {useState} from "react";
import {Grid, IconButton, Tab, Tabs, TextField} from "@material-ui/core";
import {useNode} from "@craftjs/core";

/**
 * Reqs:
 *  props:
 *      1) image
 *      2) height
 *      3) width
 *      4) link location
 *
 * @param props
 * @constructor
 */
export const ImageContainer = (props) => {

    const {connectors: {connect, drag}} = useNode()

    return (
        <IconButton>
            <img ref={ref => connect(drag(ref))} src={props.imageSrc} style={{height: props.height, width: props.width}}/>
        </IconButton>
    )
}

export const ImageContainerSettings = () => {
    const [state, setState] = useState({
        tabIndex: 1
    })

    const { actions: {setProp}, props } = useNode((node) => {
        return {
            props: node.data.props
        }
    })

    console.log(`props: ${JSON.stringify(props)}`)

    const handleTabChange = (event, newValue) => {
        setState({tabIndex: newValue})
    }

    const handleWidthChange = (event) => {
        setProp(props => {
            props.width = event.target.value
        })
    }

    const handleHeightChange = (event) => {
        setProp(props => {
            props.height = event.target.value
        })
    }

    const handleImageSrcChange = (event) => {
        setProp(props => {
            props.imageSrc = event.target.value
        })
    }

    const handleLinkLocationChange = (event) => {
        setProp(props => {
            props.linkLocation = event.target.value
        })
    }

    return (
        <div>
            <Tabs value={state.tabIndex} onChange={handleTabChange}>
                <Tab value={0} label="Properties" />
                <Tab value={1} label="Layouts" />
            </Tabs>
            <div hidden={state.tabIndex !== 0} style={{margin: "10px"}}>
                <Grid container spacing={4}>
                    <Grid item sm={12}>
                        <TextField id="imageWidth" label="width" onChange={handleWidthChange} defaultValue={props.width}/>
                    </Grid>
                    <Grid item sm={12}>
                        <TextField id="imageHeight" label="height" onChange={handleHeightChange} defaultValue={props.height}/>
                    </Grid>
                    <Grid item sm={12}>
                        <TextField id="imageSrc" label="image url" onChange={handleImageSrcChange} defaultValue={props.imageSrc}/>
                    </Grid>
                    <Grid item sm={12}>
                        <TextField id="linkLocation" label="Link Location" onChange={handleLinkLocationChange} defaultValue={props.linkLocation}/>
                    </Grid>
                </Grid>
            </div>
            <div hidden={state.tabIndex !== 1} style={{margin: "10px"}}>
                <img src="/bnyLayout.jpg" height="100px" width="100px"/>
            </div>
        </div>
    )
}


ImageContainer.craft = {
    displayName: "Image",
    related: {
        settings: ImageContainerSettings
    },
    props: {
        imageSrc: "/bny-logo.svg",
        width: "414px",
        height: "50px",
        linkLocation: "Not Implemented Yet"
    }
}
