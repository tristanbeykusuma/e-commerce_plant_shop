import React from 'react'

const YoutubeSection = () => {
  return (
    <div className='row justify-content-center'>
        <h3>FIND MORE ON YOUTUBE</h3>
      <hr/>
        <div className='row'>
            <div className='col-lg-6 col-sm-12 m-lg-0 m-sm-5'>
                <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/Lp0iNcQ2Kks" title="YouTube video" allowFullScreen></iframe>
                </div>
            </div>
            <div className='col-lg-6 col-sm-12 m-lg-0 m-sm-5'>
                <div className="ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/uHLChW4R5vw" title="YouTube video" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default YoutubeSection