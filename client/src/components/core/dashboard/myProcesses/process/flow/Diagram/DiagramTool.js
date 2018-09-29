import React from 'react';
import {
  Diagram,
  store as diagramStore,
  setEntities,
  setConfig,
  diagramOn,
} from 'react-flow-diagram';
import model from './model';
import { config, customEntities } from './config';

class DiagramTool extends React.PureComponent {
  componentWillMount() {
    diagramStore.dispatch(setConfig(config));
    diagramStore.dispatch(setEntities(model));

    diagramOn('anyChange', entityState =>
      // You can get the model back
      // after modifying the UI representation
      console.info(entityState)
    );
  }
  render() {
    return <Diagram customEntities={customEntities} />;
  }
}

export default DiagramTool;