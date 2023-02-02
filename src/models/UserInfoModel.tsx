export interface UserInfoModel extends BaseUserInfo {
  address: AddressModel;
  credit_card: CreditCardModel;
  subscription: SubscriptionModel;
}

export interface BaseUserInfo {
  id?: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
  avatar?: string;
  gender?: string;
  phone_number?: string;
  social_insurance_number?: string;
  date_of_birth?: string;
}

export interface AddressModel {
  city?: string;
  street_name?: string;
  street_address?: string;
  zip_code?: string;
  state?: string;
  country?: string;
}

export interface CreditCardModel {
  cc_number?: string;
}

export interface SubscriptionModel {}
