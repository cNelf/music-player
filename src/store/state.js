import {mode} from './config'
import {loadSearch} from 'common/js/cache'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  currentIndex: -1,
  playMode: mode.sequence,
  disc: {},
  toplist: {},
  searchHistory: loadSearch()
}

export default state