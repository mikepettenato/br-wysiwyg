import React from "react";
import {useNode} from "@craftjs/core";
import {Grid, TextField} from "@material-ui/core";
import NativeSelect from "@material-ui/core/NativeSelect";
import {makeStyles} from "@material-ui/styles";


export const Textbox = (props) => {

    const {connectors: {connect, drag}} = useNode()

    return (
        <TextField
            ref={ref => connect(drag(ref))}
            id="textbox" label={props.label}
            variant={props.variant}
        />
    )
}

export const TextboxSettings = () => {


    const useStyles = theme => ({
        container: {
            padding: "10px"
        }
    })
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

    const handleVariantChange = (event) => {
        setProp(props => {
            props.variant = event.target.value
        })
    }

    return (
        <Grid container spacing={4} className={classes.container}>
            <Grid item sm={12}>
                <TextField id="textbox" label="Label" onChange={handleLabelChange} defaultValue={props.label}/>
            </Grid>
            <Grid item sm={12}>
                <NativeSelect onChange={handleVariantChange} value={props.variant}>
                    <option key={"option-1"} value={'standard'}>Standard</option>
                    <option key={"option-2"} value={'filled'}>Filled</option>
                    <option key={"option-3"} value={'outlined'}>Outlined</option>
                </NativeSelect>
            </Grid>
        </Grid>

    )
}

Textbox.craft = {
    displayName: "Textbox",
    related: {
        settings: TextboxSettings
    },
    props: {
        label: "Search",
        variant: "standard",
        alignment: "left"
    }
}
