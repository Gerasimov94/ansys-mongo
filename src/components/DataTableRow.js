import React from 'react';
import uniqueID from 'lodash/uniqueId'
import {Button, Glyphicon} from 'react-bootstrap'

export default function DataTableRow(props) {
    return (
        <tr>
            <td>{props.id}</td>
            {props.friq.map(item => (
                <td key={uniqueID()}>
                    {item}
                </td>
            ))}
            <td>
                <Button
                    bsSize="xsmall"
                    onClick={() => props.removeDataRequest(props._id, props.page)}
                >
                    <Glyphicon glyph="remove" />
                </Button>
            </td>
        </tr>
    )
}