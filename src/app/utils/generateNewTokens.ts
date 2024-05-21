import { jwtDecode } from 'jwt-decode';
import { authService } from '../services/auth/@index';

type ResponseTokens = {
  newAccessToken: string;
  newRefreshToken: string;
}

export async function generateNewTokens(accessToken: string, refreshToken: string): Promise<ResponseTokens | null> {
  const tokenDecoded = jwtDecode(accessToken);
  // 
  const tokenExp = tokenDecoded?.exp; 
  const dateNow = new Date().getTime();

  if(!tokenExp) return null;

  if(tokenExp <= dateNow) {
    const data = await authService.refreshTokens(refreshToken);

    if(!data.success || !data.paylaod) return null;

    const newAccessToken = data.paylaod["access_token"];
    const newRefreshToken = data.paylaod["refresh_token"];

    return {
      newAccessToken,
      newRefreshToken
    }
  }

  return null;
}