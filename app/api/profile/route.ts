import { ProfileUsecase } from '@daffa/server/usecase/profile.usecase'

export async function GET() {
  return ProfileUsecase.GetProfileList()
}
