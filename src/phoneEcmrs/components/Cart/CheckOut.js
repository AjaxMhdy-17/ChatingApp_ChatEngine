import React from 'react'

const CheckOut = () => {

    const styl = {
        textTransform : 'uppercase',
        letterSpacing  : '5px',
        margin : '10px 0'
    }

    return (
        <div>
            <button style={styl} className="btn btn-info">
                check out
            </button>
        </div>
    )
}

export default CheckOut
