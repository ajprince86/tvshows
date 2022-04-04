import React from 'react'

function TvShows({ data }) {

  return (
    <div>
        <image src = {data.show.image.medium}/>
    </div>
  )
}

export default TvShows
