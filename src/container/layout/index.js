import DesktopChangePassword from "@/src/components/adminUser/ChangePassword/DesktopChangePassword";
import DesktopSignout from "@/src/components/adminUser/signOut/DesktopSignout";
import DesktopHeader from "@/src/container/layout/DesktopLayout/DesktopHeader";
import DesktopSideBar from "@/src/container/layout/DesktopLayout/DesktopSideBar";
import TabletAndMobileHeader from "@/src/container/layout/MobileAndTabletLayout/TabletAndMobileHeader";
import { useState } from "react";
const Layout = ({ children }) => {
  const [showPassModal, setShowPassModal] = useState(false);
  const [showSignoutModal, setShowSignoutModal] = useState(false);
    const closeModalHandler = () => {
      setShowPassModal(false);
      setShowSignoutModal(false);
    };
  return (
    <div className="flex items-start justify-center">
      {showPassModal && (
        <DesktopChangePassword
          setShowPassModal={setShowPassModal}
          showPassModal={showPassModal}
          closeModalHandler={closeModalHandler}
        />
      )}
      {showSignoutModal && (
        <DesktopSignout
          showSignoutModal={showSignoutModal}
          setShowSignoutModal={setShowSignoutModal}
          closeModalHandler={closeModalHandler}
        />
      )}
      <DesktopSideBar
        showPassModal={showPassModal}
        setShowPassModal={setShowPassModal}
        showSignoutModal={showSignoutModal}
        setShowSignoutModal={setShowSignoutModal}
      />
      <div className="flex flex-col w-full">
        <TabletAndMobileHeader />
        <DesktopHeader />
        {children}
      </div>
    </div>
  );
};

export default Layout;
