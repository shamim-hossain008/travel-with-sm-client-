import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  console.log(user, "user");
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mt-20 border h-60 flex flex-col justify-center items-center gap-4">
        <h3>Email: {user.email}</h3>
      </div>
    </div>
  );
};

export default Profile;
