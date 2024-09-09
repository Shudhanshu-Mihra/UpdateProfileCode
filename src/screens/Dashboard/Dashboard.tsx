import { FC, useEffect, useState, } from 'react';
import { useDispatch } from 'react-redux';
import { DashboardStyles as Styled } from './Dashboard.style';
import { useDashboardState } from './Dashboard.state';
import {Purchases} from './newAttributes/Purchases';
import {Sales} from './newAttributes/Sales';
import {UpdatesTimeLine} from './attributes/UpdatesTimeLine';
import { ReUseDatePicker } from 'ReUseComponents/reUseDatePicker/ReuseDatePicker';
import { useSettingsState } from 'screens/Settings/Settings.state';
import { getProfile } from 'screens/Settings/MyAccount/myAccount.api';
import { setProfileImageKey } from 'screens/SignUp/reducer/signup.reducer';
export const Dashboard: FC = () => {
  const dispatch = useDispatch();
  const {
    getReceiptsStatisticHandler,
    navigateToInvites,
    user,
    datePickerRef,
    dateFilterValue,
    isDatePickerOpen,
    datePickerValue,
    formattedDate,
    isInputDate,
    salesDash,
    purchaseDash,
    latestTimeLineData,
    onChangeDate,
    setIsDatePickerOpen,
    onChangeDateFilterValueHandler,
    onClickOutsideDatePickerHandler,
  } = useDashboardState();
  const {onGetProfilePhoto, profile_image_key} = useSettingsState()
  
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const image = await getProfile(); 
  //       if (image && image.data.user) {
  //         console.log("_image_image", image.data.user.profile_image); 
  //         dispatch(setProfileImageKey(image.data.user.profile_image));
  //         console.log("our key:", profile_image_key);
  //         onGetProfilePhoto(profile_image_key); 
  //       } else {
  //         console.log("Profile data is undefined or incomplete");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching profile:", error);
  //     }
  //   };
  //     fetchProfile();
  // }, [profile_image_key]);

  useEffect(() => {
    console.log("Main dash",salesDash)
    if (!user.active_account) {
      navigateToInvites();
      return;
    }
    getReceiptsStatisticHandler();
  }, [user.active_account]);
  
  return (
    <Styled.Wrapper>
      <Styled.TopSection>
        <Styled.DateDropdown>
          <ReUseDatePicker
            datePickerRef={datePickerRef}
            dateFilterValue={dateFilterValue}
            isDatePickerOpen={isDatePickerOpen}
            dateValue={datePickerValue}
            formattedDate={formattedDate}
            isInputDate={isInputDate}
            onChangeDate={onChangeDate}
            setIsDatePickerOpen={setIsDatePickerOpen}
            onChangeDateFilterValueHandler={onChangeDateFilterValueHandler}
            onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
          />
        </Styled.DateDropdown>
      </Styled.TopSection>
      <Styled.MainWrapper>
        <Styled.PurchaseSummaryWrapper>
          <Purchases purchaseDash={purchaseDash}/>
        </Styled.PurchaseSummaryWrapper>
        <Styled.SalesWrapper>
          <Sales salesDash = {salesDash}/>
          {/* <Sales /> */}
        </Styled.SalesWrapper>
        <Styled.UpdatesTimeLineWrapper>
          <UpdatesTimeLine latestTimeLineData = {latestTimeLineData}/>
        </Styled.UpdatesTimeLineWrapper>
      </Styled.MainWrapper>
    </Styled.Wrapper>
  );
};
