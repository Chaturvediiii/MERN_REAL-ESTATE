import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPosts from '../components/DashPosts';
import Profile from '../components/Profile';
import DashListing from '../components/DashListing';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === '' && <Profile/>}
      {tab === 'profile' && <Profile/>}
      {/* posts... */}
      {tab === 'posts' && <DashPosts />}
      {/* comments  */}
      {tab === 'comments' && <DashListing />}
      {/* dashboard comp */}
      {tab === 'dash' && <DashProfile />}
    </div>
  );
}
