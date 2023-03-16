export interface CreateUserSessionDto {
  userId: number;
  accessToken: string;
  refreshToken: string;
}
