import ShowUserDesktopTable from "./ShowUserDesktopTable";
import ShowUserTabletTable from "./ShowUserTabletTable";
import ShowUserMobileTable from "./ShowUserMobileTable";
const ShowUser = ({ users }) => {
  return (
    <>
      <ShowUserDesktopTable users={users} />
      <ShowUserTabletTable users={users} />
      <ShowUserMobileTable users={users} />
    </>
  );
};

export default ShowUser;
