import React, { Component } from 'react';
import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';

const ChartContainer = styled.div`
	padding: 50px 50px 50px 50px;
	height: 100%;
	width: 100%;
`;

class Apex2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series  : [
				{
					name : 'Day Shift',
					data : this.props.data
				},
				{
					name : 'Night Shift',
					data : this.props.data2
				}
			],
			options : {
				chart       : {
					type : 'bar'
				},
				plotOptions : {
					bar : {
						dataLabels : {
							position : 'top' // top, center, bottom
						}
					}
				},
				dataLabels  : {
					enabled   : true,
					formatter : function(val) {
						return val + '%';
					},
					offsetY   : -20,
					style     : {
						fontSize : '12px',
						colors   : [
							'#304758'
						]
					}
				},
				colors      : [
					'#ffff00',
					'#000088'
				],
				xaxis       : {
					type          : 'category',
					categories    : [
						'2/29/2020',
						'3/01/2020',
						'3/02/2020',
						'3/03/2020',
						'3/04/2020',
						'3/05/2020',
						'3/06/2020'
					],
					labels        : {
						show                  : true,
						rotate                : -45,
						rotateAlways          : false,
						hideOverlappingLabels : true,
						showDuplicates        : false,
						trim                  : true,
						minHeight             : undefined,
						maxHeight             : 120
					},
					axisTicks     : {
						show       : true,
						borderType : 'solid',
						color      : '#78909C',
						height     : 6,
						offsetX    : 0,
						offsetY    : 0
					},
					tickAmount    : undefined,
					tickPlacement : 'between',
					min           : undefined,
					max           : undefined,
					range         : undefined,
					floating      : false,
					position      : 'bottom',
					title         : {
						text    : 'Date',
						offsetX : 0,
						offsetY : 0,
						style   : {
							color      : undefined,
							fontSize   : '12px',
							fontFamily : 'Helvetica, Arial, sans-serif',
							cssClass   : 'apexcharts-xaxis-title'
						}
					},
					crosshairs    : {
						show     : true,
						width    : 1,
						position : 'back',
						opacity  : 0.9,
						stroke   : {
							color     : '#b6b6b6',
							width     : 0,
							dashArray : 0
						},
						fill     : {
							type     : 'solid',
							color    : '#B1B9C4',
							gradient : {
								shade          : 'light',
								shadeIntensity : 0.25,
								colorFrom      : '#D8E3F0',
								colorTo        : '#BED1E6',
								stops          : [
									0,
									100
								],
								opacityFrom    : 0.4,
								opacityTo      : 0.5
							}
						}
					}
				},
				yaxis       : {
					title  : { text: this.props.yaxis },
					labels : {
						minWidth : 40
					}
				},
				zoom        : {
					type           : 'x',
					enabled        : true,
					autoScaleYaxis : true
				}
			}
		};
	}

	render() {
		return (
			<ChartContainer>
				<ReactApexChart
					options={this.state.options}
					series={this.state.series}
					type="bar"
					height="95%"
				/>
			</ChartContainer>
		);
	}
}

export default Apex2;
