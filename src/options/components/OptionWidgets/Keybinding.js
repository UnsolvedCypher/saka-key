import { Component, h } from 'preact';

export default class Keybinding extends Component {
  render ({ label, key }) {
    return (
      <div>
        <label>{ label }</label>
      </div>
    );
  }
}