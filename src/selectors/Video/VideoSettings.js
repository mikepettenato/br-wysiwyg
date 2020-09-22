import React from 'react';
import {ToolbarSection} from "../../editor/Toolbar/ToolbarSection";
import {ToolbarItem} from "../../editor/Toolbar/ToolbarItem";

export const VideoSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Youtube">
        <ToolbarItem
          full={true}
          propKey="videoId"
          type="text"
          label="Video ID"
        />
      </ToolbarSection>
    </React.Fragment>
  );
};
