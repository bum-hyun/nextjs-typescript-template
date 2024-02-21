/// <reference types="@emotion/react/types/css-prop" />

interface AxiosResponse<T> extends CommonResponse {
  data: T;
}

interface AxiosError<T> {
  response: T;
}

interface AxiosErrorResponse<T> {
  data: T;
  status: number;
}

type ErrorResponse = AxiosError<AxiosErrorResponse<AxiosResponse<string>>>;

interface CommonResponse {
  displayMessage: string;
  rawMessage: string;
  resultCode: string;
}

interface IGetToken {
  grant_type: string;
  client_id: string;
  redirect_uri: string;
  code: string;
  client_secret?: string;
}

interface IGetKaKaoGetTokenPayload {
  grant_type: string;
  client_id: string;
  redirect_uri: string;
  code: string;
}

interface IGetTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope?: string;
  token_type: string;
}

interface IGetKaKaoGetTokenResponse extends IGetTokenResponse {
  id_token?: string;
  refresh_token_expires_in: number;
}

interface IGetKakaoTalkProfileResponse {
  connected_at?: string;
  id: number;
  has_signed_up?: DATE;
  synched_at?: DATE;
  properties?: { [key: string]: string | number }[];
  kakao_account: IKakaoAccount;
}

interface IKakaoAccount {
  email: string;
  email_needs_agreement: boolean;
  has_email: boolean;
  has_phone_number: boolean;
  is_email_valid: boolean;
  is_email_verified: boolean;
  phone_number: string;
  phone_number_needs_agreement: boolean;
  profile: { [key: string]: string };
  profile_nickname_needs_agreement: boolean;
}

interface IGetGoogleProfileResponse {
  email: string;
  family_name: string;
  given_name: string;
  hd: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

type IPostKind = 'NOTICE' | 'COMMENT' | 'ALIM_PAPER' | 'CONSENT' | 'RESERVATION' | 'KLASS' | 'VOUCHER' | 'CHATTING' | 'ALL' | 'SYSTEM';

interface ICommonFile {
  commonFileSeq: number;
  contentType: string;
  originalFileName: string;
  url: string;
  thumbUrl: string;
  size: number;
  sortOrder: number;
}

interface Window {
  flutter_inappwebview: { callHandler: (callName: string, data: any) => any };
  completeDownload: (() => void) | null;
  fileDownload: ((index: number, total: number) => void) | null;
  Kakao: any;
  test: (() => void) | null;
  getDeviceId: ((id: string) => void) | null;
  TossPayments: any;
  visibilityState: boolean;
}
