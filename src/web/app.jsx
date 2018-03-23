import React, { PropTypes } from 'react';

const Style = require('./app.less');

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  static propTypes = {
    record: PropTypes.object
  }

  render() {
    const { record = {} } = this.props;
    const { pluginData = {} } = record;
    return (
      <div className={Style.wrapper}>
        <div className={Style.detailItem}>
          <div className={Style.label} >URL:</div>
          <div className={Style.content} >{' ' + record.protocol}://{record.host + record.path} </div>
        </div>
        <div className={Style.detailItem}>
          <div className={Style.label} >Request PluginData:</div>
          <div className={Style.content} >{pluginData.requestPluginData} </div>
        </div>
        <div className={Style.detailItem}>
          <div className={Style.label} >Response PluginData:</div>
          <div className={Style.content} >{pluginData.responsePluginData} </div>
        </div>
      </div>
    )
  }
}

export default App;
