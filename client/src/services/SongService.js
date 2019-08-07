import Api from '@/services/api'

export default {
  index(song) {
    return Api().post('song', song)
  },
  getSongs(search) {
    return Api().get('song', {
      params: {
        search: search
      }
    })
  },
  viewSong(songId) {
    return Api().get(`song/${songId}`)
  }
}


