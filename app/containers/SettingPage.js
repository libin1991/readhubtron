import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BodyClassName from 'react-body-classname';
import Switch from 'material-ui/Switch';
import { ipcRenderer } from 'electron';
import IconButton from 'material-ui/IconButton';
import SettingsBackupRestoreIcon from 'material-ui-icons/SettingsBackupRestore';
import SettingsPowerIcon from 'material-ui-icons/SettingsPower';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import * as SettingActions from '../actions/setting';

class SettingPage extends Component {

  state = {
  };

  render() {
    return (
      <BodyClassName className="setting">
        <div className="content">
          <div className="heroTitle">
            <IconButton
              onClick={() => { ipcRenderer.send('apply-setting', 'reload'); }}
              aria-label="Delete"
            >
              <SettingsBackupRestoreIcon />
            </IconButton>
            <span >readhubTron</span>
            <IconButton
              onClick={() => { ipcRenderer.send('apply-setting', 'quit'); }}
              aria-label="Delete"
            >
              <SettingsPowerIcon />
            </IconButton>
          </div>
          <div className="settingFrom">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.props.setting.simpleMode}
                    onChange={(event, checked) => this.props.switchSimpleMode(!this.props.setting.simpleMode)}
                  />
                }
                label="简洁模式"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={this.props.setting.notificationMode}
                    onChange={(event, checked) => this.props.switchNotificationMode(!this.props.setting.notificationMode)}
                    label="开启通知模式"
                  />
                }
                label="开启通知模式"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={this.props.setting.moblieFirst}
                    onChange={(event, checked) => this.props.switchMoblieFirstMode(!this.props.setting.moblieFirst)}
                  />
                }
                label="优先使用Mobile页面"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={this.props.setting.disabledJavascript}
                    onChange={(event, checked) => this.props.switchDisabledJavascript(!this.props.setting.disabledJavascript)}
                  />
                }
                label="禁止页面运用javascript"
              />
            </FormGroup>


            {/* <Switch
              checked={this.props.setting.nightViwMode}
              onChange={(event, checked) => this.props.switchNightViwMode(!this.props.setting.nightViwMode)}
              label="夜间模式"
            /> */}

          </div>
        </div>
      </BodyClassName>

    );
  }
}
function mapStateToProps(state) {
  return {
    setting: state.setting
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SettingActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingPage);
