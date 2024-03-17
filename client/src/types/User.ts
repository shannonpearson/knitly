export default interface User {
  id: string
  firstName?: string
  lastName?: string
  email: string
  supertokensId?: string
  createdAt?: Date
  updatedAt?: Date
  lastLogin?: Date | null
}
