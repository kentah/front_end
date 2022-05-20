import IAuthor from './author'

export default interface IBlog {
  _id: number | null
  title: string
  body: string// | undefined
  ispublished: boolean
  author: IAuthor
  created_at: Date | null
  updated_at?: Date | null
  image: string
}
