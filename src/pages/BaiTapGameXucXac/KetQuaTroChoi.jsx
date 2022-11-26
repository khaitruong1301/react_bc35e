import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>KetQuaTroChoi</div>
        )
    }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(KetQuaTroChoi)