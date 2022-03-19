type Author = {
  id: number
  name: string
  role: 'registerer_user' | 'moderator' | 'admin' | 'sponsor'
  place: string
  avatar_url: string
}
