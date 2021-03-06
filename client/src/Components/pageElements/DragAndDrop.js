import React from 'react'
import Dropzone from 'react-dropzone-uploader'


const MyUploader = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://api.cloudinary.com/v1_1/dlcmodiep/image/upload' } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
    />
  )
}

export default MyUploader
