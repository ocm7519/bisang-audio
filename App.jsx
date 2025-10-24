src/App.jsx
import React from 'react'

export default function App() {
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      textAlign: 'center', 
      marginTop: '100px' 
    }}>
      <h1>🎧 비상 오디오 자동 영상 생성기</h1>
      <p>대본만 입력하면 1분~1분30초 MP4로 완성됩니다.</p>
      <p>자동 음성 + 자막 + 배경 포함 (AI 처리)</p>
    </div>
  )
}
