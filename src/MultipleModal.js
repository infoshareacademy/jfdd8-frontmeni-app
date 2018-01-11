import React, {Component} from 'react';
import { Modal, Button } from 'semantic-ui-react'

class MultipleModal extends Component {

  state = {
    showModal: false,
    modalEvent: null
  };

  openModal = event => {
    this.setState({
      modalEvent: event,
      showModal: true
    })
  };
  closeModal = () => this.setState({showModal: false});

  render() {
    return (
      <div>
        {this.state.modalEvent && <Modal
          dimmer={false}
          open={this.state.showModal}
          onOpen={this.openModal}
          onClose={this.closeModal}
          size='small'
        >
          <Modal.Header>{this.state.modalEvent.title} </Modal.Header>
          <Modal.Content>
            <select>
              <option value="100">Apple</option>
              <option value="200">Rice</option>
            </select>
          </Modal.Content>
          <Modal.Actions>
            <Button icon='add' content='add' onClick={this.closeModal}/>
            <Button icon='check' content='Close' onClick={this.closeModal}/>
          </Modal.Actions>
        </Modal>}

      </div>
    )
  }
}

export default MultipleModal