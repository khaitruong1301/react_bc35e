import React from 'react'
import useToggle from '../../hooks/useToggle'

function DemoCustom() {

    const [status, setStatus] = useToggle(false);

    return (
        <div>
            <button onClick={setStatus}>{status ? 'Toggled' : 'Click to Toggle'}</button>


        </div>
    )
}

export default DemoCustom