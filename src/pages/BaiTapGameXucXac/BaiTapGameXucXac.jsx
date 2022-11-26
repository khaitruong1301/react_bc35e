//rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
 class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div>
        <h3>BÀI TẬP GAME XÚC XẮC</h3>
        <XucXac />
        <KetQuaTroChoi />


      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(BaiTapGameXucXac)