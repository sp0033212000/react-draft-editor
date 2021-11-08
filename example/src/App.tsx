import React, { useEffect, useState } from 'react'
import AnnouncementEditor, {
  AnnouncementEditorContent,
  AttachmentContentData,
  convertFromServerData,
} from '../../src'

// style
import './style.scss'

const App = () => {
  const [content, setContent] = useState<AnnouncementEditorContent>([])

  useEffect(() => {
    fetch(
      'http://tsmc-ewc-web-sit.cloud-interactive.com/tsmcWelfare/api/announcement/121'
    )
      .then((data) => data.json())
      .then((response) => {
        console.log(response.result.data.content)

        setContent(
          convertFromServerData(JSON.parse(response.result.data.content))
        )
      })
  }, [])

  return (
    <div className="main-theme-padding">
      <AnnouncementEditor content={content} attachment={[]} readOnly />
    </div>
  )
}

export default App
