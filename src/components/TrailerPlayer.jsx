import React from 'react'

const TrailerPlayer = ({videoId}) => {

    return (
        <>
            <div className='w-full h-auto items-center justify-center aspect-video '>
                {videoId ?
                    <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="YouTube video"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="accelerometer; gyroscope; picture-in-picture; web-share;"
                            allowFullScreen
                            className="embed-responsive embed-responsive-16by9 w-full h-full"
                    ></iframe>

                    : <p>trailer indisponível</p>
                }
            </div>
        </>
    )
}
export default TrailerPlayer
