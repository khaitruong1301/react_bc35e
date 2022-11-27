//rafce
import React, { memo } from 'react'
const Comment = (props) => {
    console.log('comment');
    return (
        <div>
            <p>
                {props.renderLike()}
            </p>
            Bạn đã thả {props.like}<i className='fa fa-heart'></i>
            <textarea></textarea> <br />
            <button>Gửi</button>
        </div>
    )
}
export default memo(Comment);