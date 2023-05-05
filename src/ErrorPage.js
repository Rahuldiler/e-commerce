import React from 'react';
import {AiFillFrown} from 'react-icons/ai'
const ErrorPage = () =>
{
    return (
        <>
            <div className='error_page'>
                <div>
                    <AiFillFrown className='svg'/>
                    <h2>
                        404
                    </h2>
                    <p>
                        Page Not Found !
                    </p>
                </div>

            </div>
        </>
    )
}

export default ErrorPage