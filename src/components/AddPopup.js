
import {Button, Modal, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId'
import map from 'lodash/map'
import reject from 'lodash/reject'

export default class AddPopup extends Component {
        state = {
            data: {
                friq0: '0',
                friq1: '0',
                friq2: '0',
                friq3: '0',
                friq4: '0',
            },
            label: '-',   
        }

        handleChangeText = (e) =>
            this.setState({
                label: e.target.value
            });

         handleChange = e => this.setState({
             ...this.state,
             data: {
                ...this.state.data,
                [e.target.id]: e.target.value,
         }})

        handleSubmit = (event) => {
            const {data, label} = this.state;
        
            this.props.addRow({
                data: Object.values(data),
                id: uniqueId(),
                label,
            }, this.props.page);
        }
    
    render () {
        const {onClose} = this.props;
        return (
            <div className="static-modal">
                <Modal
                    dialogComponentClass="ModalDialog"
                    bsSize="small"
                    aria-labelledby="contained-modal-title-sm"
                    show={this.props.isOpen}
                    onHide={this.props.onClose}
                >
                <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Добавление данных</Modal.Title>
                </Modal.Header>
            
                <Modal.Body>
                    <form>
                        <ControlLabel>Введите данные: </ControlLabel>
                            <FormGroup
                                controlId="friq0"
                            >
                                <ControlLabel>Частота 1:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.data['0']}
                                    placeholder="0"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup
                                controlId="friq1"
                            >
                                <ControlLabel>Частота 2:</ControlLabel>
                                    <FormControl
                                    type="text"
                                    value={this.state.data['1']}
                                    placeholder="0"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup
                                controlId="friq2"
                            >
                                <ControlLabel>Частота 3:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.data['2']}
                                    placeholder="0"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup
                                controlId="friq3"
                            >
                                <ControlLabel>Частота 4:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.data['3']}
                                    placeholder="0"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup
                                controlId="friq4"
                            >
                                <ControlLabel>Частота 5:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.data['4']}
                                    placeholder="0"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup
                                controlId="label"
                            >
                                <ControlLabel>Описание (для графика):</ControlLabel>
                                <FormControl
                                    componentClass="textarea"
                                    value={this.state.label}
                                    placeholder="Введите текст"
                                    onChange={this.handleChangeText}
                                />
                                </FormGroup>
                    </form>
                </Modal.Body>
            
                <Modal.Footer>
                    <Button onClick={onClose}>Close</Button>
                    <Button bsStyle="primary" onClick={this.handleSubmit}>Save changes</Button>
                </Modal.Footer>
                </Modal.Dialog>
                </Modal> 
            </div>
        )
    }    
}