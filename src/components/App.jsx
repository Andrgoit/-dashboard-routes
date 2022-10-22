import Layout from 'pages/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import PhonebookPage from '../pages/PhonebookPage/PhonebookPage';
import VideoplayerPage from '../pages/VideoplayerPage/VideoplayerPage';
import ReaderPage from '../pages/ReaderPage/ReaderPage';
import FeedbackPage from '../pages/FeedbackPage/FeedbackPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="phonebook" element={<PhonebookPage />} />
          <Route path="videoplayer" element={<VideoplayerPage />} />
          <Route path="reader" element={<ReaderPage />} />
          <Route path="feedback" element={<FeedbackPage />} />
        </Route>
      </Routes>
    </>
  );
};
