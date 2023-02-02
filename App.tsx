import {useGetUserInfo} from '@hooks';
import {UserInfoModel} from '@models';
import {Styles} from '@styles';
import React, {useCallback, useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const App = () => {
  const {getUserInfo, userInfos, onShowMoreUserInfo, userInfoChoose} =
    useGetUserInfo();

  useEffect(() => {
    getUserInfo();
  }, []);

  const renderFetchRandomButton = useCallback(() => {
    return (
      <TouchableOpacity onPress={getUserInfo} style={[Styles.Base.button]}>
        <Text style={[Styles.Base.text]}>{'Fetch random'}</Text>
      </TouchableOpacity>
    );
  }, []);

  const renderItem = useCallback(
    (params?: {item?: UserInfoModel}) => {
      return (
        <TouchableOpacity
          style={[Styles.Base.item]}
          onPress={() => {
            onShowMoreUserInfo?.(params?.item);
          }}>
          {userInfoChoose?.avatar === params?.item?.avatar ? undefined : (
            <FastImage
              source={{uri: params?.item?.avatar}}
              style={[Styles.Base.image]}
            />
          )}
          <Text style={[Styles.Base.textBold]}>
            {`${params?.item?.first_name} ` + `${params?.item?.last_name}`}
          </Text>
          <Text style={[Styles.Base.textBase]}>
            {params?.item?.employment?.title}
          </Text>
          {userInfoChoose?.avatar === params?.item?.avatar ? (
            <>
              <Text style={[Styles.Base.textBold]}>
                {params?.item?.phone_number}
              </Text>
              <Text style={[Styles.Base.textBase]}>{params?.item?.email}</Text>
              <Text style={[Styles.Base.textBase]}>
                {params?.item?.date_of_birth}
              </Text>
            </>
          ) : undefined}
        </TouchableOpacity>
      );
    },
    [userInfoChoose],
  );

  const renderListUser = useCallback(() => {
    return (
      <FlatList
        data={userInfos}
        renderItem={renderItem}
        numColumns={2}
        style={[Styles.Base.list]}
      />
    );
  }, [userInfos, renderItem]);

  return (
    <View style={[Styles.Base.container]}>
      {renderFetchRandomButton()}
      {renderListUser()}
    </View>
  );
};

export default App;
