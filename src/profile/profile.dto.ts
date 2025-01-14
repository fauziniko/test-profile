// src/profile/profile.dto.ts

export class CreateProfileDto {
  age: number;
  gender: string;
  height: number;
  weight: number;
  username: string;
}

export class GetProfileDto {
  user_id: string;
  username: string;
}

export class UpdateProfileDto {
  age?: number;
  gender?: string;
  height?: number;
  weight?: number;
}
