import React, {useState} from "react";
import {FormControl, FormLabel, Grid, Paper, Slider, Tab, Tabs, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useNode, Element, Frame, useEditor} from "@craftjs/core";
import NativeSelect from "@material-ui/core/NativeSelect";
import ContentEditable from "react-contenteditable";
import styled from "styled-components"
import {SketchPicker} from 'react-color'
import {Draggable} from 'react-draggable'
import {Container} from "../selectors/Container";
import {ImageContainer} from "../components/Image";
import {Textbox} from "../components/Text";
import {SimpleLink, SimpleLinkNav} from "../components/Navigation";

const makeId = (length = 7) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const defaultGridContainerProps = {
    backgroundColor: "#FFFFFF",
    width: "auto",
    minHeight: "auto",
    horizontalAlignment: "flex-start",
    breakpoints: {}
}

const defaultBretGridItemProps = {
    backgroundColor: "#c0c0c0",
    width: "auto",
    minHeight: "auto",
    horizontalAlignment: "flex-start",
    breakpoints: {}
}


export const BretGrid = (
    {
        minHeight,
        width,
        backgroundColor,
        horizontalAlignment,
        children,
        breakpoints,
        ...props
    }) => {

    const {connectors: {connect, drag}} = useNode()

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1
        },
        container: {
            minHeight: minHeight,
            width: width,
            backgroundColor: backgroundColor,
            justifyContent: horizontalAlignment
        }
    }))

    const classes = useStyles()

    const {is, canvas, ...bretElemProps} = props

    return (
        <Grid container item ref={(ref => connect(drag(ref)))} {...bretElemProps} {...breakpoints} className={classes.container}>
            {children}
        </Grid>
    )
}

export const GridContainer = (
    {
        backgroundColor,
        width,
        minHeight,
        horizontalAlignment,
        breakpoints,
        children

    }
    ) => {

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1
        },
        container: {
            minHeight: minHeight,
            width: width,
            backgroundColor: backgroundColor,
            justifyContent: horizontalAlignment
        }
    }))

    const classes = useStyles()

    const {connectors: {connect, drag}} = useNode()

    return (
        <Grid container={true} item={true} ref={ref => connect(drag(ref))} key="container-root" spacing={1} className={classes.container} {...breakpoints}>
            {children}
        </Grid>
    )
}


export const GridContainerSettings = () => {

    const [state, setState] = useState({
        color: {
            hex: defaultGridContainerProps.backgroundColor
        },
        width: defaultGridContainerProps.width,
        tabIndex: 0
    })

    const Popup = styled.div`
        cursor: move;
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 9999;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    `

    const PointerSketchPicker = styled(SketchPicker)`
        cursor: default !important;
    `

    const { actions: {setProp}, props } = useNode((node) => {
        return {props: node.data.props}
    })

    const {
        enabled,
        actions: {add},
        query: {createNode, node},
        connectors: { create },
    } = useEditor((state) => ({ enabled: state.options.enabled }));

    const { id } = useNode()

    const { data: {type, theprops}} = node(id).get();

    const handleColorChange = (color) => {
        state.color = color
        setState(state)
        setProp(props => {
            props.backgroundColor = color.hex
        })
    }

    const handleWidthChange = (event) => {
        state.width = event.target.value
        setState(state)
        setProp(props => {
            props.width = state.width
        })
    }


    const handleTabChange = (event, newValue) => {
        setState({tabIndex: newValue})
    }

    const createGridItemNode = (desktop) => {

        const node = createNode(React.createElement(GridItem, {
            desktop: desktop
        }))

        add(node, "ROOT")

    }

    const handleAddLayout = (event) => {
        createGridItemNode(5)
        createGridItemNode(6)
        createGridItemNode(12)
        createGridItemNode(12)
    }

    const handleAddPanel = (event) => {
        createGridItemNode(12)
    }

    const handleHorizontalAlignmentChange = (event) => {
        setProp( prop => {
            prop.horizontalAlignment = event.target.value
        })
    }

    return(
        <div>
            <Tabs value={state.tabIndex} onChange={handleTabChange}>
                <Tab value={0} label="Properties" />
                <Tab value={1} label="Layouts" />
            </Tabs>
            <div hidden={state.tabIndex !== 0} style={{margin: "10px"}}>
                <Grid container spacing={4}>
                    <Grid item sm={6}>
                        <PointerSketchPicker
                            color={state}
                            onChangeComplete={handleColorChange}
                            style={{cursor: "arrow"}}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <Grid container spacing={0}>
                            <Grid item sm={12}>
                                <TextField id="containerWidth" label="width" onChange={handleWidthChange} defaultValue={props.width}/>
                            </Grid>
                            <Grid item sm={12}>
                                <NativeSelect onChange={handleHorizontalAlignmentChange} value={props.horizontalAlignment}>
                                    <option key={"option-1"} value={'flex-start'}>Left</option>
                                    <option key={"option-2"} value={'flex-end'}>Right</option>
                                    <option key={"option-3"} value={'center'}>Center</option>
                                    <option key={"option-4"} value={'space-between'}>Space between</option>
                                    <option key={"option-5"} value={'spaced-around'}>Space before, between and after</option>
                                </NativeSelect>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div hidden={state.tabIndex !== 1} style={{margin: "10px"}}>
                   <img src="/bnyLayout.jpg" height="100px" width="100px" onClick={handleAddLayout}/>
                   <img src="/panel.jpg" height="100px" width="100px" onClick={handleAddPanel}/>
            </div>
        </div>
    )
}

