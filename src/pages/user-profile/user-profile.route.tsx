import { useParams } from 'react-router-dom';
import { userQueries } from '~entities/user';
import { MentorProfile } from '~widgets/mentor-profile';
import { StudentProfile } from '~widgets/student-profile';

export const UserProfilePage = () => {
  const { username } = useParams();

  const {
    data: userData,
    isLoading,
    isError,
  } = userQueries.useGetUserByUsername(username);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching user data.</div>;
  }

  return (
    <div>
      {userData.data.role === 'student' ? (
        <StudentProfile userData={userData} />
      ) : (
        <MentorProfile userData={userData} />
      )}
    </div>
  );
};
