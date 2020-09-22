import React  from "react";
import {Text}    from "./Text";
import {Button} from "./Button";
import { Element, useNode } from "@craftjs/core";

import {Container, ContainerDefaultProps, ContainerSettings} from "./Container";

// Notice how CardTop and CardBottom do not specify the drag connector. This is because we won't be using these components as draggables; adding the drag handler would be pointless.

export const CardTop = ({children}) => {
    const { connectors: {connect} } = useNode();
    return (
        <div ref={connect} className="text-only">
            {children}
        </div>
    )
}

CardTop.craft = {
    rules: {
        // Only accept Text
        canMoveIn: (incomingNode) => incomingNode.data.type == Text
    }
}

export const CardBottom = ({children}) => {
    const { connectors: {connect} } = useNode();
    return (
        <div ref={connect}>
            {children}
        </div>
    )
}

CardBottom.craft = {
    rules: {
        // Only accept Buttons
        canMoveIn : (incomingNode) => incomingNode.data.type == Button
    }
}

export const Card = ({background, padding = 20}) => {
    return (
        <Container background={background} padding={padding}>
            <Element id="text" is={CardTop} canvas> // Canvas Node of type CardTop
                <Text text="Title" fontSize={20} />
                <Text text="Subtitle" fontSize={15} />
            </Element>
            <Element id="buttons" is={CardBottom} canvas> // Canvas Node of type CardBottom
                <Button size="small" text="Learn more" />
            </Element>
        </Container>
    )
}

Card.craft = {
    props: ContainerDefaultProps,
    related: {
        // Since Card has the same settings as Container, we'll just reuse ContainerSettings
        settings: ContainerSettings
    }
}
