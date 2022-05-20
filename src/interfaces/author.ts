export default interface IAuthor {
  _id: number | null
  first_name: string
  last_name: string
  active: boolean
  username?: string
  password: string
}
