import { Grid, Row, Col, Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import Chart from 'chart.js';
import DataTable from './DataTable';
import AddPopup from './AddPopup';
import { randomColor } from '../selectors/selectors'

export default class Analysis extends Component {
    componentDidMount() {
        this.chartRenderer(this.props.page, this.props.friqData);
        this.props.getDataRequest();
    }

    static defaultProps = {
        page: 'modal',
        friqData: {
            modal: [],
            static: [],
            noneStatic: [],
            spectral: [],
        }
    }

    state = {
        isOpen: false,
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.page !== nextProps.page || this.props.page !== nextProps.friqData) {
            this.chartRenderer(nextProps.page, nextProps.friqData);
        }
    }

    chartRenderer = (page, friqs) => new Chart(document.getElementById('myChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: [0, 10, 20, 30, 40],
            datasets: friqs[page].map(item => ({
                id: item.id,
                data: item.data,
                label: item.label,
                borderColor: `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 1)`,
                backgroundColor: 'rgba(0, 0, 0, 0)',
            })),
        },
        options: {}
    });

    openPopup = () => this.setState({ isOpen: true })

    closePopup = () => this.setState({ isOpen: false })

    render() {
        const { page, friqData, addDataRequest } = this.props;
        const { isOpen } = this.state;

        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <canvas id="myChart"></canvas>
                    </Col>
                    <Col xs={6} md={4}>
                        <DataTable
                            data={friqData[page]}
                            page={page}
                        />
                        <Button bsStyle="primary" block onClick={this.openPopup}>
                            Добавить результаты
                        </Button>
                    </Col>
                </Row>
                {isOpen ?
                    <AddPopup
                        onClose={this.closePopup}
                        addRow={addDataRequest}
                        isOpen={isOpen}
                        page={page}
                    />
                    : null
                }
            </Grid>
        )
    }
}
