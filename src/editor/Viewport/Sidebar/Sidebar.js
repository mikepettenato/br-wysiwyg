import React, { useState } from 'react';
import { Layers } from '@craftjs/layers';
import { Toolbar} from "../../Toolbar/Toolbar";
import { SidebarItem } from './SidebarItem';
import styled from 'styled-components';
import {Customize} from '../../../icons';
import {Layer} from '../../../icons';
import { useEditor } from '@craftjs/core';

// TODO: styled div is not working
//       added inline styles
export const SidebarDiv = styled.div`
  width: ${(props) => (props.enabled ? 280 : 0)}px;
  opacity: ${(props) => (props.enabled ? 1 : 0)};
  background: #fff;
`;

export const Sidebar = () => {
  const [layersVisible, setLayerVisible] = useState(true);
  const [toolbarVisible, setToolbarVisible] = useState(true);
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <SidebarDiv enabled={enabled} className="sidebar transition bg-white w-2" style={{width: `${enabled ? 280 : 0}px`}}>
      <div className="flex flex-col h-full">
        <SidebarItem
          icon={Customize}
          title="Customize"
          height={!layersVisible ? 'full' : '55%'}
          visible={toolbarVisible}
          onChange={(val) => setToolbarVisible(val)}
        >
          <Toolbar />
        </SidebarItem>
        <SidebarItem
          icon={Layers}
          title="Layers"
          height={!toolbarVisible ? 'full' : '45%'}
          visible={layersVisible}
          onChange={(val) => setLayerVisible(val)}
        >
          <div className="">
            <Layers expandRootOnLoad={true} />
          </div>
        </SidebarItem>
      </div>
    </SidebarDiv>
  );
};
