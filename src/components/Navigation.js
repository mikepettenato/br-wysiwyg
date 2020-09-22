import React, {useState} from "react";
import {FormControl, Grid, Link, Tab, Tabs, TextField} from "@material-ui/core";
import {Canvas, Element, useEditor, useNode} from "@craftjs/core";
import {makeStyles} from "@material-ui/styles";
import NativeSelect from "@material-ui/core/NativeSelect";
import {BretGrid, BretGridItem} from "../layout/Grid";

export const SimpleLink = (props) => {

    const {connectors: {connect, drag}} = useNode()

    const useStyles = makeStyles(theme => ({
        container: {
            margin: props.margin,
            width: "auto",
            height: "auto"
        }
    }))
    const classes = useStyles()

    return (
        <div ref={ref => connect(drag(ref))} className={classes.container}>
            <Link href={props.href} color={"inherit"}>{props.label}</Link>
        </div>
    )
}

export const SimpleLinkSettings = () => {

    const useStyles = makeStyles( theme => ({
        container: {
            padding: "10px"
        }
    }))
    const classes = useStyles()

    const { actions: {setProp}, props } = useNode((node) => {
        return {
            props: node.data.props
        }
    })

    const handleLabelChange = (event) => {
        setProp(props => {
            props.label = event.target.value
        })
    }

    const handleHrefChange = (event) => {
        setProp(props => {
            props.href = event.target.value
        })
    }

    const handleMarginChange = (event) => {
        setProp(props => {
            props.margin = event.target.value
        })
    }

    return (
        <Grid container spacing={4} className={classes.container}>
            <Grid item sm={12}>
                <TextField id="labeltextbox" label="Label" onChange={handleLabelChange} defaultValue={props.label}/>
            </Grid>
            <Grid item sm={12}>
                <TextField id="hreftextbox" label="href" onChange={handleHrefChange} defaultValue={props.href}/>
            </Grid>
            <Grid item sm={12}>
                <TextField id="margin" label="Margin (top, right, bottom, left)" onChange={handleMarginChange} defaultValue={props.margin}/>
            </Grid>
        </Grid>
    )
}

SimpleLink.craft = {
    displayName: "Link",
    related: {
        settings: SimpleLinkSettings
    },
    props: {
        href: "#",
        label: "Link Name",
        margin: "0px 0px 0px 10px"
    }
}

export const SimpleLinkNav = (props) => {

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1
        },
        container: {
            backgroundColor: props.backgroundColor,
            justifyContent: props.horizontalAlignment,
        },
        item: {
            minHeight: "10vh",
            backgroundColor: props.backgroundColor,
//            margin: `${margin}`,
//             border: selected ? "dashed 1px blue" : "",
            justifyContent: props.horizontalAlignment
        },
    }))

    const classes = useStyles()

    const {id, connectors: {connect, drag}} = useNode()

    const breakpoints = {
        sm: props.breakpoint
    }

    const nodeId = `${id}-canvas`

    return (
        <Element id={nodeId} is={BretGrid}
            // ref={ref => connect(drag(ref))}
            minHeight={"10vh"}
            backgroundColor={props.backgroundColor}
            justifyContent={props.horizontalAlignment}
            {...breakpoints}
        >
            {/*<Element ref={ref => connect(drag(ref))} id={nodeId} is={Grid} item={"true"} container={"true"} className={classes.item} canvas={"true"}>*/}
                {props.children}
            {/*</Element>*/}
        </Element>
    )
}

export const SimpleLinkNavSettings = () => {

    const [state, setState] = useState({
        tabIndex: 1
    })

    const {
        id,
        actions: {setProp},
        props,
        canvasNodeId
    } = useNode((node) => ({
        id: node.id,
        props: node.data.props,
        canvasNodeId: node.data.linkedNodes[`${node.id}-canvas`]
    }))

    const {
        enabled,
        actions: {add},
        query: {createNode, node},
    } = useEditor((state) => ({ enabled: state.options.enabled }));

    const handleTabChange = (event, newValue) => {
        setState(prevState => ({
            ...prevState,
            tabIndex: newValue
        }))
    }

    const handleHorizontalAlignmentChange = (event) => {
        setProp(props => {
            props.horizontalAlignment = event.target.value
        })
    }

    const handleBreakpointChange = (event) => {
        setProp(props => {
            props.breakpoint = event.target.value * 1
        })
    }

    const createLinkNode = () => {
        const node = createNode(React.createElement(SimpleLink))
        add (node, canvasNodeId)
    }

    const handleAddLink = () => {
        createLinkNode()
    }

    return (
        <div>
            <Tabs value={state.tabIndex} onChange={handleTabChange}>
                <Tab value={0} label="Properties" />
                <Tab value={1} label="Components" />
            </Tabs>
            <div hidden={state.tabIndex !== 0} style={{margin: "10px"}}>
                <Grid container sm={6}>
                    <Grid item sm={12}>
                        <NativeSelect onChange={handleHorizontalAlignmentChange} value={props.horizontalAlignment}>
                            <option key={"option-1"} value={'flex-start'}>Left</option>
                            <option key={"option-2"} value={'flex-end'}>Right</option>
                            <option key={"option-3"} value={'center'}>Center</option>
                            <option key={"option-4"} value={'space-between'}>Space between</option>
                            <option key={"option-5"} value={'spaced-around'}>Space before, between and after</option>
                        </NativeSelect>
                    </Grid>
                    <Grid item sm={12}>
                        <NativeSelect onChange={handleBreakpointChange} value={props.breakpoint}>
                            <option key={"option-1"} value={12}>12</option>
                            <option key={"option-2"} value={11}>11</option>
                            <option key={"option-3"} value={10}>10</option>
                            <option key={"option-4"} value={9}>9</option>
                            <option key={"option-5"} value={8}>8</option>
                            <option key={"option-6"} value={7}>7</option>
                            <option key={"option-7"} value={6}>6</option>
                            <option key={"option-8"} value={5}>5</option>
                            <option key={"option-9"} value={4}>4</option>
                            <option key={"option-10"} value={3}>3</option>
                            <option key={"option-11"} value={2}>2</option>
                            <option key={"option-12"} value={1}>1</option>
                        </NativeSelect>
                    </Grid>
                </Grid>
            </div>
            <div hidden={state.tabIndex !== 1} style={{margin: "10px"}}>
                <Grid container>
                    <Grid item={3}>
                        <img src="/link.png" height="100px" width="100px" onClick={handleAddLink}/>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

SimpleLinkNav.craft = {
    displayName: "Simple Link Navigation",
    related: {
        settings: SimpleLinkNavSettings
    }
}
