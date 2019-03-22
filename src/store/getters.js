export const singer = state => state.singer
export const playing = state => state.playing
export const fullScreen = state => state.fullScreen
export const playlist = state => state.playlist
export const sequenceList = state => state.sequenceList
export const currentIndex = state => state.currentIndex
export const playMode = state => state.playMode
export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}
export const disc = state => state.disc
export const toplist = state => state.toplist
export const searchHistory = state => state.searchHistory