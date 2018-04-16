import React from 'react'

const RenderCard = props => {

    const {content} = props
    return (
        <div className='col-sm-4'>
            <div className='thumbnail'>
                <img src='paris.jpg' alt='Paris' width='400' height='300' />
                <p><strong>{content.title}</strong></p>
                <p>{content.subTitle}</p>
            </div>
        </div>
    )
}

export default RenderCard