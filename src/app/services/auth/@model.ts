export type AuthPayloadResponse = {
  access_token?: string;
  refresh_token?: string;
}

export class AuthPayloadModel {
  accessToken?: string;
  refreshToken?: string;

  constructor(accessToken?: string, refreshToken?: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  static fromJson(data: AuthPayloadResponse): AuthPayloadModel {
    return new AuthPayloadModel(
      data["access_token"],
      data["refresh_token"],
    );
  }
}
