import {Table, Button} from 'react-bootstrap';
import React, { Component } from 'react';
import DataTableRowContainer from '../containers/DataTableRowContainer'

export default class DataTable extends Component {
    render () {
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th colSpan="6">Friquency</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((item, index) =>
                        <DataTableRowContainer
                            friq={item.data}
                            key={item._id}
                            _id={item._id}
                            id={item.id}
                            page={this.props.page}
                        />
                    )}
                </tbody>
            </Table>
        )
    }
}
