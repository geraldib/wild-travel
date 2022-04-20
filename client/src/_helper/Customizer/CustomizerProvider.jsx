import React, { useState } from 'react';
import ConfigDB from '../../Config/ThemeConfig';
import Context from './index';

const CustomizerProvider = (props) => {
  const [sidebar_types, setSidebarTypes] = useState('');
  const [settings, setSettings] = useState('');
  const [layout, setLayout] = useState('');
  const [mix_background_layout, setMixBackgroundLayout] = useState('');
  const [toggleIcon, setToggleIcon] = useState(false);
  const [mixLayout, setMixLayout] = useState(false);
  const [sidebarResponsive, setSidebarResponsive] = useState(false);
  const [IsOpen, setIsClose] = useState(false);

  const addSidebarTypes = (type) => {
    ConfigDB.data.settings.sidebar.type = type;
    localStorage.setItem('sidebar_types', type);
    setSidebarTypes(type);
  };

  const addSidebarSettings = (sidebar_Settings) => {
    ConfigDB.data.settings.sidebar_setting = sidebar_Settings;
    localStorage.setItem('sidebar_Settings', sidebar_Settings);
    setSettings(sidebar_Settings);
  };

  const addLayout = (layout) => {
    ConfigDB.data.settings.layout_type = layout;
    localStorage.setItem('layout_type', layout);
    setLayout(layout);
  };

  const addMixBackgroundLayout = (mix_background_layout) => {
    ConfigDB.data.color.mix_background_layout = mix_background_layout;
    localStorage.setItem('mix_background_layout', mix_background_layout);
    if (mix_background_layout !== 'light-only') {
      setMixLayout(false);
    } else {
      setMixLayout(true);
    }
    setMixBackgroundLayout(mix_background_layout);
  };

  const addColor = (default_color, secondary_color) => {
    ConfigDB.data.color.primary_color = default_color;
    ConfigDB.data.color.secondary_color = secondary_color;
    localStorage.setItem('default_color', default_color);
    localStorage.setItem('secondary_color', secondary_color);
  };

  const toggleSidebar = (toggle) => {
    setToggleIcon(toggle);
  };

  const toggleSidebarResponsive = (toggle) => {
    setSidebarResponsive(toggle);
  };

  return (
    <Context.Provider
      value={{
        ...props,
        sidebar_types,
        settings,
        layout,
        mix_background_layout,
        toggleIcon,
        mixLayout,
        sidebarResponsive,
        IsOpen,
        setIsClose,
        toggleSidebarResponsive,
        setMixLayout,
        addSidebarTypes: addSidebarTypes,
        addSidebarSettings: addSidebarSettings,
        addLayout: addLayout,
        addMixBackgroundLayout: addMixBackgroundLayout,
        addColor: addColor,
        toggleSidebar: toggleSidebar,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default CustomizerProvider;
