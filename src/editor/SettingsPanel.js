import React, {useState} from "react";
import ReactDOM from 'react-dom'
import {useEditor} from "@craftjs/core";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Draggable from "react-draggable";
import {Grid, IconButton} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import MoveIcon from "@material-ui/icons/OpenWith"

import {SketchPicker} from "react-color"


export const ConditionalDraggable = ({condition, wrapper, children}) => {
    console.log(`condition: ${condition}`)
    return condition ? wrapper(children) : children
}

export const SettingsPanel = () => {

    const [edit, setEdit] = useState(
        {
            edit: false,
            component: undefined,
    })

    const useStyles = makeStyles(theme => ({
        propertyMenu: {
            position: "fixed",
            zIndex: 9999,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        },
        propertyDetailContainer: {
            margin: "10px"
        }
    }))

    const classes = useStyles()

    const {selected, actions} = useEditor(state => {

        const currentNodeId = state.events.selected

        let editEnabled = false
        let editComponent = undefined

        let selected
        if (currentNodeId) {

            //console.log(`state: ${JSON.stringify(state.nodes[currentNodeId].data.props)}`)

            editEnabled = ("editEnabled" in state.nodes[currentNodeId].data.props) ? state.nodes[currentNodeId].data.props.editEnabled : false
            //editComponent = ("editComponent" in state.nodes[currentNodeId].data.props) ? state.nodes[currentNodeId].data.props.editComponent : undefined

            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings
            }

            console.log(`edit enabled: ${editEnabled}`)

            edit.edit = editEnabled
            edit.component = selected.settings

            setEdit(prevEdit => ({
                ...prevEdit,
                edit: editEnabled,
                component: selected.settings
            }))

        }
        return {
            selected,
            actions: state.actions
        }
    })

    const handleClose = (event) => {
        if (!!selected) {
            edit.edit = false
            edit.component = undefined
            setEdit(prevEdit => ({
                ...prevEdit,
                edit: false,
                component: undefined
            }))
            actions.setProp(selected.id, (props) => {
                props['editEnabled'] = false

            })
        }
    }

    return edit.edit ? (
        <Draggable
            handle=".handle"
            position={null}
        >
            <Paper elevation={1} className={classes.propertyMenu}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="flex-end"
                    justify="center"
                >
                    <Grid item xs={12}>
                        <IconButton className="handle">
                            <MoveIcon />
                        </IconButton>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={12} className={classes.propertyDetailContainer}>
                        {edit.component && React.createElement(edit.component)}
                    </Grid>
                </Grid>
            </Paper>
        </Draggable>
    ) : null
}
