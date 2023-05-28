import { UserIcon, UserLogoutIcon } from "../../assets";
import { getUser, toggleAuth, useAppDispatch, useAppSelector } from "../../store";
import { ImageText, StyledUserProfile, Image, Info, Name, Btn } from "./styles";

export const User = () => {
  const { userName, userSubName, isAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const handleAuth = () => {
    dispatch(toggleAuth());
  };
  return (
    <StyledUserProfile>
      {isAuth ? (
        <Info>
          <Image>
            <img src={UserIcon} alt="user-icon" />
            <ImageText>{userName[0] + userSubName[0]}</ImageText>
          </Image>
          <Name>
            {userName} {userSubName}
          </Name>
        </Info>
      ) : (
        <Info>
          <Image>
            <img src={UserLogoutIcon} alt="user-icon" />
          </Image>
          <Btn onClick={handleAuth}>Sign In</Btn>
        </Info>
      )}
    </StyledUserProfile>
  );
};