BretGrid.craft = {
    displayName: "BretGrid",
    props: defaultGridContainerProps,
    related: {
        settings: GridContainerSettings
    }
}

GridContainer.craft = {
    displayName: "GridContainer",
    related: {
        settings: GridContainerSettings
    },
    props: defaultGridContainerProps
}

const defaultGridItemProperties = {
    margin: "10px 10px 10px 10px",
    backgroundColor: "#92c092",
    horizontalAlignment: "flex-start",
    desktop: 12,
    mobile: 12
}

export const GridItemSettings = () => {

    const {
        id,
        actions: {setProp},
        props,
        //canvasNodeId
    } = useNode((node) => ({
        id: node.id,
        props: node.data.props,
        //canvasNodeId: node.data.linkedNodes[`${node.id}-canvas`]

    }))

    const {
        enabled,
        actions: {add},
        query: {createNode, parseReactElement, node},
        connectors: { create },
    } = useEditor((state) => {
        return {
            enabled: state.options.enabled,
        }
    })

    const PointerSketchPicker = styled(SketchPicker)`
        cursor: default !important;
    `

    const handleChange = (event) => {
        setProp(props => props.desktop = event.target.value);
    }

    const [state, setState] = useState({
        color: {
            hex: defaultGridItemProperties.backgroundColor
        },
        tabIndex: 0
    })

    const handleTabChange = (event, newValue) => {
        setState({tabIndex: newValue})
    }

    const handleColorChange = (color) => {
        setState(prevState => ({
            ...prevState,
            color: {
                ...color
            }
        }))
        setProp(props => {
            props.backgroundColor = color.hex
        })

    }

    const handleWidthChange = (event) => {
        setProp(props => {
            props.width = event.target.value
        })
    }

    const handleMarginChange = (event) => {
        setProp(props => {
            props.margin = event.target.value
        })
    }

    const handleHorizontalAlignmentChange = (event) => {
        setProp(props => {
            props.horizontalAlignment = event.target.value
        })
    }

    const createImageContainerNode = () => {

        const node = createNode(React.createElement(ImageContainer))

        //add(node, canvasNodeId)
        add(node, id)
    }

    const handleAddLogo = (event) => {
        createImageContainerNode()
    }

    const createTextboxNode = () => {

        const node = createNode(React.createElement(Textbox))

        //add (node, canvasNodeId)
        add(node, id)
    }

    const handleAddTextbox = (event) => {
        createTextboxNode()
    }

    const createSimpleLinkNav = () => {
        const tree = parseReactElement(React.createElement(SimpleLink, {label: "Home"})).toNodeTree()
        const navNodeLink = tree.nodes[tree.rootNodeId]
        add(navNodeLink, id)

        const aboutTree = parseReactElement(React.createElement(SimpleLink, {label: "About"})).toNodeTree()
        const aboutNavNodeLink = aboutTree.nodes[aboutTree.rootNodeId]
        add(aboutNavNodeLink, id)


        // TODO - create SimpleLinkNav
        // const tree = parseReactElement(React.createElement(SimpleLinkNav)).toNodeTree()
        //
        // console.log(JSON.stringify(tree))
        //
        // const navNode = tree.nodes[tree.rootNodeId];
        //
        // console.log(JSON.stringify(navNode.data.nodes))
        //
        // add(navNode, canvasNodeId)

        // -- Done create SimpleLinkNav

        // console.log(JSON.stringify(node.data.nodes))
        //
        // const navCanvasId = node.data.linkedNodes[`${node.id}-canvas`]
        //

        // const homeNode = createNode(React.createElement(SimpleLink, {
        //     label: "Home"
        // }))
        //
        // add(homeNode, navNode.id)

        //
        // const aboutNode = createNode(React.createElement(SimpleLink, {
        //     label: "About"
        // }))
        // add(aboutNode, navCanvasId)
        //
        // const contactNode = createNode(React.createElement(SimpleLink, {
        //     label: "Contact"
        // }))
        // add(contactNode, navCanvasId)
    }

    const handleAddNavigation = (event) => {
        createSimpleLinkNav()
    }

    return (
        <div>
            <Tabs value={state.tabIndex} onChange={handleTabChange}>
                <Tab value={0} label="Properties" />
                <Tab value={1} label="Layouts" />
            </Tabs>
            <div hidden={state.tabIndex !== 0} style={{margin: "10px"}}>
                <Grid container spacing={4}>
                    <Grid item sm={6}>
                        <PointerSketchPicker
                            color={props.backgroundColor}
                            onChangeComplete={handleColorChange}
                            style={{cursor: "arrow"}}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <Grid container>
                            <Grid item sm={6}>
                                <NativeSelect onChange={handleHorizontalAlignmentChange} value={props.horizontalAlignment}>
                                    <option key={"option-1"} value={'flex-start'}>Left</option>
                                    <option key={"option-2"} value={'flex-end'}>Right</option>
                                    <option key={"option-3"} value={'center'}>Center</option>
                                    <option key={"option-4"} value={'space-between'}>Space between</option>
                                    <option key={"option-5"} value={'spaced-around'}>Space before, between and after</option>
                                </NativeSelect>
                            </Grid>
                            <Grid item sm={12}>
                                <TextField id="itemWidth" label="width" onChange={handleWidthChange} defaultValue={props.width}/>
                            </Grid>
                            <Grid item sm={12}>
                                <TextField id="itemMargin" label="margin (top, right, bottom, left)" onChange={handleMarginChange} defaultValue={props.margin}/>
                            </Grid>
                            <FormControl size="small" component="fieldset">
                                <FormLabel component="legend">Desktop Width</FormLabel>
                                <NativeSelect onChange={handleChange} value={props.desktop}>
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
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div hidden={state.tabIndex !== 1} style={{margin: "10px"}}>
                <Grid container>
                    <Grid item sm={3}>
                        <img src="/bny-logo.svg" height="25px" width="100px" onClick={handleAddLogo}/>
                        <img src="/textbox.jpg" height="100px" width="100px" onClick={handleAddTextbox}/>
                        <img src="/navigation.jpg" height="25px" width="100px" onClick={handleAddNavigation}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export const BretGridItem = (
    {
        minHeight,
        width,
        backgroundColor,
        horizontalAlignment,
        children,
        breakpoints,
        ...props
    }) => {

    return (
        <BretGrid
            minHeight={minHeight}
            width={width}
            backgroundColor={backgroundColor}
            horizontalAlignment={horizontalAlignment}
            breakpoints={{xs:12, sm:12}}
            //breakpoints={breakpoints}
            {...props}
        >
            {children}
        </BretGrid>
    )
}

BretGridItem.craft = {
    displayName: "BretGridItem",
    props: defaultBretGridItemProps,
    related: {
        settings: GridItemSettings
    }
}

export const GridItemCanvas = ({children}) => {
    const { props, connectors: {connect, drag}} = useNode(node => {
        return {
            props: node.data.props
        }
    })

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1
        },
        item: {
            backgroundColor: "transparent",
            // border: selected ? "dashed 1px blue" : "",
            justifyContent: props.horizontalAlignment,
            width: "100%",
            margin: "0px",
            padding: "0px"
        }

    }))

    const classes = useStyles()

    return(
        <Grid item ref={ref=> connect(drag(ref))} className={classes.item}>
            {children}
        </Grid>
    )
}

