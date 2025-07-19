import { Typography, Paper, LinearProgress, Box } from '@mui/material';
import { articleQueries } from '~entities/makalabox';
import { ArticleCard } from '~entities/makalabox/ui/ArticleCard';
import { userQueries } from '~entities/user';
import { BadgeList } from '~widgets/badge-list';
import { GoalList } from '~widgets/goal-list';
import { MakalaList } from '~widgets/makala-list';
import { StudentsRanking } from '~widgets/students-ranking';
import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useRef, useState } from 'react';


export function DashboardPage() {
    const scannerRef = useRef(null);

  useEffect(() => {
    const html5QrCode = new Html5Qrcode("qr-reader");
    html5QrCode.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      (decodedText) => {
        alert(`QR Code scanned: ${decodedText}`);
      },
      (error) => {
        console.warn(error);
      }
    );

    return () => {
      html5QrCode.stop().then(() => {
        console.log("QR Scanner stopped.");
      });
    };
  }, []);

  const {
    data: userData,
    isLoading,
    isError,
  } = userQueries.useLoginUserQuery();



  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching user data.</div>;
  }

  return (
    <div className="my-10 flex flex-col gap-6">
      <Paper elevation={3} className="p-5 shadow-none border border-alto">
        <Typography variant="h5" className="font-bold">
          Добро пожаловать, {userData.data.firstName}!
        </Typography>
<div id="qr-reader" style={{ width: "100%", height: "300px" }} />
        {userData.data.role === 'student' ? (
          <Typography variant="body1">
            Группа: {userData.data.group} • Баллы: {userData.data.points}
          </Typography>
        ) : (
          null
        )}
      </Paper>
      {userData.data.role === 'student' ? (
        <>
          <Paper elevation={3} className="p-5 shadow-none border border-alto">
            <Typography variant="h6" className="font-bold mb-3">
              Лидеры недели
            </Typography>
            <StudentsRanking isTopThree />
          </Paper>
          <BadgeList achievements={userData.data.achievements} />
          <GoalList />
          <MakalaList />
        </>
      ) : null}
    </div>
  );
}
