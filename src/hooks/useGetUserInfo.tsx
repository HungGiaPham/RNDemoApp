import {UserInfoModel} from '@models';
import axios from 'axios';
import {useCallback, useState} from 'react';

export const useGetUserInfo = () => {
  const [userInfos, setUserInfos] = useState<UserInfoModel[] | []>([]);

  const [userInfoChoose, setUserInfoChoose] = useState<
    UserInfoModel | undefined
  >(undefined);

  const getUserInfo = () => {
    return axios
      .get('https://random-data-api.com/api/users/random_user?size=10')
      .then((res?: any) => {
        res?.data?.map(() => {});
        setUserInfos(res?.data);
      })
      .catch(err => {
        console.log('====================================');
        console.log('err: ', err);
        console.log('====================================');
      });
  };

  const onShowMoreUserInfo = useCallback((userInfo?: UserInfoModel) => {
    setUserInfoChoose(userInfo);
  }, []);

  return {getUserInfo, userInfos, onShowMoreUserInfo, userInfoChoose};
};
