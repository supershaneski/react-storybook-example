import React from 'react'
import PropTypes from 'prop-types';
import classes from './Graph.module.css'
import Bar from './Bar'

export default function Graph({ xAxis, yAxis, backgroundColor, emptyLabel, emptyLabelColor, title, titleAlign, titleColor, data, axisLabelColor, tickLabelColor, tickLabelX, tickLabelY, tickLabelXOverflow, labelX, labelY, dataMargin, color, axisColor, onClick }) {

    const items = Array((tickLabelX.length + 1)).fill(0)

    return (
        <div className={classes.container} style={{
            backgroundColor: backgroundColor,
        }}>
            <div className={classes.main}>
            <div className={classes.axisY} style={{
                borderRight: `${yAxis ? 1 : 0}px solid ${axisColor}`
            }}>
                <div className={classes.axisYLabel}>
                    <span style={{color: axisLabelColor}}>{ labelY }</span>
                </div>
                <div className={classes.gridYLabel}>
                {
                    tickLabelY.map((item, index) => {
                        return (
                            <div 
                            key={index} 
                            className={classes.gridYLabelItem}
                            style={{bottom: `calc(${item.y}% - 6px)`}}
                            >
                                <span style={{
                                    color: tickLabelColor,
                                }}>{item.label}</span>
                            </div>
                        )
                    })
                }
                </div>
                <div className={classes.gridY}>
                {
                    tickLabelY.map((item, index) => {
                        return (
                            <div 
                            key={index}
                            className={classes.tickY}
                            style={{
                                height: `${item.y}%`,
                                borderTop: `1px solid ${axisColor}`,
                            }}
                            ></div>
                        )
                    })
                }
                </div>
            </div>
            <div className={classes.graphArea}>
                {
                    data.map((item, index) => {
                        return (
                            <div 
                            key={index} 
                            className={classes.bar}
                            style={{
                                width: `calc(100%/${items.length})`,
                            }}
                            >
                                <div className={classes.innerBar} style={{
                                    width: `calc(100% - ${dataMargin}px)`,
                                }}>
                                    <Bar onClick={(v) => onClick(index, v)} color={color} value={item.y} />
                                </div>
                            </div>
                        )
                    })
                }
                {
                    data.length === 0 &&
                    <div className={classes.emptyData}><span style={{
                        color: emptyLabelColor
                    }}>{emptyLabel}</span></div>
                }
                <div className={classes.graphLabel}
                style={{
                    justifyContent: titleAlign === 'center' ? 'center' : titleAlign === 'right' ? 'flex-end' : 'flex-start',
                }}
                >
                    <span style={{
                        marginLeft: titleAlign === 'left' ? '5px' : 0,
                        color: titleColor,
                    }}>{ title }</span>
                </div>
            </div>
            <div className={classes.axisX} style={{
                borderTop: `${xAxis ? 1 : 0}px solid ${axisColor}`
            }}>
                <div className={classes.gridX}>
                {
                    items.map((item, index) => {
                        return (
                            <div 
                            key={index} 
                            className={classes.tickX}
                            style={{
                                width: `calc(100%/${items.length})`,
                                borderLeft: `${index === 0 ? 0 : 1}px solid ${axisColor}`,
                            }}
                            />
                        )
                    })
                }
                </div>
                <div className={classes.gridXLabel}>
                {
                    tickLabelX.map((item, index) => {
                        const spanClass = tickLabelXOverflow ? classes.overflow : classes.normal
                        return (
                            <div 
                            key={index} 
                            className={classes.gridXLabelItem}
                            style={{
                                width: `calc(100%/${items.length})`,
                            }}
                            ><span style={{
                                color: tickLabelColor,
                            }} className={spanClass}>{index < tickLabelX.length ? tickLabelX[index] : ''}</span></div>
                        )
                    })
                }
                </div>
                <div className={classes.axisXLabel}>
                    <span style={{color: axisLabelColor}}>{ labelX }</span>
                </div>
            </div>
            </div>
        </div>
    )
}

Graph.defaultProps = {
    backgroundColor: '#ffffff',
    title: 'Graph Title',
    titleAlign: 'left',
    titleColor: '#333',
    data: [],
    emptyLabel: 'No data found',
    emptyLabelColor: '#666',
    tickLabelX: [],
    tickLabelY: [],
    tickLabelXOverflow: true,
    color: '#ff6767',
    tickLabelColor: '#666',
    axisLabelColor: '#666',
    axisColor: '#666',
    labelX: 'X-Axis',
    labelY: 'Y-Axis',
    yAxis: true,
    xAxis: true,
    dataMargin: 10,
    onClick: () => {},
}

Graph.propTypes = {
    yAxis: PropTypes.bool,
    xAxis: PropTypes.bool,
    backgroundColor: PropTypes.string,
    title: PropTypes.string,
    titleAlign: PropTypes.string,
    titleColor: PropTypes.string,
    emptyLabel: PropTypes.string,
    emptyLabelColor: PropTypes.string,
    data: PropTypes.array,
    tickLabelX: PropTypes.array,
    tickLabelY: PropTypes.array,
    tickLabelXOverflow: PropTypes.bool,
    color: PropTypes.string,
    axisColor: PropTypes.string,
    axisLabelColor: PropTypes.string,
    tickLabelColor: PropTypes.string,
    labelX: PropTypes.string,
    labelY: PropTypes.string,
    dataMargin: PropTypes.number,
    onClick: PropTypes.func,
}