GridItemCanvas.craft = {
    displayName: "GridItemCanvas",
    related: {
        settings: GridItemSettings
    },
    props: {
        horizontalAlignment: "flex-start"
    }
}

export const GridItem = ({
    margin,
    backgroundColor,
    horizontalAlignment,
    desktop,
    mobile,
    children
}) => {

    const {id, connectors: {connect, drag}, selected, dragged, props, actions: {setProp}} = useNode(state => ({
        selected: state.events.selected,
        dragged: state.events.dragged,
        props: state.data.props
    }))

    const highlighted = {
        selected: {
            border: "dashed 1px blue"
        }
    }

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1
        },
        item: {
            minHeight: "10vh",
            backgroundColor: backgroundColor,
            margin: `${margin}`,
            border: selected ? "dashed 1px blue" : "",
            justifyContent: horizontalAlignment
        },
    }))

    const breakpoints = {
        sm: desktop*1,
        xs: mobile*1
    }

    const classes = useStyles()

    const nodeId = `${id}-canvas`

    console.log(`main component: ${horizontalAlignment}`)

    const canvasProps = {
        horizontalAlignment: horizontalAlignment
    }

    console.log(`background color: ${backgroundColor}`)

    return (
        <BretGrid ref={ref => connect(drag(ref))} minHeight={"10vh"} backgroundColor={backgroundColor} margin={margin} {...breakpoints}>
            <Element
                id={nodeId}
                is={BretGridItem}
                minHeight={"10vh"}
                backgroundColor={backgroundColor}
                margin={"5px"}
                justifyContent={horizontalAlignment}
                {...breakpoints}
                canvas
            >
                {children}
            </Element>
        </BretGrid>
        // <BretGrid ref={ref => connect(drag(ref))} minHeight={"10vh"} backgroundColor={backgroundColor} margin={margin} justifyContent={horizontalAlignment} {...breakpoints}>
        //     <Element id={nodeId} is={Grid} item container className={classes.item} canvas={"true"}>
        //         {children}
        //     </Element>
        // </BretGrid>
    )

}

GridItem.craft = {
    displayName: "GridItem",
    rules: {
        canDrag: (node) => {
            // TODO: check to see if the parent is a GridContainer.
            //       GridItems can only be dragged on GridContainers
            return true
        }
    },
    related: {
        settings: GridItemSettings
    },
    props: defaultGridItemProperties
}
