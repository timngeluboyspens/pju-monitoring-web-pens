import React from 'react';
import { Card } from '@/components/ui/card';
import VideoPlayer from '@/components/dashboard/video-player';
import Location from '@/components/dashboard/location';
import PageTitle from '@/components/dashboard/page-title/page-title';
import PageDescription from '@/components/dashboard/page-title/page-description';

const CctvPage: React.FC = () => {
  return (
    <div>
      <div className='mb-5 flex flex-col md:flex-row md:justify-between items-start gap-5'>
        <div>
          <PageTitle className='mb-1'>Dashboard</PageTitle>
          <PageDescription>Pemantau Sensor Cuaca dan Kualitas Udara.</PageDescription>
        </div>
        <Location />
      </div>

      <Card className='p-3 shadow mt-4'>
        <VideoPlayer />
      </Card>
    </div>
  );
};

export default CctvPage;
